import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  User2,
  Share2,
} from "lucide-react";

import SEO from "../SEO";
import { BlogContent,
  BlogSummary,
  getBlog,
  getRelatedBlogs, } from "../../../services/blogService";

export function BlogPost() {
const { slug } = useParams();

const [blog, setBlog] = useState<BlogContent | null>(null);
const [loading, setLoading] = useState(true);
const [relatedBlogs, setRelatedBlogs] = useState<BlogSummary[]>([]);

const [progress, setProgress] = useState(0);

  useEffect(() => {
async function loadBlog() {
  if (!slug) return;

  try {
    const article = await getBlog(slug);

    setBlog(article);

    const related = await getRelatedBlogs(slug);

    setRelatedBlogs(related);

  } finally {
    setLoading(false);
  }
}

    loadBlog();
  }, [slug]);

  useEffect(() => {
  const handleScroll = () => {
    const total =
      document.documentElement.scrollHeight -
      window.innerHeight;

    const value =
      (window.scrollY / total) * 100;

    setProgress(value);
  };

  window.addEventListener("scroll", handleScroll);

  return () =>
    window.removeEventListener(
      "scroll",
      handleScroll
    );
}, []);

const headings = useMemo(() => {
  if (!blog) return [];

  return blog.content.filter(
    (block) =>
      block.type === "h2" ||
      block.type === "h3"
  );
}, [blog]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading article...
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Article not found.
      </div>
    );
  }

  return (
  <>
    <SEO
      title={blog?.seoTitle || "Blog | Backyard Nest"}
      description={blog?.metaDescription || ""}
      url={`https://backyardnest.com.au/blog/${blog?.slug}`}
    />

    {/* Reading Progress */}
    <div className="fixed top-0 left-0 w-full h-[3px] bg-[#F5F0EB] z-[100]">
      <div
        className="h-full bg-[#C7A77A] transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>

    {loading ? (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">

          <div className="w-10 h-10 border-4 border-[#C7A77A]/30 border-t-[#C7A77A] rounded-full animate-spin mx-auto mb-6" />

          <p className="uppercase tracking-[0.25em] text-sm text-[#8B7E74]">
            Loading Article...
          </p>

        </div>
      </div>
    ) : !blog ? (
      <div className="min-h-screen flex items-center justify-center bg-white">

        <div className="text-center">

          <h1 className="editorial-heading text-5xl text-[#2E2A26]">
            Article Not Found
          </h1>

          <Link
            to="/blog"
            className="inline-flex items-center mt-8 uppercase tracking-[0.25em] text-xs text-[#C7A77A]"
          >
            ← Return to Journal
          </Link>

        </div>

      </div>
    ) : (
      <div className="bg-white">

        {/* HERO */}

        <section className="relative pt-40 pb-20">

          <div className="max-w-7xl mx-auto px-6 lg:px-12">

            <Link
              to="/blog"
              className="inline-flex items-center gap-3 uppercase tracking-[0.3em] text-xs text-[#A08E7C] hover:text-[#C7A77A] transition-colors"
            >
              <ArrowLeft size={15} />
              Back to Journal
            </Link>

            <div className="mt-16">

              <p className="uppercase tracking-[0.35em] text-xs text-[#A08E7C] mb-8">
                {blog.category}
              </p>

              <h1
                className="
                  editorial-heading
                  text-[#2E2A26]
                  leading-[0.9]
                  tracking-[-0.05em]
                  text-[clamp(3.8rem,8vw,8rem)]
                  max-w-5xl
                "
              >
                {blog.title}
              </h1>

              <div className="flex flex-wrap items-center gap-8 mt-12 text-[#8B7E74]">

                <div className="flex items-center gap-3">

                  <User2
                    size={18}
                    className="text-[#C7A77A]"
                  />

                  <span>{blog.author}</span>

                </div>

                <div className="flex items-center gap-3">

                  <CalendarDays
                    size={18}
                    className="text-[#C7A77A]"
                  />

                  <span>{blog.publishDate}</span>

                </div>

                <div className="flex items-center gap-3">

                  <Clock3
                    size={18}
                    className="text-[#C7A77A]"
                  />

                  <span>
                    {blog.readingTime} min read
                  </span>

                </div>

                <button
                  className="
                    ml-auto
                    flex
                    items-center
                    gap-3
                    uppercase
                    tracking-[0.2em]
                    text-xs
                    hover:text-[#C7A77A]
                    transition-colors
                  "
                >
                  <Share2 size={16} />
                  Share
                </button>

              </div>

            </div>

          </div>

        </section>

        {blog.heroImage && (

          <section className="pb-28">

            <div className="max-w-[1700px] mx-auto px-6 lg:px-12">

              <img
                src={blog.heroImage}
                alt={blog.title}
                className="
                  w-full
                  rounded-[32px]
                  object-cover
                  max-h-[850px]
                  shadow-[0_30px_70px_rgba(0,0,0,0.08)]
                "
              />

            </div>

          </section>

        )}

{/* ARTICLE */}

<section className="pb-40">

  <div className="max-w-7xl mx-auto px-6 lg:px-12">

    <div className="grid lg:grid-cols-[280px_1fr] gap-20">

      {/* TABLE OF CONTENTS */}

      <aside className="hidden lg:block">

        <div className="sticky top-32">

          <p className="uppercase tracking-[0.3em] text-xs text-[#A08E7C] mb-8">
            Contents
          </p>

          <nav className="space-y-5">

            {headings.map((heading, index) => (

              <a
                key={index}
                href={`#section-${index}`}
                className="
                  block
                  text-[#7D7269]
                  hover:text-[#C7A77A]
                  transition-colors
                  leading-relaxed
                "
              >
                {heading.text}
              </a>

            ))}

          </nav>

        </div>

      </aside>

      {/* ARTICLE */}

      <article
        className="
          max-w-[760px]
          mx-auto
          w-full
        "
      >

        {(() => {

          let headingIndex = 0;

          return blog.content.map((block, index) => {

            switch (block.type) {

              case "h1":

                return (

                  <h1
                    key={index}
                    className="
                      editorial-heading
                      text-6xl
                      leading-[1]
                      text-[#2E2A26]
                      mt-20
                      mb-10
                    "
                  >
                    {block.text}
                  </h1>

                );

              case "h2":

                const h2Index = headingIndex++;

                return (

                  <h2
                    id={`section-${h2Index}`}
                    key={index}
                    className="
                      editorial-heading
                      text-5xl
                      leading-[1]
                      text-[#2E2A26]
                      mt-24
                      mb-10
                    "
                  >
                    {block.text}
                  </h2>

                );

              case "h3":

                const h3Index = headingIndex++;

                return (

                  <h3
                    id={`section-${h3Index}`}
                    key={index}
                    className="
                      editorial-heading
                      text-3xl
                      leading-tight
                      text-[#2E2A26]
                      mt-16
                      mb-6
                    "
                  >
                    {block.text}
                  </h3>

                );

              case "paragraph":

                return (

                  <p
                    key={index}
                    className="
                      text-[20px]
                      leading-[2]
                      text-[#5E5751]
                      mb-10
                    "
                  >
                    {block.text}
                  </p>

                );

              case "bullet":

                return (

                  <ul
                    key={index}
                    className="
                      list-disc
                      pl-8
                      mb-6
                    "
                  >
                    <li
                      className="
                        text-[20px]
                        leading-[2]
                        text-[#5E5751]
                      "
                    >
                      {block.text}
                    </li>
                  </ul>

                );

              case "quote":

                return (

                  <blockquote
                    key={index}
                    className="
                      my-24
                      py-12
                      border-y
                      border-[#C7A77A]/30
                    "
                  >

                    <p
                      className="
                        editorial-heading
                        text-5xl
                        leading-[1.2]
                        text-[#2E2A26]
                      "
                    >
                      “{block.text}”
                    </p>

                  </blockquote>

                );

              case "image":

                return (

                  <figure
                    key={index}
                    className="my-20"
                  >

                    <img
                      src={block.url}
                      alt={block.caption || ""}
                      className="
                        w-full
                        rounded-[28px]
                        shadow-xl
                      "
                    />

                    {block.caption && (

                      <figcaption
                        className="
                          mt-5
                          text-center
                          text-sm
                          tracking-wide
                          text-[#8B7E74]
                        "
                      >
                        {block.caption}
                      </figcaption>

                    )}

                  </figure>

                );

              case "divider":

                return (

                  <hr
                    key={index}
                    className="
                      my-24
                      border-[#C7A77A]/20
                    "
                  />

                );

              default:

                return null;

            }

          });

        })()}

      </article>

    </div>

  </div>

</section>
{/* CONTINUE READING */}

<section className="bg-[#F8F5F2] py-32">

  <div className="max-w-7xl mx-auto px-6 lg:px-12">

    <div className="flex items-end justify-between mb-16">

      <div>

        <p className="uppercase tracking-[0.3em] text-xs text-[#A08E7C] mb-4">
          Continue Reading
        </p>

        <h2
          className="
            editorial-heading
            text-[clamp(3rem,6vw,5rem)]
            text-[#2E2A26]
            leading-[0.95]
          "
        >
          More Journal
          <br />
          Articles
        </h2>

      </div>

      <Link
        to="/blog"
        className="
          hidden
          md:inline-flex
          uppercase
          tracking-[0.25em]
          text-xs
          border-b
          border-[#C7A77A]
          pb-2
          hover:text-[#C7A77A]
          transition-colors
        "
      >
        View All Articles →
      </Link>

    </div>

 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

  {relatedBlogs.map((post) => (

    <Link
      key={post.id}
      to={`/blog/${post.slug}`}
      className="
        group
        bg-white
        rounded-[28px]
        overflow-hidden
        shadow-sm
        hover:shadow-xl
        transition-all
        duration-500
      "
    >

      {post.heroImage ? (

        <img
          src={post.heroImage}
          alt={post.title}
          className="
            aspect-[4/3]
            w-full
            object-cover
            group-hover:scale-105
            transition-transform
            duration-700
          "
        />

      ) : (

        <div className="aspect-[4/3] bg-[#EFE8E2]" />

      )}

      <div className="p-8">

        <p className="uppercase tracking-[0.25em] text-xs text-[#A08E7C] mb-4">
          {post.category}
        </p>

        <h3
          className="
            editorial-heading
            text-3xl
            text-[#2E2A26]
            group-hover:text-[#C7A77A]
            transition-colors
          "
        >
          {post.title}
        </h3>

        <div className="flex justify-between mt-8 text-sm text-[#8B7E74]">

          <span>{post.publishDate}</span>

          <span>{post.readingTime} min read</span>

        </div>

      </div>

    </Link>

  ))}

</div>

  </div>

</section>

{/* CONSULTATION CTA */}

<section className="relative overflow-hidden py-40 bg-[#2E2A26]">

  <div
    className="
      absolute
      inset-0
      bg-[radial-gradient(circle_at_top_right,rgba(199,167,122,.18),transparent_45%)]
    "
  />

  <div className="relative max-w-5xl mx-auto px-6 text-center">

    <p className="uppercase tracking-[0.35em] text-xs text-[#C7A77A] mb-8">

      Ready to Build?

    </p>

    <h2
      className="
        editorial-heading
        text-white
        leading-[0.9]
        text-[clamp(3.5rem,7vw,7rem)]
      "
    >
      Let's Create Your
      <br />
      Dream Backyard
      <br />
      Studio.
    </h2>

    <p
      className="
        text-white/70
        text-xl
        leading-relaxed
        mt-10
        max-w-2xl
        mx-auto
      "
    >
      Whether you're planning a home office, creative studio,
      guest accommodation or a premium backyard retreat,
      our team can help bring your vision to life.
    </p>

    <div className="flex flex-wrap justify-center gap-6 mt-16">

      <Link
        to="/contact"
        className="
          bg-[#C7A77A]
          text-white
          px-10
          py-5
          uppercase
          tracking-[0.25em]
          text-xs
          rounded-full
          hover:bg-[#B99667]
          transition-all
        "
      >
        Book Consultation
      </Link>

      <Link
        to="/products"
        className="
          border
          border-white/20
          text-white
          px-10
          py-5
          uppercase
          tracking-[0.25em]
          text-xs
          rounded-full
          hover:border-[#C7A77A]
          hover:text-[#C7A77A]
          transition-all
        "
      >
        View Studios
      </Link>

    </div>

  </div>

</section>

      </div>
    )}
  </>
);
}