import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

const mdxComponents = {
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className={cn("mt-10 scroll-mt-24 text-3xl font-semibold tracking-tight", className)} {...props} />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className={cn("mt-8 scroll-mt-24 text-2xl font-semibold", className)} {...props} />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className={cn("mt-4 leading-8 text-muted", className)} {...props} />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn("mt-4 list-disc space-y-2 pl-6 text-muted", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn("mt-4 list-decimal space-y-2 pl-6 text-muted", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <blockquote
      className={cn(
        "mt-6 rounded-r-lg border-l-4 border-accent bg-accentSoft/40 px-4 py-3 italic text-text",
        className
      )}
      {...props}
    />
  )
};

export async function renderMdx(source: string): Promise<ReactNode> {
  const { content } = await compileMDX({
    source,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: "append"
            }
          ]
        ]
      }
    },
    components: mdxComponents
  });

  return content;
}
