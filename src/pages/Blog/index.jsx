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
  strong:     ({ node, ...props }) => <strong className="font-bold text-red-A100" {...props} />,
  em:         ({ node, ...props }) => <em className="italic" {...props} />,
};

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);

  useEffect(() => {
    const loadPosts = async () => {
      const loaded = await Promise.all(
        [...manifest].reverse().map(async ({ title, date, file, tags, hideDate }) => {
          const res = await fetch(`${process.env.PUBLIC_URL}/posts/${file}`);
          const content = await res.text();
          return { title, date, content, tags: tags ?? [], hideDate: hideDate ?? false };
        })
      );
      setPosts(loaded);
    };
    loadPosts();
  }, []);

  const allTags = [...new Set(posts.flatMap((p) => p.tags))].sort();
  const visiblePosts = selectedTag
    ? posts.filter((p) => p.tags.includes(selectedTag))
    : posts;

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

      {allTags.length > 0 && (
        <div className="flex flex-row flex-wrap gap-3 w-full max-w-[1440px] md:px-10 sm:px-5 px-[180px] pb-6">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
              className={`font-jura text-sm px-4 py-1.5 rounded-full border transition-colors duration-200 ${
                selectedTag === tag
                  ? "bg-red-A100 border-red-A100 text-black"
                  : "border-white-A700 text-white-A700 hover:border-red-A100 hover:text-red-A100"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      <main className="flex flex-col items-start flex-1 w-full max-w-[1440px] md:px-10 sm:px-5 px-[180px] py-12 gap-12">
        {visiblePosts.map(({ title, date, content, tags, hideDate }, i) => (
          <article key={i} className="border border-red-A100 rounded-lg w-full p-8 sm:p-5">
            <h2 className="text-white-A700 text-[28px] md:text-2xl sm:text-xl font-jura"><b><i>{title}</i></b></h2>
            {!hideDate && <p className="text-white-A700 opacity-60 text-sm font-jura mt-1">{date}</p>}
            {tags.length > 0 && (
              <div className="flex flex-row flex-wrap gap-2 mt-3">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                    className={`font-jura text-xs px-3 py-1 rounded-full border transition-colors duration-200 ${
                      selectedTag === tag
                        ? "bg-red-A100 border-red-A100 text-black"
                        : "border-white-A700 text-white-A700 opacity-60 hover:border-red-A100 hover:text-red-A100 hover:opacity-100"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            )}
            <div className="border-b border-white-A700 my-5" />
            <div className="text-white-A700 font-jura text-base leading-relaxed">
              <ReactMarkdown components={markdownComponents}>{content}</ReactMarkdown>
            </div>
          </article>
        ))}
        {posts.length === 0 && (
          <p className="text-white-A700 text-2xl">Loading...</p>
        )}
        {posts.length > 0 && visiblePosts.length === 0 && (
          <p className="text-white-A700 text-2xl opacity-60">No posts with that tag.</p>
        )}
      </main>
    </div>
  );
};

export default BlogPage;
