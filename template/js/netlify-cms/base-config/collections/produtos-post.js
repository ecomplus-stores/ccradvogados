export default ({ baseDir, sections }) => ({
    name: 'produtos-posts',
    label: 'Página de Serviços',
    folder: `${baseDir}content/produtos`,
    extension: 'json',
    create: true,
    slug: '{{slug}}',
    fields: [
      {
        label: 'URL do Produto',
        name: 'title',
        widget: 'string'
      },       
      {
        label: 'Seções Extras',
        name: 'sections',
        required: false,
        hint: '',
        widget: 'list',
        types: [
          {
            label: 'Corpo do post',
            name: 'produto-post',
            widget: 'object',
            fields: [
              {
                label: 'Exibir conteúdo do post',
                name: 'enabled',
                widget: 'boolean',
                default: true
              }
            ]
          }
        ].concat(sections)
      }
    ]
  })