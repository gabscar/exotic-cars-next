import type { NextPage } from 'next'
import { GetStaticProps} from 'next'
import Card from "../components/Card/Card";
import Image from 'next/image'
import { CardContainer} from "./styles";
import { CarDetail } from '../Utils/interfaces';
import { getAllCars } from '../server/connections';

interface lisCars{
  cars:CarDetail[]
}

const Home: NextPage<lisCars> = (props:lisCars) => {

  const {cars} = props;

  console.log(cars)
  function RenderCars(){

      if(cars){
        return(
            cars.map((item:CarDetail)=>(
            <Card data={item} key={item.id}/>
        ))
        )
      }
      return(
           <p>Não existem carros disponíveis</p>
        )
    
    
}
  return (
    <div>
      <div style={{display:'flex', justifyContent:'center'}}>
            <CardContainer>
                {RenderCars()}
            </CardContainer>
     
        </div>
    </div>
  )
}

export default Home


export const getStaticProps: GetStaticProps = async () => {
 
  const allCars = await getAllCars()
  return {
      props: {
        cars: allCars,
      },
      revalidate: 500,
    };

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