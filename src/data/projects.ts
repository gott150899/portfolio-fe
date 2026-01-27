export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  tags: string[]; // Short list for card
  tech: string[]; // Full list for details
  features: string[];
  image: string;
  repoLink: string;
  liveLink: string;
  color: string;
  colSpan: string;
  role: string;
}

export const projects: Project[] = [
  {
    id: "saas-dashboard",
    title: "SaaS Dashboard",
    category: "Analytics Platform",
    description: "A comprehensive analytics dashboard for fintech companies.",
    fullDescription: "A comprehensive analytics dashboard for fintech companies that helps users visualize complex data streams in real-time. Built with performance in mind using React Server Components and streamed data.",
    tags: ["React", "Tailwind", "Recharts"],
    tech: ["React", "TypeScript", "Tailwind CSS", "Recharts", "Node.js", "Redis"],
    features: [
        "Real-time Websocket data updates",
        "Customizable widget layout",
        "Dark/Light mode support",
        "Role-based access control (RBAC)"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    repoLink: "#",
    liveLink: "#",
    color: "from-blue-500/20 to-blue-600/5",
    colSpan: "col-span-1 md:col-span-2",
    role: "Lead Frontend Developer responsible for architecture, performance optimization, and UI implementation."
  },
  {
    id: "ecommerce-api",
    title: "E-Commerce API",
    category: "Backend Services",
    description: "High-performance microservices backend handling 10k+ req/s.",
    fullDescription: "A robust microservices architecture designed to scale. This API handles product management, order processing, and payment integrations with high availability and fault tolerance.",
    tags: ["Node.js", "Docker", "Redis"],
    tech: ["Node.js", "Express", "Docker", "Kubernetes", "Redis", "PostgreSQL"],
    features: [
        "Microservices architecture with Docker",
        "Redis caching for high performance",
        "Automated CI/CD pipelines",
        "Stripe payment gateway integration"
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2370&auto=format&fit=crop",
    repoLink: "#",
    liveLink: "#",
    color: "from-emerald-500/20 to-emerald-600/5",
    colSpan: "col-span-1",
    role: "Backend Engineer focused on database schema design, API security, and deployment infrastructure."
  },
  {
    id: "ai-chat-interface",
    title: "AI Chat Interface",
    category: "AI Application",
    description: "Real-time streaming chat UI with markdown support.",
    fullDescription: "A modern chat interface built for interacting with Large Language Models. Features streamed responses, code syntax highlighting, and persistent chat history.",
    tags: ["Next.js", "OpenAI", "Framer"],
    tech: ["Next.js", "OpenAI API", "Framer Motion", "Tailwind CSS", "Prisma"],
    features: [
        "Streamed AI responses like ChatGPT",
        "Markdown & Code block syntax highlighting",
        "Chat history persistence",
        "Customizable system prompts"
    ],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2664&auto=format&fit=crop",
    repoLink: "#",
    liveLink: "#",
    color: "from-violet-500/20 to-violet-600/5",
    colSpan: "col-span-1",
    role: "Full Stack Developer implementing the UI/UX and integrating with OpenAI SDK."
  },
  {
    id: "portfolio-v1",
    title: "Portfolio v1",
    category: "Personal Website",
    description: "Previous iteration of my personal site.",
    fullDescription: "The first version of my personal portfolio. While simpler, it taught me the fundamentals of responsive design and semantic HTML.",
    tags: ["HTML", "SCSS", "JS"],
    tech: ["HTML5", "Sass (SCSS)", "JavaScript (ES6)", "Gulp"],
    features: [
        "Fully responsive layout",
        "Custom CSS animations",
        "Form submission to email",
        "Lightweight & fast loading"
    ],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2555&auto=format&fit=crop",
    repoLink: "#",
    liveLink: "#",
    color: "from-orange-500/20 to-orange-600/5",
    colSpan: "col-span-1 md:col-span-2",
    role: "Solo Designer & Developer."
  },
];
