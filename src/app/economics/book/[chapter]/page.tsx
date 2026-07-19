import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';
import AdSenseBanner from '@/components/AdSenseBanner';
import { economicsPhases } from '../../courseData';
import EconomicsPaginatedSections from '../../components/EconomicsPaginatedSections';

// Simple custom component bindings for Economics MDX
const mdxComponents = {};

export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), 'src/app/economics/content');
  const files = fs.existsSync(contentDir) ? fs.readdirSync(contentDir) : [];
  return files.map((filename) => ({
    chapter: filename.replace('.mdx', ''),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ chapter: string }>;
}) {
  const { chapter } = await params;
  const filePath = path.join(process.cwd(), 'src/app/economics/content', `${chapter}.mdx`);

  if (!fs.existsSync(filePath)) {
    return {
      title: "Chapter Not Found",
      description: "This chapter is currently being written.",
    };
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(fileContent);
  const title = data.title || chapter;
  
  return {
    title: `${title} | Economics Class XI`,
    description: `Study ${title} - Statistics for Economics Class 11.`,
  };
}

export default async function EconomicsChapterPage({
  params,
}: {
  params: Promise<{ chapter: string }>;
}) {
  const { chapter } = await params;
  const filePath = path.join(process.cwd(), 'src/app/economics/content', `${chapter}.mdx`);

  if (!fs.existsSync(filePath)) {
    return notFound();
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(fileContent);

  // Split by horizontal rules to get pages
  const slidesMdx = content.split(/\n---\r?\n/).map(s => s.trim()).filter(Boolean);
  const renderedSlides = slidesMdx.map((slideContent, idx) => (
    <MDXRemote key={idx} source={slideContent} components={mdxComponents} />
  ));

  // Find next chapter details
  const topics = economicsPhases[0].topics;
  const currentIdx = topics.findIndex(t => t.path === chapter);
  const nextChapter = currentIdx !== -1 && currentIdx < topics.length - 1 ? topics[currentIdx + 1] : null;

  return (
    <div className="w-full min-h-screen bg-slate-950 text-white flex flex-col justify-between font-sans selection:bg-[#c1a648]/30">
      
      {/* Navbar header */}
      <header className="h-16 border-b border-slate-850/50 bg-slate-950/80 backdrop-blur-md sticky top-0 z-40 flex items-center justify-between px-4 md:px-8 shrink-0">
        <Link 
          href="/economics" 
          className="flex items-center gap-2 text-slate-400 hover:text-white font-bold text-sm transition-all"
        >
          <ArrowLeft size={16} />
          <span>Syllabus</span>
        </Link>
        <div className="flex items-center gap-2">
          <BookOpen size={16} className="text-blue-500" />
          <span className="text-[10px] font-black uppercase tracking-wider text-slate-300">
            {data.title || 'Economics Textbook'}
          </span>
        </div>
      </header>

      {/* Slide body */}
      <main className="flex-1 w-full max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto px-4 py-8 space-y-6">
        
        {/* Top Ad */}
        <div className="shrink-0 mb-2">
          <AdSenseBanner />
        </div>

        <EconomicsPaginatedSections 
          slides={renderedSlides}
          chapterId={chapter}
          nextChapterPath={nextChapter?.path}
          nextChapterTitle={nextChapter?.label}
        />

        {/* Bottom Ad */}
        <div className="shrink-0 mt-2">
          <AdSenseBanner />
        </div>

      </main>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-[10px] text-slate-700 border-t border-white/5 select-none shrink-0 mt-8">
        © 2026 Nextsem Academy · NCERT Statistics for Economics Class XI Study Module
      </footer>

    </div>
  );
}
