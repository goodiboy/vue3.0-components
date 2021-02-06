import { mount, shallowMount } from '@vue/test-utils'
import { defineComponent, h } from 'vue'

import SchemaForm, { NumberField, StringField } from '../../lib'

describe('ObjectField', () => {
  let schema: any
  beforeEach(() => {
    schema = {
      type: 'object',
      properties: {
        name: {
          type: 'string'
        },
        age: {
          type: 'number'
        }
      }
    }
  })
  it('should render properties to correct fields', async () => {
    const wrapper = mount(SchemaForm, {
      props: {
        schema,
        value: {},
        onChange: () => {}
      }
    })
    const strField = wrapper.findComponent(StringField)
    const numField = wrapper.findComponent(NumberField)

    expect(strField.exists()).toBeTruthy()
    expect(numField.exists()).toBeTruthy()
  })

  it('should change value when sub fields trigger onChange', async () => {
    let value: any = {}
    const wrapper = mount(SchemaForm, {
      props: {
        schema,
        value: value,
        onChange: v => {
          value = v
        }
      }
    })
    const strField = wrapper.findComponent(StringField)
    const numField = wrapper.findComponent(NumberField)

    await strField.props('onChange')('1')
    expect(value.name).toEqual('1')

    await numField.props('onChange')(1)
    expect(value.age).toEqual(1)

    // const input = numField.find('input')
    // input.element.value = '123'
    // await input.trigger('input')
    // expect(value.age).toBe(123)
  })

  it('should change value when sub fields trigger onChange', async () => {
    let value: any = {
      name: '123'
    }
    const wrapper = mount(SchemaForm, {
      props: {
        schema,
        value: value,
        onChange: v => {
          value = v
        }
      }
    })
    const strField = wrapper.findComponent(StringField)

    await strField.props('onChange')(undefined)
    expect(value.name).toBeUndefined()
  })
})
