import React, { useState } from 'react';
import { projects } from '../data/siteData';
import { ArrowUpRight } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const categories = ['ALL', 'LIVING', 'KITCHEN', 'BEDROOM', 'RENOVATION'];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'LIVING') return project.id.includes('living');
    if (activeFilter === 'KITCHEN') return project.id.includes('kitchen');
    if (activeFilter === 'BEDROOM') return project.id.includes('bedroom');
    if (activeFilter === 'RENOVATION') return project.id.includes('home') || project.id.includes('renovation');
    return true;
  });

  return (
    <section id="projects" className="py-18 md:py-22 bg-[#F8F9F7] border-b border-[#DCE3E2]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-[#DCE3E2] gap-6">
          <div>

            <h2 className="text-4xl sm:text-5xl font-light text-[#172022] tracking-[-0.035em]">
              SELECTED SPACES
            </h2>
          </div>

          {/* Minimal Filter Tabs */}
          <div className="flex items-center flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 text-xs font-mono tracking-wider transition-colors duration-200 border ${
                  activeFilter === cat
                    ? 'bg-[#174C55] text-[#F8F9F7] border-[#174C55]'
                    : 'bg-transparent text-[#687477] border-transparent hover:border-[#DCE3E2] hover:text-[#172022]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Asymmetrical / Editorial Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className={`group flex flex-col ${idx % 2 === 1 ? 'md:mt-12' : ''}`}
            >
              {/* Image Container with Subtle Zoom */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#F1F4F2] border border-[#DCE3E2]">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.category} by AMCOM Interiors`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                
                {/* Subtle overlay gradient on bottom for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Floating Category Badge */}

              </div>

              {/* Minimal Text Meta Below Image */}
              <div className="pt-6 pb-2 flex items-start justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-light text-[#172022] tracking-[-0.02em] group-hover:text-[#174C55] transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3 mt-1.5 text-xs text-[#687477]">
                    <span>{project.location}</span>
                    <span className="w-1 h-1 bg-[#DCE3E2]" />
                    <span className="font-mono">{project.year}</span>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-none border border-[#DCE3E2] flex items-center justify-center text-[#172022] group-hover:border-[#174C55] group-hover:bg-[#174C55] group-hover:text-white transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
