export interface BlogPost {
  title: string
  slug: string
  tags: string[]
  publishDate: string
  description: {
    childMarkdownRemark: {
      html: string
    }
  }
  body: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    json: any
  }
}
