import styled, {keyframes} from "styled-components";



export const DetailContainer = styled.div`
    flex-direction: column;
    justify-content: center;
    padding-top: 53px;
   
    background: rgb(235,235,235);
    background: linear-gradient(180deg, rgba(235,235,235,1) 10%, rgba(223,222,222,1) 52%, rgba(200,200,200,1) 71%);
    @media (max-width:400px){
        width: 400px;
      }
    
`

export const DetailTopContainer = styled.div`
    margin-left: 10%;
    flex-direction: row;
    display: flex;
  
`

export const LogoCar = styled.div`
    max-width:91px;
    max-height: 123px;
    justify-content: center;
    align-items: center;
    @media (max-width:1000px){
       
            width: 60px;
            height: 70%;
        
    }
    @media (max-width:900px){
       
       width: 50px;
       height: 70%;
   
}
`
export const TextContainer = styled.div`
    flex-direction: column;
    padding-left: 39px;
`
export const TextTitleCar = styled.h1`
    font: normal normal bold 50px Segoe UI;
    color: #313136;
    @media (max-width:1100px){
        font-size: 40px;
    }
    @media (max-width:1000px){
        font-size: 35px;
    }
    @media (max-width:900px){
        font-size: 25px;
    }
`
export const TextPrice = styled.h2`
    font: normal normal 300 40px Segoe UI;
    @media (max-width:1100px){
        font-size: 35px;
    }
    @media (max-width:1000px){
        font-size: 30px;
    }
    @media (max-width:900px){
        font-size: 20px;
    }
`
export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    max-width: 100vw;
    width: 1000px;
    height: 400px;
    @media (max-width:1200px){
        width: 700px;
        img {
           
        }
    }
    @media (max-width:1000px){
        width: 800px;
        img {
            width: 720px;
            height: 400px;
        }
    }
    @media (max-width:900px){
        
        img {
            align-self: center;
            width: 600px;
            height: 280px;
        }
    }
    @media (max-width:830px){
       
        img {
           
        }
    }
    @media (max-width:700px){
        width: 300px;
        img{
            
            
        }
    }
    @media (max-width:450px){
        width: 100vw;
        img{
            width: 400px;
            height: 180px;
        }
    }
   
`

export const MidContainer = styled.div`
     flex-direction:row;
     display: flex;
     justify-content: center;
     align-items: center;
     max-width: 100vw;
    
     
`
export const BackButton = styled.button`
    width: 177px;
    height: 50px;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    display: flex;
    cursor: pointer;
    font: normal normal 300 18px Segoe UI;
    background-color: transparent;
    .arrow{
        margin-left: 4px;
        margin-right: 4px;
    }
    @media (max-width:1300px){
        .arrow{
        margin-left: 2px;
        margin-right: 2px;
    }
        margin-left: 2%;
        width: 170px;
        font-size: 12px;
    }
    @media (max-width:1260px){
        .arrow{
            margin-left: 2px;
            margin-right: 2px;
        }
        
        width: 170px;
        margin-right: 80px;
        font-size: 12px;

    }
    @media (max-width:1000px){
        .arrow{
            width: 12px;
            height: 12px;
            
        }
        width: 180px;
        margin-left: 0;
        font-size: 12px;
        font-weight: bold;
    }

    @media (max-width:900px){
        .arrow{
            width: 30px;
            height: 30px;
            
        }
        width: 60px;
        font-size: 0px;
        border-radius: 60px;
    }
    @media (max-width:800px){
        .arrow{
            width: 20px;
            height: 20px;
        }
        width: 60px;
        margin-right: 0px;
        font-size: 0px;
    }
    @media (max-width:750px){
        .arrow{
            width: 20px;
            height: 20px;
        }
        width: 20%;
        border-radius: 60px;
        font-size: 0px;
        line-height: 0;
        display: none;
    }
`

export const NumberColorContainer = styled.div`
    position: absolute;
    right: 20%;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;

    @media (max-width:1500px){
        right: 9%;
    }
    @media (max-width:1400px){
        right: 7%;
    }
    @media (max-width:1200px){
        right: 4%;
    }
    @media (max-width:1000px){
        right: 10%;
        
    }
    @media (max-width:900px){
        right: 10%;
    }
  

`

export const BottomContainer = styled.div`
     width: 90%;
     margin: 0 auto;
     min-height: 400px;
    max-width: 100vw;
    height: 220px;
    justify-content: center;
    align-items: center;
     @media (max-width:700px){
         width: 95vw;
     }
   
`
export const BookContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    flex-direction: column;
    @media (max-width: 1000px){
        margin-bottom: 0;
    }
`
export const ButtonBook = styled.button`
    justify-content: center;
    align-items: center;
    font: normal normal 300 16px/21px Segoe UI;
    letter-spacing: 0px;
    color: white;
    background: #313136 0% 0% no-repeat padding-box;
    box-shadow: 0px 5px 20px #0000001A;
    border-radius: 25px;
    width: 177px;
    height: 50px;
    display: flex;
    cursor: pointer;
    .arrowRight{
        margin-left:4px;
    }

`
export const BackButtonAux = styled.button`
    justify-content: center;
    align-items: center;
    font: normal normal 300 16px/21px Segoe UI;
    letter-spacing: 0px;
    width: 177px;
    height: 50px;
    display: flex;
    cursor: pointer;
    box-shadow: 0px 5px 20px #0000001A;
    border-radius: 25px;
    margin-top: 10px;
    background-color: transparent;
    .arrowLeft{
        margin-left:4px;
    }
`

export const ButtonArrow = styled.button`
    width: 60px;
    height: 60px;
    color:white;
    background-color: black;
    border-radius: 60px;
`

export const NotCars = styled.h2`
    text-align: center;
    font: normal normal 300 32px/41px Segoe UI;
    margin-bottom: 12px;
`

export const ContainerNotCars = styled.div`
    height: 600px;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: flex;
`