import React from 'react';
import { Check, X } from 'lucide-react';

function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-indigo-400 to-indigo-800 rounded-lg">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            Pricing
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose the Perfect Plan for Your Needs
          </h2>
          <p className="max-w-2xl mx-auto text-slate-200 text-lg">
            Flexible pricing options designed to support educators at every stage of their journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="group bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-blue-600">
            <div className="p-8">
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Basic</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold text-slate-900 group-hover:text-blue-600">₹0</span>
                <span className="text-slate-500 ml-2">/month</span>
              </div>
              <p className="text-slate-600 mb-6">Perfect for individual educators getting started with AI-powered teaching.</p>
              <button className="w-full py-3 px-4 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors">
                Get Started
              </button>
            </div>
            <div className="border-t border-slate-200 bg-slate-50 p-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Up to 5 AI-generated courses</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Basic analytics dashboard</span>
                </li>
                <li className="flex items-start">
                  <X size={20} className="text-slate-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-500">100 student enrollments</span>
                </li>
                <li className="flex items-start">
                  <X size={20} className="text-slate-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-500">Advanced quiz features</span>
                </li>
                <li className="flex items-start">
                  <X size={20} className="text-slate-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-500">White-labeling options</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Standard Plan - Highlighted */}
          <div className="group bg-white border-2 border-blue-600 rounded-2xl overflow-hidden shadow-lg relative transition-all duration-300 hover:shadow-xl transform md:scale-105">
            <div className="absolute top-0 inset-x-0">
              <div className="bg-blue-600 text-white text-xs font-semibold py-1 text-center">
                MOST POPULAR
              </div>
            </div>
            <div className="p-8 pt-10">
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Standard</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold text-slate-900 group-hover:text-blue-600">₹149</span>
                <span className="text-slate-500 ml-2">/month</span>
              </div>
              <p className="text-slate-600 mb-6">Ideal for growing educational programs with more advanced needs.</p>
              <button className="w-full py-3 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
            <div className="border-t border-slate-200 bg-slate-50 p-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Unlimited AI-generated courses</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Advanced analytics & reporting</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">500 student enrollments</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Advanced quiz & assessment tools</span>
                </li>
                <li className="flex items-start">
                  <X size={20} className="text-slate-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-500">White-labeling options</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="group bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-blue-600">
            <div className="p-8">
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Premium</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold text-slate-900 group-hover:text-blue-600">₹199</span>
                <span className="text-slate-500 ml-2">/month</span>
              </div>
              <p className="text-slate-600 mb-6">Complete solution for schools and educational institutions.</p>
              <button className="w-full py-3 px-4 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors">
                Get Started
              </button>
            </div>
            <div className="border-t border-slate-200 bg-slate-50 p-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Unlimited AI-generated courses</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Enterprise-level analytics</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Unlimited student enrollments</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Advanced quiz & assessment tools</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">White-labeling & API access</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 text-center">
          <p className="text-slate-100">
            Have questions about our pricing?{" "}
            <a href="#" className="text-gray-900 font-medium hover:underline">
              View our FAQ
            </a>{" "}
            or{" "}
            <a href="#" className="text-gray-900 font-medium hover:underline">
              contact our sales team
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}


export default Pricing;