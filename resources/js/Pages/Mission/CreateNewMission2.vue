<script setup>
    import Button from '@/Components/Button.vue';
    import Card from '@/Components/Card.vue';
    import InputError from '@/Components/InputError.vue';
    import InputLabel from '@/Components/InputLabel.vue';
    import Modal from '@/Components/Modal.vue';
    import TextInput from '@/Components/TextInput.vue';
    import { useAPIForm } from '@/Composables/useAPIForm';
    import { useForm } from '@inertiajs/vue3';

    const form = useForm({
        url: '',
    });

    const apiForm = useAPIForm({
        url: '',
        foo: 'bar',
    });
    console.log(apiForm);

    const submit = (resolve) => {
        form.clearErrors();
        form.processing = true;
        axios
            .post(route('api.missions.store'), form.data())
            .then((response) => {
                console.log(response);
                resolve(response.data);
            })
            .catch((error) => {
                if (error.response.status === 422) {
                    Object.keys(error.response.data.errors).forEach((key) => {
                        form.setError(key, error.response.data.errors[key][0]);
                    });
                    console.log(error.response.data.errors);
                }
            })
            .finally(() => {
                form.processing = false;
            });
        // form.post(route('missions.store'), {
        //     preserveScroll: true,
        //     preserveState: true,
        //     onSuccess: () => resolve({ success: true }),
        // });
    };

    const submit2 = (resolve) => {
        console.log('submitting 2');
        apiForm.post(route('api.missions.store'), {
            onBefore: () => {
                console.log('before');
            },
            onStart: () => {
                console.log('start');
            },
            onSuccess: (response) => {
                console.log('yay!', response);
            },
            onError: (error) => {
                console.log('oops!', error);
            },
            onProgress: (event) => {
                console.log('progress!', event);
            },
            onFinish: () => {
                console.log('finished!');
            },
        });
        // .then((response) => {
        //     console.log(response);
        // })
        // .catch((errors) => {
        //     console.log(errors);
        // });
    };
</script>

<template>
    <Modal title="New Mission" description="Start with a URL and then add rewards for the winners">
        <template #default="{ resolve }">
            <form @submit.prevent="submit2(resolve)">
                <div class="space-y-6">
                    <div>
                        <InputLabel>URL</InputLabel>
                        <TextInput v-model="apiForm.url" id="url" type="url" class="mt-2 block w-full" required />
                        <InputError :message="apiForm.errors.url"></InputError>
                    </div>
                    <Card> {{ apiForm }} </Card>
                </div>
            </form>
        </template>

        <template #footer="{ resolve, reject }">
            <Button hierarchy="secondary" type="button" @click="reject()"> Cancel </Button>
            <Button @click.prevent="submit2(resolve)" :class="{ 'opacity-25': form.processing }">Create</Button>
        </template>
    </Modal>
</template>
