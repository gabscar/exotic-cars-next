import styled from 'styled-components';


export const CardContainer = styled.div`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-top: 22px;
 
    @media (max-width: 800px) {
        flex-direction: column;
        display: flex;
        padding: 0px 0px 0px 0px;
        justify-content: center;
        align-items: center;
    }
    @media (max-width:1366px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media (max-width:1000px){
        grid-template-columns: 1fr 1fr ;
    }
`

export const TopBtn = styled.button`

    display: block; 
    position: fixed; 
    bottom: 20px; 
    right: 30px; 
    z-index: 99; 
    border: none; 
    outline: none; 
    background-color: red; 
    color: white; 
    cursor: pointer; 
    padding: 15px; 
    border-radius: 10px; 
    font-size: 18px; 

    &:hover{
        background-color: #555;
    }

`
