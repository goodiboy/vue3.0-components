import { defineComponent, PropType } from 'vue'
import { FiledPropsDefine, Schema } from './types'
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
  setup(props) {
    const handleChange = (v: any) => {
      props.onChange(v)
    }
    return () => {
      const { schema, value } = props
      return (
        <SchemaItems
          schema={schema}
          rootSchema={schema}
          onChange={handleChange}
          value={value}
        />
      )
    }
  }
})
