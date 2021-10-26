import styled from 'styled-components';
import DatePicker from 'react-date-picker/dist/entry.nostyle';



export const HeaderContainer = styled.div`
    display: flex;
    padding: 0% 13% 0% 9%;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 10px 30px #0000001A;
    height: 5.188rem;
    align-items: center;
    justify-content: space-between;
  
    @media (max-width:900px){
        flex-direction: column;
        height: 9.563rem;
    }

    @media (max-width:1050px){
        padding: 0% 5% 0% 5%;
    }
    @media (max-width:950px){
        padding: 0% 1% 0% 1%;
    }
    
    @media (max-width:450px){
        width: 100vw;
        padding: 0% 3% 0% 3%;
    }

`

export const LogoContainer =  styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    @media (max-width:900px){
        align-self:flex-start;
        margin-bottom: 0.625rem;
    }
`

export const FristLogoText = styled.h1`
    font: normal normal 600 24px/32px Segoe UI;
    letter-spacing: 0.96px;
    color: #313136;
    border: none;
    text-decoration: none;

`


export const SecondLogoText = styled.h3`
    font: normal normal normal 16px/21px Segoe UI;
    letter-spacing: 0.64px;
    padding-left: 0.313rem;
    color: #313136;
    opacity: 1;
    border: none;
    background-color: transparent;
    border-bottom: none;
    text-decoration: none;
`

export const CarFilterContainer = styled.div`
    background: #F3F1FC 0% 0% no-repeat padding-box;
    border-radius: 18px;
    opacity: 0.59;
    width: 33.75rem;
    height: 2.25rem;
    align-items: center;
    display: flex;
    justify-content: space-around;
    @media (max-width:900px){
        flex-direction: column;
        height: 80px;
        justify-content: center;
        align-items: center;
        width: 90vw;
    }
    @media (max-width:890px){
        width: 70vw;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
`

export const ButtonsContainer = styled.div`
    width: 200px;
    @media (max-width:900px){
        margin-bottom: 0.625rem;
    }
`
export const SignUpBtn = styled.button`
    width: 84px;
    height: 36px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border:none;
    color: #7B89F4;
    font: normal normal bold 16px/21px Segoe UI;
    border-radius: 13px;
    cursor:pointer;
`

export const LoginBtn = styled.button`
    text-align: center;
    font: normal normal bold 16px/21px Segoe UI;
    letter-spacing: 0px;
    color: #7B89F4;
    opacity: 1;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 2px solid #7B89F4;
    border-radius: 13px;
    padding: 2% 4% 2% 4%;
    cursor:pointer;
    margin-left: 20px;
    &:hover{
        background-color: #00000014;
    }
`

export const LocationContainer = styled.div`
    margin-left: 0.625rem;
    width: 12rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10rem;
   
    @media (max-width:900px){
        width: 100vw;
        height: 1.875rem;
        margin-bottom: 0.625rem;
    }
`
export const LocationInput = styled.input`
    width: 9.375rem;
    
    border-color: transparent;//#0000001A;
    height: 30px;
    background: #F3F1FC 0% 0% no-repeat padding-box;
    border-radius: 20px;
    padding: 5px;
    &:focus{
        border: none;
    }
    @media (max-width:900px){
        width: 60vw;

    }
    @media (max-width:890px){
        width: 50vw;
    }
`

export const DataContainer = styled.div`
    width: 18.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 3.738rem;
    @media (max-width:500px){
        margin-left: 0px;
        padding-bottom: 2px;
    }
    
`
export const SearchBtn = styled.button`
    width: 1.875rem;
    height: 1.875rem;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 15px #00000014;
    border: none;
    opacity: 1;
    border-radius: 1.875rem;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-left: 5px;
    margin-right: 5px;
    cursor:pointer;
    &:hover{
        background-color: #00000014;
    }
    @media (max-width:600px){
        margin-bottom: 4px;
    }
`


export const DateInput = styled(DatePicker)`

    .react-date-picker {
        display: inline-flex;
        position: relative;
    }
    .react-date-picker,
    .react-date-picker *,
    .react-date-picker *:before,
    .react-date-picker *:after {
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    .react-date-picker--disabled {
        background-color: #f0f0f0;
        color: #6d6d6d;
    }
    .react-date-picker__wrapper {
        display: flex;
        flex-grow: 1;
        flex-shrink: 0;
        border: thin solid #F3F1FC;
    }
    .react-date-picker__inputGroup {
        min-width: calc((4px * 3) +  0.54em * 8  +  0.217em * 2);
        flex-grow: 1;
        padding: 0 2px;
        box-sizing: content-box;
    }
    .react-date-picker__inputGroup__divider {
        padding: 1px 0;
        white-space: pre;
    }
    .react-date-picker__inputGroup__input {
        min-width: 0.54em;
        height: 100%;
        position: relative;
        padding: 0 1px;
        border: 0;
        background: none;
        font: inherit;
        box-sizing: content-box;
        -moz-appearance: textfield;
    }
    .react-date-picker__inputGroup__input::-webkit-outer-spin-button,
    .react-date-picker__inputGroup__input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    .react-date-picker__inputGroup__input:invalid {
        background: rgba(255, 0, 0, 0.1);
    }
    .react-date-picker__inputGroup__input--hasLeadingZero {
        margin-left: -0.54em;
        padding-left: calc(1px +  0.54em);
    }
    .react-date-picker__button {
        border: 0;
        background: transparent;
        padding: 4px 6px;
    }
    .react-date-picker__button:enabled {
        cursor: pointer;
    }
    .react-date-picker__button:enabled:hover .react-date-picker__button__icon,
    .react-date-picker__button:enabled:focus .react-date-picker__button__icon {
        stroke: #0078d7;
    }
    .react-date-picker__button:disabled .react-date-picker__button__icon {
        stroke: #6d6d6d;
    }
    .react-date-picker__button svg {
        display: inherit;
    }
    .react-date-picker__calendar {
        width: 350px;
        max-width: 100vw;
        position: absolute;
        top: 100%;
        left: 0;
        z-index: 1;
    }
    .react-date-picker__calendar--closed {
        display: none;
    }
    .react-date-picker__calendar .react-calendar {
        border-width: thin;
    }

`




export const LayoutMain = styled.div`
    
    
    
`