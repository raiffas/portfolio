import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import manifest from "posts/manifest";

const VIDEO_EXTS = ['mp4', 'mov', 'webm'];

const edgeStyles = {
  bottom:         (size) => ({ position: 'absolute', zIndex: 0, bottom: 0, left: '50%', transform: 'translateX(-50%)', width: size, height: 'auto' }),
  top:            (size) => ({ position: 'absolute', zIndex: 0, top: 0,    left: '50%', transform: 'translateX(-50%)', width: size, height: 'auto' }),
  left:           (size) => ({ position: 'absolute', zIndex: 0, left: 0,   top: '50%',  transform: 'translateY(-50%)', height: size, width: 'auto' }),
  right:          (size) => ({ position: 'absolute', zIndex: 0, right: 0,  top: '50%',  transform: 'translateY(-50%)', height: size, width: 'auto' }),
  'bottom-left':  (size) => ({ position: 'absolute', zIndex: 0, bottom: 0, left: 0,  width: size, height: 'auto' }),
  'bottom-right': (size) => ({ position: 'absolute', zIndex: 0, bottom: 0, right: 0, width: size, height: 'auto' }),
  'top-left':     (size) => ({ position: 'absolute', zIndex: 0, top: 0,    left: 0,  width: size, height: 'auto' }),
  'top-right':    (size) => ({ position: 'absolute', zIndex: 0, top: 0,    right: 0, width: size, height: 'auto' }),
};

const MediaPin = ({ src, edge = 'bottom', size = '200px' }) => {
  const url = `${process.env.PUBLIC_URL}/posts/${src}`;
  const isVideo = VIDEO_EXTS.includes(src.split('.').pop().toLowerCase());
  const style = (edgeStyles[edge] ?? edgeStyles.bottom)(size);

  return isVideo
    ? <video src={url} autoPlay loop muted playsInline style={style} />
    : <img src={url} alt="" style={style} />;
};

const MediaBgParagraph = ({ src, children }) => {
  const ext = src.split('.').pop().toLowerCase();
  const url = `${process.env.PUBLIC_URL}/posts/${src}`;
  const isVideo = VIDEO_EXTS.includes(ext);

  return (
    <div className="relative overflow-hidden mb-4 rounded-sm">
      {isVideo
        ? <video src={url} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
        : <img src={url} alt="" className="absolute inset-0 w-full h-full object-cover" />
      }
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.4)' }} />
      <p className="relative z-10 p-4">{children}</p>
    </div>
  );
};

const ShimmerParagraph = ({ children }) => (
  <div className="relative overflow-hidden mb-4 rounded-sm">
    <div className="shimmer-bg absolute inset-0" />
    <p className="relative z-10">{children}</p>
  </div>
);

const markdownComponents = {
  mediapin: ({ node, src, edge, size }) => <MediaPin src={src} edge={edge} size={size} />,
  mediabg: ({ node, src, ...props }) => <MediaBgParagraph src={src} {...props} />,
  shimmer: ({ node, ...props }) => <ShimmerParagraph {...props} />,
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
          <article key={i} className="relative overflow-hidden border border-red-A100 rounded-lg w-full p-8 sm:p-5">
            <div className="relative z-10">
              <h2 className="text-white-A700 text-[28px] md:text-2xl sm:text-xl font-jura"><b><i>{title}</i></b></h2>
              <p className="text-white-A700 opacity-60 text-sm font-jura mt-1">{date}</p>
              <div className="border-b border-white-A700 my-5" />
              <div className="text-white-A700 font-jura text-base leading-relaxed">
                <ReactMarkdown rehypePlugins={[rehypeRaw]} components={markdownComponents}>{content}</ReactMarkdown>
              </div>
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
