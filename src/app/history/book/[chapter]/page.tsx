import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';
import AdSenseBanner from '@/components/AdSenseBanner';
import { historyPhases } from '../../courseData';
import HistoryPaginatedSections from '../../components/HistoryPaginatedSections';
import { LanguageProvider } from '../../context/LanguageContext';
import { English, Hindi, BilingualQuiz, BilingualFillBlank } from '../../components/BilingualComponents';

/* eslint-disable @typescript-eslint/no-explicit-any */
const mdxComponents = {
  English: (props: any) => <English {...props} />,
  Hindi: (props: any) => <Hindi {...props} />,
  BilingualQuiz: (props: any) => <BilingualQuiz {...props} />,
  BilingualFillBlank: (props: any) => <BilingualFillBlank {...props} />,
};
/* eslint-enable @typescript-eslint/no-explicit-any */

export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), 'src/app/history/content');
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
  const filePath = path.join(process.cwd(), 'src/app/history/content', `${chapter}.mdx`);

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
    title: `${title} | Class XII History`,
    description: `Study ${title} - Theme 4 Class 12 History.`,
  };
}

export default async function HistoryChapterPage({
  params,
}: {
  params: Promise<{ chapter: string }>;
}) {
  const { chapter } = await params;
  const filePath = path.join(process.cwd(), 'src/app/history/content', `${chapter}.mdx`);

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
  const topics = historyPhases[0].topics;
  const currentIdx = topics.findIndex(t => t.path === chapter);
  const nextChapter = currentIdx !== -1 && currentIdx < topics.length - 1 ? topics[currentIdx + 1] : null;

  return (
    <LanguageProvider>
      <div className="w-full min-h-screen bg-slate-950 text-white flex flex-col justify-between font-sans selection:bg-[#c1a648]/30">
        
        {/* Navbar header */}
        <header className="h-16 border-b border-slate-850/50 bg-slate-950/80 backdrop-blur-md sticky top-0 z-40 flex items-center justify-between px-4 md:px-8 shrink-0">
          <Link 
            href="/history" 
            className="flex items-center gap-2 text-slate-400 hover:text-white font-bold text-sm transition-all"
          >
            <ArrowLeft size={16} />
            <span>Syllabus</span>
          </Link>
          <div className="flex items-center gap-2">
            <BookOpen size={16} className="text-purple-400" />
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-350">
              {data.title || 'History Textbook'}
            </span>
          </div>
        </header>

        {/* Slide body */}
        <main className="flex-1 w-full max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto px-4 py-8 space-y-6">
          
          {/* Top Ad */}
          <div className="shrink-0 mb-2">
            <AdSenseBanner />
          </div>

          <HistoryPaginatedSections 
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
          © 2026 Nextsem Academy · NCERT History Class XII Theme 4 Study Guide
        </footer>

      </div>
    </LanguageProvider>
  );
}
