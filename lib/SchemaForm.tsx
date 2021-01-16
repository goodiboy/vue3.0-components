import { defineComponent, PropType, provide } from 'vue'
import { FiledPropsDefine, Schema } from './types'
import SchemaItems from './SchemaItems'
import { SchemaFromContextKey } from './content'
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
      console.log(v)
      props.onChange(v)
    }
    provide(SchemaFromContextKey, { SchemaItems })
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
