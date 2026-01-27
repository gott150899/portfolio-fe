import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-white mb-12 text-center"
      >
        Featured Work
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`group relative rounded-3xl bg-slate-900 border border-slate-800 p-8 hover:border-slate-700 transition-colors ${project.colSpan} overflow-hidden`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            <div className="relative z-10 flex flex-col h-full items-start">
                <div className="flex gap-2 mb-4">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-mono text-slate-400 bg-slate-950/50 px-2 py-1 rounded border border-slate-800">
                            {tag}
                        </span>
                    ))}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 mb-8 max-w-sm">{project.description}</p>
                
                <div className="mt-auto">
                    <Link to={`/project/${project.id}`} className="flex items-center gap-2 text-sm font-medium text-white group-hover:underline decoration-cyan-500 underline-offset-4">
                        View Project <ExternalLink size={14} />
                    </Link>
                </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
