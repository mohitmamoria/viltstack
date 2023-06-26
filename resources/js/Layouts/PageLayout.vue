<script setup>
    import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
    import PageHeader from '@/Partials/PageHeader.vue';
    import SecondaryNav from '@/Partials/SecondaryNav.vue';
    import TertiaryNav from '@/Partials/TertiaryNav.vue';
    import { Head } from '@inertiajs/vue3';

    const props = defineProps({
        navigation: {
            type: Array,
            default: [],
        },
        tabs: {
            type: Array,
            default: [],
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            default: '',
        },
    });
</script>

<template>
    <Head :title="title" />

    <AuthenticatedLayout>
        <template #secondary-nav v-if="navigation.length > 0">
            <SecondaryNav :items="navigation"></SecondaryNav>
        </template>

        <!-- Page Heading -->
        <header class="border-b border-gray-200 bg-white">
            <div class="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
                <PageHeader :title="title" :description="description">
                    <template #actions><slot name="quick-actions"></slot></template>
                </PageHeader>
                <TertiaryNav v-if="tabs.length > -1" :items="tabs"></TertiaryNav>
            </div>
        </header>

        <div class="py-12">
            <div class="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                <slot></slot>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
