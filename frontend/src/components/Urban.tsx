import { GraduationCap, Leaf } from "lucide-react"

function Urban() {
  return (
    <section className="py-32 px-8">
      <div className="max-w-7xl mx-auto bg-surface-muted/50 rounded-[80px] p-12 md:p-24 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif italic leading-[1.1] mb-16 max-w-lg">
              Urban biodiversity is not a luxury, but a necessity for the soul.
            </h2>

            <div className="space-y-16">
              <div className="flex gap-8">
                <div className="w-14 h-14 rounded-full bg-surface-muted flex items-center justify-center shrink-0 shadow-lg shadow-primary/5">
                  <Leaf className="w-6 h-6 text-tertiary" />
                </div>
                <div>
                  <h4 className="uppercase tracking-widest text-secondary mb-4">Restorative Design</h4>
                  <p className="text-sm md:text-base leading-relaxed text-primary/70 max-w-sm">
                    We transform forgotten urban corners into resilient micro-habitats that support local pollinators and native flora.
                  </p>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="w-14 h-14 rounded-full bg-surface-muted flex items-center justify-center shrink-0 shadow-lg shadow-primary/5">
                  <GraduationCap className="w-6 h-6 text-tertiary" />
                </div>
                <div>
                  <h4 className="uppercase tracking-widest text-secondary mb-4">Shared Knowledge</h4>
                  <p className="text-sm md:text-base leading-relaxed text-primary/70 max-w-sm">
                    Education is the root of our garden. We host weekly workshops to demystify permaculture for city dwellers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6 pt-16">
              <div className="rounded-organic-1 overflow-hidden aspect-square shadow-2xl">
                <img src="/garden.jpg" className="w-full h-full object-cover" referrerPolicy="no-referrer" alt="Garden path" />
              </div>
              <div className="rounded-organic-2 overflow-hidden aspect-3/4 shadow-2xl">
                <img src="/Bee-on-flower.jpg" className="w-full h-full object-cover" referrerPolicy="no-referrer" alt="Bee on flower" />
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-organic-2 overflow-hidden aspect-3/4 shadow-2xl">
                <img src="/gardening-tool.jpg" className="w-full h-full object-cover" referrerPolicy="no-referrer" alt="Gardening tools" />
              </div>
              <div className="rounded-organic-3 overflow-hidden aspect-square shadow-2xl">
                <img src="/Community-gathering.jpg" className="w-full h-full object-cover" referrerPolicy="no-referrer" alt="Community gathering" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Urban