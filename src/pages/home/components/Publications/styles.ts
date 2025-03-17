
import styled from "styled-components";

export const BoxPublications = styled.div`
    height: 100%;
    width: 100%;
    width: 864px;
    max-height: 900px;
    display: flex;
    margin-left: 285px;
    flex-direction: column; // Para alinhar os elementos verticalmente
    align-items: center;
    gap: 20px;


    .Header{
        width: 100%;
        display: flex;
        justify-content: space-between;
        text-align: center;

        h3{
            font-size: 18px;
            color: ${props => props.theme["base-subtitle"]};
        }

        span{
            font-size: 14px;
            color: ${props => props.theme["base-span"]};
        }
    }
`

export const SearchBar = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 864px;
    margin-bottom: 20px;

    input{
        width: 100%;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid ${props => props.theme["base-border"]};
        background-color: ${props => props.theme["base-input"]};
        color: ${props => props.theme["base-label"]};
    }

`
export const PublicationsBox = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
`

export const Publications = styled.div`
    width: 416px;
    height: 260px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    border-radius: 10px;
    background-color: ${props => props.theme["base-post"]};
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    cursor: pointer;

    .HeaderPublication{
        height: 64px;
        display: flex;
        justify-content: space-between;
        align-items: start;
        h2{
            width: 283px;
            font-size: 20px;
            color: ${props => props.theme["base-title"]};
        }

        span{
            font-size: 14px;
            color: ${props => props.theme["base-span"]};
        }
    }

    .TextPublication{
        width: 352px;
        height: 110px;
        margin-bottom: 40px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3; /* Número de linhas visíveis */
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        span{
        font-size: 16px;
        color: ${props => props.theme["base-text"]};  
        }
    }
    
`