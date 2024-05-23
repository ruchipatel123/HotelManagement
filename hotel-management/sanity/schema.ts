import { type SchemaTypeDefinition } from 'sanity'
import { userType } from './schema/user'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [userType],
}
