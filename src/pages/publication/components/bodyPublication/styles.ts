import styled from "styled-components";

export const BodyPublication = styled.div`
    width: 100%;
    max-width: 864px;
    height: auto;
    min-height: 422px;

    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    margin: 30px auto;
`

export const TextPublication = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: justify;
    width: 100%;
    max-width: 800px;
    gap: 1.5rem;
    margin: 10px auto;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 8; /* Máximo de 3 linhas */
    overflow: hidden;

    span{
        font-size: 16px;
        color: ${props => props.theme['base-text']};
    }
`

export const Code = styled.div`
    width: 100%;
    max-width: 800px;
    height: auto;
    min-height: 110px;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;

    background-color: ${props => props.theme?.['base-post'] || '#f4f4f4'};
    border-radius: 8px;
`