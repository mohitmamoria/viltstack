<script setup>
    const props = defineProps({
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
    <div class="mb-2 pb-2 sm:flex sm:items-center sm:justify-between">
        <div>
            <h3 class="font-heading text-lg leading-6 text-gray-900">
                {{ title }}
            </h3>
            <p class="mt-2 max-w-4xl text-sm text-gray-500" v-if="description">
                {{ description }}
            </p>
        </div>
        <div class="mt-3 flex space-x-2 sm:ml-4 sm:mt-0">
            <slot name="actions"></slot>
        </div>
    </div>
</template>
