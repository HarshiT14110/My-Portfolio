/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  Code2, 
  Cpu, 
  Globe, 
  ExternalLink,
  Terminal,
  Calendar,
  Clock,
  ChevronRight
} from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { GlassButton, GlassFilter, GlassEffect } from "./components/ui/liquid-glass";

const PROJECTS = [
  {
    title: "iNTILIQuiz-Lab",
    subtitle: "AI-Powered Quiz Platform",
    link: "https://i-ntili-quiz-lab.vercel.app",
    tech: ["React.js", "Tailwind CSS", "Gemini API"],
    description: "Built an AI-driven quiz platform supporting 15+ subjects with adjustable difficulty levels. Integrated Gemini API for automated and dynamic question generation. Optimized UI responsiveness and state management for seamless cross-device experience.",
    icon: <Cpu className="h-6 w-6" />,
    color: "bg-pastel-blue"
  },
  {
    title: "MockPrep",
    subtitle: "A Self Interview Platform",
    link: "https://mock-prep-omega.vercel.app/",
    tech: ["React.js", "Node.js", "MongoDB", "Google OAuth", "Gemini API"],
    description: "Developed a full-stack AI interview preparation platform for practicing technical, HR, and behavioral interviews. Integrated Gemini API to generate real-time interview questions and intelligent feedback. Implemented secure authentication with Google OAuth.",
    icon: <Terminal className="h-6 w-6" />,
    color: "bg-pastel-green"
  },
  {
    title: "Pixel Party",
    subtitle: "Multiplayer Draw and Guess Game",
    link: "https://pixelparty-ecru.vercel.app",
    tech: ["JavaScript", "Tailwind CSS", "Socket.IO"],
    description: "Created a real-time multiplayer drawing and guessing game using WebSockets. Implemented synchronized gameplay with custom canvas tools and timer-based mechanics. Enhanced performance and UI responsiveness for smooth real-time interaction.",
    icon: <Globe className="h-6 w-6" />,
    color: "bg-pastel-pink"
  },
  {
    title: "Try-On Me",
    subtitle: "See it on yourself before you own it.",
    link: "https://try-on-me-zeta.vercel.app",
    tech: ["Next.js", "Framer Motion", "React.js"],
    description: "A modern virtual try-on platform that lets users preview outfits or products in real time, helping them make confident buying decisions with an interactive and seamless experience.",
    icon: <Code2 className="h-6 w-6" />,
    color: "bg-pastel-purple"
  },
  {
  title: "KittyForge",
  subtitle: "AI-powered frontend generation platform.",
  link: "https://kitty-forge.vercel.app",
  tech: ["React", "TypeScript", "Vite", "Node.js", "Firebase", "Gemini API"],
  description: "Built a full-stack AI platform that converts natural language prompts into fully functional websites. Implemented real-time code generation, live preview rendering, command palette interactions, and secure authentication using Firebase, delivering a Cursor-like development experience in the browser.",
  icon: <Code2 className="h-6 w-6" />,
  color: "bg-pastel-blue"
}
  {
  title: "Crafting More Experiences Ahead",
  subtitle: "Exciting Projects Ahead",
  tech: [],
  description: "I’m constantly building and exploring new ideas. Stay tuned for more innovative projects and experiences coming soon.",
  icon: <Clock className="h-6 w-6" />,
  color: "bg-pastel-yellow",
  link: "#",
  isPlaceholder: true
  }
];

const SKILLS = [
  { category: "Languages", items: ["JavaScript", "TypeScript", "C++"] },
  { category: "Frontend", items: ["HTML5", "CSS3", "React.js", "Next.js", "Tailwind CSS", "Bootstrap"] },
  { category: "Backend & DB", items: ["Node.js", "PostgreSQL", "MongoDB"] },
  { category: "Tools", items: ["Git", "GitHub", "VS Code"] },
  { category: "AI & APIs", items: ["OpenAI API", "Gemini API", "REST APIs", "Socket.IO"] }
];

const CERTIFICATIONS = [
  { title: "Google Cloud Computing Foundations Certificate", type: "Certification" },
  { title: "Winner – eSports Tournament, Innov8 Tech Fest 2023", type: "Achievement" }
];

export default function App() {
  const containerRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div ref={containerRef} className="relative w-full font-body selection:bg-sand-300 selection:text-white overflow-x-hidden">
      <GlassFilter />

      {/* Global Gradient Background Layer */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-sand-100 via-sand-300 to-black pointer-events-none" />

      {/* Floating Navbar */}
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl transition-all duration-700 ${isScrolled ? "top-4" : "top-6"}`}>
        <div className={`flex items-center justify-between px-10 py-5 rounded-full border transition-all duration-500 ${isScrolled ? "bg-zinc-900/80 border-white/10 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]" : "bg-white/5 border-white/10 backdrop-blur-xl"}`}>
          <div className="flex items-center space-x-4 group cursor-pointer">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-sand-300 via-sand-400 to-sand-600 flex items-center justify-center shadow-2xl group-hover:rotate-12 transition-all duration-500">
              <span className="font-heading font-bold text-white text-lg">HA</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold tracking-tighter text-2xl text-white leading-none">Harshit.</span>
            </div>
          </div>
          <div className="hidden lg:flex items-center space-x-12 text-[11px] font-heading font-bold uppercase tracking-[0.4em] text-white/60">
            <a href="#about" className="hover:text-sand-300 transition-all duration-300 relative group">
              About
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-sand-300 transition-all duration-500 group-hover:w-full" />
            </a>
            <a href="#education" className="hover:text-sand-300 transition-all duration-300 relative group">
              Education
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-sand-300 transition-all duration-500 group-hover:w-full" />
            </a>
            <a href="#work" className="hover:text-sand-300 transition-all duration-300 relative group">
              Work
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-sand-300 transition-all duration-500 group-hover:w-full" />
            </a>
            <a href="#certifications" className="hover:text-sand-300 transition-all duration-300 relative group">
              Certifications
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-sand-300 transition-all duration-500 group-hover:w-full" />
            </a>
            <a href="#contact" className="hover:text-sand-300 transition-all duration-300 relative group">
              Contact
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-sand-300 transition-all duration-500 group-hover:w-full" />
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="lg:hidden h-8 w-8 flex flex-col justify-center items-end space-y-1.5 group">
              <div className="h-[2px] w-8 bg-white transition-all group-hover:w-4" />
              <div className="h-[2px] w-6 bg-white transition-all group-hover:w-8" />
              <div className="h-[2px] w-8 bg-white transition-all group-hover:w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Video */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: backgroundY, opacity: heroOpacity }} className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          >
            <source src="/background.mp4" type="video/mp4" />
          </video>
          {/* Transition Gradient Overlay - Smoother blend */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent via-transparent to-sand-50" />
          <div className="absolute bottom-0 left-0 w-full h-[60vh] bg-gradient-to-t from-sand-50 via-sand-50/90 via-sand-50/40 to-transparent" />
        </motion.div>

        <div className="relative z-10 text-center px-8 pt-48">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="mb-8 font-organical text-7xl font-bold tracking-tight md:text-[10rem] leading-[0.9] text-white drop-shadow-2xl">
              Harshit <br />
              <span className="text-sand-300">Agarwal</span>
            </h1>
            <p className="mx-auto mb-12 max-w-2xl font-organical text-xl text-white/90 md:text-3xl italic drop-shadow-lg">
              "Crafting digital experiences where code meets creativity."
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-32">
              <GlassButton href="#work" className="!bg-sand-300 !text-white hover:!bg-sand-400 shadow-xl">
                <div className="flex items-center space-x-3">
                  <span className="font-heading text-sm tracking-widest uppercase font-bold">Open For Opportunities</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </GlassButton>
              <a href="#contact" className="group relative font-heading text-sm font-bold uppercase tracking-[0.2em] text-white hover:text-sand-300 transition-colors drop-shadow-md">
                <span className="relative z-10">Let's Connect</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-sand-300 transition-all duration-300 group-hover:w-full" />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2 opacity-50"
          >
            <div className="h-10 w-[1px] bg-white" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-white">Scroll</span>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 pt-96 pb-32 bg-gradient-to-b from-sand-50 to-sand-100 scroll-mt-32">
        <div className="max-w-7xl mx-auto px-8 md:px-24 grid grid-cols-1 gap-20 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="font-heading text-sm font-bold uppercase tracking-[0.4em] text-sand-400 mb-6 block">The Vision</span>
            <h2 className="mb-10 font-heading text-6xl font-bold md:text-8xl text-zinc-900 leading-[1.1]">
              Simplicity <br />
              <span className="font-serif italic font-light text-sand-400">is the ultimate sophistication.</span>
            </h2>
            <p className="text-2xl leading-relaxed text-zinc-800/70 md:text-3xl font-light max-w-xl">
              I specialize in building high-performance web systems that prioritize user experience and clean architecture. 
              My approach blends technical rigor with an organic design aesthetic.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            {SKILLS.map((skill, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white/40 border border-sand-300/20 backdrop-blur-sm hover:bg-white/60 transition-all duration-500 shadow-sm">
                <h3 className="mb-4 font-heading text-lg font-bold text-zinc-900">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span key={i} className="rounded-full bg-sand-300/20 px-3 py-1 text-xs font-medium text-zinc-800">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="relative z-10 py-32 px-8 md:px-24 scroll-mt-32 bg-gradient-to-b from-sand-100 to-sand-300">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="font-heading text-sm font-bold uppercase tracking-[0.4em] text-sand-400 mb-6 block">Qualifications</span>
            <h2 className="font-heading text-6xl font-bold md:text-8xl text-zinc-900 leading-[1.1]">
              Education <span className="font-serif italic font-light text-sand-400">&</span> Background
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative pl-12 border-l-2 border-sand-300/30"
            >
              <div className="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-sand-300 shadow-[0_0_15px_rgba(212,163,115,0.5)]" />
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div className="flex flex-col">
                  <h3 className="text-3xl font-heading font-bold text-zinc-900">JECRC University, Jaipur</h3>
                  <p className="text-sand-400 font-heading font-bold tracking-widest text-sm uppercase">B.Tech in Computer Science and Engineering</p>
                </div>
                <span className="text-sand-400/60 font-heading font-bold tracking-widest text-sm uppercase mt-2 md:mt-0">Aug 2022 — Jul 2026</span>
              </div>
              <p className="text-xl text-zinc-800/60 font-light mb-6">Focusing on building scalable and responsive web applications using modern technologies.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative pl-12 border-l-2 border-sand-300/30"
            >
              <div className="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-sand-300/50" />
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div className="flex flex-col">
                  <h3 className="text-3xl font-heading font-bold text-zinc-900">Vidhyashram Public School</h3>
                  <p className="text-sand-400 font-heading font-bold tracking-widest text-sm uppercase">CBSE 12th</p>
                </div>
                <span className="text-sand-400/60 font-heading font-bold tracking-widest text-sm uppercase mt-2 md:mt-0">2021</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative pl-12 border-l-2 border-sand-300/30"
            >
              <div className="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-sand-300/30" />
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div className="flex flex-col">
                  <h3 className="text-3xl font-heading font-bold text-zinc-900">H.G. International School</h3>
                  <p className="text-sand-400 font-heading font-bold tracking-widest text-sm uppercase">CBSE 10th</p>
                </div>
                <span className="text-sand-400/60 font-heading font-bold tracking-widest text-sm uppercase mt-2 md:mt-0">2019</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="relative z-10 py-32 px-8 md:px-24 scroll-mt-32 bg-sand-300">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="font-heading text-sm font-bold uppercase tracking-[0.4em] text-white/60 mb-6 block">Portfolio</span>
            <h2 className="font-heading text-6xl font-bold md:text-8xl text-white leading-[1.1]">
              Selected <span className="font-serif italic font-light text-sand-100">Works</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="group relative flex h-full flex-col p-10 rounded-[2.5rem] bg-white/10 border border-white/20 backdrop-blur-md transition-all duration-500 hover:bg-white/20 hover:shadow-2xl hover:-translate-y-2 overflow-hidden">
                  <div className={`absolute top-0 right-0 w-32 h-32 -mr-8 -mt-8 rounded-full opacity-20 transition-transform duration-700 group-hover:scale-150 ${project.color}`} />
                  
                  <div className="mb-8 flex items-center justify-between relative z-10">
                    <div className="rounded-2xl bg-white/10 p-4 text-sand-100 shadow-inner">
                      {project.icon}
                    </div>
                    <a 
  href={project.link}
  target={project.isPlaceholder ? "_self" : "_blank"}
  rel="noopener noreferrer"
  className="text-white/40 hover:text-sand-100 transition-colors"
>
  <ExternalLink className="h-5 w-5" />
</a>
                  </div>
                  
                  <h3 className="mb-1 font-heading text-2xl font-bold relative z-10 text-white">{project.title}</h3>
                  <p className="mb-6 font-heading text-[10px] font-bold uppercase tracking-widest text-sand-100 relative z-10">
                    {project.subtitle}
                  </p>
                  <p className="mb-10 flex-grow text-white/70 leading-relaxed relative z-10 font-light text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 relative z-10">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[9px] font-bold uppercase tracking-widest text-white/40 bg-white/5 px-2 py-1 rounded border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="relative z-10 py-32 px-8 md:px-24 scroll-mt-32 bg-gradient-to-b from-sand-300 to-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="font-heading text-sm font-bold uppercase tracking-[0.4em] text-sand-300 mb-6 block">Recognition</span>
            <h2 className="font-heading text-6xl font-bold md:text-8xl text-white leading-[1.1]">
              Certifications <span className="font-serif italic font-light text-sand-300">&</span> Awards
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CERTIFICATIONS.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-md flex items-center space-x-6 hover:bg-white/10 hover:shadow-xl transition-all duration-500"
              >
                <div className="h-16 w-16 rounded-2xl bg-sand-300/10 flex items-center justify-center text-sand-300 shrink-0 border border-sand-300/20">
                  <Globe className="h-8 w-8" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-sand-300/60 mb-1 block">{cert.type}</span>
                  <h3 className="text-xl font-heading font-bold text-white leading-tight">{cert.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-32 px-8 md:px-24 scroll-mt-32 bg-zinc-950">
        <div className="max-w-5xl mx-auto rounded-[3.5rem] bg-zinc-900/50 p-16 md:p-32 text-center shadow-2xl border border-white/10 backdrop-blur-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pastel-blue via-pastel-green to-pastel-pink" />
          
          <h2 className="mb-8 font-heading text-4xl font-bold md:text-7xl text-white">
            Let's build something <span className="font-serif italic font-light text-sand-300">extraordinary</span>.
          </h2>
          <p className="mb-12 max-w-xl mx-auto text-xl text-white/60 font-light">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
          </p>
          
          <div className="flex flex-col items-center space-y-12">
            <a 
              href="mailto:1411harshitagarwal@gmail.com" 
              className="font-heading text-2xl font-bold text-white border-b-2 border-sand-300 pb-2 transition-all hover:text-sand-300 md:text-4xl"
            >
              1411harshitagarwal@gmail.com
            </a>
            
            <div className="flex items-center space-x-12">
              <div className="flex flex-col items-center">
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2">Social</span>
                <div className="flex space-x-6">
                  <a href="https://www.linkedin.com/in/harshit-agarwal14/" className="font-heading text-xs font-bold uppercase tracking-widest text-white/70 hover:text-sand-300 transition-colors">LinkedIn</a>
                  <a href="https://github.com/HarshiT14110" className="font-heading text-xs font-bold uppercase tracking-widest text-white/70 hover:text-sand-300 transition-colors">GitHub</a>
                  <a href="https://www.instagram.com/harshit.___14_/" className="font-heading text-xs font-bold uppercase tracking-widest text-white/70 hover:text-sand-300 transition-colors">Instagram</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 text-center text-white/20">
        <p className="font-heading text-[10px] uppercase tracking-[0.5em] font-bold">
          &copy; 2026 Harshit Agarwal. Crafted with intention.
        </p>
      </footer>
    </div>
  );
}



