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
  })
})
