import styled from "styled-components"

export const CardContainer = styled.div`
    background-color: rgba(69,64,80,0.3);
    box-shadow: 0 4px 8px 0 rgba(207,75,35,0.6);
    padding: 10px 20px;
    border-radius: 4px;
    margin: 10px 0;
    max-width: 95vw;
    width: 75vw;
    @media screen and (max-width: 620px) {
        width: 85vw;
        margin: 10px;
      }
`