import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

const FloraCard = ({
  title,
  scientificName,
  description,
  tag,
  image,
  index,
}: {
  title: string;
  scientificName: string;
  description: string;
  tag: string;
  image: string;
  index: number;
}) => {
  const roundingClass =
    index % 3 === 0
      ? "rounded-organic-1"
      : index % 3 === 1
        ? "rounded-organic-2"
        : "rounded-organic-3";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col group"
    >
      <div
        className={`relative aspect-4/5 overflow-hidden ${roundingClass} mb-6 shadow-xl`}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4 bg-surface/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] uppercase tracking-tighter font-bold">
          {tag}
        </div>
      </div>
      <h3 className="text-3xl italic mb-1">{title}</h3>
      <p className="text-[11px] uppercase tracking-widest text-secondary font-semibold mb-4">
        {scientificName}
      </p>
      <p className="text-sm text-primary/80 leading-relaxed max-w-xs">
        {description}
      </p>
    </motion.div>
  );
};

function FeaturedFlora() {
  const flowCardData = [
    {
      id: 0,
      title: "Crimson Bottlebrush",
      scientificName: "Callistemon Citrinus",
      tag: "Native",
      image: "/Callistemon-Citrinus.jpg",
      description:
        "A resilient shrub known for its architectural blooms that provide essential nectar for native honeyeaters.",
    },
    {
      id: 1,
      title: "Blue Glow Agave",
      scientificName: "Agave 'Blue Glow'",
      tag: "Resilient",
      image: "/Blue-Glow-Agave.jpg",
      description:
        "Perfect for urban heat islands, this succulent offers a striking silhouette with minimal water requirements.",
    },
    {
      id: 2,
      title: "Silver Lady Fern",
      scientificName: "Blechnum Gibbum",
      tag: "Foundation",
      image: "/Blechnum-Gibbum.jpg",
      description:
        "Bringing a lush, prehistoric feel to shaded balconies and indoor-outdoor transition spaces.",
    },
  ];
  return (
    <section className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-serif italic mb-8">
              Featured Flora
            </h2>
            <p className="text-xl text-secondary font-medium">
              {" "}
              A curated selection of the resilient species currently thriving in our
              community sanctuaries.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="w-16 h-16 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-surface transition-all active:scale-95 shadow-sm">
              <ChevronLeft className="w-7 h-7" />
            </button>
            <button className="w-16 h-16 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-surface transition-all active:scale-95 shadow-sm">
              <ChevronRight className="w-7 h-7" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {flowCardData.map((plant, index) => (
            <FloraCard
              key={plant.id}
              index={index}
              title={plant.title}
              scientificName={plant.scientificName}
              tag={plant.tag}
              image={plant.image}
              description={plant.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturedFlora;
