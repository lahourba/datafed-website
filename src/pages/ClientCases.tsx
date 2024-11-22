import React from 'react';
import { TrendingUp, Users, BarChart } from 'lucide-react';

const ClientCases = () => {
  const cases = [
    {
      client: "Global Retail Corp",
      industry: "Retail",
      challenge: "Needed to optimize inventory management across 500+ stores",
      solution: "Implemented automated data pipeline and predictive analytics",
      results: [
        "30% reduction in stockouts",
        "25% decrease in excess inventory",
        "$2M annual savings"
      ],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      client: "FinTech Solutions",
      industry: "Financial Services",
      challenge: "Required real-time fraud detection system",
      solution: "Developed ML-powered transaction monitoring system",
      results: [
        "95% fraud detection rate",
        "60% reduction in false positives",
        "$5M prevented fraud losses"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      client: "HealthCare Plus",
      industry: "Healthcare",
      challenge: "Needed to improve patient outcome predictions",
      solution: "Created comprehensive data analytics dashboard",
      results: [
        "40% improvement in prediction accuracy",
        "20% reduction in readmission rates",
        "15% cost savings"
      ],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Client Success Stories</h1>
          <p className="text-xl text-gray-600">
            Discover how we've helped organizations transform their data into valuable insights
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">500+</h3>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">98%</h3>
            <p className="text-gray-600">Client Satisfaction</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <BarChart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">$50M+</h3>
            <p className="text-gray-600">Client Cost Savings</p>
          </div>
        </div>

        {/* Case Studies */}
        <div className="space-y-16">
          {cases.map((case_, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{case_.client}</h3>
                  <p className="text-blue-600 mb-4">{case_.industry}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Challenge:</h4>
                    <p className="text-gray-600">{case_.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Solution:</h4>
                    <p className="text-gray-600">{case_.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Results:</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {case_.results.map((result, i) => (
                        <li key={i}>{result}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="relative h-64 md:h-auto">
                  <img
                    src={case_.image}
                    alt={case_.client}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientCases;