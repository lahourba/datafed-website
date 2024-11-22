import React from 'react';
import { BookOpen, Award, ExternalLink } from 'lucide-react';

const Training = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Data Training Programs</h1>
          <p className="text-xl text-gray-600">
            Master the tools that drive modern data analysis
          </p>
        </div>

        {/* Featured Courses */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* SQL Course */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="flex items-center mb-4">
                <BookOpen className="h-8 w-8 text-blue-600" />
                <h3 className="text-2xl font-bold ml-3">SQL Mastery</h3>
              </div>
              <p className="text-gray-600 mb-6">
                From basics to advanced queries, learn how to effectively work with databases and write efficient SQL queries.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <Award className="h-5 w-5 text-green-500 mr-2" />
                  Database fundamentals
                </li>
                <li className="flex items-center text-gray-700">
                  <Award className="h-5 w-5 text-green-500 mr-2" />
                  Complex queries and joins
                </li>
                <li className="flex items-center text-gray-700">
                  <Award className="h-5 w-5 text-green-500 mr-2" />
                  Performance optimization
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>

          {/* Tableau Course */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="flex items-center mb-4">
                <BookOpen className="h-8 w-8 text-blue-600" />
                <h3 className="text-2xl font-bold ml-3">Tableau Visualization</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Create compelling data visualizations and interactive dashboards with Tableau.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <Award className="h-5 w-5 text-green-500 mr-2" />
                  Data visualization principles
                </li>
                <li className="flex items-center text-gray-700">
                  <Award className="h-5 w-5 text-green-500 mr-2" />
                  Interactive dashboard creation
                </li>
                <li className="flex items-center text-gray-700">
                  <Award className="h-5 w-5 text-green-500 mr-2" />
                  Advanced analytics integration
                </li>
              </ul>
              <a
                href="https://www.udemy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
              >
                View on Udemy
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Why Choose Our Training */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Why Choose Our Training?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 inline-block mb-4">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Expert Instructors</h4>
              <p className="text-gray-600">Learn from industry professionals with years of experience</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 inline-block mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Practical Focus</h4>
              <p className="text-gray-600">Real-world projects and hands-on exercises</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 inline-block mb-4">
                <ExternalLink className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Flexible Learning</h4>
              <p className="text-gray-600">Learn at your own pace with lifetime access</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;