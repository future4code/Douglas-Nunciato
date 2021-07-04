import styled from "styled-components"
import { Delete } from "@material-ui/icons"

export const CardContainer = styled.div`
    display: flex;
    background-color: rgba(69,64,80,0.3);
    box-shadow: 0 4px 8px 0 rgba(207,75,35,0.6);
    padding: 10px 20px;
    border-radius: 4px;
    margin: 10px 0;
    align-items: center;
    justify-content: space-between;
    width: 40vw;
    @media screen and (max-width: 620px) {
        width: 70vw;
        margin: 10px;
      }
    &:hover{
        cursor: pointer;
        background-color: #b6d4e3;
    }
`

export const DeleteButton = styled(Delete)`
    padding: 10px;
    color: slategray;
    &:hover{
        cursor: pointer;
        background-color: #d1e4ed;
        border-radius: 24px;
        color: darkred;
    }
`