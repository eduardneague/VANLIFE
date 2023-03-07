import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'
import {Context} from '../src/ContextProvider'

const VanPage: React.FC = (props): JSX.Element => {

    const {vans} = useContext(Context)
    const {van_id} = useParams()

    const currentVan: Object = vans.find((van: { id: string | undefined }) => van.id === van_id)

    return (
        <div>VanPage</div>
    )
}

export default VanPage