<script setup>
import { Link } from "@inertiajs/vue3";
import { computed } from "vue";

const props = defineProps({
    href: {
        type: String,
        default: "#",
    },
    active: {
        type: Boolean,
        default: false,
    },
    icon: {
        type: Function,
        default: false,
    },
    badge: {
        type: String,
        default: "",
    },
});

const classes = computed(() =>
    props.active
        ? "text-gray-900 group flex items-center px-3 py-2 text-sm font-medium border-l-2 border-cover"
        : "text-gray-600 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium border-l border-cover"
);

const iconClasses = computed(() =>
    props.active
        ? "text-gray-500 flex-shrink-0 -ml-1 mr-3 h-4 w-4"
        : "text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-4 w-4"
);
</script>

<template>
    <Link :href="href" :class="classes">
        <span :class="iconClasses" v-if="icon">
            <component :is="icon"></component>
        </span>

        <span class="truncate"><slot></slot></span>

        <span
            v-if="badge"
            class="bg-gray-100 group-hover:bg-gray-200 ml-auto inline-block py-0.5 px-3 text-xs rounded-full"
            >{{ badge }}</span
        >
    </Link>
</template>
