import React, { useState, useEffect } from "react";
import "../../../index.css";
import { Link } from "react-router-dom";

const paragraphClass =
  "text-base sm:text-lg text-gray-700 leading-relaxed";

const HelixAI3rdBlog: React.FC = () => {
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
          className="inline-flex items-center gap-2 bg-white/80 rounded-b-md shadow text-gray-600 hover:text-gray-900 transition-colors text-sm px-2 py-1"
          to="https://ascodelabs.com/"
        >
          ← Back
        </Link>
      </div>

      <section className="bg-[#F2F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight">
            Helix AI: The All-In-One Intelligence Layer for Research, Coding &
            Visual Understanding
          </h1>
          <div className="relative w-full h-56 sm:h-72 md:h-[600px] rounded-xl overflow-hidden mb-8">
            <img
              src="/assets/image1.png"
              alt="Helix AI browser extension interface displayed on a laptop screen, showing the privacy-first AI assistant in action with the sidepanel telescope visible, symbolizing modern digital intelligence and secure browsing"
              className="w-full h-full object-cover rounded-lg shadow-sm ring-1 ring-gray-200"
            />
          </div>
          <div className="prose max-w-none text-justify mb-12">
            <p className={`${paragraphClass} mb-6`}>
              In a world where online work demands speed, clarity, and accuracy,
              Helix AI reshapes what a browser extension can do. It is not just
              another assistant pinned to your toolbar — it is a multi-layered
              intelligence engine designed to simplify research, elevate
              writing, support developers, and analyse visuals with precision.
              Whether you're summarizing dense articles, debugging code,
              drafting content, or interpreting images, Helix AI adapts to your
              workflow instantly. Its privacy-first architecture and hybrid
              engine ensure that you get fast, relevant, and secure results
              every time. This blog explores how Helix AI unifies research,
              development, writing, and visual intelligence into one powerful,
              seamless experience.
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
                    href="#New Era of Browser Intelligence"
                    className="block text-blue-600 hover:text-blue-800 transition-colors text-sm"
                  >
                    New Era of Browser Intelligence
                  </a>
                  <a
                    href="#The Hybrid Engine"
                    className="block text-blue-600 hover:text-blue-800 transition-colors text-sm"
                  >
                    The Hybrid Engine
                  </a>
                  <a
                    href="#Developer’s Advantage"
                    className="block text-blue-600 hover:text-blue-800 transition-colors text-sm"
                  >
                    Developer’s Advantage
                  </a>
                  <a
                    href="#Visual Intelligence:"
                    className="block text-blue-600 hover:text-blue-800 transition-colors text-sm "
                  >
                    Visual Intelligence
                  </a>
                  <a
                    href="#The Four Telescopes"
                    className="block text-blue-600 hover:text-blue-800 transition-colors text-sm"
                  >
                    The Four Telescopes
                  </a>
                  <a
                    href="#Privacy"
                    className="block text-blue-600 hover:text-blue-800 transition-colors text-sm"
                  >
                    Privacy Without Compromise
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
              <section
                id="New Era of Browser Intelligence"
                className=" p-8 rounded-lg"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  New Era of Browser Intelligence
                </h2>
                <div className="space-y-6">
                  <p className={paragraphClass}>
                    The internet is massive, and modern work demands clarity,
                    speed, and precision. Helix AI steps in as a complete
                    intelligence layer built directly into your browser —
                    combining research assistance, writing tools, coding help,
                    and visual understanding into one seamless experience.
                  </p>
                  <p className={paragraphClass}>
                    It doesn’t feel like an extension. It feels like a second
                    brain built inside Chrome.
                  </p>
                  <p className={paragraphClass}>
                    Whether you're reading, writing, debugging, analyzing
                    screenshots, or comparing sources, Helix AI adapts instantly
                    to what you’re doing.
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

              <section id="The Hybrid Engine" className=" p-8 rounded-lg">
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  The Hybrid Engine: One Extension, Infinite Workflows
                </h2>
                <div className="space-y-6 mb-8">
                  <p className={paragraphClass}>
                    Helix AI’s Hybrid Engine is built to think the way modern
                    users work - fast, flexible, and constantly shifting between
                    different types of tasks. Instead of relying on a single
                    model for everything, it intelligently blends multiple
                    specialized engines, each tuned for a specific purpose.
                  </p>
                  <p className={paragraphClass}>
                    Whether you're highlighting a line of text, analysing code,
                    reviewing UI layouts, or interpreting visuals, Helix chooses
                    the right model at the right time without interrupting your
                    flow.
                  </p>
                   <img
                    src="/assets/hybridengineimg.png"
                    alt="Introduction"
                    className="w-full rounded-lg"
                  />

                  <p className={paragraphClass}>
                    This seamless model-switching is what makes Helix AI feel
                    less like a tool and more like a dynamic, adaptive workspace
                    that evolves with every click. At the core of Helix AI is
                    its Hybrid Multi-Model Engine, designed to handle every type
                    of task:
                  </p>
                </div>
                <ul className="space-y-4 text-gray-700 text-lg list-disc list-inside ">
                  <li>A fast model for instant actions</li>
                  <li>A deep reasoning model for complex tasks</li>
                  <li>A writing model for structured, long-form content</li>
                  <li>A visual model for image understanding</li>
                  <li>A selection popup model for highlighted text</li>
                </ul>
                <br />
                <p className={paragraphClass}>
                  Instead of forcing the user to choose models, Helix
                  automatically switches based on the context.
                </p>
                <br /> <br />
                <p className={paragraphClass}>
                  This is why it can handle:
                </p>
                <br />
                <ul className="space-y-4 text-gray-700 text-lg list-disc list-inside ">
                  <li>Long Research</li>
                  <li>Coding Help</li>
                  <li>Image Analysis</li>
                  <li>Writing</li>
                  <li>UI Understanding</li>
                  <li>Multi-tab workflows</li>
                </ul>
                <br />
                <p className={paragraphClass}>All in one piece.</p>
              </section>

              <section id="Research Re-Invented" className="p-8 rounded-lg">
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  Research Re-Invented: Faster, Deeper, More Complete
                </h2>
                <div className="space-y-6 mb-8">
                  <p className={paragraphClass}>
                    Research used to mean juggling 15 tabs, reading long pages,
                    and manually comparing data. Helix transforms that into a
                    guided, intelligent workflow.
                  </p>
                </div>
                <h3 className="text-3xl font-bold text-gray-700 mb-8">
                  Instant Summaries
                </h3>
                <p className={paragraphClass}>
                  Helix AI turns any long article, PDF, or webpage into a clear,
                  structured summary within seconds. Instead of giving a vague
                  overview, it extracts key insights, arguments, data points,
                  and action steps — all tailored to what you're looking for.
                  This lets you understand complex content instantly without
                  reading hundreds of lines.
                  <br />
                  <br />
                  Select a paragraph → Helix generates a clean, precise summary.
                  <br />
                  <br />
                  Great for:
                </p>
                <br />

                <ul className="space-y-3 text-gray-700 text-lg mb-8 list-disc list-inside">
                  <li>Journals</li>
                  <li>News</li>
                  <li>Technical Articles</li>
                  <li>Long Documentation</li>
                </ul>
                <p className={`${paragraphClass} mb-8`}>
                  Its summaries keep key insights while removing unnecessary
                  words.
                </p>
                <img
                  className="mt-10 rounded-lg mb-10"
                  src="/assets/instantsummaryimg.png"
                  alt="img3"
                />
                <h3 className="text-3xl font-bold text-gray-700 mb-8">
                  Multi-Page Comparison
                </h3>
                <p className={paragraphClass}>
                  When you're researching across multiple tabs, Helix
                  automatically compares pages and gives you a combined
                  breakdown — similarities, differences, pros, cons, missing
                  points, and even contradictions. Instead of manually jumping
                  between tabs, you get a unified comparison that saves time and
                  reduces cognitive overload.
                  <br /> <br />
                  Choose two pages or two blocks of text → Helix compares them
                  with:
                </p>
                <br />
                <ul className="space-y-3 text-gray-700 text-lg mb-8 list-disc list-inside">
                  <li>Key Difference</li>
                  <li>Data Comparision</li>
                  <li>Opposing Viewpoints</li>
                  <li>Strengths & weaknesses</li>
                </ul>
                <p className={`${paragraphClass} mb-8`}>
                  It feels like a human expert is analyzing both sources for
                  you.
                </p>
              </section>

              <section id="Developer’s Advantage" className=" p-8 rounded-lg">
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  The Developer’s Advantage: Your Coding Co-Pilot in the Browser
                </h2>
                <p className={`${paragraphClass} mb-8`}>
                  Helix AI is extremely useful for developers. With the Floating
                  Telescope and Sidepanel, coding help becomes instant.
                </p>
                <h3 className="text-3xl font-bold text-gray-700 mb-8">
                  Code Explanation
                </h3>
                <p className={`${paragraphClass} mb-8`}>
                  Helix AI makes understanding code effortless. When you select
                  any snippet, it breaks the logic down step-by-step and
                  explains the purpose, flow, and structure in simple language.
                  It highlights potential issues, outdated patterns, or
                  inefficiencies and even suggests optimized versions you can
                  directly use. Whether you're working with JavaScript, Python,
                  Java, React, C++, or any other major language, Helix adapts
                  instantly and provides explanations tailored to your skill
                  level. It turns confusing blocks of code into clear, readable
                  insights that speed up your development process.
                  <br /> <br />
                  Select any code snippet → <br /> <br /> Helix explains:
                </p>
                <ul className="space-y-3 text-gray-700 text-lg mb-8 list-disc list-inside">
                  <li>purpose</li>
                  <li>flow</li>
                  <li>logic</li>
                  <li>potential issues</li>
                  <li>optimization suggestions</li>
                </ul>
                <p className={`${paragraphClass} mb-8`}>
                  It works across languages: JS, Python, Java, C++, React, and
                  more.
                </p>
                <img
                    className="mt-10 rounded-lg mb-10 w-full h-auto"
                    src="/assets/dubuggingimg.png"
                    alt="Debugging assistance interface showing Helix AI helping developers with code errors"
                  />
                <h3 className="text-3xl font-bold text-gray-700 mb-8">
                  Debugging Assistance
                </h3>
                <p className={`${paragraphClass} mb-8`}>
                  Debugging becomes dramatically easier with Helix AI. Instead
                  of searching through stack traces or guessing what went wrong,
                  you can simply paste the error into the Floating Telescope or
                  Sidepanel. Helix instantly identifies the root cause and
                  explains why the issue occurred in a clear, understandable
                  way. It provides an exact fix, along with a ready-to-use code
                  patch you can copy into your file.
                  <br />
                  <br />
                  Paste an error → <br />
                  <br />
                  Helix returns:
                </p>
                <ul className="space-y-3 text-gray-700 text-lg mb-8 list-disc list-inside">
                  <li>Root cause</li>
                  <li>Exact fix</li>
                  <li>Code patch</li>
                  <li>Additional notes</li>
                  <li>Edge cases</li>
                </ul>
                <p className={`${paragraphClass} mb-8`}>
                  This saves minutes — sometimes hours.
                </p>
              </section>

              <section id="Visual Intelligence:" className=" p-8 rounded-lg">
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  Visual Intelligence: From Images to Insights
                </h2>
                <p className={`${paragraphClass} mb-8`}>
                  Helix AI brings powerful visual intelligence directly into
                  your browser. When you upload a screenshot, it doesn’t just
                  read the text — it understands the entire layout. It can
                  identify UI components, highlight errors, interpret
                  dashboards, and extract key information without you having to
                  explain anything. This makes it incredibly useful for
                  debugging UI issues
                </p>
                <h3 className="text-3xl font-bold text-gray-700 mb-8">
                  Screenshot Understanding
                </h3>
                <p className={`${paragraphClass} mb-8`}>
                  Upload any screenshot → <br />
                  <br />
                  Helix can:
                </p>

                <ul className="space-y-3 text-gray-700 text-lg mb-8 list-disc list-inside">
                  <li>Read the text</li>
                  <li>Explain UI layouts</li>
                  <li>Identify errors</li>
                  <li>Analyze dashboards</li>
                  <li>Extract important info</li>
                </ul>
                <p className={`${paragraphClass} mb-8`}>
                  Perfect for debugging, design review, and quick referencing.
                </p>
                <img
                  className="mt-10 rounded-lg mb-10"
                  src="/assets/image5.png"
                  alt="img5"
                />
                <h3 className="text-3xl font-bold text-gray-700 mb-8">
                  UI & Diagram Analysis
                </h3>
                <p className={`${paragraphClass} mb-8`}>
                  Helix can break down:
                </p>

                <ul className="space-y-3 text-gray-700 text-lg mb-8 list-disc list-inside">
                  <li>Flowcharts</li>
                  <li>Wireframes</li>
                  <li>Architecture diagrams</li>
                  <li>Graphs</li>
                  <li>Charts</li>
                </ul>
                <p className={`${paragraphClass} mb-8`}>
                  Giving clear insights and explanations.
                </p>
                <h3 className="text-3xl font-bold text-gray-700 mb-8">
                  Right-Click → Add to Chat
                </h3>
                <p className={`${paragraphClass} mb-8`}>
                  Works instantly with no extra steps.
                </p>
              </section>

              <section id="The Four Telescopes" className=" p-8 rounded-lg">
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  The Four Telescopes: Precision Tools for Any Task
                </h2>
                <p className={`${paragraphClass} mb-8`}>
                  Recognizing that a single interface doesn't fit every
                  workflow, Helix AI introduces four distinct UI "Telescopes,"
                  each designed for a specific mode of interaction, ensuring the
                  AI assistant is always available but never intrusive
                  <br />
                  <br />
                  Each telescope is designed for a different purpose and style
                  of work.
                </p>

                <h3 className="text-3xl font-bold text-gray-700 mb-8">
                  The Selection Popup (Instant Action)
                </h3>
                <p className={`${paragraphClass} mb-8`}>
                  Appears whenever you highlight text.
                  <br />
                  <br />
                  Great for:
                </p>

                <ul className="space-y-3 text-gray-700 text-lg mb-8 list-disc list-inside">
                  <li>Rewriting</li>
                  <li>Summarizing</li>
                  <li>Explanations</li>
                  <li>translations</li>
                </ul>
                <p className={`${paragraphClass} mb-8`}>
                  Zero clicks. Immediate results.
                </p>

                <h3 className="text-3xl font-bold text-gray-700 mb-8">
                  The Floating Telescope (Quick Prompts)
                </h3>
                <p className={`${paragraphClass} mb-8`}>
                  A small draggable bubble - perfect for:
                </p>

                <ul className="space-y-3 text-gray-700 text-lg mb-8 list-disc list-inside">
                  <li>small tasks</li>
                  <li>fast questions</li>
                  <li>quick coding help</li>
                  <li>short clarifications</li>
                </ul>
                <p className={`${paragraphClass} mb-8`}>
                  It stays out of your way but is always ready.
                </p>
                 
                  <img
                  className="mt-10 rounded-lg mb-10"
                  src="/assets/floatingbarimg.png"
                  alt="img5"
                />
 
                <h3 className="text-3xl font-bold text-gray-700 mb-8">
                  The Sidepanel Telescope (Persistent Workspace)
                </h3>
                <p className={`${paragraphClass} mb-8`}>
                  A full conversation window attached to the right side of your
                  browser.
                  <br />
                  <br />
                  Best for:{" "}
                </p>

                <ul className="space-y-3 text-gray-700 text-lg mb-8 list-disc list-inside">
                  <li>long research</li>
                  <li>persistent chats</li>
                  <li>continuous debugging </li>
                  <li>detailed explanations</li>
                </ul>
                <p className={`${paragraphClass} mb-8`}>
                  It becomes your full working space.{" "}
                </p>

                <h3 className="text-3xl font-bold text-gray-700 mb-8">
                  The Writer Telescope (Focused Drafting){" "}
                </h3>
                <p className={`${paragraphClass} mb-8`}>
                  Designed for long-form writing:
                </p>

                <ul className="space-y-3 text-gray-700 text-lg mb-8 list-disc list-inside">
                  <li>Blogs</li>
                  <li>Articles</li>
                  <li>Essay</li>
                  <li>E-mail</li>
                </ul>
                <p className={`${paragraphClass} mb-8`}>
                  This same telescope helped create all three Helix AI blog
                  articles.{" "}
                </p>
                <img
                  className="mt-10 rounded-lg mb-10 w-full h-auto"
                  src="/assets/writerimg.png"
                  alt="img5"
                />
              </section>

              <section id="Privacy" className="p-8 rounded-lg">
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  Privacy Without Compromise
                </h2>

                <p className={`${paragraphClass} mb-6`}>
                  Privacy is not an optional feature in Helix AI - it’s the
                  foundation of the entire extension. Every interaction you have
                  is intentionally designed to protect your data, respect your
                  workspace, and keep your browsing history completely private.
                  Helix doesn’t track your usage, record your activity, or build
                  hidden profiles about you. Nothing you do inside your browser
                  is logged, stored, or analyzed behind the scenes. The only
                  information processed is the text or content you explicitly
                  choose to send — and even that is never used for training or
                  shared with third parties. With Helix, you get powerful
                  intelligence without ever sacrificing control,
                  confidentiality, or trust.
                </p>
                
                 <img
                    className="mt-10 rounded-lg mb-10 w-full h-auto"
                    src="/assets/privacyimg.png"
                    alt="Debugging assistance interface showing Helix AI helping developers with code errors"
                  />
                <p className={`${paragraphClass} mb-8`}>
                  Helix AI is built on a Privacy-First Architecture:
                </p>
                <ul className="space-y-3 text-gray-700 text-lg mb-8 list-disc list-inside">
                  <li>No tracking</li>
                  <li>No analytics</li>
                  <li>No logging</li>
                  <li>No training on your data</li>
                  <li>No sharing with third parties</li>
                </ul>
                <p className={`${paragraphClass} mb-8`}>
                  Only the text you choose to send is processed.
                  <br />
                  <br />
                  Your browsing experience remains entirely private.
                </p>
              </section>

              <section id="tryhelix" className="p-8 rounded-lg">
                <h2 className="text-4xl font-bold text-gray-900 mb-8" > Try Helix-Ai Now</h2>
                <p className={`${paragraphClass} mb-8`}>
                  Experience the next evolution of browser-based intelligence
                  today. Helix AI gives you contextual awareness, multi-model
                  flexibility, and privacy-first architecture — all inside your
                  Chrome browser.<br/> <br/>
                  Whether you’re researching, writing, analysing
                  visuals, or managing your daily workflow, Helix AI helps you
                  move faster while keeping your data secure.
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

          <p className={`${paragraphClass} mt-1`}>
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

export default HelixAI3rdBlog;
