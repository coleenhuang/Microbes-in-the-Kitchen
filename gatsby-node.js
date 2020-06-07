const path = require('path')
const lang = ['en-us', 'zh-tw']

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions    
    const allRecipesTemplate = path.resolve(`src/templates/allRecipes.js`)
    const allTagsTemplate = path.resolve(`src/templates/allTags.js`)
    //Create pages for each language
    lang.forEach((language) => {
        const prefix = language ==='zh-tw'?'/zh/':'/'
        const recipepath = `${prefix}recipes`
        const tagpath = `${prefix}tags`
        createPage({
            path: recipepath,
            component: allRecipesTemplate,
            context: {
                pagePath: recipepath,
                lang: language
            }
        })
        createPage({
            path: tagpath,
            component: allTagsTemplate,
            context: {
                pagePath: tagpath,
                lang: language
            }
        })
    })
  }

  