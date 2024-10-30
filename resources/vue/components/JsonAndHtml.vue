
<script setup>
import VCodeBlock from '@wdns/vue-code-block';
const props = defineProps({
    data:{
        type:Object,
        default: () => ({})
    }
})

const code = JSON.stringify(props.data, null, 4)


</script>


<template>
    <div>
        <VCodeBlock
            class="max-h-300"
            :code="code"
            highlightjs
            lang="json"
            theme="neon-bunny"
        />
    </div>
</template>