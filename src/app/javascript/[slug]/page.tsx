import { redirect } from "next/navigation";
import { jsLessons } from "@/data/jsLessonsData";

export async function generateStaticParams() {
  return jsLessons.map((lesson) => ({
    slug: lesson.slug,
  }));
}

export default async function JavascriptSlugRedirectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  redirect(`/js/${slug}`);
}
