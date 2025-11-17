import React, { useState, useEffect } from "react";
import "../../../index.css";
import { Link } from "react-router-dom";

const HelixAIIntro: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [showCTA, setShowCTA] = useState(false);
  const [hasShownCTA, setHasShownCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasShownCTA && window.scrollY > 200) {
        setShowCTA(true);
        setHasShownCTA(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasShownCTA]);

  return (
    <>
      <header className="bg-white shadow-md z-50 mt-6 rounded-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="text-2xl font-bold text-[#3D0B4D]">
              AS CODE LABS
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <Link
                to="/"
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                Home
              </Link>
              <a
                className="text-sm font-medium text-[#3D0B4D] hover:text-gray-900 transition-colors"
                href="#about"
              >
                Work
              </a>
              <a
                className="text-sm font-medium text-[#3D0B4D] hover:text-gray-900 transition-colors"
                href="#about"
              >
                Services
              </a>
              <a
                className="text-sm font-medium text-[#3D0B4D] hover:text-gray-900 transition-colors"
                href="#about"
              >
                Blogs
              </a>
              <a
                className="text-sm font-medium text-[#3D0B4D] hover:text-gray-900 transition-colors"
                href="#contact"
              >
                Contact
              </a>
            </nav>

            <div className="hidden md:block">
              <a
                className="rounded-md bg-[#3D0B4D] px-4 py-2 text-white text-sm font-semibold transition-colors hover:bg-[#5A1A6D]"
                href="https://chromewebstore.google.com/detail/helix-ai/bjgjagobelgbchmjkgeimeadpnbgldid"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Helix-AI{" "}
              </a>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      mobileMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              {/* backdrop */}
              <div
                className="absolute inset-0 bg-black/50"
                onClick={() => setMobileMenuOpen(false)}
              />

              {/* panel */}
              <div className="absolute right-0 top-0 h-full w-11/12 max-w-sm bg-white shadow-2xl rounded-l-2xl overflow-auto">
                <div className="flex items-center justify-between px-6 py-5 border-b">
                  <div className="text-2xl font-bold text-[#3D0B4D]">
                    AS CODE LABS
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close"
                    className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
                  >
                    <svg
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <nav className="px-6 py-8 space-y-6">
                  <a
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-lg font-medium text-[#3D0B4D]"
                    href="https://ascodelabs.com/"
                  >
                    Home
                  </a>
                  <a
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-lg font-medium text-gray-700"
                    href="#about"
                  >
                    Work
                  </a>
                  <a
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-lg font-medium text-gray-700"
                    href="#about"
                  >
                    Services
                  </a>
                  <a
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-lg font-medium text-gray-700"
                    href="#about"
                  >
                    Blogs
                  </a>
                  <a
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-lg font-medium text-gray-700"
                    href="#contact"
                  >
                    Contact
                  </a>
                </nav>

                <div className="px-6 py-6 border-t">
                  <a
                    onClick={() => setMobileMenuOpen(false)}
                    href="https://chromewebstore.google.com/detail/helix-ai/bjgjagobelgbchmjkgeimeadpnbgldid"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-6 py-3 bg-[#3D0B4D] text-white font-semibold rounded-md hover:bg-[#5A1A6D]"
                  >
                    Download Helix-AI
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      <div className="pt-8 pb-6 px-4 sm:px-6 max-w-7xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-white/80 rounded-b-md shadow text-gray-600 hover:text-gray-900 transition-colors text-sm px-2 py-1"
        >
          ← Back
        </Link>
      </div>

      <section className="bg-[#F2F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight">
            Helix AI : The Next Evolution of Browser-Based Intelligence,
            Engineered for Privacy
          </h1>
          <div className="relative w-full h-56 sm:h-72 md:h-[600px] rounded-xl overflow-hidden mb-8">
            <img
              src="/assets/image1.png"
              alt="Helix AI browser extension interface displayed on a laptop screen, showing the privacy-first AI assistant in action with the sidepanel telescope visible, symbolizing modern digital intelligence and secure browsing"
              className="w-full h-full object-cover rounded-lg shadow-sm ring-1 ring-gray-200"
            />
          </div>
          <div className="prose max-w-none text-base md:text-lg text-justify text-gray-700 leading-relaxed mb-12">
            <p className="mb-6">
              In the age of information overload, the modern professional
              demands a seamless blend of efficiency and security. We rely on
              Artificial Intelligence to summarize, translate, and generate
              content, but often at the cost of our digital privacy. This
              creates a critical dilemma: Do we sacrifice data security for
              superior productivity?
            </p>
            <p>
              The launch of Helix AI—a sophisticated Chrome Extension developed
              by A S Codelabs—resolves this tension. Helix AI isn't just another
              sidebar chatbot; it is a privacy-first, context-aware AI assistant
              designed to integrate deeply with your browsing experience,
              empowering you to work smarter while ensuring your data remains
              yours.
            </p>
          </div>
        </div>
      </section>

      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Sidebar TOC: keep left on md+ screens; show first on mobile */}
            <aside className="md:col-span-1 order-1 md:order-1">
              <div className="sticky top-8 md:top-20 bg-white/70 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-6">
                  On this page
                </h3>
                <nav className="space-y-3">
                  <a
                    href="#introduction"
                    className="block text-blue-600 hover:text-blue-800 transition-colors text-sm"
                  >
                    Introduction
                  </a>
                  <a
                    href="#philosophy"
                    className="block text-blue-600 hover:text-blue-800 transition-colors text-sm"
                  >
                    Core Philosophy
                  </a>
                  <a
                    href="#hybrid"
                    className="block text-blue-600 hover:text-blue-800 transition-colors text-sm"
                  >
                    Hybrid Engine
                  </a>
                  <a
                    href="#telescopes"
                    className="block text-blue-600 hover:text-blue-800 transition-colors text-sm "
                  >
                    Four Telescopes
                  </a>
                  <a
                    href="#workflow"
                    className="block text-blue-600 hover:text-blue-800 transition-colors text-sm"
                  >
                    Workflow
                  </a>
                  <a
                    href="#conclusion"
                    className="block text-blue-600 hover:text-blue-800 transition-colors text-sm"
                  >
                    Conclusion
                  </a>
                  <a
                    href="#tryhelix"
                    className="block text-blue-600 hover:text-blue-800 transition-colors text-sm"
                  >
                    Try Helix AI Now
                  </a>
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <article className="md:col-span-3 order-2 md:order-2 space-y-16">
              <section id="introduction" className=" p-8 rounded-lg">
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  Introduction
                </h2>
                <div className="space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
                  <p>
                    The way we work on the web is changing fast. Every day, we
                    research, write, analyze, compare, and communicate directly
                    through our browser. But most AI tools that offer help
                    online come with a trade-off: better productivity at the
                    cost of your personal data and privacy. Helix AI changes
                    this equation.
                  </p>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    Designed and engineered by A S Codelabs, Helix AI is a
                    privacy-first browser assistant that understands the page
                    you're on, responds instantly, and helps you work smarter
                    without sending your sensitive information to unknown
                    servers. Whether you're reading articles, drafting content,
                    analyzing visuals, or studying documentation, Helix AI stays
                    right inside the browser to support your workflow — securely
                    and intelligently.
                  </p>
                </div>
                <div className="mt-8">
                  <img
                    src="/assets/image2.png"
                    alt="Introduction"
                    className="w-full rounded-lg"
                  />
                </div>
              </section>

              <section id="philosophy" className=" p-8 rounded-lg">
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  The Core Philosophy : Productivity Meets Uncompromised Privacy
                </h2>
                <div className="space-y-6 text-gray-700 text-lg leading-relaxed mb-8">
                  <p>
                    The most significant differentiator for Helix AI is its
                    staunch commitment to user privacy. In a marketplace where
                    many AI tools operate as data conduits, Helix AI stands out
                    by architecting its solution to minimize external data
                    exposure.
                  </p>
                  <p>
                    According to the developer's declarations, the extension's
                    architecture leverages the browser's built-in APIs and
                    features a Privacy First design. This commitment translates
                    into tangible security benefits:
                  </p>
                </div>
                <ol className="space-y-4 text-gray-700 text-lg">
                  <li>
                    <span className="font-bold min-w-fit">
                      1. No External Servers for Context :{" "}
                    </span>
                    <span>
                      Crucially, the system uses built-in browser APIs and
                      mechanisms to process webpage context, meaning your
                      interaction data and the content of the pages you are
                      analyzing often do not pass through external, proprietary
                      servers.
                    </span>
                  </li>
                  <li>
                    <span className="font-bold min-w-fit">
                      2. Data Minimization :{" "}
                    </span>
                    <span>
                      The developers have explicitly stated that your data is
                      not being sold to third parties and is not being used or
                      transferred for unrelated purposes.
                    </span>
                  </li>
                  <li>
                    <span className="font-bold min-w-fit">
                      3. User Control :{" "}
                    </span>
                    <span>
                      By focusing on on-device or locally-processed
                      interactions, Helix AI provides the peace of mind
                      necessary for professionals handling sensitive research,
                      documents, and corporate information.
                    </span>
                  </li>
                </ol>
              </section>

              <section id="hybrid" className="p-8 rounded-lg">
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  The Hybrid Engine : Unlocking Contextual Intelligence and
                  Flexibility
                </h2>
                <div className="space-y-6 text-gray-700 text-lg leading-relaxed mb-8">
                  <p>
                    Helix AI moves beyond the limitations of single-model
                    extensions by offering a true Hybrid AI Model. Users are not
                    locked into one specific large language model (LLM);
                    instead, they have the unprecedented flexibility to choose
                    the best engine for the task at hand.
                  </p>
                  <p>
                    The extension is engineered to integrate with
                    industry-leading models, including:
                  </p>
                </div>
                <ul className="space-y-3 text-gray-700 text-lg mb-8 list-disc list-inside">
                  <li>
                    Built-in Browser AI (Leveraging efficient on-device
                    processing).
                  </li>
                  <li>Gemini</li>
                  <li>OpenAI (ChatGPT)</li>
                  <li>Claude</li>
                </ul>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  This powerful selection allows users to dynamically switch
                  between models to leverage the unique strengths of each—be it
                  the cutting-edge reasoning of Gemini, the creative generation
                  of ChatGPT, or the expansive context windows of Claude—all
                  within a single, unified interface.
                </p>
                <img
                  className="mt-10 rounded-lg mb-10"
                  src="/assets/image3.png"
                  alt="img3"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    The Power of Context
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    At its functional core, Helix AI excels at Context-Aware
                    Chat. When you open the extension, it is instantly aware of
                    the active webpage, allowing you to:
                  </p>
                  <ul className="space-y-3 text-gray-700 text-lg list-disc list-inside">
                    <li>
                      Ask Questions about any section of the document, article,
                      or research paper.
                    </li>
                    <li>
                      Summarize long articles instantly, extracting key
                      sectioned points based on tone and desired length.
                    </li>
                    <li>
                      Translate entire pages or selected paragraphs with
                      automatic language detection.
                    </li>
                    <li>
                      It transforms the passive act of browsing into an active
                      research session.
                    </li>
                  </ul>
                  <img
                    className="mt-10 rounded-lg"
                    src="/assets/image4.png"
                    alt="img4"
                  />
                </div>
              </section>

              <section id="telescopes" className=" p-8 rounded-lg">
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  The Four "Telescopes" : A Unified, Adaptable User Experience
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  Recognizing that a single interface doesn't fit every
                  workflow, Helix AI introduces four distinct UI "Telescopes,"
                  each designed for a specific mode of interaction, ensuring the
                  AI assistant is always available but never intrusive:
                </p>
                <ul className="space-y-6 text-gray-700 text-lg">
                  <li>
                    <strong className="block text-gray-900 mb-2">
                      The Selection Popup:
                    </strong>
                    For instant, frictionless action. Highlight any text on a
                    page and a small popup instantly appears, offering immediate
                    commands like summarize, prompt, rewrite, explain, or
                    translate. It's the micro-tool for quick, contextual edits
                    and analysis.
                  </li>
                  <li>
                    <strong className="block text-gray-900 mb-2">
                      The Floating Telescope:
                    </strong>
                    A movable mini-console that stays on top of your content.
                    This is the quick prompt engine, perfect for iterative
                    tweaks, running small snippets of code, or generating text
                    without losing sight of your primary task.
                  </li>
                  <li>
                    <strong className="block text-gray-900 mb-2">
                      The Sidepanel Telescope:
                    </strong>
                    The persistent workspace. This is the clean, focused hub
                    where all the extension's settings, history, and persistent
                    chats live. It maintains context for the current active tab,
                    making it ideal for in-depth research sessions.
                  </li>
                  <li>
                    <strong className="block text-gray-900 mb-2">
                      The Writer Popup:
                    </strong>
                    A dedicated drafting space focused solely on content
                    creation. Use it to compose emails with tone options, draft
                    professional blog posts, or craft social media replies, all
                    powered by your chosen AI model.
                  </li>
                </ul>
              </section>

              <section id="workflow" className=" p-8 rounded-lg">
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  Beyond Text : Masterful Workflow and Visual Analysis
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  Helix AI extends its utility far beyond text manipulation,
                  tapping into complex features essential for modern digital
                  work:
                </p>
                <ul className="space-y-6 text-gray-700 text-lg mb-8">
                  <li>
                    <strong className="block text-gray-900 mb-2">
                      Image Analysis:
                    </strong>
                    A standout feature, allowing users to attach and analyze
                    images from webpages by simply right-clicking and adding
                    them to the chat. This is invaluable for researching visual
                    data, breaking down complex charts, or understanding product
                    images in an e-commerce context.
                  </li>
                  <li>
                    <strong className="block text-gray-900 mb-2">
                      Professional Workflows:
                    </strong>
                    The extension is purpose-built to enhance professional
                    productivity across multiple verticals like Marketing and
                    CEO, Research and Learning.
                  </li>
                </ul>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Helix AI offers universal compatibility, working seamlessly on
                  virtually any website you visit, making it a truly universal
                  tool for digital mastery.
                </p>
                <img
                  className="mt-10 rounded-lg mb-10"
                  src="/assets/image5.png"
                  alt="img5"
                />
              </section>

              <section id="conclusion" className=" p-8 rounded-lg">
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  Conclusion : Transform Your Browsing Experience Today
                </h2>
                <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                  <p>
                    Helix AI represents a thoughtful and powerful leap forward
                    in browser technology. By prioritizing user privacy while
                    simultaneously offering the most versatile suite of AI
                    features available—including a multi-model engine and
                    adaptable interfaces—it stands as the essential tool for any
                    knowledge worker, researcher, or content creator.
                  </p>
                  <p>
                    Stop compromising your security for speed. Install Helix AI
                    and begin browsing, researching, and creating with
                    unparalleled intelligence and peace of mind.
                  </p>
                  <p>
                    Ready to elevate your workflow? Find Helix AI on the Chrome
                    Web Store and experience the fusion of privacy and power.
                  </p>
                </div>
              </section>

              <section id="tryhelix" className="p-8 rounded-lg">
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  Try Helix AI Now
                </h2>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Experience the next evolution of browser-based intelligence
                  today. Helix AI gives you contextual awareness, multi-model
                  flexibility, and privacy-first architecture — all inside your
                  Chrome browser.
                </p>

                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  Whether you’re researching, writing, analysing visuals, or
                  managing your daily workflow, Helix AI helps you move faster
                  while keeping your data secure.
                </p>

                <a
                  href="https://chromewebstore.google.com/detail/helix-ai/bjgjagobelgbchmjkgeimeadpnbgldid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-[#3D0B4D] text-white text-lg font-semibold rounded-lg shadow hover:bg-[#5A1A6D] transition-colors"
                >
                  Install Helix AI (Free)
                </a>
              </section>
            </article>
          </div>
        </div>
      </div>

      {showCTA && (
        <div className="fixed bottom-10 right-4 bg-[#c9b6ff] shadow-xl border border-purple-300 rounded-2xl p-4 w-64 z-50 animate-fadeIn hidden md:block">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-gray-900 text-lg">
              Try Helix AI
            </h3>
            <button
              className="text-gray-700 font-bold"
              onClick={() => setShowCTA(false)}
            >
              ✕
            </button>
          </div>

          <p className="mt-1 text-gray-700 text-sm">
            Free forever for core features. Smart AI for your browser.
          </p>

          <a
            href="https://chromewebstore.google.com/detail/helix-ai/bjgjagobelgbchmjkgeimeadpnbgldid"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block bg-black text-white text-center py-2 rounded-xl font-medium"
          >
            Install Free
          </a>
        </div>
      )}
    </>
  );
};

export default HelixAIIntro;
