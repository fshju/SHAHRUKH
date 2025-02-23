import { type SchemaTypeDefinition } from 'sanity'
import comments from './comments'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [comments],
}
