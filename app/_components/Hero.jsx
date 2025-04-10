// "use client";
// import React, { useState } from 'react';
// import Link from 'next/link'; // Import Link for navigation
// import Image from 'next/image'; // Import Image for optimized images

// function Hero() {
//   const [showMore, setShowMore] = useState(false);

//   return (
//     <section className="relative bg-gradient-to-br from-blue-700 via-white-300 to-pink-300 text-white h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
//       {/* Background Animation */}
//       <div className="absolute inset-0">
//         <div className="bg-gradient-to-r from-purple-300 via-blue-400 to-indigo-600 opacity-40 w-72 h-72 rounded-full blur-3xl animate-pulse top-10 left-10"></div>
//         <div className="bg-gradient-to-l from-yellow-300 via-red-400 to-pink-500 opacity-40 w-96 h-96 rounded-full blur-3xl animate-pulse top-32 right-10"></div>
//       </div>

//       {/* Main Content */}
//       <div className="z-10 text-center">
//         <h1 className="text-5xl sm:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-yellow-00 to-yellow-300 drop-shadow-md">
//           Welcome to Vaidik-AI 
//         </h1>
//         <p className="mt-8 text-lg sm:text-xl text-white/90 max-w-2xl leading-relaxed mx-auto">
//           Revolutionize your teaching with AI-powered tools. Tailor content to every student, create engaging courses, and inspire learning like never before.
//         </p>
//         <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 justify-center">
//           <Link
//             href="/dashboard" // Specify the destination path
//             className="px-8 py-3 bg-yellow-400 text-black rounded-full text-lg font-semibold shadow-lg hover:bg-yellow-500 transition duration-300"
//           >
//             Get Started
//           </Link>
//           <button
//             onClick={() => setShowMore(!showMore)}
//             className="px-8 py-3 border border-white/70 text-white/90 rounded-full text-lg font-semibold shadow-lg hover:bg-white/10 hover:border-yellow-400 transition duration-300"
//           >
//             {showMore ? "Hide Details" : "Learn More"}
//           </button>
//         </div>
//       </div>

//       {/* Additional Content - Toggled */}
//       {showMore && (
//         <div className="z-10 mt-8 bg-white/10 p-6 rounded-lg backdrop-blur-md shadow-md max-w-xl text-white text-left mx-auto">
//           <h3 className="text-2xl font-bold mb-3 text-yellow-300">Why Choose Vaidik-AI ?</h3>
//           <ul className="list-disc ml-6 space-y-2">
//             <li>AI-driven course generation for personalized learning.</li>
//             <li>Interactive tools to boost student engagement.</li>
//             <li>Analytics to track progress and improve outcomes.</li>
//             <li>Seamless integration with popular platforms.</li>
//           </ul>
//         </div>
//       )}

//       {/* Example Course Card */}
//       <div className="z-10 mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 max-w-screen-xl">
//         <Link href={'/course/' + 123}>
//           <Image
//             src="/example-course-banner.jpg"
//             alt="Course Banner"
//             width={300}
//             height={200}
//             className="w-full h-[200px] object-cover rounded-lg"
//           />
//         </Link>
//       </div>
//     </section>
//   );
// }

// export default Hero;


// "use client";
// import React, { useState } from 'react';

// function Hero() {
//   // State to toggle more info
//   const [showMore, setShowMore] = useState(false);

//   return (
//     <section className="relative bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 text-white h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
//       {/* Background Animation */}
//       <div className="absolute inset-0">
//         <div className="bg-gradient-to-r from-purple-300 via-blue-400 to-indigo-600 opacity-40 w-72 h-72 rounded-full blur-3xl animate-pulse top-10 left-10"></div>
//         <div className="bg-gradient-to-l from-yellow-300 via-red-400 to-pink-500 opacity-40 w-96 h-96 rounded-full blur-3xl animate-pulse top-32 right-10"></div>
//       </div>

//       {/* Main Content */}
//       <div className="z-10 text-center">
//         <h1 className="text-5xl sm:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-red-400 to-pink-600 drop-shadow-md">
//           Welcome to Vaidik-AI 
//         </h1>
//         <p className="mt-8 text-lg sm:text-xl text-white/90 max-w-2xl leading-relaxed mx-auto">
//           Revolutionize your teaching with AI-powered tools. Tailor content to every student, create engaging courses, and inspire learning like never before.
//         </p>
//         <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 justify-center">
//           <a
//             href="#features"
//             className="px-8 py-3 bg-yellow-400 text-black rounded-full text-lg font-semibold shadow-lg hover:bg-yellow-500 transition duration-300"
//           >
//             Get Started
//           </a>
//           <button
//             onClick={() => setShowMore(!showMore)}
//             className="px-8 py-3 border border-white/70 text-white/90 rounded-full text-lg font-semibold shadow-lg hover:bg-white/10 hover:border-yellow-400 transition duration-300"
//           >
//             {showMore ? "Hide Details" : "Learn More"}
//           </button>
//         </div>
//       </div>

//       {/* Additional Content - Toggled */}
//       {showMore && (
//         <div className="z-10 mt-8 bg-white/10 p-6 rounded-lg backdrop-blur-md shadow-md max-w-xl text-white text-left mx-auto">
//           <h3 className="text-2xl font-bold mb-3 text-yellow-300">Why Choose Vaidik-AI ?</h3>
//           <ul className="list-disc ml-6 space-y-2">
//             <li>AI-driven course generation for personalized learning.</li>
//             <li>Interactive tools to boost student engagement.</li>
//             <li>Analytics to track progress and improve outcomes.</li>
//             <li>Seamless integration with popular platforms.</li>
//           </ul>
//         </div>
//       )}

//       {/* AI Features Section */}
//       <div className="z-10 mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 max-w-screen-xl">
//         <div className="bg-white/20 p-6 rounded-lg shadow-lg backdrop-blur-lg hover:scale-105 transition-transform duration-300">
//           <h3 className="text-xl font-semibold text-yellow-300">AI Course Generator</h3>
//           <p className="text-white/80 mt-2">
//             Generate personalized courses based on student progress and needs. Leverage the power of AI to create tailored content.
//           </p>
//         </div>

//         <div className="bg-white/20 p-6 rounded-lg shadow-lg backdrop-blur-lg hover:scale-105 transition-transform duration-300">
//           <h3 className="text-xl font-semibold text-yellow-300">Interactive Quizzes</h3>
//           <p className="text-white/80 mt-2">
//             Build interactive quizzes that engage students and provide instant feedback using AI-generated questions.
//           </p>
//         </div>

//         <div className="bg-white/20 p-6 rounded-lg shadow-lg backdrop-blur-lg hover:scale-105 transition-transform duration-300">
//           <h3 className="text-xl font-semibold text-yellow-300">Progress Analytics</h3>
//           <p className="text-white/80 mt-2">
//             Track student progress with detailed analytics and suggestions for improving learning outcomes.
//           </p>
//         </div>

//         <div className="bg-white/20 p-6 rounded-lg shadow-lg backdrop-blur-lg hover:scale-105 transition-transform duration-300">
//           <h3 className="text-xl font-semibold text-yellow-300">Seamless Integration</h3>
//           <p className="text-white/80 mt-2">
//             Easily integrate with popular platforms to streamline the teaching experience and connect with students.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;

// "use client";
// import React, { useState } from 'react';

// function Hero() {
//   // State to toggle more info
//   const [showMore, setShowMore] = useState(false);

//   return (
//     <section className="relative bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 text-white h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
//       {/* Background Animation */}
//       <div className="absolute inset-0">
//         <div className="bg-gradient-to-r from-purple-300 via-blue-400 to-indigo-600 opacity-40 w-72 h-72 rounded-full blur-3xl animate-pulse top-10 left-10"></div>
//         <div className="bg-gradient-to-l from-yellow-300 via-red-400 to-pink-500 opacity-40 w-96 h-96 rounded-full blur-3xl animate-pulse top-32 right-10"></div>
//       </div>

//       {/* Main Content */}
//       <div className="z-10 text-center">
//         <h1 className="text-5xl sm:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-red-400 to-pink-600 drop-shadow-md">
//           Welcome to Vaidik-AI 
//         </h1>
//         <p className="mt-8 text-lg sm:text-xl text-white/90 max-w-2xl leading-relaxed mx-auto">
//           Revolutionize your teaching with AI-powered tools. Tailor content to every student, create engaging courses, and inspire learning like never before.
//         </p>
//         <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 justify-center">
//           <a
//             href="#features"
//             className="px-8 py-3 bg-yellow-400 text-black rounded-full text-lg font-semibold shadow-lg hover:bg-yellow-500 transition duration-300"
//           >
//             Get Started
//           </a>
//           <button
//             onClick={() => setShowMore(!showMore)}
//             className="px-8 py-3 border border-white/70 text-white/90 rounded-full text-lg font-semibold shadow-lg hover:bg-white/10 hover:border-yellow-400 transition duration-300"
//           >
//             {showMore ? "Hide Details" : "Learn More"}
//           </button>
//         </div>
//       </div>

//       {/* Additional Content - Toggled */}
//       {showMore && (
//         <div className="z-10 mt-8 bg-white/10 p-6 rounded-lg backdrop-blur-md shadow-md max-w-xl text-white text-left mx-auto">
//           <h3 className="text-2xl font-bold mb-3 text-yellow-300">Why Choose Vaidik-AI ?</h3>
//           <ul className="list-disc ml-6 space-y-2">
//             <li>AI-driven course generation for personalized learning.</li>
//             <li>Interactive tools to boost student engagement.</li>
//             <li>Analytics to track progress and improve outcomes.</li>
//             <li>Seamless integration with popular platforms.</li>
//           </ul>
//         </div>
//       )}
//     </section>
//   );
// }

// export default Hero;

// "use client";
// import React, { useState } from 'react';

// function Hero() {
//   // State to toggle more info
//   const [showMore, setShowMore] = useState(false);

//   return (
//     <section className="relative bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 text-white h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
//       {/* Background Animation */}
//       <div className="absolute inset-0">
//         <div className="bg-gradient-to-r from-purple-300 via-blue-400 to-indigo-600 opacity-40 w-72 h-72 rounded-full blur-3xl animate-pulse top-10 left-10"></div>
//         <div className="bg-gradient-to-l from-yellow-300 via-red-400 to-pink-500 opacity-40 w-96 h-96 rounded-full blur-3xl animate-pulse top-32 right-10"></div>
//       </div>

//       {/* Main Content */}
//       <div className="z-10">
//         <h1 className="text-5xl sm:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-red-400 to-pink-600 drop-shadow-md">
//           Welcome to Vaidik-AI 
//         </h1>
//         <p className="mt-8 text-lg sm:text-xl text-white/90 max-w-2xl leading-relaxed">
//           Revolutionize your teaching with AI-powered tools. Tailor content to every student, create engaging courses, and inspire learning like never before.
//         </p>
//         <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
//           <a
//             href="#features"
//             className="px-8 py-3 bg-yellow-400 text-black rounded-full text-lg font-semibold shadow-lg hover:bg-yellow-500 transition duration-300"
//           >
//             Get Started
//           </a>
//           <button
//             onClick={() => setShowMore(!showMore)}
//             className="px-8 py-3 border border-white/70 text-white/90 rounded-full text-lg font-semibold shadow-lg hover:bg-white/10 hover:border-yellow-400 transition duration-300"
//           >
//             {showMore ? "Hide Details" : "Learn More"}
//           </button>
//         </div>
//       </div>

//       {/* Additional Content - Toggled */}
//       {showMore && (
//         <div className="z-10 mt-8 bg-white/10 p-6 rounded-lg backdrop-blur-md shadow-md max-w-xl text-white text-left">
//           <h3 className="text-2xl font-bold mb-3 text-yellow-300">Why Choose Vaidik-AI ?</h3>
//           <ul className="list-disc ml-6 space-y-2">
//             <li>AI-driven course generation for personalized learning.</li>
//             <li>Interactive tools to boost student engagement.</li>
//             <li>Analytics to track progress and improve outcomes.</li>
//             <li>Seamless integration with popular platforms.</li>
//           </ul>
//         </div>
//       )}
//     </section>
//   );
// }

// export default Hero;

// import React from 'react';

// function Hero() {
//   return (
//     <section className="bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 text-white h-screen flex flex-col justify-center items-center text-center px-4">
//       <h1 className="text-4xl sm:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
//         Welcome to Vaidik-AI 
//       </h1>
//       <p className="mt-4 text-lg sm:text-xl">
//         Unleash the power of AI to create personalized learning experiences that engage and inspire.
//       </p>
//       <a
//         href="#features"
//         className="mt-6 px-6 py-3 bg-white text-blue-600 rounded hover:bg-gray-100 text-lg font-semibold"
//       >
//         Get Started
//       </a>
//     </section>
//   );
// }

// export default Hero;
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