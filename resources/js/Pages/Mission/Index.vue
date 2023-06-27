<script setup>
    import Button from '@/Components/Button.vue';
    import Card from '@/Components/Card.vue';
    import { useOverlay } from '@/Composables/useOverlay';
    import { router } from '@inertiajs/vue3';
    import CreateNewMissionModal from './CreateNewMissionModal.vue';
    import MissionPageLayout from './MissionPageLayout.vue';

    const createNewMission = () => {
        useOverlay(CreateNewMissionModal)
            .then((response) => {
                console.log('resolving', response);
            })
            .catch((error) => {
                console.log('rejecting', error);
            });
    };
</script>

<template>
    <MissionPageLayout title="Missions" description="You'll find all your missions here.">
        <template #quick-actions>
            <Button type="button" hierarchy="primary" @click="router.visit(route('missions.create'))"
                >New Mission</Button
            >

            <Button type="button" hierarchy="primary" @click="createNewMission">New Mission Modal</Button>
        </template>
        <Card> List of missions </Card>

        <!-- New Mission Overlay -->
        <!-- <Overlay :show="creatingNewMission" @close="creatingNewMission = false"></Overlay> -->
    </MissionPageLayout>
</template>
