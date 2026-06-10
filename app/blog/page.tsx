import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Auto Transport Blog — Car Shipping Tips & Guides | Royal Auto Ship",
  description:
    "Car shipping guides, pricing breakdowns, snowbird routes and auto transport tips from the Royal Auto Ship team. Real advice from real experts.",
  alternates: { canonical: "/blog" },
};

const categories = Array.from(new Set(blogPosts.map((p) => p.category)));

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="text-sm uppercase tracking-[0.3em] text-gold">Resources</p>
      <h1 className="mt-4 font-display text-4xl font-light sm:text-5xl">
        Auto Transport Blog
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
        In-depth guides on car shipping costs, transit times, route planning, and how to
        get the best deal on auto transport.
      </p>

      {/* Category pills */}
      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <span
            key={cat}
            className="rounded-full border border-line px-4 py-1.5 text-sm text-muted"
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Featured post */}
      <Link
        href={`/blog/${featured.slug}`}
        className="group mt-10 flex flex-col overflow-hidden rounded-3xl border border-line transition hover:border-gold/50 sm:flex-row"
      >
        <div className="grain flex min-h-52 flex-1 items-end bg-ink p-8 sm:min-h-auto sm:p-10">
          <div>
            <span className="rounded-full bg-gold/20 px-3 py-1 text-xs font-medium text-gold">
              {featured.category}
            </span>
            <h2 className="mt-3 font-display text-2xl font-light leading-snug text-paper group-hover:text-gold-bright sm:text-3xl">
              {featured.title}
            </h2>
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-between p-8 sm:p-10">
          <p className="leading-relaxed text-muted">{featured.excerpt}</p>
          <div className="mt-6 flex items-center justify-between text-sm">
            <div className="text-muted">
              <time dateTime={featured.date}>
                {new Date(featured.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </time>
              {" · "}
              {featured.readMinutes} min read
            </div>
            <span className="font-medium text-gold group-hover:underline">
              Read guide →
            </span>
          </div>
        </div>
      </Link>

      {/* Post grid */}
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col rounded-3xl border border-line p-7 transition hover:border-gold/50 hover:shadow-sm"
          >
            <span className="text-xs font-medium text-gold">{post.category}</span>
            <h2 className="mt-3 font-display text-lg font-light leading-snug text-ink group-hover:text-gold">
              {post.title}
            </h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted line-clamp-3">
              {post.excerpt}
            </p>
            <div className="mt-5 flex items-center justify-between text-xs text-muted">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
              <span>{post.readMinutes} min</span>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 rounded-3xl border border-gold/30 bg-gold/10 p-8">
        <h2 className="font-display text-xl font-light">
          Have a question about shipping your car?
        </h2>
        <div className="mt-5 flex flex-wrap gap-4">
          <Link
            href="/quote"
            className="rounded-full bg-gold px-7 py-3 font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-gold-bright"
          >
            Get a free quote
          </Link>
          <a
            href={site.phoneHref}
            className="rounded-full border border-line px-7 py-3 font-medium text-ink hover:border-gold"
          >
            {site.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
