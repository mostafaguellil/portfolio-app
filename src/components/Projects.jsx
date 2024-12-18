import React from 'react';

const Projects = () => {
  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-20">My Projects</h2>

        {/* Content */}
        <div className="relative flex justify-center">
          <div 
            className="bg-white rounded-lg shadow-lg w-full md:w-8/12 mx-4 p-6 opacity-0 transform translate-y-10 transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl animate-fade-in"
          >
            {/* Card Content */}
            <div className="text-center">
              <p className="text-gray-600 mb-4">
              If you're on the lookout for some exciting and innovative projects, be sure to check out my GitHub! It's a hub for creative solutions and cutting-edge work that I’m passionate about. You can find it here: github.com/mostafaguellil. Feel free to explore, and don’t hesitate to reach out if you'd like access to any private repositories—I’d love to share more with you!
              </p>
            </div>

            {/* GitHub Link */}
            <div className="text-center mt-4">
              <a 
                href="https://github.com/mostafaguellil" 
                className="bg-[#0f172a] text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300"
                target="_blank" 
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
