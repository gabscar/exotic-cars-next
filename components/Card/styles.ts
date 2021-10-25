import styled from 'styled-components';


export const CardDiv = styled.div`
    width: 287px;
    height: 233px;
    background: #F8F8FA 0% 0% no-repeat padding-box;
    border-radius: 20px;
    opacity: 1;
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    margin-left: 1rem;
    margin-right: 1rem;
`

export const TitleContainer = styled.div`
    flex-direction:column;
    padding-left: 1.25rem;
    padding-top: 0.625rem;
`


export const CarTitle = styled.p`
    text-align: left;
    font: normal normal bold 17px/22px Segoe UI;
    letter-spacing: 0px;
    color: #313136;
`

export const CarModel = styled.p`
    text-align: left;
    font: normal normal 300 17px/22px Segoe UI;
    letter-spacing: 0px;
    color: #313136;
`
export const CarImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 300px;
    height: 200px;
`

export const CarImage = styled.img`
   max-width: 300px;
   max-height: 130px;
`

export const ValueContainer = styled.div`
    margin-right: 1rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 1.25rem;
    h2 {
        font-size: 1rem;
        font-weight: bold;
        margin-bottom: 0.625rem;
    }
    h1 {
        font-size: 1.5rem;
    }
    p {
        display: flex;
        font-size: 0.875rem;
        font-weight: 300;
        margin-left: 0.2rem;
    }
`
