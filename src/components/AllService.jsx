import allService from "@/lib/api-request/allService";
import Image from "next/image";

export default async function AllService() {
  const services = await allService();

  return (
    <div className='max-w-[--screen-width] px-[105px] pb-[100px]'>
      <div className='w-[400px] pt-[20px]'>
        <p className='workListSimple uppercase'>Our All Services</p>
        <p className='workListText capitalize pt-[15px]'>
          we provide best web design services
        </p>
      </div>

      <div className='pt-[30px]'>
        <div className='grid grid-cols-2 gap-4'>
          {services.map((service) => (
            <div key={service.id} className='bg-white rounded-lg shadow-md p-4'>
              <div className='p-2'>
                <h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
                <p className='text-gray-600 mb-2'>{service.des}</p>
              </div>
              <div className='flex flex-wrap gap-4 ml-2'>
                <div>
                  <Image
                    src={service.image1}
                    width={200}
                    height={200}
                    alt={service.title}
                    className='w-full h-32 object-cover rounded-lg'
                  />
                </div>
                <div>
                  <Image
                    src={service.image2}
                    width={200}
                    height={200}
                    alt={service.title}
                    className='w-full h-32 object-cover rounded-t-lg'
                  />
                </div>
                <div>
                  <Image
                    src={service.image3}
                    width={200}
                    height={200}
                    alt={service.title}
                    className='w-full h-32 object-cover rounded-t-lg'
                  />
                </div>
                <div>
                  <Image
                    src={service.image4}
                    width={200}
                    height={200}
                    alt={service.title}
                    className='w-full h-32 object-cover rounded-t-lg'
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
