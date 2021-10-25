import { GetStaticProps, GetStaticPaths } from 'next'
import { useState, useEffect } from 'react';
import { Loading } from '../../components/Loading/LoadingComponent';
import { FiArrowLeft,FiArrowRight } from "react-icons/fi";
import { BackButton, BackButtonAux, 
    BookContainer, BottomContainer, 
    ButtonBook, ContainerNotCars, 
    DetailContainer, DetailTopContainer, 
    ImageContainer, LogoCar, MidContainer, 
    NotCars, NumberColorContainer, TextContainer, 
    TextPrice, TextTitleCar 
} from './styles'
const CarInfo: React.FC = (props)=>{
    const {brand_img,brand,model,price,options}= props.car[0];
 
    const [logoIsLoaded, setLogoIsLoaded] = useState(false);
    const [currentData,setCurrentData]= useState<any[]>(options)
    const [currentIndex,setCurrentIndex] = useState(0);

    console.log(currentData)
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


export const getStaticProps: GetStaticProps = async (context) => {
    const {params} = context;
    const id = params.CarInfo[0];
    console.log(id)
    const response = DUMMY_DATA.filter(item=>String(item.id)==id)
    return {
        props: {
          car: response,
        },
        revalidate: 500,
      };

}

export default CarInfo;
export const getStaticPaths: GetStaticPaths = async () => {
    const paths = DUMMY_DATA.map(item=>{
        
        let replacedPath =  item.model.split(' ').join('-')  
        
        return ({params:
            {CarInfo:[
                    `${item.id}`,
                    `${item.brand}`,
                    `${replacedPath}`
            ]
        }})
        
        });

    return{
        paths: paths,
        fallback:false
    }
}

const DUMMY_DATA = [
    {
      "id": 1,
      "brand": "Prosche",
      "model": "911 TURBO S",
      "price": 825,
      "image_card": "https://imgur.com/WHLWBq4.png",
      "brand_img": "https://imgur.com/6yNQv7U.png",
      "options": [
        {
          "id_option": 1,
          "color": "White",
          "image": "https://imgur.com/RUUw6Ka.png"
        },
        {
          "id_option": 2,
          "color": "Silver",
          "image": "https://imgur.com/lncvYZj.png"
        },
        {
          "id_option": 3,
          "color": "Red",
          "image": "https://imgur.com/ovFfxzj.png"
        }
      ]
    },
    {
      "id": 2,
      "brand": "Bentley",
      "model": "Continental",
      "price": 1025,
      "image_card": "https://imgur.com/4S0PQYW.png",
      "brand_img": "https://imgur.com/D1R4f9M.png",
      "options": [
        {
          "id_option": 1,
          "color": "White",
          "image": "https://imgur.com/ldyf9tw.png"
        },
        {
          "id_option": 2,
          "color": "Blue",
          "image": "https://imgur.com/jqhQ8Nv.png"
        },
        {
          "id_option": 3,
          "color": "Baby Blue",
          "image": "https://imgur.com/4YyaaKz.png"
        }
      ]
    },
  ]