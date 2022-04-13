import styled from 'styled-components'
import { Modal} from 'react-bootstrap'
import { fontTitle } from '../../../UI/variables'


export const ModalStyled = styled(Modal)`
    section{
        padding: 40px 80px 40px 80px;
        justify-content: center;
        img{
            width: 250px;
            height: 200px;
        }
        @media (max-width: 768px) {
            padding: 30px;
            img{
                width: 100%;
                height: 200px;
            }
        }
        div{
            display: flex;
            gap: 40px;
            @media (max-width: 768px) {
                flex-direction: column;
        }

        div{
            flex-direction: column;
            gap: 10px
        }          
        h3{
            font-size: ${fontTitle};
            font-weight: bold;
        }
    }

`

