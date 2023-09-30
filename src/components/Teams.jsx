import teamList from "@/lib/api-request/teamList";
import Image from "next/image";
import Link from "next/link";

export default async function Teams() {
  const teams = await teamList();

  return (
    <div className='max-w-[--screen-width] px-[105px] pb-[100px]'>
      <div className='w-[400px] pt-[20px]'>
        <p className='workListSimple uppercase'>Our Team Member</p>
        <p className='workListText capitalize pt-[15px]'>
          Check our awesome team members
        </p>
      </div>

      <div className='pt-[30px]'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {teams.map((team) => (
            <div key={team.id} className='bg-white rounded-lg shadow-md p-4'>
              <Image
                src={team.image}
                width={200}
                height={200}
                alt={team.title}
                className='w-full h-32 object-cover rounded-t-lg'
              />
              <div className='p-4'>
                <h3 className='text-xl font-semibold mb-2'>{team.name}</h3>
                <p className='text-gray-600'>{team.bio}</p>
              </div>
              <div>
                {/* Social Media Links */}
                <div className='mt-4'>
                  <ul className='flex space-x-4'>
                    {/* Facebook */}
                    {team.facebook && (
                      <li>
                        <Link href={team.facebook}>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                            className='w-6 h-6 text-blue-500'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              d='M4 6h16M4 12h8m-8 4h16'
                            />
                          </svg>
                        </Link>
                      </li>
                    )}

                    {/* Twitter */}
                    {team.twitter && (
                      <li>
                        <Link href={team.twitter}>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                            className='w-6 h-6 text-blue-400'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              d='M4 6h16M4 12h8m-8 4h16'
                            />
                          </svg>
                        </Link>
                      </li>
                    )}

                    {/* Instagram */}
                    {team.instagram && (
                      <li>
                        <Link href={team.instagram}>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                            className='w-6 h-6 text-pink-500'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              d='M4 6h16M4 12h8m-8 4h16'
                            />
                          </svg>
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
