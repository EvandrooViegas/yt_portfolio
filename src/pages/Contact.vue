<script setup>
    import { Icon } from "@iconify/vue";
    import { ref, onMounted } from "vue"
    import Input from "../components/Input.vue"
    import useAnimation from "../composables/useAnimation";
    import _data from "../data"
    import emailjs from 'emailjs-com'

    const data = ref(_data)
    const name = ref("")
    const email = ref("")
    const title = ref("")
    const message = ref("")

    const formRef = ref(null)

    const handleSubmit = () => {

        try {
            emailjs.sendForm('service_fy7xka7', 'template_by4wud7', formRef.value, 'rJn4IbBlp50IuLis3')

        } catch(error) {
            console.log({error})
        }
    }

    const animationRef = ref(null)
    onMounted(() => {
        useAnimation(animationRef.value, "slide-right", {
            threshold: 0.3
        })
    })
</script>

<template>
    <div class="bg-neutral-900 opacity-0" id="contact" ref="animationRef"> 
        <h1
            class="lg:text-7xl lg:p-4 text-5xl text-center bg-text-gradient-1 font-extrabold p-2 "
        >
            Contact Me
        </h1>

        <div class="flex gap-3 w-full mx-auto ">
            <form @submit.prevent="handleSubmit()" ref="formRef" class="lg:grid lg:items-stretch lg:gap-2 lg:grid-cols-2 lg:justify-items-stretch lg:align-middle lg:w-[60%] mt-8 w-[90%] mx-auto flex flex-col gap-2">
                <div class="h-full flex-v-center gap-3">
                    <Icon icon="icon-park-outline:avatar" class="lg:hidden flex text-2xl"/>
                    <input 
                        type="text"
                        name="user_name"
                        placeholder="Your Name"
                        class="hover:bg-neutral-800 transition-all bg-[#353535] h-full w-full p-4 outline-none rounded-[12px] placeholder:text-neutral-300"
                        v-bind="name"
                    />
                </div>
                <div class="h-full flex-v-center gap-3">
                    <Icon icon="mdi:email-outline"  class="lg:hidden flex text-2xl"/>
                    <input 
                        type="email"
                        name="user_email"
                        placeholder="Your Email"
                        class="hover:bg-neutral-800 transition-all bg-[#353535] h-full w-full p-4 outline-none rounded-[12px] placeholder:text-neutral-300"
                        v-bind="email"
                    />
                </div>
                <div class="h-full flex-v-center gap-3 col-span-2">
                    <Icon icon="material-symbols:title" class="lg:hidden flex text-2xl" />
                    <input 
                        placeholder="Title of the Email..."
                        class="hover:bg-neutral-800 transition-all bg-[#353535] h-full w-full p-4 outline-none rounded-[12px] placeholder:text-neutral-300"
                        v-bind="title"
                    />
                </div>
                <div class="h-full flex-v-center gap-3 col-span-2">
                    <Icon icon="tabler:message-2" class="lg:hidden flex text-2xl" />

                    <textarea 
                        name="message"
                        placeholder="Message..."
                        class="hover:bg-neutral-800 transition-all bg-[#353535] h-full resize-none w-full p-4 border-none outline-none rounded-[12px] placeholder:text-neutral-300"
                        v-bind="message"
                    />
                </div>

                <button class="group lg:mr-auto lg:w-full lg:h-12 hover:bg-indigo-700 mt-1 flex-center text-1xl font-semibold gap-3 w-40 ml-auto bg-indigo-600 p-3 rounded-md">
                    Submit
                    <Icon icon="uil:message"  class="group-hover:translate-x-5 transition-all text-2xl"/>
                </button>
            </form>

            <img 
                src="../images/hand.png"
                class="hidden lg:flex w-80 object-cover mb-10 bottom-0 right-0"
            />
        </div>
    </div>
</template>

