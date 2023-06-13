<script setup>
    import ApplicationLogo from '@/Components/ApplicationLogo.vue';
    import Button from '@/Components/Button.vue';
    import FlashSuccess from '@/Components/FlashSuccess.vue';
    import InputError from '@/Components/InputError.vue';
    import InputLabel from '@/Components/InputLabel.vue';
    import TextInput from '@/Components/TextInput.vue';
    import { Head, useForm } from '@inertiajs/vue3';

    const form = useForm({
        email: '',
    });

    const start = () => {
        form.post(route('auth.start'));
    };
</script>

<template>
    <Head title="Get Started"></Head>

    <div class="flex min-h-screen flex-1">
        <div class="relative hidden w-0 flex-1 bg-gray-400 text-white lg:flex lg:items-center lg:justify-center">
            Something goes here!
        </div>

        <div class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div class="mx-auto w-full max-w-sm lg:w-96">
                <div>
                    <ApplicationLogo class="h-10 w-auto"></ApplicationLogo>

                    <h2 class="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">Get started</h2>
                </div>

                <div class="mt-10">
                    <div>
                        <form @submit.prevent="start" class="space-y-6">
                            <div>
                                <InputLabel>What's your email address?</InputLabel>
                                <TextInput
                                    id="email"
                                    type="email"
                                    class="mt-1 block w-full"
                                    v-model="form.email"
                                    required
                                    autocomplete="email"
                                />
                                <InputError class="mt-2 font-light" :message="form.errors.email"></InputError>
                            </div>

                            <div>
                                <Button class="flex w-full items-center justify-center">Sign in</Button>
                            </div>

                            <FlashSuccess
                                v-if="form.wasSuccessful"
                                message="An email has been sent with the link to get inside."
                            ></FlashSuccess>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
