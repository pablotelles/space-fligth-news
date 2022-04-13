import styled from 'styled-components'
import { colorBlack } from '../../../../UI/variables'

export const PostList = styled.div`
    max-width: 800px;
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
