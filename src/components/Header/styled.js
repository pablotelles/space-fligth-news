import styled from "styled-components"

export const HeaderStyled = styled.header `
    display: flex;
    justify-self: flex-end;
    float: right;
    padding: 10px;
    gap: 10px;

    @media (max-width: 800px) {
        
        flex-direction: column;
        gap: 20px;
        max-width: 100%;
        }
    
`