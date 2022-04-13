import styled from 'styled-components'
import { colorBlack, fontGraph, fontTitle } from '../../../UI/variables'

export const PostList = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    color: ${colorBlack};
    @media (max-width: 768px) {
        max-width: 100%;
        margin: 20px;
      }
`
export const PostItem = styled.div`
    display: flex;
    gap: 30px;
    margin-bottom: 80px;
    @media (max-width: 768px) {
        flex-direction: column;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        border-radius: 0 0 10px 10px;
      }

`
export const PostImage = styled.img`
    min-width: 300px;
    mx-width: 350px;
    height: 200px;
    object-fit: cover;
`
export const PostContent = styled.div`
    h3{
        font-size: ${fontTitle};
        font-weight: bold;
        @media (max-width: 768px) {
            font-size: 20px;
          }
    }
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0;
            p{
                font-size: 14px;
                padding-bottom: 0px;
            }
            button{
                padding: 0 10px;
                background-color: white;
            }
    }
    p{
        font-size: ${fontGraph};
        padding-bottom: 20px;
    }
    @media (max-width: 768px) {
        padding: 0 10px 20px 10px;
      }
`
