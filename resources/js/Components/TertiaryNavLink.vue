<script setup>
import { Link } from "@inertiajs/vue3";
import { computed } from "vue";

const props = defineProps(["href", "active"]);

const classes = computed(() =>
    props.active
        ? "border-cover text-black whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm"
);
</script>

<template>
    <Link :href="href" :class="classes">
        <slot></slot>
    </Link>
</template>
