export default function CTA() {
  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='cta-banner'>
        <div className='mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-12'>
          <h2 className='text-4xl font-semibold tracking-tight text-gray-100'>
            Explore. Dream. Discover
            <br />
            Immerse yourself in the beauty of the unknown
          </h2>
          <div className='mt-10 flex items-center gap-x-6'>
            <a
              href='#'
              className='rounded-md bg-gray-100 px-3.5 py-1.5 text-base font-semibold leading-7 text-black shadow-sm hover:bg-indigo-200'
            >
              Get started
            </a>
            <a
              href='#'
              className='text-base font-semibold leading-7 text-gray-900'
            >
              Learn more <span aria-hidden='true'>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
