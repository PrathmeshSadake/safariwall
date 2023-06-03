import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";

const projects = [
  {
    name: "Graph API",
    initials: "GA",
    href: "#",
    members: 16,
    bgColor: "bg-pink-600",
  },
  {
    name: "Component Design",
    initials: "CD",
    href: "#",
    members: 12,
    bgColor: "bg-purple-600",
  },
  {
    name: "Templates",
    initials: "T",
    href: "#",
    members: 16,
    bgColor: "bg-yellow-500",
  },
  {
    name: "Have",
    initials: "T",
    href: "#",
    members: 16,
    bgColor: "bg-yellow-500",
  },
];

export default function ExploreNearby() {
  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12'>
      <h2 className='text-xl font-medium text-gray-800'>Explore Nearby</h2>
      <ul
        role='list'
        className='mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4'
      >
        {projects.map((project) => (
          <li key={project.name} className='flex rounded-md'>
            <img
              src='https://source.unsplash.com/hB0892MkOgU'
              className='w-20 rounded-md'
            />

            <div className='flex flex-1 items-center justify-between truncate rounded-r-md bg-white'>
              <div className='flex-1 truncate px-4 py-2 text-sm'>
                <a
                  href={project.href}
                  className='font-medium text-gray-900 hover:text-gray-600'
                >
                  {project.name}
                </a>
                <p className='text-gray-500'>{project.members} Members</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
