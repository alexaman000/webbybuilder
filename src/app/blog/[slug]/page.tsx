import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

// Static data for our articles
const articles: Record<string, { title: string; date: string; content: React.ReactNode }> = {
  "high-converting-landing-page": {
    title: "How to Build a High-Converting Landing Page",
    date: "Aug 12, 2026",
    content: (
      <>
        <p className="mb-4">
          A landing page is more than just a digital flyer; it&apos;s a dedicated machine designed to do one thing: convert. Whether you are generating leads, selling an eBook, or getting webinar signups, your landing page is the frontline of your digital marketing strategy.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">1. Clear and Compelling Value Proposition</h2>
        <p className="mb-4">
          Your headline needs to be the very first thing that captures the prospect&apos;s attention. Above the fold, your visitors must instantly understand what you are offering and why they need it. Keep it punchy, benefit-driven, and completely aligned with the ad they just clicked.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">2. Zero Distractions</h2>
        <p className="mb-4">
          The number one mistake business owners make is leaving their global navigation menu on a landing page. Cut the clutter! Remove the header links, footer links, and anything that isn&apos;t directly driving the user toward your main Call-To-Action (CTA).
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">3. A Dominant Contact Form</h2>
        <p className="mb-4">
          You want leads. So, put your lead capture form right where it belongs: above the fold or in a highly visible position next to your core offer. Don&apos;t ask for too much info &mdash; name and email (and maybe phone number) are often all you need.
        </p>
        <p className="mt-8 font-semibold text-primary">Need a high-converting landing page built for your business? Click the WhatsApp button on the bottom right and let&apos;s talk!</p>
      </>
    ),
  },
  "custom-website-for-small-business": {
    title: "Why Your Small Business Needs a Custom Website",
    date: "Sep 05, 2026",
    content: (
      <>
        <p className="mb-4">
          In 2026, relying purely on a Facebook page or a generic, low-cost template builder is costing you premium clients. Your website isn&apos;t just an informative brochure &mdash; it&apos;s a direct reflection of your credibility and the primary vessel handling your online reputation.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">1. Premium Perception Drives Premium Pricing</h2>
        <p className="mb-4">
          When visitors drop into a beautifully executed, customized website with glassmorphic cards, smooth animations, and zero clutter, they immediately assume your services and products are top-tier. A cheap template screams "budget business", restricting your ability to charge higher rates.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">2. Technical & SEO Dominance</h2>
        <p className="mb-4">
          Custom code (like the Next.js stack we use) allows incredibly fast loading speeds that simple templates can rarely match. Because website speed is a critical ranking factor on Google, a fast, custom-coded site gets you higher positions locally and organically.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">3. Tailored Functionality</h2>
        <p className="mb-4">
          Your business is unique. You might need a specialized booking system connected perfectly to your availability or a highly dynamic e-commerce system seamlessly processing your inventory. A custom site builds precisely what your specific process requires, automating the boring stuff so you can focus on making money.
        </p>
      </>
    ),
  }
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const article = articles[resolvedParams.slug];

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">Article not found</h1>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <div className="container mx-auto px-6 py-32 max-w-3xl">
        <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-secondary mb-8 transition-colors font-medium">
          <ArrowLeft size={20} /> Back to Portfolio
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{article.title}</h1>
        <p className="text-foreground/50 font-medium mb-12">{article.date} · Written by WebbyBuilder</p>
        
        <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/80 leading-relaxed font-outfit">
          {article.content}
        </div>
      </div>
    </div>
  );
}
