<script setup>
    
    const props = defineProps({
      config: {
        type: Object,
        default: () => ({})
      },
      formModel:{
        type: Object,
        default: () => ({})
      }
    })

    const emit = defineEmits(['update:formModel'])
</script>

<template>
        <el-radio-group v-model="formModel[config.prop]" :disabled="config.disabled">
          <el-radio v-for="item in config.options" :key="item.value" :value="item.value">{{item.label}}</el-radio>
        </el-radio-group>
</template>

<style scoped>


</style>