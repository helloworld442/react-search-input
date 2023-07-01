import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html,
    body {
        margin: 0;
        padding: 0;
        width: 100%;
        background: #eaeef1;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    ul { 
        list-style-type: none;
        list-style: none;
    }

    h2,h3 {
        padding : 0;
        margin : 0;
    }

    input {
        outline : none;
    }

    * {
        box-sizing: inherit;
    }
`;

export default GlobalStyle;
