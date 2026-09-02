import { redirect } from "next/navigation";
import { nodeLessons } from "@/data/nodeLessonsData";

export async function generateStaticParams() {
  return nodeLessons.map((lesson) => ({
    slug: lesson.slug,
  }));
}

export default async function NodeSlugRedirectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  redirect(`/nodejs/${slug}`);
}
