export const allPosts = `{
  allPost{
    slug {
      current
    }
    title
  	publishedAt
    author{
      name
    }
    mainImage{
      asset{
        url
      }
    }
    excerpt
    bodyRaw
  }
}`;