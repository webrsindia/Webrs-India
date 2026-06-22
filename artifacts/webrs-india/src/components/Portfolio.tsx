import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Hilux Real Estate",
    url: "webrsindia.github.io/hilux-demo",
    tags: ["Real Estate", "Property Listings", "Agent Profiles"],
    gradient: "from-emerald-600/40 via-teal-700/30 to-cyan-800/40",
    accent: "#10b981",
    demo: "https://webrsindia.github.io/hilux-demo/",
  },
  {
    name: "Restaurantly",
    url: "webrsindia.github.io/restaurantly-demo",
    tags: ["Restaurant", "Menu", "Online Booking"],
    gradient: "from-amber-600/40 via-orange-700/30 to-red-800/40",
    accent: "#f59e0b",
    demo: "https://webrsindia.github.io/Restaurantly-demo/",
  },
  {
    name: "Organic Grocery",
    url: "webrsindia.github.io/organic-grocery-demo",
    tags: ["Grocery", "E-commerce", "Product Catalog"],
    gradient: "from-lime-600/40 via-green-700/30 to-emerald-800/40",
    accent: "#84cc16",
    demo: "https://webrsindia.github.io/Organic-Grocery-demo/",
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-background relative overflow-hidden" id="portfolio">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(30,144,255,0.06)_0%,_transparent_70%)]" />
      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E90FF] to-[#4da3ff]">Recent Work</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Real websites built for real Indian businesses. Each one live and driving customers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group rounded-2xl border border-white/10 overflow-hidden bg-card hover:border-[#1E90FF]/40 transition-all duration-300"
              data-testid={`portfolio-card-${i}`}
            >
              {/* Browser chrome */}
              <div className="bg-[#1a2540] px-4 py-3 flex items-center gap-2 border-b border-white/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 bg-white/5 rounded-md px-3 py-1 text-xs text-white/40 font-mono truncate ml-2">
                  {project.url}
                </div>
              </div>

              {/* Preview area */}
              <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23fff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M0%200h40v40H0z%22/%3E%3C/g%3E%3C/svg%3E')]" />
                <div className="relative z-10 text-center px-6">
                  <div
                    className="text-4xl font-bold font-display mb-2 opacity-90"
                    style={{ color: project.accent }}
                  >
                    WebRS
                  </div>
                  <div className="text-white/60 text-sm">Professional Website</div>
                  <div className="mt-4 flex gap-2 justify-center">
                    {[1, 2, 3].map((n) => (
                      <div key={n} className="h-1.5 rounded-full bg-white/20" style={{ width: n === 2 ? 40 : 24 }} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-bold font-display text-white mb-3">{project.name}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                  data-testid={`portfolio-demo-${i}`}
                >
                  View Live Demo
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
