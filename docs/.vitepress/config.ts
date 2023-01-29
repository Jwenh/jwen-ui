// import DefaultTheme from 'vitepress/theme'

export default {
    // ...DefaultTheme,
    // enhanceApp(cts){
    //     DefaultTheme.enhanceApp(ctx)
    //     // ctx.app.component('MyGlobalComponent' /* ... */)
    // },
    title: 'jwen-ui',
    description: '组件库搭建',
    base:'/docs',
    cleanUrls: 'with-subfolders',
    themeConfig:{
        logo:'/src/assets/vue.svg',
        nav:[
            { text: 'Guide', link: '/guide' },
            {
              text: 'Dropdown Menu',
              items: [
                { text: 'Item A', link: '/item-1' },
                { text: 'Item B', link: '/item-2' },
                { text: 'Item C', link: '/item-3' }
              ]
            }
        ],
        sidebar:[
          {
            text: 'Guide',
            items: [
              { text: 'Introduction', link: '/introduction' },
              { text: 'Getting Started', link: '/guide/getting-started' },
            ]
        },
        {
          text:'组件的使用',
          items:[
            {text:'按钮',link:'/pages/button'}
          ]
          
      }
    ]
    }
  }
  