import { useForm } from '@inertiajs/vue3';
import cloneDeep from 'lodash.clonedeep';

export function useAPIForm(rememberKeyOrData, maybeData = null) {
    const form = useForm(rememberKeyOrData, maybeData);

    let transform = (data) => data;
    let recentlySuccessfulTimeoutId = null;

    const overriders = {
        transform: (callback) => {
            transform = callback;
            return this;
        },
        submit: (method, url, options = null) => {
            // todo: cancelToken system

            // BEFORE
            form.wasSuccessful = false;
            form.recentlySuccessful = false;
            form.clearErrors();
            clearTimeout(recentlySuccessfulTimeoutId);
            if (options.onBefore) {
                options.onBefore();
            }

            // START
            form.processing = true;
            if (options.onStart) {
                options.onStart();
            }

            // MAKING THE CALL
            axios[method](url, transform(form.data()), {
                onUploadProgress: (event) => {
                    form.progress = event;
                    if (options.onProgress) {
                        options.onProgress(event);
                    }
                },
            })
                // ON SUCCESS
                .then((response) => {
                    form.processing = false;
                    form.progress = null;
                    form.clearErrors();
                    form.wasSuccessful = true;
                    form.recentlySuccessful = true;
                    recentlySuccessfulTimeoutId = setTimeout(() => (form.recentlySuccessful = false), 2000);

                    if (options.onSuccess) {
                        options.onSuccess(response.data);
                    }

                    form.defaults(cloneDeep(form.data()));
                    form.isDirty = false;
                })

                // ON ERROR
                .catch((error) => {
                    form.processing = false;
                    form.progress = null;

                    // Set validation errors
                    form.clearErrors();
                    if (error.response?.status === 422) {
                        Object.keys(error.response.data.errors).forEach((key) => {
                            form.setError(key, error.response.data.errors[key][0]);
                        });
                    }

                    if (options.onError) {
                        options.onError(error);
                    }
                })

                // ON FINISH
                .finally(() => {
                    form.processing = false;
                    form.progress = null;

                    if (options.onFinish) {
                        options.onFinish();
                    }
                });
        },
    };

    return new Proxy(form, {
        get: (target, prop) => {
            // If not overridden:
            if (Object.keys(overriders).indexOf(prop) < 0) {
                return target[prop];
            }

            return overriders[prop];
        },
    });
}
