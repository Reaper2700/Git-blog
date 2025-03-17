import styled from "styled-components";
import headerBg from "../../../assets/Cover.svg"

export const HeaderBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1540px;
    height: 296px;
    width: 100%;
    
    background-image: url(${headerBg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`