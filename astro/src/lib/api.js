export const allPosts = `{
  allPost {
    slug {
      current
    }
    title
    publishedAt
    author {
      name
    }
    categories {
      _id
      title
      slug {
        current
      }
    }
    mainImage {
      asset {
        url
      }
    }
    excerpt
    bodyRaw
  }
}`;

export const allCategories = `{
  allCategory {
    _id
    title
    slug {
      current
    }
  }
}`;
