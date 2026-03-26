export function Hero() {
  return (
    <section className="flex flex-col items-center px-4 sm:px-6 lg:px-8 pt-[22vh] pb-0 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto w-full text-center">
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl mb-6 text-gray-900"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            Generate SEO alt text for 20 images in seconds
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Stop writing alt text manually. Upload your images,
            add an optional keyword, and let AI create optimised
            descriptions instantly. Built for agencies and SEO
            teams who need speed and scale.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="app.html"
              className="px-8 py-4 text-base text-white transition-colors w-full sm:w-auto cursor-pointer text-center"
              style={{
                backgroundColor: "var(--color-navy)",
                borderRadius: "var(--radius-sm)",
                fontWeight: 500,
                textDecoration: "none",
                display: "inline-block",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--color-navy-dark)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--color-navy)")
              }
            >
              Start Free
            </a>
            <a
              href="#pricing"
              className="text-base transition-colors"
              style={{
                color: "var(--color-navy)",
                fontWeight: 500,
              }}
            >
              View pricing →
            </a>
          </div>
        </div>

        <div className="mx-auto mb-24" style={{ maxWidth: "900px" }}>
          <img
            src="/hero-screenshot.png"
            alt="Picscribe app interface"
            style={{
              width: "100%",
              display: "block",
              borderRadius: "6px",
              border: "1px solid var(--color-gray-200)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
