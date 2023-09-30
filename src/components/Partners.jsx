import brandList from "@/lib/api-request/brandList";
import Image from "next/image";
export default async function Partners() {
  const brands = await brandList();
  console.log(brands);

  return (
    <div
      className='h-[120px] bg-[#F8FFF9] mt-[50px] px-[105px]
    flex items-center'
    >
      <div className='w-full flex items-center justify-between gap-[30px]'>
        {brands.map((brand) => {
          return (
            <div key={brand.id}>
              <Image
                src={brand.image}
                width={120}
                height={100}
                alt={brand.name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
