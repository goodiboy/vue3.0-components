<template>
  <input type="number" :value="value" @input="handleChange" />
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue'
import { FiledPropsDefine } from '../types'

export default defineComponent({
  name: 'StringField',
  props: FiledPropsDefine,
  setup(props) {
    const { value } = toRefs(props)
    const handleChange = (e: any) => {
      const value = e.target.value
      const num = Number(value)
      console.log(num)
      if (Number.isNaN(num)) props.onChange(undefined)
      else props.onChange(num)
    }
    return {
      value,
      handleChange
    }
  }
})
</script>
<!--
<script lang="ts" setup="props">
import { ref, defineProps, PropType } from 'vue'
import { FiledPropsDefine, Schema } from '../Interface'

const props = defineProps({
  value: {
    required: true
  }
})

console.log(props.value)

// declare const props: {
//   value: any
//   onChange: (v: any) => void
//   schema: Schema
// }

const handleChange = (e: any) => {
  console.log(e)
  // props.onChange(e.target.value)
}
</script>-->

<style scoped></style>
