
import { useState, useEffect } from 'react';
import { FiArrowLeft,FiArrowRight } from "react-icons/fi";
import { BackButton, BackButtonAux, 
    BookContainer, BottomContainer, 
    ButtonBook, ContainerNotCars, 
    DetailContainer, DetailTopContainer, 
    ImageContainer, LogoCar, MidContainer, 
    NotCars, NumberColorContainer, TextContainer, 
    TextPrice, TextTitleCar 
} from './styles'
import { CarDetail } from '../../Utils/interfaces';

interface Detail {
    props:CarDetail
}
const DetailCar: React.FC <Detail>= ({props})=>{
    const {brand_img,brand,model,price,options}= props;
    console.log(props)
    const [logoIsLoaded, setLogoIsLoaded] = useState(false);
    const [currentData,setCurrentData]= useState<any[]>(options)
    const [currentIndex,setCurrentIndex] = useState(0);

    
    return(
        <DetailContainer>
                <DetailTopContainer>
                <LogoCar >
                    <img style= {{width: '100%',}} src = {brand_img} onLoad={()=>setLogoIsLoaded(true)}></img>
                </LogoCar>
                <TextContainer>
                    <TextTitleCar>{brand} {model}</TextTitleCar>
                    <TextPrice>$ {price}/day</TextPrice>
                </TextContainer>
                </DetailTopContainer>
                <MidContainer>
                    <BackButton> <FiArrowLeft className = "arrow"size = {15}/>Back to catalog</BackButton>
                    <ImageContainer>
                        
                        <img src = {currentData[currentIndex].image} ></img>
                        <NumberColorContainer>
                            <TextTitleCar>0{currentData[currentIndex].id_option}</TextTitleCar>
                            <TextPrice>{currentData[currentIndex].color}</TextPrice>
                        </NumberColorContainer>
                    </ImageContainer>
                    
                </MidContainer>
                <BookContainer>
                    <ButtonBook>Book Now <FiArrowRight className = "arrowRight" size={15}/> 
                    </ButtonBook>
                    
                </BookContainer>
                {}
                <BottomContainer>
                
                </BottomContainer>
         
            
        </DetailContainer>
    )
}

export default DetailCar;