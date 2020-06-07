const path = require('path')
const lang = ['en-us', 'zh-tw']

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions    
    const allRecipesTemplate = path.resolve(`src/templates/allRecipes.js`)
    //Create pages for each language
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