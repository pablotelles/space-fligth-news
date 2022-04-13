import styled from 'styled-components'


export const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 100px;    
	align-items: center;
    margin-bottom: 50px;
    h2{
        font-size: 30px;
        text-align: center;
    }
`
export const Logo = styled.img`
    width: 150px;
    padding-top: 50px;
    padding-bottom: 30px;
    margin: 0 auto;
    @media (max-width: 768px) {
        width: 100px;
      }
`