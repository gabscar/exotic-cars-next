
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
import { CarDetail, options } from '../../Utils/interfaces';
import Carrousel from '../Carrousel/Carrousel';

interface Detail {
    props:CarDetail
}
const DetailCar: React.FC <Detail>= ({props})=>{
    const {brand_img,brand,model,price,options}= props;
    
    const [logoIsLoaded, setLogoIsLoaded] = useState(false);
    const [currentData,setCurrentData]= useState<options[]>(options.slice(0,3))
    const [currentIndex,setCurrentIndex] = useState(0);

    useEffect(() => {
        ChangeIndex();
        if(options.length <3)
            setCurrentIndex(0)
        else
            setCurrentIndex(1);
    }, [currentIndex]);
    
    function handleSelectActionModal(index: number) {
        if (index >currentIndex) {
            setCurrentIndex(index);
        }
        if (index <currentIndex) {
            setCurrentIndex(currentIndex+1);
        }
    }
    function ChangeIndex(){
        
        if (currentIndex < 1) {
            let aux:options[] = currentData;
            let shift:options = aux.shift();
            setCurrentData([...currentData,shift]);            
        }else if (currentIndex > 1) {
            let aux:options[] = currentData;
            let pop:options = aux.pop();
            setCurrentData([pop,...currentData]);
        }
        
    }
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
                    <Carrousel prevSlide={handleSelectActionModal} 
                            nextSlide={handleSelectActionModal} 
                            currentData={currentData} 
                            currentIndex={currentIndex}
                            />
                </BottomContainer>
         
            
        </DetailContainer>
    )
}

export default DetailCar;