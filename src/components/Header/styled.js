import styled from "styled-components"

export const HeaderStyled = styled.header `
    display: flex;
    justify-self: flex-end;
    float: right;
    padding: 10px;
    gap: 10px;

    @media (max-width: 800px) {
        padding: 20px 20px;
        flex-direction: column;
        gap: 20px;
        }
    
`