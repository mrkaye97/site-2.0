import { getSortedPostsData, PostData } from "@/src/common/posts";
import Markdown from "markdown-to-jsx";

export default function BlogPost({ postData }: { postData: PostData }) {
  return (
    <main className="max-w-3xl mx-auto py-8 px-4">
      <article className="bg-white shadow-lg rounded-lg p-6 prose lg:prose-xl">
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
          {postData.content}
        </Markdown>
      </article>
    </main>
  );
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const allPostsData = getSortedPostsData();
  const postData = allPostsData.find((post) => post.id === params.slug);

  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const allPostsData = getSortedPostsData();

  const paths = allPostsData.map((post) => ({
    params: { slug: post.id },
  }));

  return { paths, fallback: false };
}
