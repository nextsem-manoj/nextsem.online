import { cliLessons } from "@/data/cliLessonsData";
import CliLessonClient from "@/components/CliLessonClient";

export const metadata: Metadata = {
  title: "Windows Command Line Free Lessons & Interactive CLI Tutorial | NextSem",
  description: "Learn Windows Command Prompt (CMD) step-by-step with interactive exercises, terminal animations, and developer certification tracks.",
  alternates: {
    canonical: "/cli"
  },
  openGraph: {
    title: "Windows Command Line Free Lessons & Interactive CLI Tutorial | NextSem",
    description: "Learn Windows Command Prompt (CMD) step-by-step with interactive exercises, terminal animations, and developer certification tracks.",
    url: "https://nextsem.online/cli",
    type: "website"
  }
};

export default function CliRootPage() {
  const lessonOne = cliLessons[0];
  return <CliLessonClient lesson={lessonOne} />;
}
