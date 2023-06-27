<script setup>
    import Button from '@/Components/Button.vue';
    import Card from '@/Components/Card.vue';
    import Overlayer from '@/overlayer';
    import { router } from '@inertiajs/vue3';
    import CreateNewMission from './CreateNewMission.vue';
    import CreateNewMission2 from './CreateNewMission2.vue';
    import MissionPageLayout from './MissionPageLayout.vue';

    const createNewMission = () => {
        console.log('creating');
        Overlayer.show(CreateNewMission)
            .then((response) => {
                console.log('resolving', response);
            })
            .catch((error) => {
                console.log('rejecting', error);
            });
    };

    const createNewMission2 = () => {
        console.log('creating2');
        Overlayer.show(CreateNewMission2)
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

            <Button type="button" hierarchy="primary" @click="createNewMission">New Mission Slideout</Button>
            <Button type="button" hierarchy="primary" @click="createNewMission2">New Mission Modal</Button>
        </template>
        <Card> List of missions </Card>

        <!-- New Mission Overlay -->
        <!-- <Overlay :show="creatingNewMission" @close="creatingNewMission = false"></Overlay> -->
    </MissionPageLayout>
</template>
