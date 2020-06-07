const path = require('path')
exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions
    const lang = ['en-us', 'zh-tw']
    
    // Create pages for each markdown file.
    const allRecipesTemplate = path.resolve(`src/templates/allRecipes.js`)
    lang.forEach((language) => {
        const prefix = language ==='zh-tw'?'/zh/':'/'
        const path = `${prefix}recipes`
        console.log(path)
        createPage({
            path,
            component: allRecipesTemplate,
            context: {
                pagePath: path,
                lang: language
            }
        })
    })
  }