import React, { useState, useEffect } from "react";
import "../../../index.css";
import { Link } from "react-router-dom";

const HelixAIWrite: React.FC = () => {
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
            The Writer's Toolkit: Effortless Drafting and Content Generation
          </h1>
          <div className="relative w-full h-56 sm:h-72 md:h-[600px] rounded-xl overflow-hidden mb-8">
            <img
              src="/assets/blog2img1.png"
              alt="Helix AI browser extension interface displayed on a laptop screen, showing the privacy-first AI assistant in action with the sidepanel telescope visible, symbolizing modern digital intelligence and secure browsing"
              className="w-full h-full object-cover rounded-lg shadow-sm ring-1 ring-gray-200"
            />
          </div>
          <div className="prose max-w-none text-base md:text-lg text-justify text-gray-700 leading-relaxed mb-12">
            <p className="mb-6">
              <span className="font-semibold">The Writer's Toolkit :</span>{" "}
              Effortless Drafting and Content Generation For professionals whose
              work revolves around clear and compelling communication, the
              ability to draft, refine, and generate content quickly is
              paramount. Helix AI’s dedicated Writer Popup and its seamless
              integration into your browser transform the act of writing from a
              manual chore into an assisted, intelligent process. This feature
              ensures that high-quality, context-aware content is always just a
              click away, whether you're composing a critical email or drafting
              a technical summary.
            </p>
            <p className="mb-6">
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
                    href="#Writer's Toolkit"
                    className="block text-blue-600 hover:text-blue-800 transition-colors text-sm"
                  >
                    Writer's Toolkit
                  </a>
                  <a
                    href="#The Hybrid Engine: AI Flexibility"
                    className="block text-blue-600 hover:text-blue-800 transition-colors text-sm"
                  >
                    The Hybrid Engine: AI Flexibility
                  </a>
                  <a
                    href="#telescopes"
                    className="block text-blue-600 hover:text-blue-800 transition-colors text-sm "
                  >
                    Four Telescopes
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
                    The "Writer's Toolkit" leverages the power of the Hybrid
                    Engine (integrating models like Gemini, ChatGPT, Claude,
                    etc.) to offer specialized writing support directly where
                    you need it. By understanding the active webpage's context
                    and your existing work, Helix AI provides an adaptive
                    environment that significantly accelerates your content
                    workflow. You maintain full control over the tone, length,
                    and purpose of the output, making the AI a true co-pilot for
                    your digital communications.
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
               
                   <img
                  className="mt-10 rounded-lg mb-10"
                  src="/assets/blog2img2.png"
                  alt="img3"
                />
              </section>

              <section id="Writer's Toolkit" className=" p-8 rounded-lg">
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  Writer's Toolkit
                </h2>
                <div className="space-y-6 text-gray-700 text-lg leading-relaxed mb-8">
                  <p>
                    Details the drafting and content generation capabilities of
                    Helix AI. Focuses on the Writer Popup and how it uses the
                    Hybrid Engine to accelerate writing, providing control over
                    tone and length for professional communications.
                  </p>
                  <p>
                    The "Writer's Toolkit" section should be a practical deep
                    dive into Helix AI's content creation and refinement
                    features. It explains how the tool turns passive browsing
                    into active content generation.
                  </p>
                </div>
                <ol className="space-y-4 text-gray-700 text-lg">
                  <li>
                    <span className="font-bold min-w-fit">
                      1. The Writer Popup Interface :{" "}
                    </span>
                    <span>
                      Introduces the dedicated UI (one of the "Telescopes")
                      specifically designed for drafting. This interface
                      minimizes distractions, focusing the user solely on text
                      input and AI output to show how Helix AI provides an
                      in-browser studio for content creation, moving beyond the
                      simple chat interface.
                    </span>
                  </li>
                  <li>
                    <span className="font-bold min-w-fit">
                      2. Hybrid Engine for Quality Control:{" "}
                    </span>
                    <span>
                      Explains that the toolkit utilizes the Hybrid Engine
                      (Gemini, Claude, OpenAI) to ensure the highest quality
                      output. Users can select the model best suited for the
                      task (e.g., one for creative marketing copy, another for
                      technical summaries) to emphasize flexibility and
                      performance, demonstrating that the tool isn't limited by
                      a single AI model's capabilities.
                    </span>
                  </li>
                  <li>
                    <span className="font-bold min-w-fit">
                      3. Contextual Content Generation :{" "}
                    </span>
                    <span>
                      Details how the tool uses the context of the active
                      webpage (article, document, email thread) as input when
                      generating or rewriting text. This results in highly
                      relevant and accurate content to highlight the feature of
                      Contextual Consistency, ensuring emails reference the
                      correct details from the page or summaries are based on
                      the article currently being viewed.
                    </span>
                  </li>
                </ol>
              </section>

              <section
                id="The Hybrid Engine: AI Flexibility"
                className="p-8 rounded-lg"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  The Hybrid Engine: AI Flexibility
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
                  This section is essential right after a feature demonstration.
                  It explains the core technology that makes the "Writer's
                  Toolkit" so powerful: the ability to integrate and switch
                  between multiple Large Language Models (LLMs) like Gemini,
                  OpenAI, and Claude. It emphasizes the flexibility to choose
                  the best engine for any writing task (e.g., creative writing
                  vs. formal summarization).
                </p>
                <img
                  className="mt-10 rounded-lg mb-10"
                  src="/assets/image3.png"
                  alt="img3"
                />
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
                     <div className="mt-8">
                  <img
                    src="/assets/blog2img3.png"
                    alt="img3"
                    className="w-full rounded-lg"
                  />
                </div>
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
        <div className="fixed bottom-10 right-4 bg-[#c9b6ff] shadow-xl border border-purple-300 rounded-2xl p-4 w-64 z-50 animate-fadeIn block">
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

export default HelixAIWrite;
