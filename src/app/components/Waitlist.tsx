export function Waitlist() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-2xl mx-auto fade-in">
        <div className="text-center mb-10">
          <h2
            className="text-4xl sm:text-5xl mb-4 text-gray-900"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
          >
            Join the waitlist
          </h2>
          <p className="text-lg text-gray-600">
            Be the first to know when Picscribe launches.
          </p>
        </div>

        <iframe
          data-tally-src="https://tally.so/embed/obo54x?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height="189"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Picscribe Waitlist"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}`,
          }}
        />
      </div>
    </section>
  );
}
