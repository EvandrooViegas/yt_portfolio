<script setup>
import { Icon } from '@iconify/vue';
import { ref } from "vue"
import NavLinks from "./NavLinks.vue"
const openModal = ref(false)


function closeNav () {
    openModal.value = false
}
 

</script>

<template>
    <div class="flex justify-between flex-v-center fixed z-40 top-0 left-0 right-0  mx-auto h-[10vh] glass-white rounded-rl-full">
        <h4 class="font-extrabold tracking-[10px] text-5xl ml-10">LOGO</h4>
        <div class="flex items-center gap-4 mr-10">
            <NavLinks class="hidden lg:flex " size="19px" />
            <button class="hidden lg:flex bg-gradient-1 w-50 font-semibold text-white text-1xl px-10 py-3 rounded-md ml-10" @click="closeNav()">
                <a href="#contact">Contact Me</a>
            </button>
            <button @click="openModal = true" class="lg:hidden">
                <Icon icon="typcn:th-menu-outline" width="40"  />
            </button>
        </div>
    </div>

    <!-- SMALL DEVICES NAVBAR -->
    <div class="transition-open  z-40 fixed right-0 left-0 bottom-0 top-0 bg-black-rgba backdrop-blur-md" v-show="openModal">
        <div class="absolute left-10 top-10" @click="openModal = false">
            <Icon icon="material-symbols:arrow-back-ios-rounded" width="50px" />
        </div>

        <div class="absolute top-40 bottom-0 flex flex-col justify-between center">
            <NavLinks direction="column" size="30px" :clickAction="closeNav" />
    
            <section class="m-10">
                <div class="flex-center flex-col mb-10 gap-4 text-4xl">
                    <a href="https://www.youtube.com/channel/UC0bzYpZ8HEp7jFhxB4Q_upg" target="_blank">
                        <Icon icon="ant-design:youtube-filled" color="white" />
                    </a>
    
                    <a href="https://github.com/EvandrooViegas" target="_blank">
                        <Icon icon="mdi:github" />
                    </a>
    
                    <a href="https://www.tiktok.com/@thecodexdev?lang=en" target="_blank">
                        <Icon icon="ic:baseline-tiktok" />
                    </a>
                    <a href="https://www.instagram.com/thecodexdev/" target="_blank">
                        <Icon icon="mdi:instagram" />
                    </a>
                </div>
    
                <div>
                    <button class="bg-gradient-1 w-[300px] duration-200 font-semibold text-white text-2xl px-10 py-3 rounded-md" @click="closeNav()">
                        <a href="#contact">Contact Me</a>
                    </button>
                </div>
            </section>
        </div>
    </div>


</template>

