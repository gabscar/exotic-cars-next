import type { NextPage } from 'next'
import { GetStaticProps} from 'next'
import Card from "../components/Card/Card";
import Image from 'next/image'
import { CardContainer} from "./styles";
import { CarDetail } from '../Utils/interfaces';
import { getAllCars } from '../server/connections';
import ScrollTop from '../components/ScrollTop/ScrollTop';

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
            <ScrollTop/>
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
