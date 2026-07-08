import { useEffect, useState } from "react";
import { getBlogs, BlogSummary } from "../../../services/blogService";
import { Link } from "react-router-dom";
import SEO from "../SEO";

export function Blog() {
  const [posts, setPosts] = useState<BlogSummary[]>([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

useEffect(() => {
  async function loadBlogs() {
    try {
      const blogs = await getBlogs();
      setPosts(blogs);
    } catch {
      setError("Unable to load articles.");
    } finally {
      setLoading(false);
    }
  }

  loadBlogs();
}, []);


  return (
  <div className="bg-white">
    <SEO
      title="Blog | Backyard Nest"
      description="Expert advice, design inspiration and building guides for backyard studios and granny flats across Melbourne."
      url="https://backyardnest.com.au/blog"
    />

    {/* Hero */}
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

    {error && (
      <section className="py-32">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="editorial-heading text-4xl text-[#2E2A26] mb-6">
            Unable to load articles
          </h2>

          <p className="text-[#8B7E74]">
            {error}
          </p>
        </div>
      </section>
    )}

    {!loading && !error && (

      <>

{/* JOURNAL GRID */}

<section className="max-w-[1700px] mx-auto px-6 lg:px-12 pb-24">

  {/* DESKTOP */}

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

    {[1, 2, 3].map((column) => (

      <div
        key={column}
        className={`
          overflow-y-auto
          hide-scrollbar
          ${column !== 3 ? "border-r border-[#C7A77A]/15" : ""}
        `}
      >

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

        {posts.map((post) => (

          <article
            key={`${column}-${post.id}`}
            className="
              border-b
              border-[#C7A77A]/15
              group
              cursor-pointer
            "
          >

            <Link to={`/blog/${post.slug}`}>

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

            </Link>

            <div className="p-8">

              <p className="uppercase tracking-[0.25em] text-xs text-[#A08E7C] mb-4">
                {post.category}
              </p>

              <h3
                className="
                  editorial-heading
                  text-3xl
                  text-[#2E2A26]
                  mb-4
                "
              >
                {post.title}
              </h3>

              <p className="text-[#8B7E74] mb-6 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between mb-8">

                <span className="text-sm text-[#8B7E74]">
                  {post.publishDate}
                </span>

                <span className="text-sm text-[#8B7E74]">
                  {post.readingTime} min read
                </span>

              </div>

              <Link
                to={`/blog/${post.slug}`}
                className="
                  uppercase
                  tracking-[0.25em]
                  text-xs
                  border-b
                  border-[#C7A77A]
                  pb-2
                  transition-all
                  hover:text-[#C7A77A]
                "
              >
                Read Article →
              </Link>

            </div>

          </article>

        ))}

      </div>

    ))}

  </div>

  {/* MOBILE */}

{/* MOBILE */}

<div className="lg:hidden space-y-12">

  {posts.map((post) => (

    <article
      key={post.id}
      className="
        border-b
        border-[#C7A77A]/15
        pb-10
      "
    >

      <Link to={`/blog/${post.slug}`}>

        {post.heroImage ? (

          <img
            src={post.heroImage}
            alt={post.title}
            className="
              w-full
              h-[280px]
              object-cover
              mb-6
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

      </Link>

      <p className="uppercase tracking-[0.25em] text-xs text-[#A08E7C] mb-4">
        {post.category}
      </p>

      <h3
        className="
          editorial-heading
          text-3xl
          text-[#2E2A26]
          mb-4
        "
      >
        {post.title}
      </h3>

      <p className="text-[#8B7E74] leading-relaxed mb-6">
        {post.excerpt}
      </p>

      <div className="flex items-center justify-between text-sm text-[#8B7E74] mb-8">

        <span>{post.publishDate}</span>

        <span>{post.readingTime} min read</span>

      </div>

      <Link
        to={`/blog/${post.slug}`}
        className="
          uppercase
          tracking-[0.25em]
          text-xs
          border-b
          border-[#C7A77A]
          pb-2
          transition-all
          hover:text-[#C7A77A]
        "
      >
        Read Article →
      </Link>

    </article>

  ))}

</div>

</section>


{/*cta*/}
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
