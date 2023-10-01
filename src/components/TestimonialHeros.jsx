import Menu from "./Menu";

export default function TestimonialHeros() {
  return (
    <div>
      <div className='max-w-[--screen-width] h-[320px] bg-[#F8F9FC]'>
        <Menu />
        <div className='ml-[105px] mt-[120px] w-[220px] h-[80px]'>
          <p className='text-2xl font-bold text-center'>Testimonial List</p>
          <div className='pt-[10px] flex justify-center items-center'>
            <span className='text-[#101A29]'>Home &#62; </span>
            <span className='text-[#20B15A] px-[4px]'>Testimonial List</span>
          </div>
        </div>
      </div>
    </div>
  );
}
