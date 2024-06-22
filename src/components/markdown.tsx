import Markdown from "markdown-to-jsx";

export default function RenderedMarkdown({ content }: { content: string }) {
  return (
    <Markdown
      options={{
        overrides: {
          h1: {
            props: {
              className: "text-4xl font-bold text-blue-500 m-4",
            },
          },
          h2: {
            props: {
              className: "text-3xl font-bold text-dark-blue m-4",
            },
          },
          p: {
            props: {
              className: "text-lg text-gray-700 leading-relaxed m-4",
            },
          },
          a: {
            props: {
              className: "text-dark-seafoam hover:underline",
            },
          },
          li: {
            component: "li",
            props: {
              className: "list-disc pl-0 ml-8 text-lg text-gray-700 mb-2",
            },
          },
        },
      }}
    >
      {content}
    </Markdown>
  );
}
