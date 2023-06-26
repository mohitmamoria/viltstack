<script setup>
    import PageLayout from '@/Layouts/PageLayout.vue';

    const props = defineProps({
        title: {
            type: String,
            default: 'Missions',
        },
        description: {
            type: String,
            default: '',
        },
    });
</script>

<template>
    <PageLayout :title="title" :description="description">
        <template #quick-actions><slot name="quick-actions"></slot></template>

        <slot></slot>
    </PageLayout>
</template>
