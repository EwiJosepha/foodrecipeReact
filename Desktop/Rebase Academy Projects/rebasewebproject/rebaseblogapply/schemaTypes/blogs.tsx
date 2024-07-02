const blogsSchema = {
  name: "blog",
  type: "document",
  title: "Blog",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title of blog",
    },
    {
      name: "slug",
      type: "slug",
      title: "slug of your blog articles",
      options: {
        source: "title",
        
      },
    },
    {
      name: "titleImage",
      type: "image",
      title: "Title Image",
    },
    {
      name: "smallDescription",
      type: "text",
      title: "small Description",
    },
    {
      name: "author",
      type: "text",
      title: "Author",
    },
    {
      name: "createdAt",
      type: "datetime",
      title: "Created At"
    },
    {
      name: "content",
      type: "text",
      title: "Content",
    },
    {
      name: "id",
      type: "text",
      title: "id",
    },
  ],
};
export default blogsSchema;
