<script setup>
    import SecondaryNavLink from '@/Components/SecondaryNavLink.vue';
    import { router } from '@inertiajs/core';
    import { ref, watch } from 'vue';

    const props = defineProps({
        items: {
            type: Array,
            required: true,
        },
    });

    const getActivePageFromProps = () => {
        const actives = props.items.filter((item) => item.active);

        // If no active was passed, we'll assume first item to be active.
        if (actives.length < 1) return props.items[0];

        // Otherwise, the first active item will be considered active.
        return actives[0];
    };
    const activePage = ref(getActivePageFromProps()?.href);
    watch(activePage, () => {
        router.visit(activePage.value);
    });
</script>

<template>
    <div class="px-4 py-2 sm:px-0 sm:py-0">
        <div class="sm:hidden">
            <label for="current-tab" class="sr-only">Select a secondary navigation item</label>
            <select
                id="current-tab"
                name="current-tab"
                class="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-gray-600 focus:outline-none focus:ring-gray-500 sm:text-sm"
                v-model="activePage"
            >
                <option v-for="item in items" :key="item.href" :value="item.href">
                    {{ item.label }}
                </option>
            </select>
        </div>
        <div class="hidden sm:block">
            <nav class="w-64 pr-8 pt-6" aria-label="Sidebar">
                <SecondaryNavLink
                    v-for="item in items"
                    :key="item.href"
                    :href="item.href"
                    :active="item.active"
                    :icon="item.icon"
                >
                    <template #icon v-html="item.icon"></template>
                    {{ item.label }}
                </SecondaryNavLink>
            </nav>
        </div>
    </div>
</template>
