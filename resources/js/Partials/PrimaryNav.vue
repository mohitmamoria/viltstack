<script setup>
    import ApplicationLogo from '@/Components/ApplicationLogo.vue';
    import NavDropdown from '@/Components/NavDropdown.vue';
    import NavLink from '@/Components/NavLink.vue';
    import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
    import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
    import { Bars3Icon, ChevronDownIcon, UserIcon, XMarkIcon } from '@heroicons/vue/20/solid';
    import { Link } from '@inertiajs/vue3';

    const navigation = [
        {
            label: 'Dashboard',
            href: route('dashboard'),
            active: route().current('dashboard'),
        },
        {
            label: 'Missions',
            href: route('missions.index'),
            active: route().current('missions.*'),
        },
    ];

    const settings = [
        {
            label: 'Profile',
            href: route('dashboard'),
        },
        {
            label: 'Logout',
            href: route('dashboard'),
            href: route('dashboard'),
            method: 'POST',
        },
    ];
</script>

<template>
    <Disclosure as="nav" class="" v-slot="{ open }">
        <!-- Primary Navigation Menu -->
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex h-16 justify-between">
                <div class="flex">
                    <!-- Logo -->
                    <div class="flex shrink-0 items-center">
                        <Link :href="route('dashboard')">
                            <ApplicationLogo class="block h-9 w-auto fill-current text-white" />
                        </Link>
                    </div>

                    <!-- Navigation Links -->
                    <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                        <NavLink v-for="item in navigation" :key="item.href" :href="item.href" :active="item.active">
                            {{ item.label }}
                        </NavLink>
                    </div>
                </div>

                <div class="hidden sm:ml-6 sm:flex sm:items-center">
                    <!-- Settings Dropdown -->
                    <div class="relative ml-3">
                        <NavDropdown :items="settings" align="right">
                            <UserIcon class="h-4 w-4"></UserIcon>
                            <span class="mx-1">Mohit</span>
                            <ChevronDownIcon class="h-4 w-4"></ChevronDownIcon>
                        </NavDropdown>
                    </div>
                </div>

                <!-- Hamburger -->
                <div class="-mr-2 flex items-center sm:hidden">
                    <DisclosureButton
                        class="inline-flex items-center justify-center rounded-md p-2 text-cover-link hover:text-cover-link-hover focus:text-cover-link-focus focus:outline-none"
                    >
                        <span class="sr-only">Open main menu</span>
                        <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                        <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
                    </DisclosureButton>
                </div>
            </div>
        </div>

        <!-- Responsive Navigation Menu -->
        <DisclosurePanel class="sm:hidden">
            <div class="space-y-1 pb-3 pt-2">
                <ResponsiveNavLink v-for="item in navigation" :key="item.href" :href="item.href" :active="item.active">
                    {{ item.label }}
                </ResponsiveNavLink>
            </div>

            <!-- Responsive Settings Options -->
            <div class="border-t border-gray-300 pb-1 pt-4">
                <div class="px-4">
                    <div class="text-base font-medium text-cover-link">Mohit Mamoria</div>
                    <div class="text-sm font-medium text-cover-link">mohit@example.com</div>
                </div>

                <div class="mt-3 space-y-1">
                    <ResponsiveNavLink :href="route('dashboard')"> Profile </ResponsiveNavLink>
                    <ResponsiveNavLink :href="route('dashboard')" method="post" as="button">
                        Log Out
                    </ResponsiveNavLink>
                </div>
            </div>
        </DisclosurePanel>
    </Disclosure>
</template>
