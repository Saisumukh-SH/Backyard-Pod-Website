import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";

import { getBlogs, BlogSummary } from "../../../services/blogService";
import SEO from "../SEO";

export function Blog() {
  const [posts, setPosts] = useState<BlogSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ============================================================
  // LOAD BLOG POSTS
  // ============================================================

  useEffect(() => {
    async function loadBlogs() {
      try {
        const blogs = await getBlogs();

        console.log("BLOGS LOADED:", blogs);
        console.log(
          "BLOG SLUGS:",
          blogs.map((blog) => ({
            title: blog.title,
            slug: blog.slug,
          }))
        );

        setPosts(blogs);
      } catch (err) {
        console.error("BLOG LOAD ERROR:", err);
        setError("Unable to load articles.");
      } finally {
        setLoading(false);
      }
    }

    loadBlogs();
  }, []);

  // ============================================================
  // HANDLE BLOG CLICK
  // ============================================================

  const handleBlogClick = (post: BlogSummary) => {
    console.log("BLOG CARD CLICKED:", {
      id: post.id,
      title: post.title,
      slug: post.slug,
      targetUrl: `/blog/${post.slug}`,
    });

    if (!post.slug) {
      console.error("BLOG POST HAS NO SLUG:", post);
    }
  };

  return (
    <div className="bg-white">
      {/* ========================================================
          SEO
      ======================================================== */}

      <SEO
        title="Blogs | Backyard Nest"
        description="Explore the Backyard Nest blog for expert advice on backyard pods, granny flats & studios in Melbourne — design tips, permits, pricing & more."
        url="https://backyardnest.com.au/blog"
      />

      {/* ========================================================
          HERO
      ======================================================== */}

      <section className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-40 pb-24">
        <p className="uppercase tracking-[0.3em] text-[#A08E7C] text-xs mb-8">
          Journal
        </p>

        <h1
          className="
            editorial-heading
            text-[#2E2A26]
            text-[clamp(4rem,8vw,8rem)]
            leading-[0.9]
            tracking-[-0.05em]
          "
        >
          Ideas,
          <br />
          Insights &
          <br />
          Inspiration.
        </h1>

        <p className="mt-8 max-w-2xl text-[#8B7E74] text-lg leading-relaxed">
          Design inspiration, planning guides and project insights for creating
          exceptional backyard spaces.
        </p>
      </section>

      {/* ========================================================
          LOADING STATE
      ======================================================== */}

      {loading && (
        <section className="py-32">
          <div className="text-center">
            <div className="inline-block w-10 h-10 border-4 border-[#C7A77A]/30 border-t-[#C7A77A] rounded-full animate-spin mb-6" />

            <p className="uppercase tracking-[0.25em] text-sm text-[#8B7E74]">
              Loading Articles...
            </p>
          </div>
        </section>
      )}

      {/* ========================================================
          ERROR STATE
      ======================================================== */}

      {error && (
        <section className="py-32">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="editorial-heading text-4xl text-[#2E2A26] mb-6">
              Unable to load articles
            </h2>

            <p className="text-[#8B7E74]">{error}</p>
          </div>
        </section>
      )}

      {/* ========================================================
          BLOG CONTENT
      ======================================================== */}

      {!loading && !error && (
        <>
          {/* ====================================================
              JOURNAL GRID
          ==================================================== */}

          <section className="max-w-[1700px] mx-auto px-6 lg:px-12 pb-24">
            {/* ==================================================
                DESKTOP BLOG GRID
            ================================================== */}

            <div
              className="
                hidden
                lg:grid
                lg:grid-cols-3
                border
                border-[#C7A77A]/15
                h-[900px]
              "
            >
              {[0, 1, 2].map((column) => {
                /*
                 * Split the posts across the three columns.
                 * This prevents every post from appearing 3 times.
                 */
                const columnPosts = posts.filter(
                  (_, index) => index % 3 === column
                );

                return (
                  <div
                    key={column}
                    className={`
                      overflow-y-auto
                      hide-scrollbar
                      ${
                        column !== 2
                          ? "border-r border-[#C7A77A]/15"
                          : ""
                      }
                    `}
                  >
                    {/* Column heading */}

                    <div
                      className="
                        sticky
                        top-0
                        z-10
                        bg-[#F5F0EB]
                        p-8
                        border-b
                        border-[#C7A77A]/15
                      "
                    >
                      <p className="uppercase tracking-[0.25em] text-xs text-[#A08E7C]">
                        Latest Articles
                      </p>
                    </div>

                    {/* ==================================================
                        BLOG POSTS
                    ================================================== */}

                    {columnPosts.map((post) => {
                      const targetUrl = post.slug
                        ? `/blog/${post.slug}`
                        : "/blog";

                      console.log("BLOG POST RENDERED:", {
                        title: post.title,
                        slug: post.slug,
                        targetUrl,
                      });

                      return (
                        <Link
                          key={post.id}
                          to={targetUrl}
                          onClick={() => handleBlogClick(post)}
                          className="
                            block
                            border-b
                            border-[#C7A77A]/15
                            group
                            cursor-pointer
                            no-underline
                          "
                        >
                          {/* ==================================================
                              BLOG IMAGE
                          ================================================== */}

                          {post.heroImage ? (
                            <img
                              src={post.heroImage}
                              alt={post.title}
                              className="
                                w-full
                                h-[260px]
                                object-cover
                                transition-transform
                                duration-700
                                group-hover:scale-105
                              "
                            />
                          ) : (
                            <div
                              className="
                                w-full
                                h-[260px]
                                bg-[#F5F0EB]
                                flex
                                items-center
                                justify-center
                              "
                            >
                              <span className="uppercase tracking-[0.25em] text-xs text-[#A08E7C]">
                                Backyard Nest
                              </span>
                            </div>
                          )}

                          {/* ==================================================
                              BLOG CONTENT
                          ================================================== */}

                          <div className="p-8">
                            {/* Category */}

                            <p className="uppercase tracking-[0.25em] text-xs text-[#A08E7C] mb-4">
                              {post.category}
                            </p>

                            {/* Blog title */}

                            <h3
                              className="
                                editorial-heading
                                text-3xl
                                text-[#2E2A26]
                                mb-4
                                group-hover:text-[#C7A77A]
                                transition-colors
                              "
                            >
                              {post.title}
                            </h3>

                            {/* Excerpt */}

                            <p className="text-[#8B7E74] mb-6 leading-relaxed">
                              {post.excerpt}
                            </p>

                            {/* Date + reading time */}

                            <div className="flex items-center justify-between mb-8">
                              <span className="text-sm text-[#8B7E74]">
                                {post.publishDate}
                              </span>

                              <span className="text-sm text-[#8B7E74]">
                                {post.readingTime} min read
                              </span>
                            </div>

                            {/* Read Article CTA */}

                            <span
                              className="
                                inline-block
                                uppercase
                                tracking-[0.25em]
                                text-xs
                                border-b
                                border-[#C7A77A]
                                pb-2
                                transition-all
                                group-hover:text-[#C7A77A]
                              "
                            >
                              Read Article →
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                );
              })}
            </div>

            {/* ==================================================
                MOBILE BLOG LIST
            ================================================== */}

            <div className="lg:hidden space-y-12">
              {posts.map((post) => {
                const targetUrl = post.slug
                  ? `/blog/${post.slug}`
                  : "/blog";

                console.log("MOBILE BLOG POST RENDERED:", {
                  title: post.title,
                  slug: post.slug,
                  targetUrl,
                });

                return (
                  <Link
                    key={post.id}
                    to={targetUrl}
                    onClick={() => handleBlogClick(post)}
                    className="
                      block
                      border-b
                      border-[#C7A77A]/15
                      pb-10
                      group
                      cursor-pointer
                      no-underline
                    "
                  >
                    {/* Blog image */}

                    {post.heroImage ? (
                      <img
                        src={post.heroImage}
                        alt={post.title}
                        className="
                          w-full
                          h-[280px]
                          object-cover
                          mb-6
                          transition-transform
                          duration-700
                          group-hover:scale-[1.02]
                        "
                      />
                    ) : (
                      <div
                        className="
                          w-full
                          h-[280px]
                          bg-[#F5F0EB]
                          flex
                          items-center
                          justify-center
                          mb-6
                        "
                      >
                        <span className="uppercase tracking-[0.25em] text-xs text-[#A08E7C]">
                          Backyard Nest
                        </span>
                      </div>
                    )}

                    {/* Blog category */}

                    <p className="uppercase tracking-[0.25em] text-xs text-[#A08E7C] mb-4">
                      {post.category}
                    </p>

                    {/* Blog title */}

                    <h3
                      className="
                        editorial-heading
                        text-3xl
                        text-[#2E2A26]
                        mb-4
                        group-hover:text-[#C7A77A]
                        transition-colors
                      "
                    >
                      {post.title}
                    </h3>

                    {/* Blog excerpt */}

                    <p className="text-[#8B7E74] leading-relaxed mb-6">
                      {post.excerpt}
                    </p>

                    {/* Date + reading time */}

                    <div className="flex items-center justify-between text-sm text-[#8B7E74] mb-8">
                      <span>{post.publishDate}</span>
                      <span>{post.readingTime} min read</span>
                    </div>

                    {/* Read Article CTA */}

                    <span
                      className="
                        inline-block
                        uppercase
                        tracking-[0.25em]
                        text-xs
                        border-b
                        border-[#C7A77A]
                        pb-2
                        transition-all
                        group-hover:text-[#C7A77A]
                      "
                    >
                      Read Article →
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* ======================================================
              BLOG CTA
          ====================================================== */}

          <section className="py-32 border-t border-[#C7A77A]/15">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <div className="w-20 h-px bg-[#C7A77A] mx-auto mb-12" />

              <h2
                className="
                  editorial-heading
                  text-[#2E2A26]
                  text-[clamp(3rem,8vw,6rem)]
                  leading-[0.92]
                "
              >
                Stay Inspired
              </h2>

              <p
                className="
                  mt-8
                  text-[#8B7E74]
                  text-lg
                  max-w-2xl
                  mx-auto
                "
              >
                Receive design inspiration, project stories and practical
                insights delivered directly to your inbox.
              </p>
            </div>
          </section>
        </>
      )}
    </div>
  );
}