import allProject from "@/lib/api-request/allProject";
import Image from "next/image";

export default async function AllProject() {
  const projects = await allProject();

  return (
    <div className='max-w-[--screen-width] px-[105px] pb-[100px]'>
      <div className='w-[400px] pt-[20px]'>
        <p className='workListSimple uppercase'>All Project</p>
        <p className='workListText capitalize pt-[15px]'>
          Better Agency/SEO Solution At Your Fingertips
        </p>
      </div>

      <div className='pt-[30px]'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {projects.map((project) => (
            <div key={project.id} className='bg-white rounded-lg shadow-md p-2'>
              <div className=''>
                <Image
                  src={project.image}
                  width={200}
                  height={200}
                  alt={project.title}
                  className='w-full h-32 object-cover rounded-lg'
                />
                <div className='py-2'>
                  <h3 className='text-xl font-semibold mb-2'>
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
