import Link from "next/link";

export default function Menu() {
  return (
    <div className='max-w-[--screen-width] h-[80px] flex items-center justify-between top-[15px] px-[100px] py-[5px]'>
      <div className='brandLogo'>
        <div className='p-[10px]'>
          <span className='text-[#000000]'>Design</span>
          <span className='text-[#F55F1D]'>AGENCY</span>
        </div>
      </div>
      <ul className='flex justify-between gap-[30px] menuText'>
        <Link href={"/"} className='p-[10px]'>
          Home
        </Link>
        <Link href={"/team"} className='p-[10px]'>
          Team
        </Link>
        <Link href={"/service"} className='p-[10px]'>
          Service
        </Link>
        <Link href={"/projects"} className='p-[10px]'>
          Projects
        </Link>
        <Link href={"/testimonials"} className='p-[10px]'>
          Testimonials
        </Link>
        <button className='border border-[#20B15A] rounded-[10px] p-[10px]'>
          Login
        </button>
        <button className='bg-[#20B15A] text-[#FFFFFF] p-[10px] rounded-[10px]'>
          Register
        </button>
      </ul>
    </div>
  );
}
