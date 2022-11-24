<script setup>
import Input from "../components/Input.vue";
import { reactive, ref, watchEffect, onMounted } from "vue";
import _data from "../data";
import useAnimation from "../composables/useAnimation";


const data = ref(_data);
const animationRef = ref(null)

onMounted(() => {
  useAnimation(animationRef.value, "slide-left", {
    threshold: 0.6
  })
})

</script>

<template>
  <div class="bg-neutral-900 opacity-0" id="skills" ref="animationRef">
    <h1
      class="lg:text-7xl lg:p-4 text-5xl text-center bg-text-gradient-1 font-extrabold p-2 pt-20"
    >
      My Skills
    </h1>


    <div
      class="lg:overflow-hidden lg:bg-transparent lg:flex lg:flex-wrap lg:gap-10 overflow-y-scroll flex flex-col gap-3 w-[98%] rounded-md h-[400px] mt-10 bg-neutral-800 mx-auto p-6"
    >
      <div
        v-for="skill in data.skills"
        :key="skill.name"
        class="cursor-pointer lg:hover:scale-110 transition grid grid-rows-1 grid-cols-[30%_70%]"
      >
        <div class="w-20 h-20 bg-white flex-center p-3 rounded-full">
          <img class="w-20" :src="skill.image" />
        </div>
        <div>
          <h6 class="text-2xl font-semibold">{{ skill.name }}</h6>
          <div class="flex flex-col justify-start">
            <div v-if="skill.level == 3" class="mt-2">
              <span class="text-sm text-neutral-300"> Advanced </span>
              <div class="flex gap-2">
                <span class="w-10 h-[4px] rounded-full bg-red-400"> </span>
                <span class="w-10 h-[4px] rounded-full bg-red-400"> </span>
                <span class="w-10 h-[4px] rounded-full bg-red-400"> </span>
              </div>
            </div>

            <div v-if="skill.level == 2" class="mt-2">
              <span class="text-sm text-neutral-300"> Medium </span>
              <div class="flex gap-2">
                <span class="w-10 h-[4px] rounded-full bg-orange-400"> </span>
                <span class="w-10 h-[4px] rounded-full bg-orange-400"> </span>
              </div>
            </div>

            <div v-if="skill.level == 1" class="mt-2">
              <span class="text-sm text-neutral-300"> Begginer </span>
              <div class="flex gap-2">
                <span class="w-10 h-[4px] rounded-full bg-green-400"> </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


