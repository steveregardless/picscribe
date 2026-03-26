export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
          <div>
            <a href="/" style={{ fontFamily: 'var(--font-heading)' }} className="text-xl text-gray-900">
              Picscribe
            </a>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-4">
            <a href="#how-it-works" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              How it works
            </a>
            <a href="#pricing" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Pricing
            </a>
            <a href="#for-agencies" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              For Agencies
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Terms
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Support
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 text-center md:text-left">
            © {new Date().getFullYear()} Picscribe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
