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

export const CarrouselContainer = styled.div<{length:number}>`
    
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
            left: ${({length})=>(length>2?'28%':'8%')};
            top:40%;
            
            
        }
        .arrow-right{
            position: absolute;
            top:40%;
            height: 30px;
            width: 30px;
            right: ${({length})=>(length>2?'28%':'8%')};
        }
    }
    @media (max-width:630px){
        .arrow-left {
            position: absolute;
            left: ${({length})=>(length>2?'26%':'6%')};
        }
        .arrow-right{
            position: absolute;
            right: ${({length})=>(length>2?'26%':'6%')};
        }
    }
    @media (max-width:400px){
        .arrow-left {
            height: 23px;
            width: 23px;
            left: ${({length})=>(length>2?'22%':'6%')};
            top: ${({length})=>(length>2?'50%':'44%')};
        }
        .arrow-right{
            height: 23px;
            width: 23px;
            right: ${({length})=>(length>2?'22%':'1%')};
            top: ${({length})=>(length>2?'50%':'44%')};
            
        }
       
    }

`

export const CarrouselActiveItem = styled.div<{leng:number}>`
    opacity: 1;
    user-select: none;
    height: 200px;  
    
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
         z-index:0;  
    }
    div .img{
            transform: translateY(10%);
            z-index: 10;
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
    @media (max-width:400px){
        div{
            width: ${({leng})=>(leng>2?'140px':'160px')};
            margin-left: ${({leng})=>(leng>2?'0px':'25%')};
           
            margin-right: 0px;
            transform: translateY(${({leng})=>(leng>2?'10%':'15%')});
        }
       
    }
    


`
export const CarrouselInactiveItem = styled.div<{leng:number}>`


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
    @media (max-width:400px){
        div{
            width: ${({leng})=>(leng>2?'80px':'100px')};
            margin-left: ${({leng})=>(leng>2?'0px':'2%')};
            
        }
    }
    
    
    
`


