


import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
      margin: 0px;
      padding: 0px;
      box-sizing: border-box;
      max-width: 100vw;
    
    }
    #root {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
   
    }
    body {
     
      font-family: 'Segoe UI';
     
      
    }
    a {
        text-decoration: none;
      }
`;