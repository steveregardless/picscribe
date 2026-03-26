export function Pricing() {
  const tiers = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'For individuals testing the tool',
      features: [
        '10 images per month',
        'AI-generated alt text',
        'Basic export',
      ],
      cta: 'Start Free',
      href: 'app.html',
      highlighted: false,
    },
    {
      name: 'Pro',
      price: '$9',
      period: 'per month',
      description: 'For SEO pros and content teams',
      features: [
        'Unlimited images',
        'Keyword targeting',
        'CSV export',
        'Inline editing',
        'Priority email support',
      ],
      cta: 'Start Pro',
      href: undefined,
      highlighted: true,
    },
    {
      name: 'Agency',
      price: '$29',
      period: 'per month',
      description: 'For agencies managing multiple clients',
      features: [
        'Everything in Pro',
        'White-label CSV export',
        'Priority processing',
        'Dedicated support',
      ],
      cta: 'Start Agency',
      href: undefined,
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2
            className="text-4xl sm:text-5xl mb-4 text-gray-900"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
          >
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Start free. Upgrade when you need scale. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className="p-8 bg-white border fade-in flex flex-col"
              style={{
                borderColor: tier.highlighted ? 'var(--color-navy)' : 'var(--color-gray-200)',
                borderWidth: tier.highlighted ? '2px' : '1px',
                borderRadius: 'var(--radius-md)',
                transitionDelay: `${index * 0.1}s`,
              }}
            >
              <div className="mb-2">
                <h3
                  className="text-xl text-gray-900"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
                >
                  {tier.name}
                </h3>
              </div>

              <div className="mb-4">
                <div className="flex items-baseline gap-1">
                  <span
                    className="text-5xl text-gray-900"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
                  >
                    {tier.price}
                  </span>
                  <span className="text-base text-gray-600">/{tier.period}</span>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-6">{tier.description}</p>

              {tier.href ? (
                <a
                  href={tier.href}
                  className="w-full px-6 py-3 text-base transition-colors mb-8 text-center block"
                  style={{
                    backgroundColor: 'white',
                    color: 'var(--color-navy)',
                    border: '2px solid var(--color-navy)',
                    borderRadius: 'var(--radius-sm)',
                    fontWeight: 500,
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-gray-50)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'white')}
                >
                  {tier.cta}
                </a>
              ) : (
                <button
                  className="w-full px-6 py-3 text-base transition-colors mb-8"
                  style={{
                    backgroundColor: tier.highlighted ? 'var(--color-navy)' : 'white',
                    color: tier.highlighted ? 'white' : 'var(--color-navy)',
                    border: tier.highlighted ? 'none' : '2px solid var(--color-navy)',
                    borderRadius: 'var(--radius-sm)',
                    fontWeight: 500,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = tier.highlighted
                      ? 'var(--color-navy-dark)'
                      : 'var(--color-gray-50)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = tier.highlighted
                      ? 'var(--color-navy)'
                      : 'white';
                  }}
                >
                  {tier.cta}
                </button>
              )}

              <ul className="space-y-3 flex-1">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="flex-shrink-0 mt-0.5"
                    >
                      <circle cx="10" cy="10" r="9" stroke="var(--color-navy)" strokeWidth="2" fill="none" />
                      <path d="M6 10 L9 13 L14 7" stroke="var(--color-navy)" strokeWidth="2" fill="none" />
                    </svg>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div id="for-agencies" className="mt-16 fade-in">
          <div
            className="max-w-4xl mx-auto p-10 bg-white border"
            style={{
              borderColor: 'var(--color-gray-200)',
              borderRadius: 'var(--radius-md)',
            }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3
                  className="text-2xl mb-2 text-gray-900"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
                >
                  Need white-label or custom volume?
                </h3>
                <p className="text-base text-gray-600">
                  Agency plans include white-label CSV exports and priority processing. Contact us for custom enterprise solutions.
                </p>
              </div>
              <a
                href="app.html"
                className="px-6 py-3 text-base text-white transition-colors whitespace-nowrap"
                style={{
                  backgroundColor: 'var(--color-navy)',
                  borderRadius: 'var(--radius-sm)',
                  fontWeight: 500,
                  textDecoration: 'none',
                  display: 'inline-block',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-navy-dark)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-navy)')}
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
