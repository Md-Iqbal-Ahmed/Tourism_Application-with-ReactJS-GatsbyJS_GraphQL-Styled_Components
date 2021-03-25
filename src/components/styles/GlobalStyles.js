import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
* {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
   
    overflow-x: hidden;

    @media screen and (max-width: 768px){
        html, body{
            overflow-x: hidden;

        }

    }

}


body::-webkit-scrollbar {
  width: 3px;
}
body::-webkit-scrollbar-thumb {
  background-color: #F26A2E;
  border-radius: 50px;
}
body::-webkit-scrollbar-track {
  background-color: #777;
}

`
