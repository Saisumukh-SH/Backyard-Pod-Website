import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Blog() {
  const posts = [
    {
      id: 1,
      title: "10 Creative Ways to Use Your Backyard Pod",
      excerpt:
        "Discover innovative uses for your backyard space, from home offices to art studios and everything in between.",
      author: "Sarah Mitchell",
      date: "February 15, 2026",
      category: "Design Ideas",
      image: "https://images.unsplash.com/photo-1765810655582-97eae3a801bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwc3R1ZGlvJTIwcG9kfGVufDF8fHx8MTc3MjQwMDc3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 2,
      title: "The Ultimate Guide to Granny Flat Regulations",
      excerpt:
        "Navigate council approvals and regulations with our comprehensive guide to building a compliant granny flat.",
      author: "James Chen",
      date: "February 8, 2026",
      category: "Regulations",
      image: "https://images.unsplash.com/photo-1692911470070-c10cd6c89938?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFubnklMjBmbGF0JTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzcyNDAwNzc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 3,
      title: "Sustainable Materials for Modern Construction",
      excerpt:
        "Learn about eco-friendly building materials that reduce environmental impact without compromising on style.",
      author: "Emma Rodriguez",
      date: "January 28, 2026",
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1668174627325-dfbbcba56eb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBob21lfGVufDF8fHx8MTc3MjQwMDc4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 4,
      title: "Maximizing ROI: Granny Flats as Rental Properties",
      excerpt:
        "Explore the financial benefits of renting out your granny flat and tips for attracting quality tenants.",
      author: "David Park",
      date: "January 20, 2026",
      category: "Investment",
      image: "https://images.unsplash.com/photo-1705321963943-de94bb3f0dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzcyMzcxMTQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 5,
      title: "Design Trends: Minimalist Backyard Living",
      excerpt:
        "Discover the latest trends in minimalist design and how to create a serene, functional backyard space.",
      author: "Sarah Mitchell",
      date: "January 12, 2026",
      category: "Design Ideas",
      image: "https://images.unsplash.com/photo-1743348111301-12f060372493?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNreWFyZCUyMG91dGRvb3IlMjBzdHVkaW98ZW58MXx8fHwxNzcyNDAwNzgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 6,
      title: "5 Ways a Home Office Pod Improves Productivity",
      excerpt:
        "Working from home? Learn how a dedicated office pod can transform your work-life balance and efficiency.",
      author: "James Chen",
      date: "December 28, 2025",
      category: "Work From Home",
      image: "https://images.unsplash.com/photo-1692166567037-4009225486ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzI0MDA3Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const categories = [
    "All Posts",
    "Design Ideas",
    "Regulations",
    "Sustainability",
    "Investment",
    "Work From Home",
  ];

  return (
    <div className="bg-white">
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
    Design inspiration, planning guides and project insights
    for creating exceptional backyard spaces.
  </p>

</section>

{/* JOURNAL GRID */}

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

    {/* COLUMN 1 */}

    <div
      className="
        overflow-y-auto
        hide-scrollbar
        border-r
        border-[#C7A77A]/15
      "
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
          Design Ideas
        </p>
      </div>

      {posts.map((post) => (

        <article
          key={`design-${post.id}`}
          className="
            border-b
            border-[#C7A77A]/15
            group
            cursor-pointer
          "
        >

          <img
            src={post.image}
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

          <div className="p-8">

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

            <button
              className="
                uppercase
                tracking-[0.25em]
                text-xs
                border-b
                border-[#C7A77A]
                pb-2
              "
            >
              Read Article →
            </button>

          </div>

        </article>

      ))}

    </div>

    {/* COLUMN 2 */}

    <div
      className="
        overflow-y-auto
        hide-scrollbar
        border-r
        border-[#C7A77A]/15
      "
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
          Building Guides
        </p>
      </div>

      {[...posts].reverse().map((post) => (

        <article
          key={`guide-${post.id}`}
          className="
            border-b
            border-[#C7A77A]/15
            group
            cursor-pointer
          "
        >

          <img
            src={post.image}
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

          <div className="p-8">

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

            <button
              className="
                uppercase
                tracking-[0.25em]
                text-xs
                border-b
                border-[#C7A77A]
                pb-2
              "
            >
              Read Article →
            </button>

          </div>

        </article>

      ))}

    </div>

    {/* COLUMN 3 */}

    <div
      className="
        overflow-y-auto
        hide-scrollbar
      "
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
          Investment
        </p>
      </div>

      {[...posts, ...posts].map((post, index) => (

        <article
          key={`investment-${index}`}
          className="
            border-b
            border-[#C7A77A]/15
            group
            cursor-pointer
          "
        >

          <img
            src={post.image}
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

          <div className="p-8">

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

            <button
              className="
                uppercase
                tracking-[0.25em]
                text-xs
                border-b
                border-[#C7A77A]
                pb-2
              "
            >
              Read Article →
            </button>

          </div>

        </article>

      ))}

    </div>

  </div>

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

        <img
          src={post.image}
          alt={post.title}
          className="
            w-full
            h-[280px]
            object-cover
            mb-6
          "
        />

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

        <p className="text-[#8B7E74] mb-6">
          {post.excerpt}
        </p>

        <button
          className="
            uppercase
            tracking-[0.25em]
            text-xs
            border-b
            border-[#C7A77A]
            pb-2
          "
        >
          Read Article →
        </button>

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
    </div>
  );
}
