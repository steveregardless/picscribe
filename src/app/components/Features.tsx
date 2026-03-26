export function Features() {
  const features = [
    {
      title: 'Bulk upload up to 20 images',
      description: 'Process entire batches in one go. No more one-by-one manual work.',
    },
    {
      title: 'AI keyword-aware alt text',
      description: 'Optional keyword targeting ensures alt text aligns with your SEO strategy.',
    },
    {
      title: 'Inline editing before export',
      description: 'Review and tweak every result before download. Full control over output.',
    },
    {
      title: 'CSV export',
      description: 'Download all alt text and filenames as a CSV for easy import into your CMS.',
    },
    {
      title: 'SEO-optimised output',
      description: 'AI trained on best practices — descriptive, concise, keyword-conscious.',
    },
    {
      title: 'Fast processing',
      description: 'Get results in seconds. Agency tier includes priority processing for peak times.',
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2
            className="text-4xl sm:text-5xl mb-4 text-gray-900"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
          >
            Built for speed and scale
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to automate alt text creation for your image library.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 border fade-in"
              style={{
                borderColor: 'var(--color-gray-200)',
                borderRadius: 'var(--radius-md)',
                transitionDelay: `${index * 0.05}s`,
              }}
            >
              <div className="mb-4">
                <div
                  className="w-12 h-1"
                  style={{
                    backgroundColor: 'var(--color-navy)',
                    borderRadius: 'var(--radius-sm)',
                  }}
                />
              </div>
              <h3
                className="text-xl mb-3 text-gray-900"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
              >
                {feature.title}
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
