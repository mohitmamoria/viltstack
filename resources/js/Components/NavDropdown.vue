<script setup>
    import NavDropdownLink from '@/Components/NavDropdownLink.vue';
    import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
    import { computed } from 'vue';

    const props = defineProps({
        align: {
            default: 'left',
        },
        width: {
            default: '1x',
        },
        contentClasses: {
            default: () => ['py-1', 'bg-white'],
        },
        items: {
            type: Array,
            required: true,
        },
    });

    const widthClass = computed(() => {
        return {
            '1x': 'w-48',
            '2x': 'w-64',
        }[props.width.toString()];
    });

    const alignmentClasses = computed(() => {
        if (props.align === 'left') {
            return 'origin-top-left left-0';
        } else if (props.align === 'right') {
            return 'origin-top-right right-0';
        } else {
            return 'origin-top';
        }
    });

    const getLinkMethod = (item) => {
        return item.method ? item.method : 'GET';
    };

    const getLinkElement = (item) => {
        return getLinkMethod(item).toUpperCase() !== 'GET' ? 'button' : 'a';
    };
</script>

<template>
    <Menu as="div">
        <MenuButton
            class="inline-flex items-center rounded-md border border-transparent px-3 py-2 text-sm font-medium leading-4 text-cover-link transition duration-150 ease-in-out hover:text-cover-link-hover focus:outline-none"
        >
            <slot></slot>
        </MenuButton>

        <transition
            enter-active-class="transition duration-75 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-out"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
        >
            <MenuItems
                class="absolute z-50 mt-2 rounded-md shadow-lg"
                :class="[widthClass, alignmentClasses, contentClasses]"
            >
                <MenuItem v-for="item in items" :key="item.href">
                    <NavDropdownLink :href="item.href" :method="getLinkMethod(item)" :as="getLinkElement(item)">
                        {{ item.label }}
                    </NavDropdownLink>
                </MenuItem>
            </MenuItems>
        </transition>
    </Menu>
</template>
