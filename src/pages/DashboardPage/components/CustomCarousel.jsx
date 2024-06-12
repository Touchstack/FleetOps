import {
    Carousel,
    CarouselContent,
    CarouselItem,
  } from "@/Components/ui/carousel"
import { IoImagesOutline } from "react-icons/io5";
import {useEffect, useState} from 'react'
import { PropTypes } from 'prop-types';


const CustomCarousel = ({ data }) => {
    const [current, setCurrent] = useState(0)
    const [api, setApi] = useState();

    console.log(data);

    useEffect(() => {
     if (!api) {
       return
     }
       
     setCurrent(api.selectedScrollSnap() + 1)
       
     api.on("select", () => {
     setCurrent(api.selectedScrollSnap() + 1)
    })
    }, [api])
    
  return (
    <div className="flex flex-col md:hidden mb-5">
      <Carousel setApi={setApi} className="flex flex-col md:hidden mb-10">
          <CarouselContent>
            {data.map((img) => (
              <CarouselItem key={img.id}>
               <div className="p-1">
               {img?.image && !img.image.endsWith('null') ? (
                  <img 
                   src={img.image}
                   alt="" 
                   className="w-full rounded-[10px]"
                 />
               
                ) : (
                  <IoImagesOutline  size={180} className="w-full rounded-[10px]" />
                )}
               </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center py-1 space-x-2">
             {data.map((img) => (
                 <div
                   key={img.id}
                  className={`w-2 h-2 rounded-full ${current === img.id ? 'bg-fleetBlue' : 'bg-gray-300'}`}
                  />
              ))}
          </div>         
      </Carousel>
    </div>
  )
}

export default CustomCarousel

CustomCarousel.propTypes = {
  data: PropTypes.array.isRequired,
}