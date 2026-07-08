export interface BlogSummary {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  author: string;
  publishDate: string;
  featured: boolean;
  seoTitle: string;
  metaDescription: string;
  readingTime: number;
  heroImage: string | null;
  ogImage: string | null;
}

export interface BlogContent extends BlogSummary {
  content: {
    type: string;
    text?: string;
    url?: string;
    caption?: string;
    checked?: boolean;
    language?: string;
    icon?: string | null;
  }[];
}

const API = "/.netlify/functions";

export async function getBlogs(): Promise<BlogSummary[]> {
  const response = await fetch(`${API}/blogs`);

  if (!response.ok) {
    throw new Error("Failed to fetch blogs");
  }

  return response.json();
}

export async function getBlog(slug: string): Promise<BlogContent> {
  const response = await fetch(`${API}/blog?slug=${slug}`);

  if (!response.ok) {
    throw new Error("Failed to fetch blog");
  }

  return response.json();
}

export async function getRelatedBlogs(
  currentSlug: string,
  limit = 3
): Promise<BlogSummary[]> {
  const blogs = await getBlogs();

  return blogs
    .filter((blog) => blog.slug !== currentSlug)
    .slice(0, limit);
}