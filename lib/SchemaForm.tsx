import { defineComponent, PropType } from 'vue'
import { Schema } from './Interface'
import SchemaItems from './SchemaItems'

export default defineComponent({
  name: 'SchemaForm',
  props: {
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
  },
  setup(props, { slots, emit, attrs }) {
    const handleChange = (v: any) => {
      props.onChange(v)
    }
    return () => {
      const { schema, value } = props
      return (
        <SchemaItems schema={schema} onChange={handleChange} value={value} />
      )
    }
  }
})
