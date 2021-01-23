import { defineComponent } from 'vue'
import { FiledPropsDefine, Schema } from '../types'
import { useVJSFContext } from '../content'

/*
  支持的渲染 schema 結構
  1.) render singleTypeArray schema
  {
    items: { type: string }
  }
  or
  {
    items: {
      type: string,
      properties: {
        name: {
          type: 'string'
        },
        age: {
          type: 'number'
        }
      }
    }
  }

  2.) render staticArray schema
  {
    items: [
      { type: string },
      { type: number }
    ]
  }

  3.) render multiSelectArray schema
  {
    items: { type: string, enum: ['1', '2'] }
  }
*/
export default defineComponent({
  name: 'ArrayField',
  props: FiledPropsDefine,
  setup(props) {
    const context = useVJSFContext()
    const handleMultiTypeChange = (v: any, index: number) => {
      const { value } = props
      const arr = Array.isArray(value) ? value : []
      arr[index] = v
      props.onChange(arr)
    }
    return () => {
      const { schema, value, rootSchema } = props
      const SchemaItem = context.SchemaItem
      const isMultiType = Array.isArray(schema.items)

      if (isMultiType) {
        console.log(111)
        const items: Schema[] = schema.items as any
        const arr = Array.isArray(value) ? value : []
        return items.map((s: Schema, index: number) => (
          <SchemaItem
            schema={s}
            key={index}
            rootSchema={rootSchema}
            value={arr[index]}
            onChange={(v: any) => handleMultiTypeChange(v, index)}
          />
        ))
      }

      // return schema.items.map()

      return <div>hi</div>
    }
  }
})
