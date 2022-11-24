
<script setup>
    import { Icon } from '@iconify/vue';
    import { ref } from "vue"

    const props = defineProps({
        direction: String,
        gap: String,
        size: String,
        clickAction: Function
    })

    const direction = ref(props.direction || 'row')
    const gap = ref(props.gap || '70px')
    const size = ref(props.size || '23px')
    const clickAction = props.clickAction

    
</script>

<template>
    <div class="flex gap-8 text-3xl font-semibold" :style="{
        flexDirection: direction,
        gap,
        fontSize: size
    }">
        <a href="#home" class="link flex-center gap-2" @click="clickAction">
            <span>
                <Icon icon="mi:home" />
                
            </span>
            <span>
                Home
            </span>
        </a>

        <a href="#projects"  class="link flex-center gap-2" @click="clickAction">
            <span>
                <Icon icon="ion:hammer-outline" />
            </span>
            <span>
                Projects
            </span>
        </a>
        
        <a href="#skills" class="link flex-center gap-2" @click="clickAction">
            <span>
                <Icon icon="ph:student-bold" />
            </span>
            <span>
                Skills
            </span>
        </a>
    </div>
</template>

