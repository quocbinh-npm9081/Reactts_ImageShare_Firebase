import React from 'react'
import ProfileForm from './ProfileForm';

interface IProps {
    setOnSetting: (setOnSetting: boolean) => void;
}


const SettingProfile: React.FC<IProps> = ({ setOnSetting }) => {
    return (
        <ProfileForm setOnSetting={setOnSetting} />
    )
}
export default SettingProfile;