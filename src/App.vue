<script setup>
  import _data from "./data"
  import { ref } from "vue"
  import Home from  "./pages/Home.vue"
  import Navbar from  "./components/Navbar.vue"
  import Projects from "./pages/Projects.vue"
  import Skills from "./pages/Skills.vue"
  import Contact from "./pages/Contact.vue"

  const data = ref(_data)
</script>

<template>
  <Navbar />
  <div class="flex flex-col gap-40">
    <Home />
  
    <Projects />
    <Skills />
    <Contact />
  </div>
</template>

