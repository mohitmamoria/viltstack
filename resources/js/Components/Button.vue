<script setup>
import { computed } from "vue";

const props = defineProps({
    type: {
        type: String,
        default: "submit",
    },
    hierarchy: {
        type: String,
        default: "primary",
    },
    size: {
        type: String,
        default: "sm",
    },
    icon: {
        type: Function,
        required: false,
    },
});

const defaultClasses = `uppercase tracking-widest font-semibold
    inline-flex items-center
    rounded-md border shadow-sm
    focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-transparent
    transition ease-in-out duration-75`;

const sizeClasses = computed(() => {
    switch (props.size) {
        case "sm":
            return "px-3 py-2 text-xs leading-4";

        case "md":
            return "px-4 py-2 text-sm";

        case "lg":
            return "px-4 py-2 text-base";

        case "xl":
            return "px-6 py-3 text-base";
    }
});

const hierarchyClasses = computed(() => {
    switch (props.hierarchy) {
        case "primary":
            return "border-transparent bg-primary-darker text-white hover:bg-primary-darkest focus:ring-primary-lighter/[.3]";

        case "secondary":
            return "border-gray-300 bg-white text-gray-600 hover:bg-gray-50 focus:ring-gray-400/[.3]";

        case "tertiary":
            return "border-transparent text-gray-600 hover:underline focus:ring-transparent shadow-none";

        case "danger":
            return "border-transparent bg-red-600 text-white hover:bg-red-700 focus:ring-red-500/[.3]";
    }
});
</script>

<template>
    <button
        :type="type"
        :class="[defaultClasses, hierarchyClasses, sizeClasses]"
    >
        <component
            :is="icon"
            v-if="icon"
            class="-ml-0.5 mr-2 h-4 w-4"
        ></component>

        <slot></slot>
    </button>
</template>
