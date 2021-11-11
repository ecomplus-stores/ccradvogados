import getSections from '@ecomplus/storefront-template/template/js/netlify-cms/base-config/sections'
import getSettings from '@ecomplus/storefront-template/template/js/netlify-cms/base-config/collections/settings'
import getLayout from '@ecomplus/storefront-template/template/js/netlify-cms/base-config/collections/layout'
import getPages from '@ecomplus/storefront-template/template/js/netlify-cms/base-config/collections/pages'
import getBlogPosts from '@ecomplus/storefront-template/template/js/netlify-cms/base-config/collections/blog-posts'
import getExtraPages from '@ecomplus/storefront-template/template/js/netlify-cms/base-config/collections/extra-pages'
import getWidgets from '@ecomplus/storefront-template/template/js/netlify-cms/base-config/collections/widgets'

//ALPIX CUSTOM MODULES
//import getReceitas from './collections/receitas-posts'
//import getGrids from './collections/grids'
//import getMenuConfig from './collections/menu-config'

export default options => {
  console.log('custom cms config')
  
  options.sections = getSections(options).concat([
    {
      label: '[ALPIX] - Seção de texto com título lateral',
      name: 'apx_textSection',
      widget: 'object',
      fields: [
        {
          label: 'Título',
          required: false,
          name: 'title',
          widget: 'string'
        },
        {
          label: 'Descrição',
          required: false,
          name: 'description',
          widget: 'text'
        },
        {
          label: 'Cor do título',
          name: 'titleColor',
          widget: 'color'
        },
        {
          label: 'Cor do texto',
          name: 'textColor',
          widget: 'color'
        } ,
        {
          label: 'Cor de fundo',
          name: 'backgroundColor',
          widget: 'color'
        } 
      ]
    },
    {
      label: '[ALPIX] - Grade de Ícones',
      name: 'apx_iconGrid',
      widget: 'object',
      fields: [
        {
          label: 'Título',
          required: false,
          name: 'title',
          widget: 'string'
        },
        {
          label: 'Imagem de Centro',
          name: 'image',
          widget: 'image'
        },
        {
          label: 'Imagem de Fundo da Seção',
          name: 'backgroundImage',
          widget: 'image'
        },
        {
          label: 'Descrição',
          required: false,
          name: 'description',
          widget: 'text'
        },
        {
          label: 'Cor do título',
          name: 'titleColor',
          widget: 'color'
        },
        {
          label: 'Cor do texto',
          name: 'textColor',
          widget: 'color'
        } ,
        {
          label: 'Cor de fundo',
          name: 'backgroundColor',
          widget: 'color'
        },
        {
          label: 'Opções',
          name: 'options',
          widget: 'list',
          required:false,
          fields: [
            {
              label: 'Nome da Opção',
              name: 'option',
              widget: 'object',
              required:false,
              fields: [
                {
                  label: 'Nome da Opção',
                  name: 'name',
                  widget: 'string'          
                },
                {
                  label: 'Ícone',
                  name: 'image',
                  widget: 'image'
                },
                {
                  label: 'Link de destino',
                  name: 'link',
                  widget: 'string'          
                }
              ]
            },          
          ]
        }
      ]
    },
    {
      label: '[ALPIX] - Slider Equipe/Serviços',
      name: 'apx_sliderItems',
      widget: 'object',
      fields: [
        {
          label: 'Título',
          required: false,
          name: 'title',
          widget: 'string'
        },
        {
          label: 'Imagem de Fundo da Seção',
          name: 'backgroundImage',
          widget: 'image'
        },
        {
          label: 'Descrição',
          required: false,
          name: 'description',
          widget: 'text'
        },
        {
          label: 'Cor do título',
          name: 'titleColor',
          widget: 'color'
        },
        {
          label: 'Cor do texto',
          name: 'textColor',
          widget: 'color'
        } ,
        {
          label: 'Cor de fundo',
          name: 'backgroundColor',
          widget: 'color'
        },
        {
          label: 'Opções',
          name: 'options',
          widget: 'list',
          required:false,
          fields: [
            {
              label: 'Nome da Opção',
              name: 'option',
              widget: 'object',
              required:false,
              fields: [
                {
                  label: 'Nome da Opção',
                  name: 'name',
                  widget: 'string'          
                },
                {
                  label: 'Ícone',
                  name: 'image',
                  widget: 'image'
                },
                {
                  label: 'Link de destino',
                  name: 'link',
                  widget: 'string'          
                }
              ]
            },          
          ]
        }
      ]
    },
    {
      label: '[ALPIX] - Régua de Banners',
      name: 'apx_bannerRow',
      widget: 'object',
      fields: [
        {
          label: 'Opções',
          name: 'options',
          widget: 'list',
          required:false,
          fields: [
            {
              label: 'Nome da Opção',
              name: 'option',
              widget: 'object',
              required:false,
              fields: [
                {
                  label: 'Título',
                  required: false,
                  name: 'title',
                  widget: 'string'
                },
                {
                  label: 'Descrição',
                  required: false,
                  name: 'description',
                  widget: 'text'
                },
                {
                  label: 'Texto do Botão',
                  required: false,
                  name: 'buttonTitle',
                  widget: 'string'
                },
                {
                  label: 'Link de destino',
                  name: 'link',
                  widget: 'string'          
                },
                {
                  label: 'Cor do título',
                  name: 'titleColor',
                  widget: 'color'
                },
                {
                  label: 'Cor do texto',
                  name: 'textColor',
                  widget: 'color'
                } ,
                {
                  label: 'Cor de fundo',
                  name: 'backgroundColor',
                  widget: 'color'
                }                
              ]
            },          
          ]
        }
      ]
    }
])

  return {
    backend: {
      name: 'git-gateway',
      branch: 'master',
      commit_messages: {
        create: 'Create {{collection}} “{{slug}}”',
        update: 'Update {{collection}} “{{slug}}”',
        delete: 'Delete {{collection}} “{{slug}}”',
        uploadMedia: 'Upload “{{path}}”',
        deleteMedia: '[skip ci] Delete “{{path}}”',
        openAuthoring: '{{message}}'
      }
    },
    logo_url: 'https://ecom.nyc3.digitaloceanspaces.com/storefront/cms.png',
    locale: 'pt',
    load_config_file: Boolean(window.CMS_LOAD_CONFIG_FILE),
    media_folder: `${options.baseDir}template/public/img/uploads`,
    public_folder: '/img/uploads',
    slug: {
      encoding: 'ascii',
      clean_accents: true,
      sanitize_replacement: '-'
    },
    collections: [
      getSettings(options),
      getLayout(options),
      getPages(options),
      getBlogPosts(options),
      getExtraPages(options),
      getWidgets(options)
    ]
  }
}
