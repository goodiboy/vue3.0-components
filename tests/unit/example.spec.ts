import { mount, shallowMount } from '@vue/test-utils'
import SchemaForm, { NumberField } from '../../lib'

describe('SchemaForm', () => {
  it('should render correct number field', async () => {
    let value = ''
    const wrapper = mount(SchemaForm, {
      props: {
        schema: {
          type: 'number'
        },
        value,
        onChange: v => {
          value = v
        }
      }
    })
    const numberField = wrapper.findComponent(NumberField)
    expect(numberField.exists()).toBeTruthy() // 确保numberField是存在的
    const input = numberField.find('input')
    input.element.value = '123'
    await input.trigger('input') // 触发事件
    // await numberField.props('onChange')('123')
    expect(value).toBe(123)
  })
})
