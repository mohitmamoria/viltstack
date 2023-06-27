<script setup>
    import CloseButton from '@/Components/CloseButton.vue';
    import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';
    import { ref, Teleport } from 'vue';

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

    const emit = defineEmits(['resolve', 'reject']);

    const open = ref(true);
    const close = () => {
        open.value = false;
    };

    const resolve = (response) => {
        emit('resolve', response);
        close();
    };

    const reject = (error) => {
        emit('reject', error);
        close();
    };
</script>

<template>
    <Teleport to="body">
        <TransitionRoot as="template" :show="open" appear>
            <Dialog as="div" class="relative z-10" @close="reject">
                <TransitionChild
                    as="template"
                    enter="ease-in-out duration-300"
                    enter-from="opacity-0"
                    enter-to="opacity-100"
                    leave="ease-in-out duration-200"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                >
                    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                </TransitionChild>

                <div class="fixed inset-0 overflow-hidden">
                    <div class="absolute inset-0 overflow-hidden">
                        <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                            <TransitionChild
                                as="template"
                                enter="transform transition ease-in-out duration-300"
                                enter-from="translate-x-full"
                                enter-to="translate-x-0"
                                leave="transform transition ease-in-out duration-200"
                                leave-from="translate-x-0"
                                leave-to="translate-x-full"
                            >
                                <DialogPanel class="pointer-events-auto w-screen max-w-xl">
                                    <form class="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                                        <div class="h-0 flex-1 overflow-y-auto">
                                            <div class="bg-gray-50 px-4 py-6 sm:px-6">
                                                <div class="flex items-center justify-between">
                                                    <DialogTitle
                                                        class="text-base font-semibold leading-6 text-gray-900"
                                                    >
                                                        {{ title }}
                                                    </DialogTitle>
                                                    <div class="ml-3 flex h-7 items-center">
                                                        <CloseButton @close="reject()"></CloseButton>
                                                    </div>
                                                </div>
                                                <div class="mt-1">
                                                    <p class="text-sm text-gray-500">
                                                        {{ description }}
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="flex flex-1 flex-col justify-between px-4 pb-5 pt-6 sm:px-6">
                                                <slot></slot>
                                            </div>
                                        </div>
                                        <div class="flex flex-shrink-0 justify-end space-x-2 px-4 py-4">
                                            <slot name="footer" :resolve="resolve" :reject="reject"></slot>
                                        </div>
                                    </form>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>
    </Teleport>
</template>
