import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import BookPagination from '@/components/BookPagination';
import MarkCompleteButton from '@/components/MarkCompleteButton';
import { notFound } from 'next/navigation';
import InteractivePre from '@/components/InteractivePre';

const mdxComponents = {
  pre: (props: any) => <InteractivePre {...props} />
};

export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), 'src/content');
  const files = fs.existsSync(contentDir) ? fs.readdirSync(contentDir) : [];
  return files.map((filename) => ({
    chapter: filename.replace('.mdx', ''),
  }));
}

export default async function ChapterPage({ params }: { params: Promise<{ chapter: string }> }) {
  const { chapter } = await params;
  const filePath = path.join(process.cwd(), 'src/content', `${chapter}.mdx`);

  if (!fs.existsSync(filePath)) {
    // Return a beautiful placeholder if the chapter isn't written yet
    return (
      <article className="prose prose-slate dark:prose-invert max-w-none">
        <h1>Chapter Not Found</h1>
        <p>
          The chapter <strong>{chapter}</strong> is currently being written by the instructor. 
          Please check back later!
        </p>
        <BookPagination />
      </article>
    );
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { content } = matter(fileContent);

  return (
    <div className="animate-in fade-in duration-500">
      <article className="prose prose-slate dark:prose-invert prose-blue max-w-none">
        {/* We use next-mdx-remote's RSC implementation to render the markdown securely */}
        <MDXRemote source={content} components={mdxComponents} />
      </article>

      <MarkCompleteButton chapterId={chapter} />
      
      <BookPagination />
    </div>
  );
}
