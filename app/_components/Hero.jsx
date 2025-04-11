import React from 'react';
import Link from 'next/link';
import { BookOpen, Code, ChartBar, Zap } from 'lucide-react';

function Hero() {
  return (
    <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white min-h-screen">
      <div className="mx-auto max-w-screen-xl px-4 py-20 lg:flex lg:flex-col lg:justify-center h-full">
        {/* Header Content */}
        <div className="mx-auto text-center max-w-3xl">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-blue-500/20 p-3 rounded-full">
              <BookOpen size={28} className="text-blue-400" />
            </div>
          </div>
          
          <h1 className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl tracking-tight">
          Vaidik-AI 
          </h1>
          
          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed text-slate-300 font-light">
            Create personalized learning experiences powered by AI that adapt to your students' unique needs
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/dashboard"
              className="rounded-lg bg-blue-600 px-8 py-3 text-sm font-medium text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-200 shadow-lg shadow-blue-500/20"
            >
              Get Started
            </Link>
            
          </div>
        </div>
       
        {/* Animated Badge */}
        <div className="flex justify-center my-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-full py-2 px-4 flex items-center gap-2 animate-pulse">
            <span className="bg-green-500 h-2 w-2 rounded-full"></span>
            <span className="text-sm font-medium text-slate-300">New AI Engine Released</span>
          </div>
        </div>

        {/* AI Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-screen-xl mx-auto">
          <div className="bg-gradient-to-b from-white/10 to-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm hover:translate-y-[-5px] transition-all duration-300 group">
            <div className="bg-blue-500/20 p-3 rounded-lg inline-flex mb-4 group-hover:bg-blue-500/30 transition-all">
              <Code className="text-blue-400" />
            </div>
            <h3 className="text-xl font-medium text-white mb-2">Course Generator</h3>
            <p className="text-slate-300 text-sm">
              Create customized learning paths using AI that adapt to each student's progress and learning style.
            </p>
          </div>

          <div className="bg-gradient-to-b from-white/10 to-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm hover:translate-y-[-5px] transition-all duration-300 group">
            <div className="bg-purple-500/20 p-3 rounded-lg inline-flex mb-4 group-hover:bg-purple-500/30 transition-all">
              <BookOpen className="text-purple-400" />
            </div>
            <h3 className="text-xl font-medium text-white mb-2">Smart Quizzes</h3>
            <p className="text-slate-300 text-sm">
              Engage students with adaptive quizzes that provide instant feedback and adjust difficulty automatically.
            </p>
          </div>

          <div className="bg-gradient-to-b from-white/10 to-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm hover:translate-y-[-5px] transition-all duration-300 group">
            <div className="bg-emerald-500/20 p-3 rounded-lg inline-flex mb-4 group-hover:bg-emerald-500/30 transition-all">
              <ChartBar className="text-emerald-400" />
            </div>
            <h3 className="text-xl font-medium text-white mb-2">Deep Analytics</h3>
            <p className="text-slate-300 text-sm">
              Gain valuable insights with comprehensive analytics that highlight strengths and improvement areas.
            </p>
          </div>

          <div className="bg-gradient-to-b from-white/10 to-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm hover:translate-y-[-5px] transition-all duration-300 group">
            <div className="bg-amber-500/20 p-3 rounded-lg inline-flex mb-4 group-hover:bg-amber-500/30 transition-all">
              <Zap className="text-amber-400" />
            </div>
            <h3 className="text-xl font-medium text-white mb-2">Easy Integration</h3>
            <p className="text-slate-300 text-sm">
              Connect seamlessly with your existing tools and LMS platforms with our simple API and plugins.
            </p>
          </div>
        </div>

        {/* Statistics */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 mb-8 max-w-screen-xl mx-auto">
          <div className="text-center">
            <p className="text-3xl font-bold text-white">10k+</p>
            <p className="text-slate-400 text-sm">Educators</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white">250k+</p>
            <p className="text-slate-400 text-sm">Students</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white">500+</p>
            <p className="text-slate-400 text-sm">Institutions</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white">98%</p>
            <p className="text-slate-400 text-sm">Satisfaction</p>
          </div>
        </div>  */}
      </div>
    </section>
  );
}

export default Hero;