module.exports = {
  linkResolver(doc) {
    if (doc.type === 'Recipe') {
      return `/recipe/${doc.uid}`;
    }
    if (doc.type === 'Post') {
      return `/post/${doc.uid}`;
    }
    if (doc.type === 'Group') {
      return `/group/${doc.uid}`;
    }
    if (doc.type ==='Tag') {
      return `/tag/${doc.uid}`
    }
    if (doc.type === "Homepage"){
      return '/';
    }
  },
};
