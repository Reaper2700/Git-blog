import styled from "styled-components";

export const BoxUser = styled.div`
    width: 1440px;
    height: 300px;
    display: flex;
    justify-content: center;
    margin-top: -90px;
`

export const CardUser = styled.div`
    width: 864px;
    height: 212px;
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 2rem;
    gap: 2rem;
    border-radius: 8px;
    background-color: ${props => props.theme['base-profile']};

    img{
        width: 148px;
        height: 148px;
        border-radius: 8px;
    }
`

export const ProfileUser = styled.div`
    display: grid;
    gap: 1rem;
    height: 148px;

    .Bio{
        font-size: 16px;
        color: ${props => props.theme["base-text"]};
        width: 612px;
        height: 42px;
    }

    .Name{
        display: flex;
        justify-content: space-between;
        align-items: start;

        a{
            font-size: 12px;
            font-weight: bold;
            text-decoration: none;
            color: ${props => props.theme["blue"]};
            padding: 0.5rem;
        }
        
        img{
            width: 12px;
            height: 12px;
        }

    }

    

`

export const Icones = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;

    .icone{
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-top: 0;        
    }
    span{
        display: flex;
        align-items: center;
        font-size: 16px;
        gap: 0.5rem;
    }
    svg {
        width: 16px; /* Ajuste conforme necessário */
        height: 16px;
    }

`

