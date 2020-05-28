module.exports = {
  linkResolver(doc) {
    if (doc.type === 'Recipe') {
      return `/recipe/${doc.uid}`;
    }
    if (doc.type === 'Post') {
      return `/post/${doc.uid}`;
    }
    if (doc.type === 'Group') {
      return `/category/${doc.uid}`;
    }
    if (doc.type === "Homepage"){
      return '/';
    }
  },
};
