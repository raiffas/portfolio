import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import manifest from "posts/manifest";

const markdownComponents = {
  p:          ({ node, ...props }) => <p className="mb-4" {...props} />,
  h1:         ({ node, ...props }) => <h1 className="font-kiranghaerang text-2xl mb-3 mt-6" {...props} />,
  h2:         ({ node, ...props }) => <h2 className="font-kiranghaerang text-xl mb-2 mt-5" {...props} />,
  h3:         ({ node, ...props }) => <h3 className="font-kiranghaerang text-lg mb-2 mt-4" {...props} />,
  ul:         ({ node, ...props }) => <ul className="list-disc list-inside mb-4" {...props} />,
  ol:         ({ node, ...props }) => <ol className="list-decimal list-inside mb-4" {...props} />,
  li:         ({ node, ...props }) => <li className="mb-1" {...props} />,
  a:          ({ node, ...props }) => <a className="text-red-A100 hover:underline" {...props} />,
  blockquote: ({ node, ...props }) => <blockquote className="border-l-2 border-red-A100 pl-4 italic my-4 opacity-80" {...props} />,
  strong:     ({ node, ...props }) => <strong className="font-bold" {...props} />,
  em:         ({ node, ...props }) => <em className="italic" {...props} />,
};

const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      const loaded = await Promise.all(
        [...manifest].reverse().map(async ({ title, date, file }) => {
          const res = await fetch(`${process.env.PUBLIC_URL}/posts/${file}`);
          const content = await res.text();
          return { title, date, content };
        })
      );
      setPosts(loaded);
    };
    loadPosts();
  }, []);

  return (
    <div className="bg-black-900 flex flex-col font-kiranghaerang items-center min-h-screen w-full">
      <header className="flex flex-row items-center justify-between max-w-[1440px] md:px-10 sm:px-5 px-[180px] py-12 w-full">
        <Link
          to="/portfolio"
          className="text-white-A700 text-[32px] md:text-3xl sm:text-[28px] hover:text-red-A100 transition-colors duration-300"
        >
          ← Back
        </Link>
        <span className="text-white-A700 text-[32px] md:text-3xl sm:text-[28px]">Welcome to my blog</span>
      </header>
      <main className="flex flex-col items-start flex-1 w-full max-w-[1440px] md:px-10 sm:px-5 px-[180px] py-12 gap-12">
        {posts.map(({ title, date, content }, i) => (
          <article key={i} className="border border-red-A100 rounded-lg w-full p-8 sm:p-5">
            <h2 className="text-white-A700 text-[28px] md:text-2xl sm:text-xl font-jura"><b><i>{title}</i></b></h2>
            <p className="text-white-A700 opacity-60 text-sm font-jura mt-1">{date}</p>
            <div className="border-b border-white-A700 my-5" />
            <div className="text-white-A700 font-jura text-base leading-relaxed">
              <ReactMarkdown components={markdownComponents}>{content}</ReactMarkdown>
            </div>
          </article>
        ))}
        {posts.length === 0 && (
          <p className="text-white-A700 text-2xl">Loading...</p>
        )}
      </main>
    </div>
  );
};

export default BlogPage;
