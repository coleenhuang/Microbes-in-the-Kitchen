module.exports = {
  linkResolver(doc) {
    if (doc.type === 'Recipe') {
      return `${doc.lang}/recipe/${doc.uid}`;
    }
    if (doc.type === 'Post') {
      return `${doc.lang}/post/${doc.uid}`;
    }
    if (doc.type === 'Group') {
      return `${doc.lang}/group/${doc.uid}`;
    }
    if (doc.type ==='Tag') {
      return `${doc.lang}/tag/${doc.uid}`
    }
    return '/'
  },
};
