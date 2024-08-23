import { useState } from "react"
import ProfileForm from "./ProfileForm"
import ProfileInfo from "./ProfileInfo"



const Profile = () => {
    const [isEdit, setIsEdit] = useState(false)


    return (
        <>
            {isEdit ? <ProfileForm setIsEdit={setIsEdit} /> : <ProfileInfo  setIsEdit={setIsEdit} />}
        </>
    )
}

export default Profile