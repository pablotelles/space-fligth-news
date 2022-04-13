import styled from "styled-components"
import { fontTitle, fontGraph } from "../../../../UI/variables"

export const PostContent = styled.div`
position: relative;
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
        padding: 0 20px 20px 20px;
      }
`