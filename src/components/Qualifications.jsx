import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faCloud, faDesktop, faNetworkWired, faLaptopCode, faDatabase } from '@fortawesome/free-solid-svg-icons';

const skillsData = [
  { category: "Automation", skills: "Workflow and orchestration setup, OS automation with Bash and PowerShell", icon: faCogs },
  { category: "Cloud Environment Creation and Management", skills: "Microsoft Azure, Google Workspace, OVH, IONOS", icon: faCloud },
  { category: "System Installation & Configuration", skills: "Servers, routers, firewalls, switches, access points", icon: faDesktop },
  { category: "Network Protocols and Services", skills: "DHCP, DNS, VPN, FTP, NTFS", icon: faNetworkWired },
  { category: "Frontend Development", skills: "React, JavaScript, Tailwind CSS", icon: faLaptopCode },
  { category: "Backend Development", skills: "Python, MySQL", icon: faDatabase },
];

const Qualifications = () => {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-20">My Qualifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((item, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-40 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                <FontAwesomeIcon icon={item.icon} className="mr-2" />
                {item.category}
              </h3>
              <p>{item.skills}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Qualifications