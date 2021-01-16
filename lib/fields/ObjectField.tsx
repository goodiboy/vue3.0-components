import { defineComponent, inject } from 'vue'
import { FiledPropsDefine } from '../types'
import { SchemaFromContextKey } from '../content'
import SchemaItems from '../SchemaItems'
import { isObject } from '../utils'

const TypeHelperComponent = defineComponent({
  props: FiledPropsDefine
})

type SchemaItemDefine = typeof TypeHelperComponent

export default defineComponent({
  name: 'ObjectField',
  props: FiledPropsDefine,
  setup(props) {
    const context: { SchemaItem: SchemaItemDefine } | undefined = inject(
      SchemaFromContextKey
    )
    if (!context) {
      throw Error('SchemaFrom should bu used')
    }

    const handleObjectFieldChange = (key: string, v: string) => {
      const value: any = isObject(props.value) ? props.value : {}
      console.log(key, v)
      if (v === undefined) {
        delete value[key]
      } else {
        value[key] = v
      }
      console.log(value)
      props.onChange(value)
    }

    return () => {
      const { schema, rootSchema, value } = props
      const properties = schema.properties || {}
      const currentValue: any = isObject(value) ? value : {}
      return Object.keys(properties).map((k: string) => {
        return (
          <SchemaItems
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
