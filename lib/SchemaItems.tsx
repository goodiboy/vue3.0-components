import { defineComponent, computed } from 'vue'
import { FiledPropsDefine, SchemaTypes } from './types'
import StringField from './fields/StringField.vue'
import NumberField from './fields/NumberField.vue'
import ObjectField from './fields/ObjectField'

import { retrieveSchema } from './utils'

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
          console.log('string')
          Component = StringField
          break
        case SchemaTypes.NUMBER:
          console.log('number')
          Component = NumberField
          break
        case SchemaTypes.OBJECT:
          console.log('object')
          Component = ObjectField
          break
        default:
          console.warn(`${type} is not supported`)
      }
      return <Component {...props} schema={retrievedSchema} />
    }
  }
})
