<script setup>
    defineProps({
        label:{
            type: String,
            defaultt: ''
        },
        modelValue:{
            type: [String, Number],
            default: ''
        },
        options:{
            type: Array,
            required: true
        }
    })
</script>
<template>
    <label>{{ label }}</label>
    <select :value="modelValue"
            class="field"
            v-bind="{
                ...$attrs, 
                onChange: ($event) => { $emit('update:modelValue', $event.target.value) }
            }"
    >
        <option v-for="option in options" 
        :value="option" 
        :key="option"
        :selected="option === modelValue">
            {{ option }}
        </option>
    </select>
</template>