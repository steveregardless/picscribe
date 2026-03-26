export function Waitlist() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-xl mx-auto text-center fade-in">
        <h2
          className="text-4xl sm:text-5xl mb-4 text-gray-900"
          style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
        >
          Join the waitlist
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Be the first to know when Picscribe launches.
        </p>

        <form className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="you@example.com"
            required
            className="flex-1 px-4 py-3 text-base text-gray-900 border border-gray-200 outline-none"
            style={{ borderRadius: 'var(--radius-sm)' }}
          />
          <button
            type="submit"
            className="px-6 py-3 text-base text-white transition-colors whitespace-nowrap"
            style={{
              backgroundColor: 'var(--color-navy)',
              borderRadius: 'var(--radius-sm)',
              fontWeight: 500,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-navy-dark)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-navy)')}
          >
            Join waitlist
          </button>
        </form>
      </div>
    </section>
  );
}
