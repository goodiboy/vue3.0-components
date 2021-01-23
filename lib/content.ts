import { CommonFieldType } from './types'
import { inject } from 'vue'

export const SchemaFromContextKey = Symbol()

export function useVJSFContext() {
  const context: { SchemaItem: CommonFieldType } | undefined = inject(
    SchemaFromContextKey
  )
  if (!context) {
    throw Error('SchemaForm needed')
  }
  return context
}
