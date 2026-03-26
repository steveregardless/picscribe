import { useState } from 'react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="/" style={{ fontFamily: 'var(--font-heading)' }} className="text-xl text-gray-900">
              Picscribe
            </a>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              How it works
            </a>
            <a href="#pricing" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Pricing
            </a>
            <a href="#for-agencies" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              For Agencies
            </a>
            <button
              className="px-5 py-2 text-sm text-white transition-colors"
              style={{
                backgroundColor: 'var(--color-navy)',
                borderRadius: 'var(--radius-sm)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-navy-dark)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-navy)')}
            >
              Start Free
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-600"
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <a href="#how-it-works" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                How it works
              </a>
              <a href="#pricing" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Pricing
              </a>
              <a href="#for-agencies" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                For Agencies
              </a>
              <button
                className="px-5 py-2 text-sm text-white transition-colors w-full"
                style={{
                  backgroundColor: 'var(--color-navy)',
                  borderRadius: 'var(--radius-sm)',
                }}
              >
                Start Free
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
