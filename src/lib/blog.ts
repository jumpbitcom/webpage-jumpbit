// Blog posts per language. Posts live in src/content/blog/<locale>/ and share their file name
// across languages, so a translated post keeps the same URL on both websites.
import { getCollection, type CollectionEntry } from "astro:content";
import { locale as currentLocale, type Locale } from "~/i18n";

export type Post = CollectionEntry<"blog"> & { readonly slug: string };

/** Posts of one language, newest first. */
export async function getPosts(
  target: Locale = currentLocale,
): Promise<Post[]> {
  const prefix = `${target}/`;
  const entries = await getCollection("blog", ({ id }) =>
    id.startsWith(prefix),
  );
  return entries
    .map((entry) => ({ ...entry, slug: entry.id.slice(prefix.length) }))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** Distinct tags of the given posts, in order of first use. */
export function getTags(posts: readonly Post[]): string[] {
  return [...new Set(posts.flatMap((post) => post.data.tags ?? []))];
}
