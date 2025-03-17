import styled from "styled-components";

export const Post = styled.div`
    display: flex;
    
    justify-content: center;
    gap: 1rem;
`

export const HeaderPublicationContainer = styled.div`
    width: 864px;
    height: auto;


    display: flex;
    flex-direction: column;
    gap: 1,5rem;

    margin-top: -90px;
    border-radius: 6px;
   
    padding: 2rem;
    background-color: ${props => props.theme["base-profile"]};
`

export const Links = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    color: ${props => props.theme["blue"]};

    .homeLink{
        display: flex;
        align-items: center; /* Centraliza o ícone e o texto */
        gap: 0.5rem; /* Espaço entre o ícone e o texto */
    }
        a{     
            display: flex;
            align-items: center;
            font-size: 16px;
            font-weight: bold;
            text-decoration: none;
            color: ${props => props.theme["blue"]};
            padding-bottom: 1rem;
        }
        
        img{
            width: 12px;
            height: 12px;
        }
`

export const PostName = styled.div`
    width: 800px;
    
    display: flex;
    margin-bottom: 1rem;
    padding-left: 0.4rem;
    
    h1{
        font-size: 24px;
        color: ${props => props.theme["base-title"]};
    }
`