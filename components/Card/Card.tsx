import React,{useState} from "react";
import { CardDiv, CarImage, CarImageContainer, CarModel, CarTitle, TitleContainer, ValueContainer } from "./styles";
import Link from 'next/link'
import {Cars} from '../../Utils/interfaces'


interface card{
    data: Cars
}


const Card : React.FC<card> = ({data})=>{
   
   
    const {brand,price,image_card,model,id} =data;
    let modelAux =model;
   let modelPath = modelAux.split(' ').join('-');
   console.log(model)
    const linkPath = `/cars/${id}/${brand}/${modelPath}`;
    return(
        <Link href={linkPath}>
            <CardDiv >
                <TitleContainer>
                    <CarTitle>{brand}</CarTitle>
                    <CarModel>{model}</CarModel>
                </TitleContainer>
                <CarImageContainer>
                    <CarImage src = {image_card} />
                </CarImageContainer>
                <ValueContainer>
                    <h2>$</h2>
                    <h1>{price}</h1>
                    <p>/day</p>
                </ValueContainer>
            </CardDiv>
        </Link>
    )
}


export default Card;