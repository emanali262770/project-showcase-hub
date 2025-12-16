import React from "react";
import { useNavigate } from "react-router-dom";
import { companyLogos } from "@/data/companyLogos";

const companies = [
  { name: "Infinity Byte", slug: "infinity-byte" },
  { name: "Core Tech", slug: "core-tech" },
  { name: "Sky Links", slug: "sky-links" },
];

const NewCards = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full mb-6">
            <span className="text-sm font-semibold text-blue-700">EXPLORE PORTFOLIO</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Companies</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Specialized technology innovators crafting exceptional digital experiences 
            for businesses worldwide
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {companies.map((c) => (
            <div
              key={c.name}
              onClick={() => navigate(`/companies/${c.slug}`)}
              className="group cursor-pointer relative overflow-hidden bg-white/80 backdrop-blur-sm rounded-3xl border border-white/50 p-8 shadow-2xl shadow-blue-100/30 hover:shadow-3xl hover:shadow-blue-200/50 transition-all duration-500 hover:-translate-y-3"
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="bg-white/90 backdrop-blur-sm rounded-[calc(1.5rem-2px)] h-full w-full" />
              </div>
              
              {/* Logo Container */}
              <div className="relative flex justify-center h-32 mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative">
                  {/* Outer glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-500 scale-110" />
                  
                  {/* Logo background */}
                  <div className="relative p-5 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                    <img
                      src={companyLogos[c.name]}
                      alt={c.name}
                      className="h-20 w-auto object-contain drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative text-center">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent mb-3 group-hover:from-blue-700 group-hover:to-indigo-800 transition-all duration-500">
                  {c.name}
                </h3>
                
                <p className="text-gray-500 mb-8 text-lg font-medium">
                  Explore complete portfolio →
                </p>
                
                {/* Enhanced CTA Button */}
                <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-lg group-hover:shadow-xl group-hover:from-blue-700 group-hover:to-indigo-700 transition-all duration-500 group-hover:scale-105">
                  <span className="text-white font-semibold text-base">View Details</span>
                  <svg 
                    className="w-5 h-5 text-white group-hover:translate-x-2 transition-transform duration-500" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>

              {/* Floating particles effect */}
              <div className="absolute top-4 left-4 w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-700" />
              <div className="absolute top-4 right-4 w-2 h-2 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-700 delay-100" />
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-700 delay-200" />
              <div className="absolute bottom-4 right-4 w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-700 delay-300" />
            </div>
          ))}
        </div>

       
      </div>
    </div>
  );
};

export default NewCards;