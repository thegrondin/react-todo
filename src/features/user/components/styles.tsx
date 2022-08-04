import styled from "styled-components";
import {Card as AntCard} from "antd";

export const Card = styled(AntCard)`
    border-radius: 15px;
    background-color: #fafafa;
    border : 1px solid #e8e8e8;
`

export const Profile = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: row;
  
    img {
      border-radius: 100%;
      width: 75px;
    }
  
    `

export const ProfileInfo = styled.div`
    margin-left: 10px;   
  
    span {
      width: 100%;
      display: block;
    }
`