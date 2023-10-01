import testimonialList from "@/lib/api-request/testimonialList";
import Image from "next/image";

export default async function TestimonialList() {
  const testimonials = await testimonialList();

  return (
    <div className='max-w-[--screen-width] px-[105px] pb-[100px]'>
      <div className='w-[400px] pt-[20px]'>
        <p className='workListSimple uppercase'>Testimonial List</p>
        <p className='workListText capitalize pt-[15px]'>
          Better Agency/SEO Solution At Your Fingertips
        </p>
      </div>

      <div className='pt-[30px]'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className='bg-white rounded-lg shadow-md p-2'
            >
              <div className='flex flex-col items-center'>
                <div className='w-[100px] h-[100px] pt-2'>
                  <Image
                    src={testimonial.image}
                    width={100}
                    height={100}
                    alt={testimonial.title}
                    className='object-cover rounded-lg'
                  />
                </div>
                <div className='py-2 text-center'>
                  <p className='py-3'>{testimonial.msg}</p>
                  <h3 className='text-2xl font-semibold mb-2 '>
                    {testimonial.name}
                  </h3>
                  <h2 className='font-semibold'>{testimonial.designation}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
