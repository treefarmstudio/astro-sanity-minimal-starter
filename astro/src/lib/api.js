export const allPosts = `{
  allPost{
    slug {
      current
    }
    title
  	publishedAt
    mainImage{
      asset{
        url
      }
    }
    bodyRaw
  }
}`;