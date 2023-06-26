<script setup>
    import Button from '@/Components/Button.vue';
    import Card from '@/Components/Card.vue';
    import InputError from '@/Components/InputError.vue';
    import InputLabel from '@/Components/InputLabel.vue';
    import Overlay from '@/Components/Overlay.vue';
    import TextInput from '@/Components/TextInput.vue';
    import { useForm } from '@inertiajs/vue3';

    const form = useForm({
        url: '',
    });

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
</script>

<template>
    <Overlay title="New Mission" description="Start with a URL and then add rewards for the winners">
        <template #default="{ resolve }">
            <form @submit.prevent="submit(resolve)">
                <div class="space-y-6">
                    <div>
                        <InputLabel>URL</InputLabel>
                        <TextInput v-model="form.url" id="url" type="url" class="mt-2 block w-full" required />
                        <InputError :message="form.errors.url"></InputError>
                    </div>
                    <Card> {{ form.errors }} </Card>
                </div>
            </form>
        </template>

        <template #footer="{ resolve, reject }">
            <Button hierarchy="secondary" type="button" @click="reject()"> Cancel </Button>
            <Button @click.prevent="submit(resolve)" :class="{ 'opacity-25': form.processing }">Create</Button>
        </template>
    </Overlay>
</template>
