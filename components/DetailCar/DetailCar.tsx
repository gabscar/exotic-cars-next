
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
import Image from 'next/image'
import {useRouter} from 'next/router'
import { SyntheticEvent } from 'hoist-non-react-statics/node_modules/@types/react';
import {LoadingDiv} from '../Loading/LoadingDIv'
import{Loading} from '../Loading/LoadingComponent'
interface Detail {
    props:CarDetail
}
const DetailCar: React.FC <Detail>= ({props})=>{
    const {brand_img,brand,model,price,options}= props;
    const [mainIsLoaded, setMainIsLoaded] = useState(false);
    const [logoIsLoaded, setLogoIsLoaded] = useState(false);
    const [currentData,setCurrentData]= useState<options[]>(options.slice(0,3))
    const [currentIndex,setCurrentIndex] = useState( options.length<3?0:1);
    
    const [width,setWidth] = useState(1720);
    const router = useRouter();
    
   
    useEffect(() => {
        ChangeIndex();
        if(options.length < 3){
            setCurrentIndex(0)
        }else{
            setCurrentIndex(1);
        }
    }, [currentIndex]);

    useEffect(()=>{
        function handleResize() {
            setWidth(window.innerWidth)
          }
      
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
    },[width])  
    console.log(width)
    
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
    function goBackHandler(evt:SyntheticEvent){
        evt.preventDefault();
        router.back();
    }
    function NoVehiclesAvailable(){
        return(
            <ContainerNotCars>
                <NotCars>No vehicles available </NotCars>
                <BackButtonAux onClick = {goBackHandler}>
                    <FiArrowLeft className = "arrow" size = {15}/>Back to catalog    
                </BackButtonAux>
            </ContainerNotCars>
        )
    }
    
    return(
        options.length===0?NoVehiclesAvailable() : 
        <DetailContainer>
                <DetailTopContainer>
                    <LogoCar >
                        {logoIsLoaded ? null : (
                            <Loading/>
                        )}
                        {<Image src = {brand_img} width={91} height={123} onLoadingComplete={()=>setLogoIsLoaded(true)}/>}
                    </LogoCar>
                    <TextContainer>
                        <TextTitleCar>{brand} {model}</TextTitleCar>
                        <TextPrice>$ {price}/day</TextPrice>
                    </TextContainer>
                </DetailTopContainer>
                <MidContainer>
                    
                    <BackButton onClick={goBackHandler}> <FiArrowLeft className = "arrow"size = {15}/>Back to catalog</BackButton>
                    
                    <ImageContainer disp={mainIsLoaded}>
                        
                        {mainIsLoaded ? null : (
                                <LoadingDiv/>
                        )}
                        <Image src = {currentData[currentIndex].image} width={783} height={408} 
                            onLoadingComplete={()=>setMainIsLoaded(true)}
                        />
                        
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