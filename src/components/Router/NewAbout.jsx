import React from 'react'
import { useParams } from 'react-router-dom'

const NewAbout = () => {

    const { store } = useParams()
    return (
        <div>
            <h3>New About {store}</h3>

        </div>
    )
}

export default NewAbout