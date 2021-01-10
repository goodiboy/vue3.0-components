<template>
  <div>
    <input type="text" :value="value" @input="handleChange" />
  </div>
</template>

<script lang="ts" setup>
/* eslint-disable */
import { defineProps, PropType } from 'vue'
import { Schema } from '../Interface'

const props = defineProps({
  schema: {
    type: Object as PropType<Schema>,
    required: true
  },
  value: {
    required: true
  },
  onChange: {
    type: Function as PropType<(v: any) => void>,
    required: true
  }
})

const handleChange = (e: any) => {
  console.log(e)
  props.onChange(e.target.value)
}
</script>

<style scoped></style>
