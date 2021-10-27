import styled,{keyframes,css} from "styled-components"

const animation = keyframes`
    0%{
        transform: rotate(0deg)
    }
    100%{
        transform: rotate(360deg);
    }
`

export const Loading = styled.div`
    display: inline-block;
    width: 30px;
    height: 30px;
   
    :after{
        content: ' ';
        display: block;
        width: 30px;
        height: 30px;
        border-radius: 60%;
        border: 5px solid gray;
        border-color: gray transparent gray transparent;
        animation: ${css`${animation} 1.2s linear infinite`};
    }
`
export const LoadingContainer= styled.div`
    position: absolute;
    top:50%;
    left: 50%;
    display: flex;

`