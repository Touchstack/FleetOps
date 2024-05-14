import {
    Carousel,
    CarouselContent,
    CarouselItem,
  } from "@/Components/ui/carousel"
import {useEffect, useState} from 'react'
import { PropTypes } from 'prop-types';

const CustomCarousel = ({ data }) => {
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)
    const [api, setApi] = useState();

    useEffect(() => {
     if (!api) {
       return
     }
       
     setCount(api.scrollSnapList().length)
     setCurrent(api.selectedScrollSnap() + 1)
       
     api.on("select", () => {
     setCurrent(api.selectedScrollSnap() + 1)
    })
    }, [api])
    
  return (
    <div>
      <Carousel setApi={setApi} className="flex flex-col md:hidden mb-10">
          <CarouselContent>
            {data.map((img) => (
              <CarouselItem key={img.id}>
                
              <div className="p-1">
               <img 
                src={img.image}
                alt="" 
                className="w-full rounded-[10px]"
              />
             </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="py-1 text-center text-sm text-muted-foreground">
           Slide {current} of {count}
          </div>
      </Carousel>
      
    </div>
  )
}

export default CustomCarousel

CustomCarousel.propTypes = {
  data: PropTypes.array.isRequired,
}