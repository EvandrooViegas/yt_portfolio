<script setup>
import { Icon } from "@iconify/vue";
import BallsGrid from "../components/BallsGrid.vue"
import _data from "../data"
import { ref, onMounted } from "vue"

const data = ref(_data)
const liRef = ref(null)

onMounted(() => {
    const ms = 4 * 1000
    const changeText = () => {
        for(const text of data.value.description) {
            const index = data.value.description.indexOf(text)
            const time = index  * ms
            setTimeout(() => { 
                liRef.value.textContent = data.value.description[index]
            }, time)
        }   
    }
    changeText()
    setInterval(changeText, (data.value.description.length - 1) * ms)
})

</script>

<template>
    <div id="home" class="bg-space w-screen">
        <div class=" grid lg:grid-cols-[65%_35%] lg:grid-rows-[80%_20%] grid-rows-2 grid-cols-1 mt-4  h-[100vh] ">
            <section class="lg:ml-10 lg:w-fit m-auto flex-h-center flex-col w-full">
                <h1 class="bg-text-gradient-1 mx-auto slide-right  w-fit lg:text-left leading-none lg:text-10xl text-8xl font-extrabold ">HELLO</h1>
                <ul class="slide-left p-4 rounded-md bg-neutral-800 overflow-hidden w-[80vw] mx-auto lg:w-[600px] lg:ml-auto">
                    <li ref="liRef" class="animation-typing  leading-none w-fit lg:text-6xl text-4xl font-extrabold">
                        {{ data.description[0] }} 
                    </li>
                </ul>
         
                
            </section>

            <section class="relative center-v  overflow-hidden lg:mt-20">
                <img :src="data.img" class="lg:w-[25rem] center w-80 absolute z-20 rounded-full">

                <div class="absolute left-40 top-20 lg:top-40 w-[500px]">
                    <BallsGrid />
                </div>

     
            </section>

            <section class="hidden lg:flex ml-10">
                <button>
                    <a href="#contact"  class="flex-center gap-4 text-2xl font-semibold rounded bg-gradient-1 px-8 py-4 w-80">
                        <span><Icon icon="line-md:email" color="white" /></span>
                        <span>Contact Me</span>
                    </a>
                </button>
            </section>

            <section class="hidden lg:flex lg:justify-center lg:items-center">
                <div class="flex mr-10 text-5xl gap-6">
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
            </section>

        </div>
    
    </div>
</template>

<style scoped>


    .animation-typing {
        @apply p-4;
        position: relative;
    }
    .animation-typing::before {
        z-index: 1;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        @apply bg-neutral-800;
        border-left: 2px solid white;
        animation: typing 4s steps(90) infinite;
    }


    @keyframes typing { 
        40%, 60% {
            left: calc(100% + 30px);
        }

        100% {
            left: 0%;
        }
    }
</style>

