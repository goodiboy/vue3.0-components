import { defineComponent, PropType } from 'vue'
import { Schema } from '../Interface'

export default defineComponent({
  name: 'NumberField',
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
    return () => {
      const { value } = props
      console.log(value)
      return <div>{value}</div>
    }
  }
})
