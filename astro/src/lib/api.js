export const allPosts = `*[_type == 'post']{categories[]->{slug, title},author -> {name}, ...} | order(publishedAt desc)`;

export const allCategoriesWithPosts = `*[_type == 'category']{"posts": *[_type == "post" && references(^._id)] | order(publishedAt desc), ...}`;
