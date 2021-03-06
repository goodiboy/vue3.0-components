import { defineComponent, computed } from 'vue'
import { FiledPropsDefine, SchemaTypes } from './types'
import StringField from './fields/StringField'
import NumberField from './fields/NumberField'
import ObjectField from './fields/ObjectField'

import { retrieveSchema } from './utils'
import ArrayField from './fields/ArrayField'

export default defineComponent({
  name: 'SchemaItems',
  props: FiledPropsDefine,
  setup(props) {
    const retrievedSchemaRef = computed(() => {
      const { schema, rootSchema, value } = props
      return retrieveSchema(schema, rootSchema, value)
    })
    return () => {
      const { schema } = props

      const retrievedSchema = retrievedSchemaRef.value

      const type = schema?.type
      //TODO: 如果type没有指定，我们需要猜测这个type
      let Component: any

      switch (type) {
        case SchemaTypes.STRING:
          Component = StringField
          break
        case SchemaTypes.NUMBER:
          Component = NumberField
          break
        case SchemaTypes.OBJECT:
          Component = ObjectField
          break
        case SchemaTypes.ARRAY:
          Component = ArrayField
          break
        default:
          console.warn(`${type} is not supported`)
      }
      return <Component {...props} schema={retrievedSchema} />
    }
  }
})
