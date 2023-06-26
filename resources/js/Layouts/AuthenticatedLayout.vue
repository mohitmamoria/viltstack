<script setup>
    import PrimaryNav from '@/Partials/PrimaryNav.vue';
</script>

<template>
    <div>
        <div class="flex h-screen flex-col bg-cover">
            <PrimaryNav></PrimaryNav>
            <main
                class="mx-2 mb-2 flex-1 overflow-scroll rounded-xl bg-white"
                style="box-shadow: 0px -10px 40px -25px rgba(255, 255, 255, 1)"
            >
                <div class="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:flex-row sm:px-6 sm:py-0 lg:px-8">
                    <slot name="secondary-nav"></slot>

                    <section class="flex-1">
                        <!-- Page Content -->
                        <div>
                            <slot></slot>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    </div>
</template>
