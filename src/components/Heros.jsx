import Menu from "./Menu";
import Partners from "./Partners";

export default function Heros() {
  return (
    <div>
      <section className='max-w-[--screen-width] h-[740px] bg-[--heros-bg-color]'>
        <Menu />
        <div className='border border-red-400 flex justify-between'>
          <div className='w-[50%] gap-[10px]'>
            <div className='ml-[102px] mr-[10px]'>
              <div className='heroTextHeadline'>
                Increase Your Customers Loyalty and Satisfaction
              </div>
              <div className='heroTextNormal mt-[10px]'>
                We help businesses like yours earn more customers, standout from
                competitors, make more money
              </div>
              <button className='mt-[50px] heroButton px-[30px] py-[20px]'>
                Get Started
              </button>
            </div>
          </div>
          <div className='w-[50%] border border-black'>
            <div className='mr-[102px] border border-black'>Hello</div>
          </div>
        </div>
        <Partners />
      </section>
    </div>
  );
}
