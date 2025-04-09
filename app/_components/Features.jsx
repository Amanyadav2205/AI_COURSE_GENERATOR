import React from 'react';
import { Sparkles, Users, Brain, BookOpen, Rocket, MessageCircle } from 'lucide-react';

function Features() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-gray-200 to-indigo-400">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Transform Your Teaching Experience
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 text-lg">
            Our platform combines cutting-edge AI with intuitive design to create a seamless educational experience for both teachers and students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 group">
            <div className="bg-blue-100 p-3 rounded-lg inline-flex mb-5 group-hover:bg-blue-200 transition-all">
              <Brain className="text-blue-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">AI-Powered Learning</h3>
            <p className="text-slate-600">
              Leverage advanced machine learning algorithms that adapt to each student's unique learning style and pace, creating truly personalized education.
            </p>
            <div className="mt-6 flex items-center text-blue-600 font-medium">
              <span>Learn more</span>
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 group">
            <div className="bg-purple-100 p-3 rounded-lg inline-flex mb-5 group-hover:bg-purple-200 transition-all">
              <BookOpen className="text-purple-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">Interactive Content</h3>
            <p className="text-slate-600">
              Create engaging lessons with interactive quizzes, multimedia resources, and gamified elements that boost student participation and knowledge retention.
            </p>
            <div className="mt-6 flex items-center text-purple-600 font-medium">
              <span>Learn more</span>
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 group">
            <div className="bg-emerald-100 p-3 rounded-lg inline-flex mb-5 group-hover:bg-emerald-200 transition-all">
              <Users className="text-emerald-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">Community Platform</h3>
            <p className="text-slate-600">
              Join a collaborative network of educators sharing resources, best practices, and innovative teaching methods to elevate education worldwide.
            </p>
            <div className="mt-6 flex items-center text-emerald-600 font-medium">
              <span>Learn more</span>
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 group">
            <div className="bg-amber-100 p-3 rounded-lg inline-flex mb-5 group-hover:bg-amber-200 transition-all">
              <Rocket className="text-amber-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">Rapid Course Creation</h3>
            <p className="text-slate-600">
              Build comprehensive courses in minutes instead of weeks with our AI templates, saving you valuable time while maintaining educational quality.
            </p>
            <div className="mt-6 flex items-center text-amber-600 font-medium">
              <span>Learn more</span>
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 group">
            <div className="bg-pink-100 p-3 rounded-lg inline-flex mb-5 group-hover:bg-pink-200 transition-all">
              <MessageCircle className="text-pink-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">24/7 AI Tutoring</h3>
            <p className="text-slate-600">
              Provide your students with round-the-clock support through our intelligent tutoring system that answers questions and provides guidance anytime.
            </p>
            <div className="mt-6 flex items-center text-pink-600 font-medium">
              <span>Learn more</span>
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Feature 6 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 group">
            <div className="bg-indigo-100 p-3 rounded-lg inline-flex mb-5 group-hover:bg-indigo-200 transition-all">
              <Sparkles className="text-indigo-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">Smart Analytics</h3>
            <p className="text-slate-600">
              Gain valuable insights into student performance with detailed analytics that help you identify learning gaps and optimize your teaching methods.
            </p>
            <div className="mt-6 flex items-center text-indigo-600 font-medium">
              <span>Learn more</span>
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;