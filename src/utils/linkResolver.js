
 export const linkResolver = (doc) => {
   const language = doc.lang==='zh-tw'?'zh/':'/'
    if (doc.type === 'post') {
      return `${language}post/${doc.uid}`;
    }
    else if (doc.type === 'group') {
      return `${language}group/${doc.uid}`;
    }
    else if (doc.type ==='tag') {
      return `${language}/tag/${doc.uid}`
    }
    else if (doc.lang === 'zh-tw') {
      return '/zh'
    }
    return '/'
  }

