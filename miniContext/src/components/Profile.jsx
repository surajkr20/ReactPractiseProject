import UserContext from '../Context/UserContext'
import React, { useContext } from 'react'

const Profile = () => {

    const {user} = useContext(UserContext);

    if(!user) return <div>please Login</div>
    return <div>Welcome {user.username}</div>
}

export default Profile;
