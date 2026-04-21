import { Calendar, Share2 } from "lucide-react";
import { motion } from "motion/react";

function FooterGarden() {
  return (
    <footer className="pt-24 pb-12 px-8 bg-secondary text-surface/90">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Row */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 mb-20">
          {/* Left: Brand */}
          <div className="max-w-xs text-center lg:text-left">
            <div className="text-2xl font-serif italic mb-4">Flows Garden</div>
            <p className="text-sm opacity-60 leading-relaxed">
              Cultivating resilient urban ecosystems through education and
              organic design.
            </p>
          </div>

          {/* Middle: Horizontal Nav */}
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            {["Sustainability", "Contact", "Journal", "Privacy"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm opacity-60 hover:opacity-100 transition-opacity font-medium"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right: Share Button */}
          <button className="w-12 h-12 rounded-full border border-surface/10 flex items-center justify-center hover:bg-surface/10 transition-all">
            <Share2 className="w-4 h-4 opacity-60" />
          </button>
        </div>

        {/* Divider and Bottom Row */}
        <div className="relative pt-12 border-t border-surface/10">
          {/* Centered Copyright */}
          <div className="text-center">
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-30">
              © 2024 Flows Garden — Cultivating the Wild
            </p>
          </div>

          {/* Floating Calendar Icon (Right Aligned) */}
          <div className="absolute right-0 top-0 -translate-y-1/2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#722616] p-5 rounded-full shadow-2xl cursor-pointer flex items-center justify-center"
            >
              <Calendar className="w-7 h-7 text-white" />
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterGarden;
