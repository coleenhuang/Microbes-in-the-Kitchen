module.exports = {
  linkResolver(doc) {
    if (doc.type === 'Recipe') {
      return `/recipe/${doc.uid}`;
    }
    return '/';
  },
};
