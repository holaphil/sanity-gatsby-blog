export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60b6900568cbe512c25b06d9",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-j7kzde9c",
                  apiId: "68aad0ad-6419-4287-95da-0bb2de1fb7fc",
                },
                {
                  buildHookId: "60b69005577e740c17ef2c62",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-kj7dus7s",
                  apiId: "0f004492-aaad-4063-a7b9-d761f7f35c2e",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/holaphil/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-kj7dus7s.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
