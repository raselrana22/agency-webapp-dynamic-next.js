export default function SubscriberSection() {
  return (
    <div className='h-[380px] bg-[#FFFFFF] flex items-center justify-center'>
      <div className='h-[280px] w-[400px] text-center'>
        <div className='p-3 '>
          <div className='text-[#20B15A] flex justify-center'>SUBSCRIBE</div>
          <div className='capitalize text-2xl pt-[15px] flex justify-center'>
            Subscribe to get the latest news about us
          </div>
        </div>
        <p className='text-sm'>
          Please drop your email below to get daily updates about what we do
        </p>
        <div className='mt-[40px]'>
          <div className='w-full flex items-center justify-between border rounded-lg overflow-hidden'>
            <input
              type='email'
              className='py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none'
              placeholder='Your Email Address'
            />
            <button className='px-2 py-2 bg-[#F55F1D] text-white font-semibold hover:text-[#000000] focus:outline-none'>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
