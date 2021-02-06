import { defineComponent } from 'vue'
import { FiledPropsDefine } from '../types'
import { useVJSFContext } from '../content'
import { isObject } from '../utils'

export default defineComponent({
  name: 'ObjectField',
  props: FiledPropsDefine,
  setup(props) {
    const context = useVJSFContext()

    const handleObjectFieldChange = (key: string, v: string) => {
      const value: any = isObject(props.value) ? props.value : {}
      if (v === undefined) {
        delete value[key]
      } else {
        value[key] = v
      }
      props.onChange(value)
    }

    return () => {
      const { schema, rootSchema, value } = props
      const properties = schema.properties || {}
      const { SchemaItem } = context
      const currentValue: any = isObject(value) ? value : {}
      return Object.keys(properties).map((k: string) => {
        return (
          <SchemaItem
            schema={properties[k]}
            rootSchema={rootSchema}
            value={currentValue[k]}
            onChange={(v: any) => handleObjectFieldChange(k, v)}
            key={k}
          />
        )
      })
    }
  }
})
