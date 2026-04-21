
function HandsOn() {
  return (
    <section className="py-32 px-8">
      <div className="max-w-7xl mx-auto bg-secondary rounded-[60px] p-12 md:p-32 text-center relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-linear-to-tr from-primary to-transparent opacity-10"></div>

        <div className="relative z-10">
          <span className="text-[11px] uppercase tracking-[0.4em] font-extrabold text-surface-muted opacity-70 mb-10 block">
            Hands-on Learning
          </span>
          <h2 className="text-5xl md:text-7xl xl:text-8xl font-serif italic leading-[1.05] text-surface mb-16 max-w-5xl mx-auto">
            Grow your own sanctuary with our masterclass workshops.
          </h2>

          <div className="flex flex-wrap justify-center gap-8 mb-24">
            <button className="bg-tertiary text-surface px-12 py-6 rounded-full text-xl font-bold hover:opacity-90 transition-all hover:-translate-y-1 shadow-2xl">
              View Summer Schedule
            </button>
            <button className="bg-surface-muted text-primary px-12 py-6 rounded-full text-xl font-bold hover:bg-surface transition-all hover:-translate-y-1 shadow-2xl">
              Gift a Workshop
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-16 max-w-4xl mx-auto pt-12 border-t border-surface/10 text-surface/80">
            <div>
              <div className="text-5xl md:text-6xl font-serif italic mb-3">12+</div>
              <div className="text-[10px] uppercase tracking-widest font-extrabold opacity-60">Monthly Events</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-serif italic mb-3">2.4k</div>
              <div className="text-[10px] uppercase tracking-widest font-extrabold opacity-60">Students Taught</div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <div className="text-5xl md:text-6xl font-serif italic mb-3">15</div>
              <div className="text-[10px] uppercase tracking-widest font-extrabold opacity-60">Urban Sites</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HandsOn