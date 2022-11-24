<script setup>
    import { Icon } from '@iconify/vue';

    const props = defineProps({
        image: String,
        link: String,
        github: String
    })
    const { image, link, github } = props
</script>

<template>
    <div class="lg:w-[50%] shrink-0 w-[80vw]">
    
        <div class="project-image group ">
            <img  
                :src="image"
                class="lg:w-full md:w-full transition-all snap-center  h-[322px] rounded-[15px] object-cover object-center cursor-pointer"
            />
            <a :href="github" target="_blank">
                <button class="hidden z-[1]  group-hover:text-9xl group-hover:flex absolute center translate-y-[-50%] top-[50%]">
                    <Icon icon="ion:logo-github"  />
                </button>
            </a>
        </div>
   
        <div class="flex justify-between items-center">
            <div>
                <h4 class="text-3xl font-semibold my-2">
                    <slot name="h4">

                    </slot>
                </h4>
                <p class="lg:flex hidden text-[#B5B5B5] text-base truncate break-words">
                    <slot name="p">

                    </slot>
                </p>
            </div>
            <button class="flex-center bg-indigo-600 rounded-full w-10 h-10">
                <a :href="link" target="_blank">
                    <Icon icon="ph:arrow-down-left-bold" :rotate="2" color="white"/>
                </a>
            </button>
        </div>
    </div>
</template>

<style scoped>
.project-image {
    position: relative;
}

.project-image:hover::after {
    border-radius: 15px;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    animation: image-animation linear;
    animation-duration: .3s;
    background: linear-gradient(90deg, #0a0a0abd 0%, rgba(31, 31, 31, 0.603) 109.17%);
}
@keyframes image-animation {
    from {

        height: 0px;
    }

    to {
  
        height: 100%;

    }
}

</style>