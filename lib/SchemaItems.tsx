import { defineComponent, PropType } from 'vue'
import { Schema, SchemaTypes } from './Interface'
import StringField from './fields/StringField'
import NumberField from './fields/NumberField'

export default defineComponent({
  name: 'SchemaItems',
  props: {
    schema: {
      type: Object as PropType<Schema>,
      required: true
    },
    value: {
      required: true
    },
    onChange: {
      type: Object as PropType<(v: any) => void>,
      required: true
    }
  },
  setup(props) {
    return () => {
      const { schema } = props
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
        default:
          console.warn(`${type} is not supported`)
      }

      return <Component {...props} />
    }
  }
})
