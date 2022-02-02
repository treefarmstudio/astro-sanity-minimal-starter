export const allPosts = `*[_type == 'post']{categories[]->{slug, title}, ...} | order(publishedAt desc)`;

export const allCategoriesWithPosts = `*[_type == 'category']{"posts": *[_type == "post" && references(^._id)] | order(publishedAt desc), ...}`;

// export const allPosts = `{
//   allPost {
//     slug {
//       current
//     }
//     title
//     publishedAt
//     author {
//       name
//     }
//     categories {
//       _id
//       title
//       slug {
//         current
//       }
//     }
//     mainImage {
//       asset {
//         url
//       }
//     }
//     excerpt
//     bodyRaw
//   }
// }`;

// export const allCategories = `{
//   allCategory {
//     _id
//     title
//     slug {
//       current
//     }
//   }
// }`;
