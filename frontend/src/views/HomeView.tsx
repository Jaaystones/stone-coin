import { FC } from "react";
import NavBar from "../components/shared/Navbar";

const HomeView: FC = () => {
  return (
    <>
      {/* Space Background Container */}
      <div className="relative min-h-screen bg-black overflow-hidden">
        {/* Navbar */}
        <NavBar />
        
        {/* Background Image Layer - Dynamic and Sharp */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-parallax"
          style={{
            backgroundImage: "url('/rocks.jpg')",
            backgroundSize: 'cover',
            imageRendering: '-webkit-optimize-contrast',
            transform: 'scale(1.1)',
            willChange: 'transform',
          }}
        >
          
          {/* Dark overlay for better text readability - with subtle pulse */}
          <div className="absolute inset-0 bg-black/35 animate-pulse-slow"></div>
        </div>

        {/* Additional overlay for depth and contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80"></div>
        
        {/* Animated stars overlay for extra sparkle */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: Math.random() * 0.8 + 0.2,
              }}
            ></div>
          ))}
        </div>
        
        {/* Hero Section with Content */}
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
            <div className="text-center">
              {/* Animated Badge */}
              <div className="inline-block mb-8 animate-bounce-slow">
                <span className="inline-flex items-center px-6 py-3 rounded-full text-sm font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white shadow-2xl shadow-purple-500/50 border-2 border-white/20">
                  🚀 TO THE MOON AND BEYOND! 🌙
                </span>
              </div>
              
              {/* Main Title with Space Effect */}
              <div className="relative mb-8">
                <h1 className="text-7xl sm:text-9xl lg:text-[12rem] font-black mb-6 relative leading-none">
                  <span className="absolute inset-0 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 text-transparent bg-clip-text blur-2xl opacity-60">
                    STONE
                  </span>
                  <span className="relative bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 text-transparent bg-clip-text drop-shadow-2xl">
                    STONE
                  </span>
                </h1>
                {/* Shooting Stars around title */}
                <div className="absolute top-0 left-1/4 w-20 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent animate-shooting-star"></div>
                <div className="absolute bottom-10 right-1/3 w-16 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-shooting-star-delayed"></div>
              </div>

              {/* Subtitle with Glow */}
              <p className="text-xl sm:text-3xl max-w-4xl mx-auto mb-12 leading-relaxed font-medium px-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 drop-shadow-lg">
                  The Cutest Asteroid in the Crypto Galaxy! 🪐
                </span>
                <br />
                <span className="text-gray-300 text-lg sm:text-xl mt-2 block drop-shadow-lg">
                  Join the cosmic revolution. HODL tight as we blast through the universe!
                </span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
                <button className="group relative px-10 py-5 text-xl font-black text-white rounded-2xl overflow-hidden transform hover:scale-110 transition-all duration-300 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 animate-gradient-shift"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 blur-xl opacity-75"></div>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    🔥 BUY $STONE NOW 🔥
                    <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
                <button className="group relative px-10 py-5 text-xl font-black text-white rounded-2xl border-4 border-purple-500 hover:border-pink-500 bg-black/40 backdrop-blur-sm hover:bg-black/60 transform hover:scale-110 transition-all duration-300 shadow-2xl shadow-purple-500/30">
                  <span className="flex items-center justify-center gap-2">
                    💎 JOIN THE CREW 💎
                  </span>
                </button>
              </div>

              {/* Stats Counter */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto">
                <div className="bg-black/60 backdrop-blur-md border-2 border-purple-500/30 rounded-2xl p-4 sm:p-6 transform hover:scale-105 transition-all shadow-xl shadow-purple-500/20">
                  <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-orange-400 to-pink-500 text-transparent bg-clip-text mb-2">1B</div>
                  <div className="text-xs sm:text-sm text-gray-300 font-bold">SUPPLY</div>
                </div>
                <div className="bg-black/60 backdrop-blur-md border-2 border-pink-500/30 rounded-2xl p-4 sm:p-6 transform hover:scale-105 transition-all shadow-xl shadow-pink-500/20">
                  <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text mb-2">∞</div>
                  <div className="text-xs sm:text-sm text-gray-300 font-bold">POTENTIAL</div>
                </div>
                <div className="bg-black/60 backdrop-blur-md border-2 border-blue-500/30 rounded-2xl p-4 sm:p-6 transform hover:scale-105 transition-all shadow-xl shadow-blue-500/20">
                  <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text mb-2">🚀</div>
                  <div className="text-xs sm:text-sm text-gray-300 font-bold">TO MOON</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="relative z-10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 drop-shadow-2xl">
                Why Choose STONE?
              </h2>
              <p className="text-lg text-gray-300 font-medium">
                Built different. Built for the community. Built to moon. 🌙
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group bg-gradient-to-br from-purple-900/40 to-black/60 backdrop-blur-md p-8 rounded-3xl border-2 border-purple-500/30 hover:border-purple-500 shadow-2xl shadow-purple-500/20 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all shadow-lg shadow-purple-500/50">
                  <span className="text-4xl">👥</span>
                </div>
                <h3 className="text-3xl font-black mb-4 text-white drop-shadow-lg">Community-Driven</h3>
                <p className="text-gray-300 leading-relaxed font-medium">STONE is powered by a diamond-handed community. We're not just holders, we're family! 💎🙌</p>
              </div>
              <div className="group bg-gradient-to-br from-pink-900/40 to-black/60 backdrop-blur-md p-8 rounded-3xl border-2 border-pink-500/30 hover:border-pink-500 shadow-2xl shadow-pink-500/20 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all shadow-lg shadow-pink-500/50">
                  <span className="text-4xl">🔥</span>
                </div>
                <h3 className="text-3xl font-black mb-4 text-white drop-shadow-lg">Deflationary</h3>
                <p className="text-gray-300 leading-relaxed font-medium">Every transaction burns tokens. Supply goes down, value goes UP! Simple memenomic. 📈</p>
              </div>
              <div className="group bg-gradient-to-br from-orange-900/40 to-black/60 backdrop-blur-md p-8 rounded-3xl border-2 border-orange-500/30 hover:border-orange-500 shadow-2xl shadow-orange-500/20 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all shadow-lg shadow-orange-500/50">
                  <span className="text-4xl">🪐</span>
                </div>
                <h3 className="text-3xl font-black mb-4 text-white drop-shadow-lg">Cosmic Branding</h3>
                <p className="text-gray-300 leading-relaxed font-medium">STONE isn't just a coin, it's a VIBE. Cutest asteroid in the galaxy. Change our mind. 😎</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tokenomics Section */}
        <div className="relative z-10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 drop-shadow-2xl">
                Tokenomics
              </h2>
              <p className="text-lg text-gray-300 font-medium">
                Fair launch. No BS. Just pure meme magic. ✨
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-gradient-to-br from-blue-900/40 to-black/60 backdrop-blur-md p-10 rounded-3xl border-2 border-blue-500/30 hover:border-blue-500 shadow-2xl shadow-blue-500/20 transform hover:-translate-y-2 hover:scale-105 transition-all">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 mb-6 shadow-2xl shadow-blue-500/50">
                  <span className="text-4xl font-black text-white">1B</span>
                </div>
                <h3 className="text-3xl font-black mb-2 text-white drop-shadow-lg">Total Supply</h3>
                <p className="text-gray-300 font-bold">1 Billion $STONE</p>
                <p className="text-sm text-gray-400 mt-2">Fixed. No more minting. Period.</p>
              </div>
              <div className="text-center bg-gradient-to-br from-purple-900/40 to-black/60 backdrop-blur-md p-10 rounded-3xl border-2 border-purple-500/30 hover:border-purple-500 shadow-2xl shadow-purple-500/20 transform hover:-translate-y-2 hover:scale-105 transition-all">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mb-6 shadow-2xl shadow-purple-500/50">
                  <span className="text-4xl font-black text-white">90%</span>
                </div>
                <h3 className="text-3xl font-black mb-2 text-white drop-shadow-lg">Community</h3>
                <p className="text-gray-300 font-bold">For the People</p>
                <p className="text-sm text-gray-400 mt-2">Liquidity pool + Airdrops + Rewards</p>
              </div>
              <div className="text-center bg-gradient-to-br from-pink-900/40 to-black/60 backdrop-blur-md p-10 rounded-3xl border-2 border-pink-500/30 hover:border-pink-500 shadow-2xl shadow-pink-500/20 transform hover:-translate-y-2 hover:scale-105 transition-all">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 mb-6 shadow-2xl shadow-pink-500/50">
                  <span className="text-4xl font-black text-white">10%</span>
                </div>
                <h3 className="text-3xl font-black mb-2 text-white drop-shadow-lg">Marketing</h3>
                <p className="text-gray-300 font-bold">Growth Fund</p>
                <p className="text-sm text-gray-400 mt-2">CEX listings, influencers, memes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="relative z-10 py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 rounded-3xl shadow-2xl p-12 sm:p-16 text-center">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDM2YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20 animate-pulse-slow" />
              <div className="relative z-10">
                <h2 className="text-4xl sm:text-6xl font-black mb-6 text-white drop-shadow-2xl">
                  Ready to Join the Asteroid Belt?
                </h2>
                <p className="text-xl sm:text-2xl mb-10 text-white/90 font-bold drop-shadow-lg">
                  Don't be a paper hand. Diamond hands only! 💎🙌
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <button className="group relative px-12 py-6 text-2xl font-black text-purple-600 bg-white rounded-2xl shadow-2xl hover:shadow-white/50 transform hover:scale-110 transition-all duration-300">
                    <span className="flex items-center justify-center gap-3">
                      🚀 BUY $STONE
                      <svg className="w-7 h-7 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </button>
                  <button className="px-12 py-6 text-2xl font-black text-white bg-white/20 backdrop-blur-sm rounded-2xl border-4 border-white hover:bg-white hover:text-purple-600 shadow-2xl transform hover:scale-110 transition-all duration-300">
                    💬 JOIN TELEGRAM
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="relative z-10 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <a 
                href="#twitter" 
                className="group bg-black/60 backdrop-blur-md p-6 rounded-2xl border-2 border-blue-500/30 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/30 transform hover:-translate-y-2 transition-all duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/50">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </div>
                <h3 className="text-sm font-black text-white">TWITTER</h3>
              </a>
              <a 
                href="#telegram" 
                className="group bg-black/60 backdrop-blur-md p-6 rounded-2xl border-2 border-cyan-500/30 hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/30 transform hover:-translate-y-2 transition-all duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-cyan-500/50">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </div>
                <h3 className="text-sm font-black text-white">TELEGRAM</h3>
              </a>
              <a 
                href="#discord" 
                className="group bg-black/60 backdrop-blur-md p-6 rounded-2xl border-2 border-indigo-500/30 hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/30 transform hover:-translate-y-2 transition-all duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-indigo-400 to-purple-600 mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-indigo-500/50">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </div>
                <h3 className="text-sm font-black text-white">DISCORD</h3>
              </a>
              <a 
                href="#dexscreener" 
                className="group bg-black/60 backdrop-blur-md p-6 rounded-2xl border-2 border-green-500/30 hover:border-green-500 hover:shadow-xl hover:shadow-green-500/30 transform hover:-translate-y-2 transition-all duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-green-500/50">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-sm font-black text-white">CHART</h3>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="relative z-10 border-t border-purple-500/20 bg-black/60 backdrop-blur-md py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="text-3xl font-black mb-2 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 text-transparent bg-clip-text">
                $STONE
              </h3>
              <p className="text-gray-400 mb-4 font-medium">
                The cutest asteroid rocketing to the moon 🚀🌙
              </p>
              <p className="text-sm text-gray-500">
                © 2025 STONE. All rights reserved. Not financial advice. DYOR. NFA. 
              </p>
              <p className="text-xs text-gray-600 mt-2">
                This is a meme coin with no intrinsic value or expectation of financial return.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomeView;
