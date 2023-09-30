import Image from "next/image";

export default function WorkList() {
  return (
    <div className='bg-[#FFFFFF] px-[105px] pt-[40px] '>
      <div className='w-[495px]'>
        <p className='workListSimple uppercase'>work list</p>
        <p className='workListText capitalize pt-[15px]'>
          We provide the Perfect Solution to your business growth
        </p>
      </div>
      <div className='flex items-center justify-between pt-[40px] gap-[40px]'>
        <div className='card '>
          <div className='p-[15px]'>
            <div>
              <div
                className='w-[90px] h-[90px] bg-[#D7F5DC] rounded-[20px]
              flex items-center justify-center'
              >
                <Image
                  src='/emoticon/Activity.svg'
                  width={40}
                  height={40}
                  alt='Activity'
                />
              </div>
            </div>
            <div className='pt-[15px]'>
              <p className='cardTextTitle'>Grow Your Business</p>
              <p className='cardTextSimple pt-[10px]'>
                We help identify the best ways to improve your business
              </p>
            </div>
            <div className='pt-[25px]'>
              <span className='px-14 py-20'>Learn More &#8594;</span>
            </div>
          </div>
        </div>
        <div className='card '>
          <div className='p-[15px]'>
            <div
              className='w-[90px] h-[90px] bg-[#D7F5DC] rounded-[20px]
              flex items-center justify-center'
            >
              <Image
                src='/emoticon/Heart.svg'
                width={40}
                height={40}
                alt='Activity'
              />
            </div>
            <div className='pt-[15px]'>
              <p className='cardTextTitle'>Grow Your Business</p>
              <p className='cardTextSimple pt-[10px]'>
                We help identify the best ways to improve your business
              </p>
            </div>
            <div className='pt-[25px]'>
              <span className='px-14 py-20'>Learn More &#8594;</span>
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='p-[15px]'>
            <div
              className='w-[90px] h-[90px] bg-[#D7F5DC] rounded-[20px]
              flex items-center justify-center'
            >
              <Image
                src='/emoticon/Work.svg'
                width={40}
                height={40}
                alt='Activity'
              />
            </div>
            <div className='pt-[15px]'>
              <p className='cardTextTitle'>Grow Your Business</p>
              <p className='cardTextSimple pt-[10px]'>
                We help identify the best ways to improve your business
              </p>
            </div>
            <div className='pt-[25px]'>
              <span className='px-14 py-20'>Learn More &#8594;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
