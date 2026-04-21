import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

function Cultivating() {
  return (
    <section className="relative pt-48 pb-24 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <span className="text-secondary text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
            — Established 2024
          </span>
          <h1 className="text-7xl md:text-8xl xl:text-9xl font-serif italic leading-[0.95] tracking-tight mb-12 drop-shadow-sm">
            Cultivating
            <br />
            <span className="text-primary italic">the </span>
            <span className="text-tertiary">Wild</span>
          </h1>
          <p className="max-w-xl text-lg md:text-xl text-secondary/80 leading-relaxed font-medium mb-12">
            Bridging the gap between concrete landscapes and thriving
            ecosystems. We design living journals through urban permaculture and
            community education.
          </p>

          <div className="flex flex-wrap items-center gap-10">
            <button className="bg-primary text-surface px-10 py-4 rounded-full text-lg font-bold hover:opacity-90 transition-all shadow-xl shadow-tertiary/20">
              Explore the Garden
            </button>
            <button className="flex items-center gap-3 font-bold text-primary text-lg group">
              <span>Our Process</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          {/* Main (Back) Image */}
          <div className="relative z-10">
            <div
              className="w-full aspect-4/5 max-w-md ml-auto overflow-hidden shadow-2xl 
         /* Shape: Sharp top-left, Massive curve top-right, moderate bottom curves */
         rounded-tl-[20px] rounded-tr-[120px] rounded-br-[20px] rounded-bl-[100px]"
            >
              <img
                src="/garden-path.jpg"
                alt="Garden Path"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Small (Front) Image */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute -bottom-18 left-18 z-20 w-[45%]"
          >
            <div
              className="overflow-hidden border-10 border-[#f1facc] shadow-2xl
         /* Shape: The Petal/Seed look (Top-right and Bottom-left are massive) */
         rounded-tl-[60px] rounded-tr-[60px] rounded-bl-[160px] rounded-br-[60px]"
            >
              <img
                src="/hand.jpg"
                alt="Hands holding soil"
                className="w-full aspect-[1.1/1] object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Cultivating;
