export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Upload images',
      description: 'Drag and drop up to 20 images at once. Supports JPG, PNG, WebP.',
    },
    {
      number: '02',
      title: 'Enter keyword (optional)',
      description: 'Add a focus keyword to bias the AI toward your SEO target. Skip if you want generic descriptions.',
    },
    {
      number: '03',
      title: 'Download CSV',
      description: 'Preview each image with its alt text. Edit inline if needed, then export as CSV or copy individually.',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2
            className="text-4xl sm:text-5xl mb-4 text-gray-900"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
          >
            How it works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Three steps from upload to export. No account required for free tier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="fade-in" style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="flex flex-col h-full">
                <div
                  className="text-6xl mb-4"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    color: 'var(--color-navy)',
                  }}
                >
                  {step.number}
                </div>
                <h3
                  className="text-2xl mb-3 text-gray-900"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
                >
                  {step.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center fade-in">
          <div className="relative w-full max-w-4xl px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 relative">
              {/* Connector line */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gray-200 -z-10" />

              <div className="bg-white p-6 border border-gray-200 rounded-sm shadow-sm w-48 text-center flex flex-col items-center">
                <div className="w-12 h-12 bg-gray-50 flex items-center justify-center mb-4 border border-dashed border-gray-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>
                  </svg>
                </div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Input</span>
                <span className="text-sm font-semibold text-gray-900 mt-1">Bulk Assets</span>
              </div>

              <div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="rotate-90 md:rotate-0">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>

              <div className="bg-[#004AAD] p-8 border border-[#004AAD] rounded-sm shadow-lg w-56 text-center flex flex-col items-center transform scale-110">
                <div className="w-16 h-16 bg-white/10 flex items-center justify-center mb-4 rounded-full">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 2a10 10 0 0 1 10 10M12 22a10 10 0 0 1-10-10"/>
                    <circle cx="12" cy="12" r="4" fill="white" fillOpacity="0.2"/>
                  </svg>
                </div>
                <span className="text-[10px] font-bold text-white/70 uppercase tracking-[0.2em]">Processing</span>
                <span className="text-lg font-bold text-white mt-1">Neural Engine</span>
              </div>

              <div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="rotate-90 md:rotate-0">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>

              <div className="bg-white p-6 border border-gray-200 rounded-sm shadow-sm w-48 text-center flex flex-col items-center">
                <div className="w-12 h-12 bg-gray-50 flex items-center justify-center mb-4 border border-gray-200">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--color-navy)' }}>
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                  </svg>
                </div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Output</span>
                <span className="text-sm font-semibold text-gray-900 mt-1">SEO Export</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
