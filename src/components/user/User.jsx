import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteUser, getUser } from '../../assets/data/users';

export const User = () => {
    const params = useParams();
    const navigate = useNavigate();

    const user = getUser( parseInt( params.userId ) );

    const handleDelete = () => {
        deleteUser( user.id );
        navigate('/users', { replace: true });
    }

    if (!user) {
        return <div>El usuario no existe</div>
    }

    return (
        <div>
            <h2>{ user.name }</h2>
            <div>
                <strong>Phone: </strong> { user.phone }
            </div>
            <div>
                <strong>Website: </strong> { user.website }
            </div>

            <br />
            <hr />
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}
