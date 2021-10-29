import { GetStaticProps, GetStaticPaths } from 'next'
import { useState, useEffect } from 'react';
import DetailCar from '../../components/DetailCar/DetailCar';
import { getAllCars } from '../../server/connections';
import { CarDetail } from '../../Utils/interfaces';
interface staticProps{
  car: CarDetail[],

}
const CarInfo: React.FC <staticProps>= (props:staticProps)=>{
    
    const [data,setData] = useState<CarDetail>(props.car[0])
    useEffect(()=>{
        setData(props.car[0])
    },[props.car[0]])
    

    console.log(data)
    return(
        <DetailCar props={data}/>
    )
}


export const getStaticProps: GetStaticProps = async (context) => {
    const {params} = context;
    const id = params.CarInfo[0];
    console.log(id)
    const response = await fetch(`http://10.0.0.103:4000/cars?id=${id}`);
    if(!response.ok){
      throw new Error("Someting went wrong");
    }
    const Data = await response.json();
    console.log(Data)
    const car = Data.filter((item:CarDetail)=>String(item.id)==id)
    return {
        props: {
          car: car,
        },
        revalidate: 500,
      };

}

export default CarInfo;
export const getStaticPaths: GetStaticPaths = async () => {
    const allVeicles = await getAllCars();
    const paths = allVeicles.map((item:CarDetail)=>{
        
        let replacedPath =  item.model.replace(/ /g, '-');
        
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
