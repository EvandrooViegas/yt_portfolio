<script setup>
    import img from "../images/search.png"
    const props = defineProps({
        type: String,
        placeholder: String,
        getterFunc: Function,
        iconClass: String
    })

    const { type, placeholder, getterFunc, iconClass } = props
    const className = " lg:p-5 outline-none border-none p-3 w-full rounded-[12px] placeholder:text-white placeholder:font-semibold"
</script>

<template>
    <input 
        v-if="type != 'select'"
        :type="type"
        :placeholder="placeholder"
        class="lg:p-5 outline-none border-none p-3 w-full rounded-[12px] placeholder:text-white placeholder:font-semibold"
        @input="(e) => getterFunc(e.target.value)"
    />
    <select 
        name="select" 
        :type="type"
        :placeholder="placeholder"
        :class="
            iconClass + className
        "
        @input="(e) => getterFunc(e.target.value)"
        v-else
    >
        <slot>

        </slot>
    </select>
</template>

<style scoped> 
    .icon {
        background-color: #5A5A5A !important;
        background-size: 30px !important;
        background-position-x: 20px !important;
        padding-left: 60px !important;
        outline: none;
        transition: 200ms;
    }

    .icon:focus {
        background-size: 0px !important;
        padding-left: 20px !important;

    }

    .icon.search {
        background: url("../images/search.png") no-repeat left;
    }

    .icon.arrow {
        background: url("../images/arrow.png") no-repeat left;
    }
</style>