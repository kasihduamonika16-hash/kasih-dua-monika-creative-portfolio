import React from 'react';
import { 
  GraduationCap, Briefcase, Award, ArrowRight, 
  ExternalLink, Code2, Palette, Video, Box 
} from 'lucide-react';

interface AboutSectionProps {
  onOpenPage: (pageNumber: number) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenPage }) => {
  const experiences = [
    {
      role: 'Website Administrator',
      org: 'University Muhammadiyah of Pringsewu (UMPRI CENTRE)',
      period: 'Sep 2026 – Present',
      desc: 'Managed the maintenance of the university official website, information architecture, and integration of campus digital media.',
    },
    {
      role: 'Head of Media and Communications Division',
      org: 'Information Systems and Technology Student Association (HIMASTI)',
      period: 'Jan 2024 – Jan 2025',
      desc: 'Managed the visual publishing team, Instagram feed design, documentation video production, and student activity posters.',
    },
    {
      role: 'Media Communication Team Member',
      org: 'Student Creativity Program (PKM)',
      period: 'Aug 2023 – May 2024',
      desc: 'Collaborated with lecturers and research teams to design e-book covers and educational modules based on Lampung ethnomathematics.',
    },
    {
      role: 'General Treasurer',
      org: 'Muhammadiyah Student Association (IMM)',
      period: 'Dec 2023 – Dec 2024',
      desc: 'Managed the financial administration and funding of organizational activities.',
    },
    {
      role: 'Internship Training Course',
      org: 'CV Ratu Mandiri',
      period: 'Feb 2021 – Apr 2021',
      desc: 'Completed industry training in graphic design, multimedia, and promotional content production.',
    },
  ];

  const softwareStack = [
    { name: 'Adobe Photoshop', category: 'Graphic & Photo', level: 'Advanced' },
    { name: 'Adobe Premiere Pro', category: 'Video Editing', level: 'Advanced' },
    { name: 'Adobe Illustrator', category: 'Vector & Logos', level: 'Proficient' },
    { name: 'Adobe After Effects', category: 'Motion & VFX', level: 'Proficient' },
    { name: 'Adobe Lightroom', category: 'Color Grading', level: 'Advanced' },
    { name: 'Unity 3D', category: 'Augmented Reality', level: 'Intermediate' },
    { name: 'Blender 3D', category: '3D Modelling', level: 'Intermediate' },
    { name: 'Canva Pro', category: 'Social Media & E-Book', level: 'Advanced' },
    { name: 'CapCut / Filmora', category: 'Short Video / Reels', level: 'Advanced' },
  ];

  return (
    <section id="about" className="py-12 md:py-16 bg-slate-950/60 border-t border-slate-800/80 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-lime-400 mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>Profile and Track Record</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Get to Know Me Better
            </h2>
          
          </div>

          
        </div>

        {/* 2-Column Content Split */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Photo Card & Education */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-xl">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-2xl border-2 border-lime-400/50 shadow-lg">
                  <img
                    src="/assets/monika_photo.png"
                    alt="Kasih Dua Monika"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div className="space-y-1 text-center sm:text-left">
                  <h3 className="font-display text-xl font-bold text-white">
                    Kasih Dua Monika
                  </h3>
                  <p className="text-xs font-semibold text-lime-400">
                    Bachelor of Computer Science
                  </p>
                  <p className="text-xs text-slate-400 pt-1">
                    Lampung, Indonesia
                  </p>
                  
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-800 text-xs text-slate-300 leading-relaxed">
                "Graduate of the Information Systems and Technology program with a strong interest in technology, graphic design, and data analysis. Experienced in multimedia, visual design, and data management. Possesses strong communication and teamwork skills, with the ability to adapt to new environments and learn new skills quickly."
              </div>
            </div>

            {/* Education Card */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                <GraduationCap className="w-4 h-4 text-blue-400" />
                <span>Formal Education</span>
              </div>

              <div className="space-y-4">
                <div className="border-l-2 border-blue-500/60 pl-3.5 space-y-0.5">
                  <h4 className="text-sm font-bold text-white">
                    Muhammadiyah University of Pringsewu (UMPRI)
                  </h4>
                  <p className="text-xs text-lime-400 font-medium">
                    Bachelor's Degree in Information Systems and Technology
                  </p>
                  <p className="text-[11px] text-slate-400">
                    2022 – 2026
                  </p>
                </div>

                <div className="border-l-2 border-slate-700 pl-3.5 space-y-0.5">
                  <h4 className="text-sm font-bold text-white">
                    SMK Negeri Sukoharjo
                  </h4>
                  <p className="text-xs text-slate-300 font-medium">
                    Multimedia
                  </p>
                  <p className="text-[11px] text-slate-400">
                    2019 – 2022
                  </p>
                </div>
              </div>
            </div>

            {/* Software Toolkit */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-lime-400" />
                  Software & Toolkit
                </span>
                <span className="text-[11px] text-lime-400 font-mono">9 Core Applications</span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {softwareStack.map((tool, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-slate-800/80 bg-slate-950/60 p-2.5 text-xs"
                  >
                    <div className="font-semibold text-white truncate">{tool.name}</div>
                    <div className="text-[10px] text-slate-400 truncate">{tool.category}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Experience Timeline & Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300">
                  <Briefcase className="w-4 h-4 text-lime-400" />
                  <span>Work and Organizational Experience</span>
                </div>
                <span className="text-xs text-slate-400">From 2021 – 2026</span>
              </div>

              <div className="space-y-6">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="relative pl-6 border-l border-slate-800 space-y-1 group">
                    <span className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full border-2 border-slate-950 bg-lime-400 group-hover:scale-125 transition-transform" />
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="text-sm font-bold text-white group-hover:text-lime-400 transition-colors">
                        {exp.role}
                      </h4>
                      <span className="font-mono text-[11px] font-semibold text-lime-400/90">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-xs font-medium text-blue-400">
                      {exp.org}
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed pt-1">
                      {exp.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Competencies Bento Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 space-y-2">
                <Palette className="w-5 h-5 text-lime-400" />
                <h4 className="text-sm font-bold text-white">Graphic & UI Design</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Instagram feed design, event posters, e-book curriculum modules, and visual identities for communities.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 space-y-2">
                <Box className="w-5 h-5 text-blue-400" />
                <h4 className="text-sm font-bold text-white">3D & Augmented Reality</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  3D modeling of commercial skincare products in Blender and the Nuwo Sesat Lampung mobile AR educational app in Unity.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 space-y-2">
                <Video className="w-5 h-5 text-amber-400" />
                <h4 className="text-sm font-bold text-white">Film & Color Grading</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Short-film cinematography, video editing in Premiere Pro and After Effects, and street photography.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
