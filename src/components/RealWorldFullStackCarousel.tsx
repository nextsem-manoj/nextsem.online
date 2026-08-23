"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  Tv,
  MessageSquare,
  MapPin,
  CreditCard,
  Bot,
  ArrowRight,
  Code2,
  Terminal,
  Layers,
  ExternalLink
} from 'lucide-react';

interface ProjectSlide {
  id: string;
  category: string;
  title: string;
  icon: React.ReactNode;
  brandColor: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  usedBy: string[];
  description: string;
  techStack: string[];
  codeSnippet: {
    fileName: string;
    language: string;
    code: string[];
  };
  ctaText: string;
  ctaHref: string;
}

export default function RealWorldFullStackCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const projects: ProjectSlide[] = [
    {
      id: "ecommerce",
      category: "E-Commerce & Digital Storefronts",
      title: "Full-Stack Shopping Cart & Checkout System",
      icon: <ShoppingCart className="w-5 h-5 text-amber-400" />,
      brandColor: "#f59e0b",
      badgeBg: "bg-amber-500/10",
      badgeText: "text-amber-400",
      badgeBorder: "border-amber-500/30",
      usedBy: ["Amazon", "Flipkart", "Shopify Stores"],
      description: "How online shopping web apps manage real-time inventory stock, shopping carts, session persistence, and instant checkout payments.",
      techStack: ["React.js", "Node.js", "Express API", "MongoDB", "Stripe SDK"],
      codeSnippet: {
        fileName: "cartController.js",
        language: "JavaScript",
        code: [
          "// Add item to cart & update session DB",
          "const cart = await Cart.findOneAndUpdate(",
          "  { userId: req.user.id },",
          "  { $push: { items: { productId, quantity } } },",
          "  { new: true, upsert: true }",
          ");",
          "res.json({ success: true, cartTotal: cart.total });"
        ]
      },
      ctaText: "Learn HTML & Web Basics »",
      ctaHref: "/html"
    },
    {
      id: "streaming",
      category: "Video Streaming & Content Delivery",
      title: "High-Speed Video Player & Streaming Pipelines",
      icon: <Tv className="w-5 h-5 text-[#e50914]" />,
      brandColor: "#e50914",
      badgeBg: "bg-red-500/10",
      badgeText: "text-red-400",
      badgeBorder: "border-red-500/30",
      usedBy: ["Netflix", "YouTube", "Hotstar"],
      description: "How streaming platforms serve HLS video chunks, maintain watch history, dynamic video quality switching, and CDN video caching.",
      techStack: ["React Video Player", "Node.js Streams", "Redis Cache", "AWS S3 / CDN"],
      codeSnippet: {
        fileName: "videoStream.js",
        language: "JavaScript",
        code: [
          "// Stream HLS video buffer to browser",
          "const range = req.headers.range;",
          "const stream = fs.createReadStream(videoPath, { start, end });",
          "res.writeHead(206, {",
          "  'Content-Range': `bytes ${start}-${end}/${fileSize}`,",
          "  'Content-Type': 'video/mp4'",
          "});",
          "stream.pipe(res);"
        ]
      },
      ctaText: "Learn Terminal & CLI »",
      ctaHref: "/cli"
    },
    {
      id: "realtime",
      category: "Real-Time WebSockets & Chat Architecture",
      title: "Instant Group Messaging & Live Sync Server",
      icon: <MessageSquare className="w-5 h-5 text-sky-400" />,
      brandColor: "#38bdf8",
      badgeBg: "bg-sky-500/10",
      badgeText: "text-sky-400",
      badgeBorder: "border-sky-500/30",
      usedBy: ["WhatsApp Web", "Discord", "Slack"],
      description: "How web chat platforms broadcast live messages, typing indicators, and online status badges across thousands of users without page refreshes.",
      techStack: ["WebSockets", "Socket.io Server", "React Hooks", "Node.js"],
      codeSnippet: {
        fileName: "socketServer.js",
        language: "JavaScript",
        code: [
          "// Broadcast real-time message to room",
          "io.on('connection', (socket) => {",
          "  socket.on('send_message', (data) => {",
          "    socket.to(data.roomId).emit('receive_message', {",
          "      sender: data.sender, text: data.text, time: Date.now()",
          "    });",
          "  });",
          "});"
        ]
      },
      ctaText: "Learn Git & GitHub »",
      ctaHref: "/git"
    },
    {
      id: "ondemand",
      category: "Geolocation & On-Demand Order Tracking",
      title: "Live GPS Map Tracking & Order Status Pipelines",
      icon: <MapPin className="w-5 h-5 text-emerald-400" />,
      brandColor: "#10b981",
      badgeBg: "bg-emerald-500/10",
      badgeText: "text-emerald-400",
      badgeBorder: "border-emerald-500/30",
      usedBy: ["Uber Web", "Zomato", "Swiggy"],
      description: "How food delivery and ride hailing apps track live GPS coordinates on interactive maps and calculate driver ETA in real time.",
      techStack: ["Google Maps API", "Geolocation API", "Node.js Backend", "WebSockets"],
      codeSnippet: {
        fileName: "gpsTracker.js",
        language: "JavaScript",
        code: [
          "// Watch driver GPS coordinates",
          "navigator.geolocation.watchPosition((pos) => {",
          "  const { latitude, longitude } = pos.coords;",
          "  socket.emit('driver_location_update', { lat: latitude, lng: longitude });",
          "  updateDriverMarkerOnMap(latitude, longitude);",
          "});"
        ]
      },
      ctaText: "Explore Full Roadmap »",
      ctaHref: "/full-stack-web-development-roadmap"
    },
    {
      id: "ai",
      category: "AI SaaS Applications & Streaming Prompt APIs",
      title: "AI Prompt Generator & Server-Sent Response Stream",
      icon: <Bot className="w-5 h-5 text-purple-400" />,
      brandColor: "#c084fc",
      badgeBg: "bg-purple-500/10",
      badgeText: "text-purple-400",
      badgeBorder: "border-purple-500/30",
      usedBy: ["ChatGPT Web", "Claude AI", "Midjourney Web"],
      description: "How generative AI web platforms stream real-time text responses chunk by chunk and manage subscription billing portals.",
      techStack: ["Next.js App Router", "Server-Sent Events", "OpenAI SDK", "Tailwind CSS"],
      codeSnippet: {
        fileName: "api/chat/route.ts",
        language: "TypeScript",
        code: [
          "// Stream AI response chunks",
          "export async function POST(req: Request) {",
          "  const { prompt } = await req.json();",
          "  const responseStream = await openai.chat.completions.create({",
          "    model: 'gpt-4o', messages: [{ role: 'user', content: prompt }], stream: true",
          "  });",
          "  return new Response(responseStream);",
          "}"
        ]
      },
      ctaText: "Start Learning Full Stack »",
      ctaHref: "/cli"
    }
  ];

  // Auto slide interval
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, projects.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <section className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 text-left shadow-2xl space-y-6">
      
      {/* Real Developer Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Code2 size={16} className="text-sky-400" />
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Real-World Project Architectures
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white">
            What You Can Build As A Full-Stack Engineer
          </h2>
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="flex items-center gap-2 self-end sm:self-auto">
          <button
            onClick={handlePrev}
            aria-label="Previous Project"
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 transition-all cursor-pointer"
          >
            <ChevronLeft size={18} />
          </button>
          <span className="text-xs font-mono font-bold text-slate-400 px-2">
            {currentIndex + 1} / {projects.length}
          </span>
          <button
            onClick={handleNext}
            aria-label="Next Project"
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 transition-all cursor-pointer"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Main Project Card Container */}
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 sm:p-7 shadow-xl transition-all duration-300 relative overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left Column: Project Overview */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className={`px-2.5 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-wider border ${currentProject.badgeBg} ${currentProject.badgeText} ${currentProject.badgeBorder}`}>
                {currentProject.category}
              </span>
            </div>

            <div className="space-y-1.5">
              <h3 className="text-lg sm:text-2xl font-extrabold text-white flex items-center gap-2">
                {currentProject.icon}
                <span>{currentProject.title}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {currentProject.description}
              </p>
            </div>

            {/* Real Tech Stack Pills */}
            <div className="space-y-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Tech Stack Used:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {currentProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono font-bold text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Examples Companies */}
            <div className="flex items-center gap-2 pt-1 text-xs text-slate-400">
              <span className="font-bold text-slate-500">Applications:</span>
              <div className="flex flex-wrap gap-1.5">
                {currentProject.usedBy.map((app) => (
                  <span key={app} className="text-slate-300 font-semibold bg-slate-950 px-2 py-0.5 rounded border border-slate-800 text-[11px]">
                    {app}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <Link
                href={currentProject.ctaHref}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-200 text-slate-950 text-xs font-extrabold transition-all shadow-md cursor-pointer"
              >
                <span>{currentProject.ctaText}</span>
                <ArrowRight size={14} className="stroke-[2.5]" />
              </Link>
            </div>
          </div>

          {/* Right Column: Realistic IDE Code Snippet Window */}
          <div className="lg:col-span-6">
            <div className="bg-[#0f141d] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl text-left font-mono">
              {/* Window Title Bar */}
              <div className="bg-[#171e2b] px-4 py-2.5 border-b border-slate-800 flex items-center justify-between select-none">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                  <span className="text-xs font-bold text-slate-300 ml-2">{currentProject.codeSnippet.fileName}</span>
                </div>
                <span className="text-[10px] font-bold text-slate-500 uppercase">{currentProject.codeSnippet.language}</span>
              </div>

              {/* Code Lines */}
              <pre className="p-4 text-[11px] sm:text-xs text-slate-200 leading-relaxed overflow-x-auto">
                <code>
                  {currentProject.codeSnippet.code.map((line, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="text-slate-600 text-[10px] select-none w-4 text-right shrink-0">{idx + 1}</span>
                      <span className={line.startsWith("//") ? "text-slate-500 italic font-normal" : "text-sky-300 font-semibold"}>
                        {line}
                      </span>
                    </div>
                  ))}
                </code>
              </pre>
            </div>
          </div>

        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center justify-center gap-2 pt-1">
        {projects.map((proj, idx) => (
          <button
            key={proj.id}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              currentIndex === idx
                ? "w-6 bg-white"
                : "w-2 bg-slate-800 hover:bg-slate-700"
            }`}
          />
        ))}
      </div>

    </section>
  );
}

