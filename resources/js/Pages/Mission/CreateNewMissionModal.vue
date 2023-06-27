<script setup>
    import Button from '@/Components/Button.vue';
    import Card from '@/Components/Card.vue';
    import InputError from '@/Components/InputError.vue';
    import InputLabel from '@/Components/InputLabel.vue';
    import Modal from '@/Components/Modal.vue';
    import TextInput from '@/Components/TextInput.vue';
    import { useAPIForm } from '@/Composables/useAPIForm';

    const form = useAPIForm({
        url: '',
    });

    const submit = (resolve) => {
        form.post(route('api.missions.store'), {
            onSuccess: function (response) {
                resolve(response);
                router.visit(route('missions.create'));
            },
        });
    };
</script>

<template>
    <Modal title="New Mission" description="Start with a URL and then add rewards for the winners">
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
    </Modal>
</template>
