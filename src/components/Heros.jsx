import Menu from "./Menu";
import Partners from "./Partners";
import Image from "next/image";

export default function Heros() {
  return (
    <div>
      <section className='max-w-[--screen-width] h-[700px] bg-[--heros-bg-color]'>
        <Menu />
        <div className='flex justify-between pt-[20px] '>
          <div className='w-[48%] gap-[10px] '>
            <div className='ml-[105px] pr-[30px] '>
              <div className='heroTextHeadline '>
                Increase Your Customers Loyalty and Satisfaction
              </div>
              <div className='heroTextNormal mt-[10px] '>
                We help businesses like yours earn more customers, standout from
                competitors, make more money
              </div>
              <button className='mt-[20px] heroButton px-[10px] py-[10px]'>
                Get Started
              </button>
            </div>
          </div>
          <div className='w-[52%] pt-[10px] '>
            <div className='mr-[102px] flex flex-wrap gap-3'>
              <div>
                <Image
                  src='./image/Photo-1.svg'
                  width={316}
                  height={270}
                  alt='Image-1'
                />
              </div>
              <div>
                <Image
                  src='./image/Photo-2.svg'
                  width={140}
                  height={270}
                  alt='Image-2'
                />
              </div>
              <div>
                <Image
                  src='./image/Photo-3.svg'
                  width={190}
                  height={160}
                  alt='Image-3'
                />
              </div>
              <div>
                <Image
                  src='./image/Photo-4.svg'
                  width={266}
                  height={160}
                  alt='Image-4'
                />
              </div>
            </div>
          </div>
        </div>
        <Partners />
      </section>
    </div>
  );
}
