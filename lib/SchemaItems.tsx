import { defineComponent } from 'vue'
import { fieldPropsDefine, SchemaTypes } from './Interface'
import StringField from './fields/StringField'
import NumberField from './fields/NumberField.vue'

export default defineComponent({
  name: 'SchemaItems',
  props: fieldPropsDefine,
  setup(props) {
    return () => {
      const { schema, value } = props
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
      console.log(value)
      return <Component {...props} />
    }
  }
})
