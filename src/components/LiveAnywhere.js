const files = [
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source:
      "https://images.unsplash.com/photo-1682692598084-aee608bff27c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source:
      "https://images.unsplash.com/photo-1685467861988-9ef5d7d07e77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source:
      "https://images.unsplash.com/photo-1626440409578-8bc4ab03b772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source:
      "https://images.unsplash.com/photo-1685391227358-fac3cc6fe219?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  },
];

export default function LiveAnywhere() {
  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12'>
      <h2 className='text-xl font-medium text-gray-800'>Live Anywhere</h2>
      <div className='mt-6 flex space-x-6 overflow-scroll'>
        {files.map((file) => (
          <div key={file.source} className='relative'>
            <div className='block w-72 h-80 object-cover overflow-hidden rounded-lg bg-gray-100'>
              <img
                src={file.source}
                alt=''
                className='h-full w-full object-cover group-hover:opacity-75'
              />
              <button
                type='button'
                className='absolute inset-0 focus:outline-none'
              >
                <span className='sr-only'>View details for {file.title}</span>
              </button>
            </div>
            <p className='pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900'>
              {file.title}
            </p>
            <p className='pointer-events-none block text-sm font-medium text-gray-500'>
              {file.size}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
