import { motion } from 'framer-motion';
import { 
  SiReact, 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiPostgresql, 
  SiFramer, 
  SiDocker, 
  SiAmazonwebservices, 
  SiFigma, 
  SiGit, 
  SiGraphql 
} from 'react-icons/si';

const skills = [
  { name: "React", icon: <SiReact />, color: "hover:text-[#61DAFB]" },
  { name: "TypeScript", icon: <SiTypescript />, color: "hover:text-[#3178C6]" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "hover:text-white" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "hover:text-[#06B6D4]" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "hover:text-[#339933]" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "hover:text-[#4169E1]" },
  { name: "Framer", icon: <SiFramer />, color: "hover:text-[#0055FF]" },
  { name: "Docker", icon: <SiDocker />, color: "hover:text-[#2496ED]" },
  { name: "AWS", icon: <SiAmazonwebservices />, color: "hover:text-[#FF9900]" },
  { name: "Figma", icon: <SiFigma />, color: "hover:text-[#F24E1E]" },
  { name: "Git", icon: <SiGit />, color: "hover:text-[#F05032]" },
  { name: "GraphQL", icon: <SiGraphql />, color: "hover:text-[#E10098]" }
];

const TechStack = () => {
    return (
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="py-16 md:py-24 border-y border-slate-900/50 bg-slate-950/50 overflow-hidden"
      >
        <div className="relative flex overflow-x-hidden group mask-gradient w-full">
            {/* First Marquee Loop */}
            <div className="animate-marquee whitespace-nowrap flex gap-12 md:gap-24 items-center">
                {[...skills, ...skills].map((skill, i) => (
                    <div 
                        key={i} 
                        className={`flex items-center gap-3 text-slate-500 transition-all duration-300 cursor-default group/item ${skill.color}`}
                    >
                        <span className="text-3xl md:text-5xl opacity-70 group-hover/item:opacity-100 transition-opacity">
                            {skill.icon}
                        </span>
                        <span className="font-bold text-lg md:text-2xl uppercase tracking-wider opacity-70 group-hover/item:opacity-100 transition-opacity">
                            {skill.name}
                        </span>
                    </div>
                ))}
            </div>
            
            {/* Second Marquee Loop (for seamless effect) */}
            <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-12 md:gap-24 items-center ml-[100%]">
                 {[...skills, ...skills].map((skill, i) => (
                    <div 
                        key={`dup-${i}`} 
                        className={`flex items-center gap-3 text-slate-500 transition-all duration-300 cursor-default group/item ${skill.color}`}
                    >
                        <span className="text-3xl md:text-5xl opacity-70 group-hover/item:opacity-100 transition-opacity">
                            {skill.icon}
                        </span>
                        <span className="font-bold text-lg md:text-2xl uppercase tracking-wider opacity-70 group-hover/item:opacity-100 transition-opacity">
                            {skill.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
      </motion.section>
    );
  };
  
  export default TechStack;
