import React, { useState } from 'react'
import ProfileShow from '../components/Profile/ProfileShow'
import SettingProfile from '../components/Profile/SettingProfile';

const Profile = () => {

    const [onSetting, setOnSetting] = useState(false);

    return (
        <div>

            {
                onSetting ? <SettingProfile setOnSetting={setOnSetting} /> : <ProfileShow setOnSetting={setOnSetting} />
            }

        </div>
    )
}

export default Profile;