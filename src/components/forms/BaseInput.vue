<script setup>
    defineProps({
        label:{
            type: String,
            required: true,
            default: ''
        },
        modelValue: {
            type: [String,Number],
            default: ''
        }
    })
</script>
<template>
    <label>{{ label }}</label>
    <input
        v-bind="$attrs"
        :placeholder="label" 
        class="field"
        :value="modelValue"
        @input="$emit('update:modelValue',$event.target.value)"
        >
</template>