<script setup>
    import { XMarkIcon } from '@heroicons/vue/24/outline';

    const emit = defineEmits(['close']);

    const close = () => {
        emit('close');
    };
</script>

<template>
    <button type="button" class="rounded-md text-gray-400 hover:text-gray-500 focus:outline-none" @click="close">
        <span class="sr-only">Close panel</span>
        <XMarkIcon class="h-6 w-6" aria-hidden="true" />
    </button>
</template>
