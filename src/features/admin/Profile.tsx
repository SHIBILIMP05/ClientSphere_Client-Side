import { useState } from "react"
import ProfileInfo from "./ProfileInfo"
import ProfileForm from "./ProfileForm"

const Profile = () => {
    const [isEdit, setIsEdit] = useState(false)


    return (
        <>

            {isEdit ? <ProfileForm setIsEdit={setIsEdit} /> : <ProfileInfo  setIsEdit={setIsEdit} />}
        </>
    )
}

export default Profile