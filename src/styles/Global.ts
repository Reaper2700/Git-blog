import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        border: 2px solid ${(props) => props.theme['blue']};
        box-shadow: 0 0 4px ${(props) => props.theme['blue']};
        outline: none;
    }

    body {
        background-color: ${(props) => props.theme['base-background']};
        color: ${(props) => props.theme['base-text']};
        -webkit-font-smoothing: antialiased;
        font-size: 16px;
        line-height: 1.5;
        padding: 0;
            
        background-size: cover;
        background-position: center;
    }

    body, input, textarea, button {
        font: 400 1rem Nunito, sans-serif;
    }

    .container {
        width: 100%;
        max-width: 864px;  /* Define uma largura máxima */
        margin: 0 auto;    /* Centraliza o conteúdo */
        padding: 0 1rem;   /* Adiciona um espaçamento interno */
    }
`;
