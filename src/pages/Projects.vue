<script setup>
    import _data from "../data"
    import { ref, onMounted } from "vue"
    import { Icon } from "@iconify/vue";
    import ProjectCard from "../components/ProjectCard.vue"
    import useAnimation from "../composables/useAnimation";
    const data = ref(_data)

    const animationRef = ref(null)

    onMounted(() => {
        useAnimation(animationRef.value, "slide-right", {
            threshold: 0.6
        })
    })

</script>

<template>
    <div class="bg-neutral-900 opacity-0" id="projects" ref="animationRef">
        <div >
            <h1 class="lg:text-7xl lg:p-4 text-5xl text-center bg-text-gradient-1 font-extrabold p-2 pt-20">
                My Projects
            </h1>
            <p class="flex-center text-neutral-500 gap-5 text-2xl">
                <span>
                    <Icon icon="gg:briefcase" />
                </span>
                <span>
                    {{ data.projects.length }} Projects
                </span>
            </p>
            <div class="lg:w-[95%] mx-auto w-[90%]">
                <div class="projects  flex snap-mandatory snap-x overflow-x-scroll gap-14 p-10">
                <ProjectCard 
                v-for="project in data.projects" 
                :image="project.image" 
                :link="project.link" 
                :github="project.github" 
                >
                    <template #h4>
                        {{ project.name }}
                    </template>
                    <template #p>
                        {{ project.description }}
                    </template>
            
    
                </ProjectCard>
                </div>
            </div>
        </div>
    </div>
    
</template>

<style>
    
</style>

