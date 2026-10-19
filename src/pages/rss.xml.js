import { siteConfig } from "~/settings";
import rss from "@astrojs/rss";
import { getPosts } from "~/lib/blog";
import { LOCALES, locale, t } from "~/i18n";

export async function GET(context) {
  const posts = await getPosts();
  return rss({
    // Use custom XSL stylesheet for browsers
    stylesheet: "/rss/style.xsl",
    // General site info
    title: siteConfig.title,
    description: t.meta.description,
    site: context.site,
    customData: `<language>${LOCALES[locale].htmlLang}</language>`,
    // Blog entries
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.slug}/`,
    })),
  });
}
