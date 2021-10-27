import styled, {keyframes,css} from "styled-components";

const SlideOutRigthAnimation = keyframes`
    from {
        transform: translate3d(0, 0, 0);
    }

    to {
        visibility: hidden;
        transform: translate3d('-100%', '-100%', 0);
    }
`;

export const CarrouselImagesContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 0% 0% 0% 0%;
    max-width: 500px;
    @media (max-width:700px){
        width: 100vw;
        
    }
`

export const CarrouselContainer = styled.div`
    
    display: flex;
    
    justify-content: space-evenly;
    align-items: center;
    overflow: hidden;
    height: 400px;
    transform: scale(1);
    transition-delay: 1s;
    width: 100vw;
    
    .arrow-right {
        height: 50px;
        width: 50px;
        color: #000;
        cursor: pointer;
        user-select: none;
        z-index: 10;
    }   
    .arrow-left {
        height: 50px;
        width: 50px;
        color: #000;
        cursor: pointer;
        user-select: none;
        z-index: 10;
    }   
    @media (max-width:1400px){
        .arrow-left {
            height: 40px;
            width: 40px;
            margin-right: 6%;

        }
        .arrow-right{
            margin-left: 6%;
            height: 40px;
            width: 40px;
        }
    }
    @media (max-width:1000px){
        .arrow-left {
            height: 35px;
            width: 35px;
            margin-right: 4%;

        }
        .arrow-right{
            margin-left: 4%;
            height: 35px;
            width: 35px;
        }
    }
    @media (max-width:900px){
        .arrow-left {
            height: 28px;
            width: 28px;
            margin-right: 3%;

        }
        .arrow-right{
            margin-left: 3%;
            height: 28px;
            width: 28px;
        }
    }

    @media (max-width:700px){
        max-width: 100vw;
        justify-content: center;
        .arrow-left {
            position: absolute;
            height: 30px;
            width: 30px;
            left: 28%;
            top:40%;
            
            
        }
        .arrow-right{
            position: absolute;
            top:40%;
            height: 30px;
            width: 30px;
            right: 28%;
        }
    }
    @media (max-width:630px){
        .arrow-left {
            position: absolute;
            left: 26%;
        }
        .arrow-right{
            position: absolute;
            right: 26%;
        }
    }

`

export const CarrouselActiveItem = styled.div`
    opacity: 1;
    user-select: none;
    height: 100%;  
    
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
    div{
        display: flex;
        background: rgb(208,201,249);
        background: linear-gradient(90deg, rgba(208,201,249,1) 19%, rgba(212,207,239,1) 38%, rgba(218,213,245,1) 100%);
        width: 330px;
        border-radius: 30px;
        transform: translateY(-20%);
           
    }
    div .img{
            transform: translateY(10%);
           
            transition-duration: 1s;
            animation: ${ css`0.5s ${SlideOutRigthAnimation}`};
            
    }
    @media (max-width:1400px){
        div{
            width: 300px;
        }
    }
    @media (max-width:1000px){
        div{
            width: 280px;
        }
    }
    @media (max-width:900px){
        div{
            width: 250px;
        }
    }
    @media (max-width:700px){
        
        div{
            width: 220px;
            justify-self: center;
            
        }
    }
    


`
export const CarrouselInactiveItem = styled.div`


    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    
   
    div{
        display: flex;
        justify-content: center;
        background-color: #D2D2D2;
        width: 280px;
        border-radius: 30px;
    }
    div .img{
        justify-self: center;
        transform: translateX(3%);
    }
    @media (max-width:1400px){
        div{
            width: 210px;
        }
    }
    @media (max-width:1000px){
        div{
            width: 190px;
        }
    }
    @media (max-width:900px){
        div{
            width: 160px;
        }
    }
    @media (max-width:700px){
        div{
            
            width: 130px;
            margin: 0 20px 0 20px;
            
        }
        
    }
    
    
    
`


