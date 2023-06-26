<script setup>
    import TertiaryNavLink from '@/Components/TertiaryNavLink.vue';
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
    <div>
        <!-- Dropdown menu on small screens -->
        <!-- Use sm:hidden class to start showing it on mobiles -->
        <div class="mb-4 hidden">
            <label for="current-tab" class="sr-only">Select a tab</label>
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
        <!-- Tabs at small breakpoint and up -->
        <div class="block">
            <nav class="relative -mb-px flex min-w-full space-x-8 overflow-x-auto">
                <TertiaryNavLink :href="item.href" v-for="item in items" :key="item.href" :active="item.active">
                    {{ item.label }}
                </TertiaryNavLink>
            </nav>
        </div>
    </div>
</template>
