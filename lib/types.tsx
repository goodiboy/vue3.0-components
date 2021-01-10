import { defineComponent } from 'vue'
import { fieldPropsDefine } from './Interface'
import SchemaItems from './SchemaItems'

export default defineComponent({
  name: 'SchemaForm',
  props: fieldPropsDefine,
  setup(props) {
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
