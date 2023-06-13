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
});

const baseClasses =
    "inline-flex items-center px-1 pb-1 border-t-2 text-sm font-medium leading-5 focus:outline-none";

const activeClasses = computed(() =>
    props.active
        ? "border-cover-link-active text-cover-link-active focus:border-t-4 "
        : "border-transparent text-cover-link hover:text-cover-link-hover hover:border-cover-link-hover focus:text-cover-link-focus focus:border-cover-link-focus"
);
</script>

<template>
    <Link :href="href" :class="[baseClasses, activeClasses]">
        <slot />
    </Link>
</template>
