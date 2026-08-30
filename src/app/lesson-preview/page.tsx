import TestLessonTemplate from "@/components/TestLessonTemplate";

export const metadata = {
  title: "Lesson Template Preview — nextsem.online",
  robots: {
    index: false,
    follow: false,
  },
  description: "Live interactive preview of the nextsem.online Universal Lesson Template architecture.",
};

export default function LessonPreviewPage() {
  return <TestLessonTemplate />;
}
