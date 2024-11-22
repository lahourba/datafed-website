import React from 'react';
import { BarChart3, Database, LineChart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Data Into Insights
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Specializing in data auditing, engineering, and visualization
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <Database className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Data Auditing</h3>
              <p className="text-gray-600">
                Comprehensive analysis of your data infrastructure to identify opportunities and risks
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <LineChart className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Data Engineering</h3>
              <p className="text-gray-600">
                Build robust data pipelines and infrastructure for efficient data processing
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <BarChart3 className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Data Visualization</h3>
              <p className="text-gray-600">
                Create compelling visual stories from your data for better decision-making
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to unlock your data's potential?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help transform your business through data
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 border-2 border-blue-400 text-lg font-medium rounded-md text-blue-400 hover:bg-blue-400 hover:text-white transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;