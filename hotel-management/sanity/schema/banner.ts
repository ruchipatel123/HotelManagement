import { defineField, defineType } from 'sanity';

export const bannerType = defineType({
  name: 'Banner',
  title: 'Banner',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule =>
        Rule.required().max(50).error('Maximum 50 Characters'),
    }),
    defineField({
      name: 'tag',
      title: 'Tag',
      type: 'string',
      validation: Rule =>
        Rule.required().max(10).error('Maximum 10 Characters'),
    }),
    defineField({
      name: 'button',
  title: 'Button',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'string',
      validation: Rule => Rule.required().error('Button text is required')
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: Rule => Rule.required().uri({
        allowRelative: true,
        scheme: ['http', 'https', 'mailto', 'tel']
      }).error('A valid URL is required')
    },
    {
      name: 'style',
      title: 'Style',
      type: 'string',
      options: {
        list: [
          { title: 'Primary', value: 'primary' },
          { title: 'Secondary', value: 'secondary' },
          { title: 'Tertiary', value: 'tertiary' }
        ],
        layout: 'dropdown'
      },
      initialValue: 'primary'
    }
  ]
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule =>
        Rule.required().min(100).error('Minimum 100 Characters'),
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'url', type: 'url', title: 'URL' },
            { name: 'file', type: 'file', title: 'File' },
          ],
        },
      ],
      validation: Rule =>
        Rule.required().min(3).error('Minimum of 3 images required'),
    }),
  ],
})