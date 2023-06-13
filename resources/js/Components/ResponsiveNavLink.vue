<script setup>
import { Link } from "@inertiajs/vue3";
import { computed } from "vue";

const props = defineProps(["href", "active"]);

const classes = computed(() =>
    props.active
        ? "block w-full pl-3 pr-4 py-2 border-l-2 border-cover-link-active text-left text-base font-medium text-cover-link-active focus:outline-none focus:border-l-4"
        : "block w-full pl-3 pr-4 py-2 border-l-2 border-transparent text-left text-base font-medium text-cover-link hover:text-cover-link-hover  hover:border-cover-link-hover focus:outline-none focus:text-cover-link-focus focus:border-cover-link-focus"
);
</script>

<template>
    <Link :href="href" :class="classes">
        <slot />
    </Link>
</template>
