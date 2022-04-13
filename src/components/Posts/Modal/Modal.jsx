import React, { useState } from "react"
import { transformDate } from "../Posts/transformDate"
import { ModalStyled } from "./Styled"
import { ButtonCommon } from "../../../UI/commons"
import closeIcon from '../../../assets/img/closeIcon.svg'

export const ModalPost = ({item}) => {
    const [modal, setModal] = useState(false)
    
    return(
        <>
            <ButtonCommon onClick={() => setModal(true)}>Ver mais</ButtonCommon>
            <ModalStyled
                size="lg"
                show={modal}
            >
                <ModalStyled.Header style={{display: 'flex', justifyContent: 'flex-end'}}>
                <img
                    src={closeIcon}
                    alt="incon close"
                    onClick={() => setModal(false)}    
                />
                </ModalStyled.Header>
                <section>
                    <div>
                        <img src={item.imageUrl} alt="" />
                        <div>
                            <h3>{item.title}</h3>
                            <p style={{fontSize: '14px'}}>{transformDate(item.publishedAt)}</p>
                            <p>{item.summary}</p>
                        </div>
                    </div>
                </section>
                <ButtonCommon
                    style={{width: '150px', margin: '0px auto 40px auto'}}
                    onClick={() => window.open(item.url)}
                >ir para o site</ButtonCommon>
            </ModalStyled>
        </>
    )
}