import featuredProjects from "@/lib/api-request/featuredProject";
import Image from "next/image";

export default async function FeaturedProject() {
  const projects = await featuredProjects();
  return (
    <>
      <div className='bg-[#F0FDF4] px-[105px] py-[40px] '>
        <div className='w-[495px] '>
          <p className='workListSimple uppercase'>Featured Project</p>
          <p className='workListText capitalize pt-[15px]'>
            We provide the Perfect Solution to your business growth
          </p>
        </div>
        <div className='pt-[30px]'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {projects.map((project) => (
              <div
                key={project.id}
                className='bg-white rounded-lg shadow-md p-4'
              >
                <Image
                  src={project.image}
                  width={120}
                  height={120}
                  alt={project.title}
                  className='w-full h-32 object-cover rounded-t-lg'
                />
                <div className='p-4'>
                  <h3 className='text-xl font-semibold mb-2'>
                    {project.title}
                  </h3>
                  <p className='text-gray-600'>{project.description}</p>
                  <a
                    href={project.live}
                    className='text-blue-500 hover:underline mt-2 block'
                  >
                    Live
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
