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
    justify-content: space-around;
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
    }   
    .arrow-left {
        height: 50px;
        width: 50px;
        color: #000;
        cursor: pointer;
        user-select: none;
    }   

    @media (max-width:600px){
        max-width: 100vw;
        .arrow-left {
            position: absolute;
            height: 30px;
            width: 30px;
            left: 20%;
            
            
        }
        .arrow-right{
            position: absolute;
            height: 30px;
            width: 30px;
            right: 18%;
        }
    }
`

export const CarrouselActiveItem = styled.div`
    opacity: 1;
    user-select: none;
    height: 100%;  
    position: absolute;
    margin-top: 20px;
    margin-left: 20px;
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
    @media (max-width:700px){
        
        div{
            width: 250px;
            
            
        }
    }


`
export const CarrouselInactiveItem = styled.div`


    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    
    margin: 0 180px 0 200px;
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
    @media (max-width:700px){
        div{
            width: 200px;
            margin: 0 0 0 0;
            
        }
    }
`


