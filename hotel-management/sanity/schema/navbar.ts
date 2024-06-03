import {defineField, defineType} from 'sanity'

export const NavbarType = defineType({
  name: 'Navbar',
  title: 'Navbar',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
        name: 'link',
        type: 'url',
        validation: Rule => Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel']
        })
      }),
     
  ],
})
