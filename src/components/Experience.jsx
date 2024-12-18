import React from 'react';

const workExperienceData = [
  {
    company: "Macinwork",
    roles: [
      {
        title: "IT Automation Manager",
        type: "Permanent",
        duration: "Jun 2024 - Present · 7 mos",
      },
      {
        title: "Network and System Administrator",
        type: "Apprenticeship",
        duration: "Jan 2024 - Jun 2024 · 6 mos",
      },
      {
        title: "Network and System Administrator (Junior)",
        type: "Apprenticeship",
        duration: "Jun 2023 - Dec 2023 · 7 mos",
      },
    ],
    location: "Hybrid",
  },
  {
    company: "Etronik Consulting",
    roles: [
      {
        title: "Full Stack Developer Intern",
        type: "Internship",
        duration: "Dec 2022 - May 2023 · 6 mos",
      },
    ],
    location: "Hybrid",
  },
];

const Experience = () => {
  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-20">Work Experience</h2>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-black hidden md:block"></div>

          {/* Experience Items */}
          {workExperienceData.map((job, index) => (
            <div
              key={index}
              className={`relative mb-12 flex flex-col items-center md:items-start ${
                index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >
              {/* Timeline Dot */}
              <div className="z-10 w-8 h-8 bg-[#0f172a] rounded-full border-4 border-black"></div>

              {/* Card */}
              <div className="bg-white bg-opacity-40 p-6 rounded-lg shadow-md w-full md:w-5/12 mx-4 mt-6 md:mt-0">
                {/* Company Name */}
                <h3 className="text-2xl font-semibold text-black mb-2">{job.company}</h3>
                <p className="text-gray-700 mb-4">{job.location}</p>

                {/* Roles within the company */}
                {job.roles.map((role, roleIndex) => (
                  <div key={roleIndex} className="mb-4">
                    <p className="text-lg text-gray-900 font-medium">{role.title}</p>
                    <p className="text-sm text-gray-700">{role.type}</p>
                    <p className="text-gray-700">{role.duration}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
