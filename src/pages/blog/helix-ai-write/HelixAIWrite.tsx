import React, { useState, useEffect } from "react";
import "../../../index.css";
import { href, Link } from "react-router-dom";

const HelixAIBlogPost1: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCTA, setShowCTA] = useState(false);
  const [hasShownCTA, setHasShownCTA] = useState(false);
  const [timeWasted, setTimeWasted] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeWasted((prev) => (prev < 124 ? prev + 1 : prev));
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Header */}
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
                Download Helix-AI
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
              <div
                className="absolute inset-0 bg-black/50"
                onClick={() => setMobileMenuOpen(false)}
              />
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

      {/* Back Button */}
      <div className="pt-8 pb-6 px-4 sm:px-6 max-w-7xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-white/80 rounded-b-md shadow text-gray-600 hover:text-gray-900 transition-colors text-sm px-2 py-1"
        >
          ← Back
        </Link>
      </div>

      {/* Hero Section */}
      <section className="bg-[#F2F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          {/* Time Wasted Badge */}
          <div className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            ⏱️ You're losing {timeWasted} hours this year to tab switching
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            The AI Sidebar Problem Every Chrome User Faces
            <span className="block text-[#3D0B4D] mt-2 text-2xl sm:text-3xl md:text-4xl">
              (And How to Fix It in 30 Seconds)
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl">
            Stop switching between ChatGPT tabs 300+ times per day. Your AI
            assistant should live where you work—not in another tab.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="https://chromewebstore.google.com/detail/helix-ai/bjgjagobelgbchmjkgeimeadpnbgldid"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#3D0B4D] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#5A1A6D] transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              📥 Install Free Extension →
            </a>
            <button
              onClick={() =>
                window.open("https://youtu.be/Bn1N3yHpawc", "_blank")
              }
              className="inline-flex items-center justify-center border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-gray-400 hover:bg-gray-50 transition"
            >
              ▶️ Watch 2mins Demo
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center flex-wrap gap-6 text-sm text-gray-600 mb-8">
            <div>100% Free</div>
            <div>No credit card required</div>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-56 sm:h-72 md:h-[600px] rounded-xl overflow-hidden">
            <img
              src="/assets/blog2img1.png"
              alt="Helix AI sidebar showing contextual AI assistance directly within the browser"
              className="w-full h-full object-cover rounded-lg shadow-sm ring-1 ring-gray-200"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <aside className="md:col-span-1 order-1 md:order-1">
              <div className="sticky top-8 md:top-20 bg-white/70 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-6">
                  On this page
                </h3>
                <nav className="space-y-3">
                  <a
                    href="#tab-switching-tax"
                    className="block text-[#3D0B4D] hover:text-[#5A1A6D] transition-colors text-sm"
                  >
                    The Tab-Switching Tax
                  </a>
                  <a
                    href="#day-before"
                    className="block text-[#3D0B4D] hover:text-[#5A1A6D] transition-colors text-sm"
                  >
                    A Day Before Helix
                  </a>
                  <a
                    href="#daily-damage"
                    className="block text-[#3D0B4D] hover:text-[#5A1A6D] transition-colors text-sm"
                  >
                    The Daily Damage
                  </a>
                  <a
                    href="#better-way"
                    className="block text-[#3D0B4D] hover:text-[#5A1A6D] transition-colors text-sm"
                  >
                    There's a Better Way
                  </a>
                  <a
                    href="#day-after"
                    className="block text-[#3D0B4D] hover:text-[#5A1A6D] transition-colors text-sm"
                  >
                    Same Day With Helix
                  </a>
                  <a
                    href="#features"
                    className="block text-[#3D0B4D] hover:text-[#5A1A6D] transition-colors text-sm"
                  >
                    Why Users Love Helix
                  </a>
                  <a
                    href="#quick-win"
                    className="block text-[#3D0B4D] hover:text-[#5A1A6D] transition-colors text-sm"
                  >
                    Your First 5 Minutes
                  </a>
                  <a
                    href="#conclusion"
                    className="block text-[#3D0B4D] hover:text-[#5A1A6D] transition-colors text-sm"
                  >
                    Stop Losing Time Today
                  </a>
                </nav>
              </div>
            </aside>

            {/* Article Content */}
            <article className="md:col-span-3 order-2 md:order-2 space-y-16">
              {/* Section 1: Tab-Switching Tax */}
              <section id="tab-switching-tax" className="p-8 rounded-lg">
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  The Tab-Switching Tax: Your Hidden Productivity Killer
                </h2>
                <div className="space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
                  <p>
                    You'll switch tabs 300+ times today. That's not a guess—it's
                    backed by productivity research on knowledge workers. Every
                    switch carries a hidden tax: the mental effort to relocate
                    context, the physical action of clicking, and the cognitive
                    load of remembering what you were doing.
                  </p>
                  <p>
                    Researchers call this "attention residue." When you jump
                    from a research article to ChatGPT, part of your brain stays
                    stuck on the previous task. It takes an average of 23
                    minutes to fully regain deep focus after an interruption.
                  </p>
                  <p>
                    Multiply that 45-second tab switch by 300 daily instances.
                    You're losing 2.1 hours every single day—not to productive
                    work, but to the mechanics of moving between tabs. That's
                    over 500 hours per year, or 12.5 full workweeks, sacrificed
                    to context switching.
                  </p>
                </div>
              </section>

              {/* Section 2: Day Before Helix */}
              <section id="day-before" className="p-8 rounded-lg">
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  A Day in Your Life: The Before Story
                </h2>
                <div className="space-y-8">
                  {/* Scenario 1 */}
                  <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                    <p className="text-gray-700 text-lg mb-4 font-semibold">
                      ⏰ 9:47 AM: Reading a Research Article
                    </p>
                    <p className="text-gray-600 mb-4">
                      You encounter a complex technical term that needs
                      clarification. Here's what happens next:
                    </p>
                    <ul className="space-y-2 text-gray-600 ml-6">
                      <li>→ Highlight and copy the term</li>
                      <li>→ Open a new tab</li>
                      <li>→ Navigate to ChatGPT (if you remember the URL)</li>
                      <li>→ Wait for the page to load</li>
                      <li>→ Paste the term and type your question</li>
                      <li>→ Wait for the AI response</li>
                      <li>→ Read and try to remember it</li>
                      <li>→ Switch back to your article</li>
                      <li>
                        →{" "}
                        <em className="text-red-600 font-semibold">
                          "Wait... where was I?"
                        </em>
                      </li>
                      <li>→ Scroll to find your place again</li>
                    </ul>
                    <div className="mt-4 p-4 bg-red-100 rounded">
                      <p className="text-red-700 font-semibold">
                        ⏱️ Time wasted: 45 seconds
                      </p>
                      <p className="text-red-700">💔 Flow state: Broken</p>
                    </div>
                  </div>

                  {/* Scenario 2 */}
                  <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                    <p className="text-gray-700 text-lg mb-4 font-semibold">
                      ⏰ 11:23 AM: Writing an Email
                    </p>
                    <p className="text-gray-600 mb-4">
                      Your draft sounds too casual. You need to make it more
                      professional:
                    </p>
                    <ul className="space-y-2 text-gray-600 ml-6">
                      <li>→ Select and copy your entire draft</li>
                      <li>→ Switch to your ChatGPT tab (which one was it?)</li>
                      <li>→ Scroll through previous conversations</li>
                      <li>→ Give up and start a new chat</li>
                      <li>→ Paste draft and ask for rewrite</li>
                      <li>→ Wait for response</li>
                      <li>→ Copy the new version</li>
                      <li>→ Switch back to email</li>
                      <li>→ Replace old text with new text</li>
                      <li>→ Re-read to make sure it makes sense</li>
                    </ul>
                    <div className="mt-4 p-4 bg-red-100 rounded">
                      <p className="text-red-700 font-semibold">
                        ⏱️ Time wasted: 1 minute 12 seconds
                      </p>
                      <p className="text-red-700">😤 Momentum: Lost</p>
                    </div>
                  </div>

                  {/* Scenario 3 */}
                  <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                    <p className="text-gray-700 text-lg mb-4 font-semibold">
                      ⏰ 2:15 PM: Product Page in Foreign Language
                    </p>
                    <p className="text-gray-600 mb-4">
                      You're researching a product, but the specifications are
                      in another language:
                    </p>
                    <ul className="space-y-2 text-gray-600 ml-6">
                      <li>→ Open Google Translate in a new tab</li>
                      <li>→ Copy the product description</li>
                      <li>→ Paste into Google Translate</li>
                      <li>→ Read the result... it doesn't make sense</li>
                      <li>→ Try ChatGPT instead for better translation</li>
                      <li>→ Open ChatGPT tab</li>
                      <li>→ Copy-paste dance again</li>
                      <li>→ Get translation</li>
                      <li>→ Switch back to product page</li>
                      <li>→ Forget which spec you were checking</li>
                    </ul>
                    <div className="mt-4 p-4 bg-red-100 rounded">
                      <p className="text-red-700 font-semibold">
                        ⏱️ Time wasted: 58 seconds
                      </p>
                      <p className="text-red-700">😩 Patience: Gone</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3: Daily Damage */}
              <section
                id="daily-damage"
                className="p-8 rounded-lg bg-gray-900 text-white"
              >
                <h2 className="text-3xl font-bold mb-6">The Daily Damage</h2>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <div className="text-5xl font-bold text-blue-400 mb-2">
                      300+
                    </div>
                    <div className="text-gray-300">Tab switches per day</div>
                    <div className="text-sm text-gray-400 mt-2">
                      That's every 2-3 minutes during work hours
                    </div>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <div className="text-5xl font-bold text-blue-400 mb-2">
                      2.1 hrs
                    </div>
                    <div className="text-gray-300">
                      Lost to context switching
                    </div>
                    <div className="text-sm text-gray-400 mt-2">
                      500+ hours per year wasted
                    </div>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <div className="text-5xl font-bold text-blue-400 mb-2">
                      23 min
                    </div>
                    <div className="text-gray-300">To regain deep focus</div>
                    <div className="text-sm text-gray-400 mt-2">
                      After each interruption
                    </div>
                  </div>
                </div>
                <p className="mt-8 text-center text-xl text-gray-200">
                  This isn't just annoying—it's costing you{" "}
                  <strong>12.5 full workweeks</strong> per year.
                </p>
              </section>

              {/* Section 4: Better Way */}
              <section id="better-way" className="p-8 rounded-lg">
                <div className="text-center mb-12">
                  <div className="text-5xl mb-4">✨</div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    There's a Better Way
                  </h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    What if your AI assistant lived <em>inside</em> every
                    webpage you visit? No switching. No copying. No broken flow.
                  </p>
                </div>

                <img
                  className="rounded-lg mb-10 shadow-lg"
                  src="/assets/betterway.png"
                  alt="Helix AI sidebar interface showing contextual assistance"
                />
              </section>

              {/* Section 5: Day After Helix */}
              <section id="day-after" className="p-8 rounded-lg">
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  The Same Scenarios, Transformed With Helix AI
                </h2>
                <div className="space-y-8">
                  {/* Scenario 1 After */}
                  <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                    <p className="text-gray-700 text-lg mb-4 font-semibold">
                      ⏰ 9:47 AM: Reading Article With Helix
                    </p>
                    <p className="text-gray-600 mb-4">
                      You see a complex term. Here's what happens:
                    </p>
                    <ul className="space-y-2 text-gray-600 ml-6">
                      <li>→ Highlight the term</li>
                      <li>→ Right-click → "Explain this"</li>
                      <li>→ Instant answer appears in sidebar</li>
                      <li>→ Keep reading—you never left the page</li>
                    </ul>
                    <div className="mt-4 p-4 bg-green-100 rounded">
                      <p className="text-green-700 font-semibold">
                        ⚡ Time: 3 seconds
                      </p>
                      <p className="text-green-700">
                        ✅ Still reading. Flow intact.
                      </p>
                    </div>
                  </div>

                  {/* Scenario 2 After */}
                  <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                    <p className="text-gray-700 text-lg mb-4 font-semibold">
                      ⏰ 11:23 AM: Writing Email With Helix
                    </p>
                    <p className="text-gray-600 mb-4">
                      Your draft needs professional polish:
                    </p>
                    <ul className="space-y-2 text-gray-600 ml-6">
                      <li>→ Click Helix writer icon in your email field</li>
                      <li>→ Type or paste your draft</li>
                      <li>→ Select "Professional tone"</li>
                      <li>→ Click "Insert"</li>
                      <li>→ Done—still in your email tab</li>
                    </ul>
                    <div className="mt-4 p-4 bg-green-100 rounded">
                      <p className="text-green-700 font-semibold">
                        ⚡ Time: 8 seconds
                      </p>
                      <p className="text-green-700">
                        ✅ No tab switch required
                      </p>
                    </div>
                  </div>

                  {/* Scenario 3 After */}
                  <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                    <p className="text-gray-700 text-lg mb-4 font-semibold">
                      ⏰ 2:15 PM: Foreign Product Specs With Helix
                    </p>
                    <p className="text-gray-600 mb-4">
                      Product description in another language:
                    </p>
                    <ul className="space-y-2 text-gray-600 ml-6">
                      <li>→ Select the text</li>
                      <li>→ Click "Translate to English"</li>
                      <li>→ Read translation in sidebar</li>
                      <li>→ Done</li>
                    </ul>
                    <div className="mt-4 p-4 bg-green-100 rounded">
                      <p className="text-green-700 font-semibold">
                        ⚡ Time: 2 seconds
                      </p>
                      <p className="text-green-700">
                        ✅ Context maintained. Purchase decision made.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 p-8 bg-[#3D0B4D] text-white rounded-lg text-center">
                  <h3 className="text-2xl font-bold mb-4">
                    Time Saved Per Day: 1 hour 58 minutes
                  </h3>
                  <p className="text-lg text-purple-200">
                    That's almost a full workweek recovered every month.
                  </p>
                </div>
              </section>

              {/* Section 6: Features */}
              <section id="features" className="p-8 rounded-lg">
                <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                  Why Developers & Creators Are Switching to Helix
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
                    <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl">✨</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Free Built-in AI (Yes, Really)
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Chrome has Gemini Nano built-in. Helix unlocks it—giving
                      you ChatGPT-level responses completely free. Or connect
                      your own API keys for premium models.
                    </p>
                    <p className="text-sm text-purple-600 font-semibold">
                      💎 No subscription. No credit card. No limits.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
                    <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl">🖼️</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Attach Images from Any Page
                    </h3>
                    <p className="text-gray-600 mb-4">
                      See a diagram, chart, or product photo? Right-click → "Add
                      to chat" → Ask questions about it. No downloading, no
                      uploading.
                    </p>
                    <p className="text-sm text-green-600 font-semibold">
                      🎯 Multimodal AI without the hassle
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
                    <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl">🎤</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Just Speak Your Question
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Too lazy to type? Click the mic and ask. Perfect for
                      accessibility, multitasking, or when you're just tired of
                      typing.
                    </p>
                    <p className="text-sm text-orange-600 font-semibold">
                      🔊 Voice-first AI assistant built for real work
                    </p>
                  </div>
                </div>

                <img
                  className="mt-10 rounded-lg mb-10 shadow-lg"
                  src="/assets/switchingimg.png"
                  alt="Helix AI features demonstration showing sidebar and context menu"
                />
              </section>

              {/* Section 8: Quick Win */}
              <section id="quick-win" className="p-8 rounded-lg">
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  Your First 5 Minutes With Helix
                </h2>
                <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#3D0B4D] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      1
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">
                        Install the Extension
                      </p>
                      <p className="text-gray-600">
                        Click the install button, pin Helix to your toolbar. No
                        account required for core features. Takes 30 seconds.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#3D0B4D] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      2
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">
                        Try the Selection Popup
                      </p>
                      <p className="text-gray-600">
                        Open any article, highlight a paragraph, click
                        "Summarize" or "Explain." Watch the magic happen in real
                        time.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#3D0B4D] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      3
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">
                        Attach an Image
                      </p>
                      <p className="text-gray-600">
                        Right-click any image on the web and choose "Add to
                        Helix chat." Ask questions about charts, diagrams, or
                        product photos.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#3D0B4D] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      4
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">
                        Use Voice Input
                      </p>
                      <p className="text-gray-600">
                        Click the microphone icon and speak your question.
                        Perfect when you're multitasking or just don't feel like
                        typing.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#3D0B4D] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      5
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">
                        Save or Copy Results
                      </p>
                      <p className="text-gray-600">
                        Copy the AI response directly into your doc, email, or
                        notes—all without leaving the tab you're working in.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                  <p className="text-gray-700 text-lg">
                    <strong>
                      Most users realize within those first 5 minutes
                    </strong>{" "}
                    that the old way of hopping between AI tabs simply doesn't
                    make sense anymore.
                  </p>
                </div>
              </section>

              {/* Section 9: Conclusion */}
              <section
                id="conclusion"
                className="p-8 rounded-lg bg-gradient-to-br from-[#3D0B4D] to-[#5A1A6D] text-white"
              >
                <h2 className="text-4xl font-bold mb-6 text-center">
                  Stop Losing 2 Hours a Day to Tab Switching
                </h2>
                <div className="space-y-6 text-lg leading-relaxed text-purple-100 mb-8">
                  <p>
                    Helix AI proves that the best AI assistant is the one that
                    lives where you already work. By eliminating context
                    switching, preserving flow states, and respecting your
                    privacy, it transforms browsing into a continuous,
                    intelligent workflow.
                  </p>
                  <p>
                    You've seen the numbers. You've seen the scenarios. You know
                    the frustration of broken flow and wasted time. The question
                    isn't whether you need a better solution—it's why you're
                    still tolerating the old way.
                  </p>
                  <p className="text-xl font-semibold text-white">
                    Install Helix in 30 seconds. If it doesn't change how you
                    work, uninstall with one click. But you won't.
                  </p>
                </div>

                <div className="text-center">
                  <a
                    href="https://chromewebstore.google.com/detail/helix-ai/bjgjagobelgbchmjkgeimeadpnbgldid"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-white text-[#3D0B4D] px-10 py-5 rounded-lg font-bold text-xl hover:bg-gray-100 transition shadow-2xl transform hover:scale-105"
                  >
                    📥 Get Helix Free →
                  </a>

                  <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-purple-200">
                    <div className="flex items-center gap-2">
                      <span>✅</span>
                      <span>Free forever</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>✅</span>
                      <span>No credit card</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>✅</span>
                      <span>30-second setup</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Final CTA Section */}
              <section className="p-8 rounded-lg border-2 border-[#3D0B4D]">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Ready to Reclaim Your Time?
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Join thousands of developers, researchers, writers, and
                  knowledge workers who've already made the switch. Experience
                  AI assistance that actually fits your workflow—not the other
                  way around.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://chromewebstore.google.com/detail/helix-ai/bjgjagobelgbchmjkgeimeadpnbgldid"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-[#3D0B4D] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#5A1A6D] transition shadow-lg"
                  >
                    Install Helix AI (Free)
                  </a>
                  <button
                    onClick={() =>
                      window.open("https://youtu.be/Bn1N3yHpawc", "_blank")
                    }
                    className="inline-flex items-center justify-center border-2 border-[#3D0B4D] text-[#3D0B4D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-300 transition"
                  >
                    Watch Demo Video
                  </button>
                </div>
              </section>
            </article>
          </div>
        </div>
      </div>

      {/* Floating CTA */}
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
            Stop losing 2 hours daily to tab switching. Free forever.
          </p>

          <a
            href="https://chromewebstore.google.com/detail/helix-ai/bjgjagobelgbchmjkgeimeadpnbgldid"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block bg-[#3D0B4D] text-white text-center py-2 rounded-xl font-medium hover:bg-[#5A1A6D] transition"
          >
            Install Free →
          </a>
        </div>
      )}

      {/* Footer */}

      <footer
        className="border-t border-gray-200 mt-16"
        style={{
          backgroundImage:
            "linear-gradient(rgb(61, 11, 77), rgb(55, 57, 121), rgb(39, 97, 156), rgb(34, 135, 182), rgb(69, 173, 201))",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <p className="text-white mb-4">
              {" "}
              <a href="#" className="text-white hover:underline">
                FAQ
              </a>{" "}
              or{" "}
              <a href="#" className="text-white hover:underline">
                contact support
              </a>
              .
            </p>
            <div className="flex justify-center gap-6 text-sm text-white">
              {" "}
              <a
                href="https://ascodelabs.com/company/privacy-policy"
                className="hover:text-gray-300"
              >
                Privacy Policy
              </a>
              <a
                href="https://ascodelabs.com/company/terms-and-services"
                className="hover:text-gray-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HelixAIBlogPost1;
