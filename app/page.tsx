import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-amber-900 dark:via-orange-900 dark:to-red-900">
      {/* Header */}
      <header className="px-6 py-4">
        <nav className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-start gap-2">
            <svg className="w-12 h-12 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <div className="mt-2=1">
              <div className="text-sm font-serif text-amber-500 dark:text-amber-400 tracking-widest opacity-75">
                Author's
              </div>
              <div className="text-2xl font-serif font-bold text-amber-800 dark:text-amber-200 leading-none">
                Champion
              </div>
              {/* <div className="text-sm font-serif text-amber-500 dark:text-amber-400 tracking-widest opacity-75">
                by Loreland
              </div> */}
            </div>
          </div>
          <a href="/auth/signin" className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium">
            Sign In
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-amber-900 dark:text-amber-100 mb-6 leading-tight">
            Your Story Deserves
            <span className="text-amber-600"> The World</span>
          </h1>
          <p className="text-xl text-amber-700 dark:text-amber-300 max-w-2xl mx-auto mb-8 font-light italic">
            "Share your opening act and captivate readers before you publish. Build an audience around
            your story with our platform designed to showcase the first moments that hook them all."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/auth/signin" className="px-8 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium inline-block text-center">
              Start Writing Now
            </a>
            <button className="px-8 py-3 border border-amber-300 text-amber-700 dark:text-amber-300 dark:border-amber-600 rounded-lg hover:bg-amber-50 dark:hover:bg-amber-800 transition-colors font-medium">
              Browse Success Stories
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative max-w-4xl mx-auto mb-20">
          <div className="bg-white dark:bg-amber-900 rounded-2xl shadow-2xl p-8 border border-amber-200 dark:border-amber-700">
            <div className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 rounded-lg h-64 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="text-white text-center relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                    <path d="M14 2v6h6" />
                    <path d="M16 13H8" />
                    <path d="M16 17H8" />
                    <path d="M10 9H8" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-semibold">Your Publishing Studio</h3>
                <p className="text-orange-100 font-light">Where stories come to life</p>
              </div>
            </div>
          </div>
        </div>

        {/* Multi-Platform Publishing */}
        <div className="text-center mb-20 px-6">
          <div className="bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-800 dark:to-orange-800 rounded-2xl p-8 border border-amber-200 dark:border-amber-700">
            <h2 className="text-3xl font-serif font-bold text-amber-900 dark:text-amber-100 mb-4">
              From Demo to Distribution
            </h2>
            <p className="text-lg text-amber-700 dark:text-amber-300 max-w-3xl mx-auto mb-6">
              Convert your complete manuscript
              to formats perfectly suited for Amazon KDP, Apple Books, Barnes & Noble, and more.
              Your demo becomes the gateway to publish-ready files.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-amber-600 dark:text-amber-400">
              <span className="px-3 py-1 bg-white/50 dark:bg-amber-700/50 rounded-full">Amazon KDP</span>
              <span className="px-3 py-1 bg-white/50 dark:bg-amber-700/50 rounded-full">Apple Books</span>
              <span className="px-3 py-1 bg-white/50 dark:bg-amber-700/50 rounded-full">Barnes & Noble</span>
              <span className="px-3 py-1 bg-white/50 dark:bg-amber-700/50 rounded-full">Google Play Books</span>
              <span className="px-3 py-1 bg-white/50 dark:bg-amber-700/50 rounded-full">Kobo</span>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-amber-900 dark:text-amber-100">
            Our Suite of Author Tools
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white/50 dark:bg-amber-800/30 rounded-xl">
            <div className="w-12 h-12 bg-amber-100 dark:bg-amber-800 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-semibold text-amber-900 dark:text-amber-100 mb-2">Elegant Editor</h3>
            <p className="text-amber-700 dark:text-amber-300">A flexible editor with the capability to instantly import manuscripts from a myriad of platforms.</p>
          </div>
          <div className="text-center p-6 bg-white/50 dark:bg-amber-800/30 rounded-xl">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-800 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-semibold text-amber-900 dark:text-amber-100 mb-2">Beautiful Books</h3>
            <p className="text-amber-700 dark:text-amber-300">A conversion tool that will take any format you've written your manuscript in and construct it for any platform.</p>
          </div>
          <div className="text-center p-6 bg-white/50 dark:bg-amber-800/30 rounded-xl">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-800 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-semibold text-amber-900 dark:text-amber-100 mb-2">Champion's Highlight</h3>
            <p className="text-amber-700 dark:text-amber-300">Request to get your Demo featured on our weekly highlights to push stand-out projects to the forefront of our application.</p>
          </div>
        </div>

        {/* Author's Dashboard */}
        <div className="mt-20 mb-20">
          <div className="bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-800 dark:to-orange-800 rounded-2xl p-12 border border-amber-200 dark:border-amber-700">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-serif font-bold text-amber-900 dark:text-amber-100">
                Author's Dashboard
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/50 dark:bg-amber-800/30 rounded-xl p-8 border border-amber-200 dark:border-amber-700">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-semibold text-amber-900 dark:text-amber-100 mb-4">Story Analytics</h3>
              <p className="text-amber-700 dark:text-amber-300 leading-relaxed">
                Track reader engagement, view counts, and demographic insights for your demos. 
                Understand which chapters captivate audiences and optimize your storytelling approach 
                with detailed performance metrics.
              </p>
            </div>
            
            <div className="bg-white/50 dark:bg-amber-800/30 rounded-xl p-8 border border-amber-200 dark:border-amber-700">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-semibold text-amber-900 dark:text-amber-100 mb-4">Secure Hosting & Storage</h3>
              <p className="text-amber-700 dark:text-amber-300 leading-relaxed">
                Host your stories with confidence using our secure cloud infrastructure. 
                Enjoy offline storage capabilities, automatic backups, and seamless access 
                to your manuscripts from anywhere, anytime.
              </p>
            </div>
          </div>
          </div>
        </div>
      </main>
    </div>
  );
}
