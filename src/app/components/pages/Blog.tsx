import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router";

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
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl text-gray-900 mb-6">
            Blog & Resources
          </h1>
          <p className="text-xl text-gray-600">
            Expert insights, design inspiration, and practical guides for backyard living
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 transition-colors ${
                  category === "All Posts"
                    ? "bg-gray-900 text-white"
                    : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-[500px] bg-gray-100">
              <img
                src={posts[0].image}
                alt={posts[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="inline-block px-3 py-1 bg-gray-900 text-white text-sm mb-4">
                Featured
              </div>
              <h2 className="text-4xl text-gray-900 mb-4">{posts[0].title}</h2>
              <p className="text-lg text-gray-600 mb-6">{posts[0].excerpt}</p>
              <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>{posts[0].author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{posts[0].date}</span>
                </div>
              </div>
              <button className="inline-flex items-center text-gray-900 hover:underline">
                Read More
                <ArrowRight className="ml-2" size={16} />
              </button>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post) => (
              <article key={post.id} className="bg-white group cursor-pointer">
                <div className="relative h-64 bg-gray-100 overflow-hidden mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs mb-3">
                  {post.category}
                </div>
                <h3 className="text-2xl text-gray-900 mb-3 group-hover:underline">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <User size={14} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to our newsletter for the latest insights, tips, and inspiration
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white text-gray-900 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-white text-gray-900 hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
