import React from "react"
import loading from '../../assets/img/loading.gif'

export const Loader = () => {
    return(
        <div style={
            {
                display: 'flex',
                justifyContent: 'center',
                padding: '40px 0'
                }
        }>
            <img src={loading} alt="loading more posts" />
        </div>
    )
}