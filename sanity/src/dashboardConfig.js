export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        // __experimental_before: [
        //   {
        //     name: 'netlify',
        //     options: {
        //       description:
        //         'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
        //       sites: [
        //         {
        //           buildHookId: '',
        //           title: 'Sanity Studio',
        //           name: '',
        //           apiId: '',
        //         },
        //       ],
        //     },
        //   },
        // ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jaydanurwin/gatsby-sanity-starter',
            category: 'Code'
          }
          // Add your own hosted website url here if you'd like a quick link to the frontend
          // {title: 'Frontend', value: 'https://jaydanurwin.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
