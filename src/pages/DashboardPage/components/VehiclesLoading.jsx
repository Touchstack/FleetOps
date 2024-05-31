import { Skeleton } from "../../.././Components/ui/skeleton";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "../../.././Components/ui/carousel"

const VehiclesLoading = () => {
  return (
    <section className="flex md:flex-row flex-col w-full gap-10 md:gap-20">
      {/* Left Section */}
      <div className="flex flex-col md:min-w-[550px] max-w-[650px]">
        {/* Web view image skeleton */}
        <Skeleton className="hidden bg-gray-200 rounded-[10px] md:flex h-[422px]" />

        <div className="md:flex cursor-pointer hidden flex-row gap-3 pt-3">
          {/* Carousel images skeleton */}
          {Array.from({ length: 4 }, (_, i) => (
            <div key={i} className="w-11/12 h-[124px] bg-gray-200  rounded-[5px]">
              <Skeleton className="h-full rounded-[5px] w-full" />
            </div>
          ))}
        </div>

        {/* Car specifications skeleton */}
        <div className='flex flex-col max-w-[430px] md:mt-10 order-last'>
          <h1 className='font-Bold text-[24px]'><Skeleton /></h1>

          <div className="font-Light">
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} className="flex justify-between text-[16px] mb-5">
                <Skeleton />
                <Skeleton />
              </div>
            ))}
          </div>

          <div className='text-[24px] mt-5'>
           
            <div className='flex flex-wrap gap-2 max-w-[230px] md:max-w-[430px]'>
              {Array.from({ length: 4 }, (_, i) => (
                <Skeleton key={i} className='text-[16px] md:text-[12px] flex items-center justify-center border-[1px] border-[#E7E9EE] rounded-[4px] md:p-1 p-3  bg-[#FEFEFE]' />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col justify-start md:order-last order-first">
        {/* Links section skeleton */}
        <p className="font-Light text-[#545151] pb-3">
          <Skeleton className="w-40 h-6" />
        </p>

        {/* Slider image skeleton */}
        <Carousel className="flex md:hidden mb-10">
          <CarouselContent>
            {Array.from({ length: 4 }, (_, i) => (
              <CarouselItem key={i}>
                <Skeleton className="w-full rounded-[10px]" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* Heading and price skeleton */}
        <div>
          <h1 className="text-[34px] font-Bold"><Skeleton /></h1>
          <p className="font-Light text-[24px] font-[500] mb-5"><Skeleton /></p>
        </div>

        {/* Terms section skeleton */}
        <div className="flex flex-col mb-5">
          <Skeleton className="w-36 h-6" />
          <div className="text-[#545151] font-Light">
            {Array.from({ length: 4 }, (_, i) => (
              <Skeleton key={i} className="w-48 h-4" />
            ))}
          </div>
        </div>

        {/* Place a bid button skeleton */}
        <Skeleton className="border-[1px] h-10 md:w-12/12 w-6/12 mt-3 mb-6 flex text-[#FFFFFF] bg-[#23A6BF] hover:cursor-pointer transition duration-700 ease-in-out hover:scale-110 hover:bg-[#23A6BF] hover:text-white justify-center border-[#23A6BF] cursor-pointer rounded-[10px] px-[10px] py-[7px]" />

        {/* Info section skeleton */}
        <Skeleton className="bg-[#FFEDBA] flex flex-col h-[150px] w-[500px] rounded-[20px] p-[16px]" />
    
      </div>
    </section>
  );
};

export default VehiclesLoading;
