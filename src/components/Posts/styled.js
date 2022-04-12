import styled from 'styled-components'
import { colorBlack, fontGraph, fontTitle } from '../../UI/variables'

export const PostList = styled.div`
    max-width: 800px;
    margin: 0 auto;
    color: ${colorBlack};
`
export const PostItem = styled.div`
    display: flex;
    gap: 30px;
    margin-bottom: 80px;
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
`
