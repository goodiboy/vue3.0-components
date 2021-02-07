import { defineComponent, PropType, provide } from 'vue'
import { FiledPropsDefine, Schema } from './types'
import { SchemaFromContextKey } from './content'
import SchemaItem from './SchemaItem'
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
    provide(SchemaFromContextKey, { SchemaItem })
    return () => {
      const { schema, value } = props
      return (
        <SchemaItem
          schema={schema}
          rootSchema={schema}
          onChange={handleChange}
          value={value}
        />
      )
    }
  }
})
