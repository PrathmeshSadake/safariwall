export default function Banner() {
  return (
    <div className='bg-banner relative isolate overflow-hidden'>
      <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
        <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
          <div className='relative rounded-full py-1 px-3 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20'>
            Escape the Ordinary{" "}
            <a href='#' className='font-semibold text-white'>
              <span className='absolute inset-0' aria-hidden='true' />
              Read more <span aria-hidden='true'>&rarr;</span>
            </a>
          </div>
        </div>
        <div className='text-center'>
          <h1 className='text-4xl font-semibold tracking-tight text-white sm:text-5xl'>
            Your Passport to Extraordinary Experiences
          </h1>
          <p className='mt-6 text-md leading-8 text-gray-300'>
            Explore. Dream. Discover: Immerse yourself in the beauty of the
            unknown. Our travel website empowers you to explore new horizons,
            dream bigger, and discover the hidden gems that make each journey
            truly remarkable.
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <a
              href='#'
              className='rounded-md bg-white px-3.5 py-1.5 text-base font-semibold leading-7 text-black shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400'
            >
              Unlock Your Wanderlust
            </a>
            <a
              href='#'
              className='text-base font-semibold leading-7 text-white'
            >
              Learn more <span aria-hidden='true'>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
