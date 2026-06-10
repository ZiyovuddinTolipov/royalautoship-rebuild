import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, blogBySlug, type ContentBlock } from "@/lib/blog-data";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogBySlug[slug];
  if (!post) return {};
  return {
    title: `${post.title} | Royal Auto Ship`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="mt-10 font-display text-2xl font-light text-ink sm:text-3xl">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="mt-7 font-display text-xl font-light text-ink">
          {block.text}
        </h3>
      );
    case "p":
      return (
        <p className="mt-4 leading-relaxed text-muted">
          {block.text}
        </p>
      );
    case "ul":
      return (
        <ul className="mt-4 space-y-2">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-muted">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="mt-4 space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-4 text-muted">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold text-sm font-semibold text-ink">
                {i + 1}
              </span>
              <span className="pt-0.5">{item}</span>
            </li>
          ))}
        </ol>
      );
    case "table":
      return (
        <div className="mt-5 overflow-x-auto rounded-2xl border border-line">
          <table className="w-full text-sm">
            <thead className="bg-paper-2/80">
              <tr>
                {block.headers.map((h) => (
                  <th key={h} className="px-5 py-3 text-left font-semibold text-ink">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {block.rows.map((row, i) => (
                <tr key={i} className="hover:bg-paper-2/40">
                  {row.map((cell, j) => (
                    <td key={j} className={`px-5 py-3 ${j === 0 ? "font-medium text-ink" : "text-muted"}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "callout":
      return (
        <div className="mt-6 rounded-2xl border border-gold/30 bg-gold/10 px-6 py-4">
          <p className="text-sm leading-relaxed text-ink">{block.text}</p>
        </div>
      );
    default:
      return null;
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogBySlug[slug];
  if (!post) notFound();

  const related = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          author: {
            "@type": "Organization",
            name: site.name,
            url: site.url,
          },
          publisher: {
            "@type": "Organization",
            name: site.name,
            url: site.url,
          },
          mainEntityOfPage: `${site.url}/blog/${post.slug}`,
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: site.url },
            { "@type": "ListItem", position: 2, name: "Blog", item: `${site.url}/blog` },
            { "@type": "ListItem", position: 3, name: post.title, item: `${site.url}/blog/${post.slug}` },
          ],
        }}
      />

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-xs text-muted">
            <li><Link href="/" className="hover:text-gold">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/blog" className="hover:text-gold">Blog</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-ink">{post.title}</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-10 border-b border-line pb-10">
          <div className="flex items-center gap-3 text-xs text-muted">
            <span className="rounded-full bg-gold/15 px-3 py-1 font-medium text-gold">
              {post.category}
            </span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span>·</span>
            <span>{post.readMinutes} min read</span>
          </div>
          <h1 className="mt-4 font-display text-3xl font-light leading-tight text-ink sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">{post.excerpt}</p>
        </div>

        {/* Content */}
        <article>
          {post.content.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </article>

        {/* CTA */}
        <div className="mt-14 rounded-3xl border border-gold/30 bg-gold/10 p-8">
          <h2 className="font-display text-2xl font-light">
            Ready to ship your car?
          </h2>
          <p className="mt-2 text-muted">
            Get a free, all-inclusive quote in under 2 minutes.
          </p>
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

        {/* Related posts */}
        {related.length > 0 && (
          <section className="mt-14">
            <h2 className="font-display text-xl text-ink">More {post.category} guides</h2>
            <div className="mt-5 space-y-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group flex items-start justify-between gap-4 rounded-2xl border border-line p-5 transition hover:border-gold/50"
                >
                  <div>
                    <p className="font-display text-base font-light text-ink group-hover:text-gold">
                      {r.title}
                    </p>
                    <p className="mt-1 text-sm text-muted">{r.readMinutes} min read</p>
                  </div>
                  <svg className="mt-1 h-5 w-5 shrink-0 text-muted group-hover:text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
