import { BsFillArrowRightCircleFill,BsFillArrowLeftCircleFill } from "react-icons/bs";
import { carrousel } from "../../Utils/interfaces";
import { CarrouselContainer,CarrouselInactiveItem,CarrouselActiveItem, CarrouselImagesContainer } from "./styles";
import { useState } from "react";
import { LoadingDiv } from "../Loading/LoadingDIv";
import Image from 'next/image'
const Carrousel: React.FC<carrousel>=(props:carrousel)=>{
    const {nextSlide,prevSlide,currentIndex,currentData}=props;
    const [optionIsLoaded, setOptionIsLoaded] = useState(false);

    
    return(
        <CarrouselContainer>
            { currentData.length>1?<BsFillArrowLeftCircleFill className='arrow-left' onClick={()=>prevSlide(currentIndex-1)} />:
                <BsFillArrowLeftCircleFill className='arrow-left' onClick={()=>prevSlide(currentIndex)}/>
            }
            <CarrouselImagesContainer>
            {
                currentData.map((slide,index)=>{
                    if(currentIndex===index){
                        return(
                            <CarrouselActiveItem
                                key={index}
                            >
                                <div  style={{cursor:'pointer'}}onClick={index>currentIndex?()=>nextSlide(currentIndex+1)
                                    :index<currentIndex?()=>prevSlide(currentIndex-1):()=>prevSlide(currentIndex)}>
                                    {optionIsLoaded? null : <LoadingDiv/>}
                                    <Image className='img'  src={slide.image} width={450} height={250}onLoad={()=>setOptionIsLoaded(true)} />
                                </div>
                            </CarrouselActiveItem>
                            
                        )
                    }else{
                        return(
                            <CarrouselInactiveItem
                                key={index}
                            >
                                <div  style={{cursor:'pointer'}}onClick={index>currentIndex?()=>nextSlide(currentIndex+1)
                                    :index<currentIndex?()=>prevSlide(currentIndex-1):()=>prevSlide(currentIndex)}>
                                    {optionIsLoaded? null : <LoadingDiv/>}
                                    <Image className='img'  src={slide.image} width={330} height={180} onLoad={()=>setOptionIsLoaded(true)} />
                                </div>
                            </CarrouselInactiveItem>
                        )
                    }
                })
            }
            </CarrouselImagesContainer>
             {currentData.length>1?<BsFillArrowRightCircleFill className='arrow-right' onClick={()=>nextSlide(currentIndex+1)} />:
                <BsFillArrowRightCircleFill className='arrow-right' onClick={()=>nextSlide(currentIndex)} />
            }
        </CarrouselContainer>
    )
}

export default Carrousel;