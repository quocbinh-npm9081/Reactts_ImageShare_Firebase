import React, { FormEvent, memo, useState, useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../../redux/store.hooks';

import { profileUpdate } from '../../redux/action-slides/profile.slides';

import Loading from '../Loading/Loading';

interface IProps {

    setOnSetting: (setOnSetting: boolean) => void

}

const ProfileForm: React.FC<IProps> = ({ setOnSetting }) => {

    const { currentUser } = useAppSelector(state => state.auth);

    const { profile } = useAppSelector(state => state.profile);

    const dispacth = useAppDispatch();

    const initUser = {
        fullname: "",
        gender: "",
        emailContact: "",
        address: "",
        phone: "",
        website: "",
        about: ""
    }

    const [data, setData] = useState(initUser);

    useEffect(() => {
        if (profile) setData(profile);
    }, [profile]);

    const [loading, setLoading] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        // console.log(e.target.value);
        const { name, value } = (e.target);

        setData({ ...data, [name]: value });

    }

    const handleSubmit = async (e: FormEvent) => {

        e.preventDefault();

        if (!currentUser) return;

        setLoading(true);

        await dispacth(profileUpdate({ user: currentUser, data: data }));

        setLoading(false);

    }


    return (
        <div>
            {loading && <Loading></Loading>}
            <div>
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                        <div className="px-4 py-5 ">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Profile</h3>
                            <p className="mt-1 text-sm text-gray-600">
                                This information will be displayed publicly so be careful what you share.
                            </p>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form onSubmit={handleSubmit}>
                            <div className="shadow sm:rounded-md sm:overflow-hidden">
                                <div className="px-4 py-5 space-y-6 bg-white sm:p-6">
                                    {/* Full Name */}
                                    <div>
                                        <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
                                            Full Name
                                        </label>
                                        <div className="flex mt-1 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                name="fullname"
                                                id="fullname"
                                                className="flex-1 block w-full text-blue-600 border-gray-300 rounded-none focus:ring-indigo-500 rounded-r-md sm:text-sm"
                                                value={data.fullname}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                    {/*Gender */}
                                    <div>
                                        <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                                            Gender
                                        </label>
                                        <div className="flex mt-1 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                name="gender"
                                                id="gender"
                                                className="flex-1 block w-full text-blue-600 border-gray-300 rounded-none focus:ring-indigo-500 rounded-r-md sm:text-sm"
                                                value={data.gender}
                                                onChange={handleInputChange}

                                            />
                                        </div>
                                    </div>
                                    {/* Email Contact */}
                                    <div>
                                        <label htmlFor="emailContact" className="block text-sm font-medium text-gray-700">
                                            Email Contact
                                        </label>
                                        <div className="flex mt-1 rounded-md shadow-sm">
                                            <input
                                                type="email"
                                                name="emailContact"
                                                id="emailContact"
                                                className="flex-1 block w-full text-blue-600 border-gray-300 rounded-none focus:ring-indigo-500 rounded-r-md sm:text-sm"
                                                value={data.emailContact}
                                                onChange={handleInputChange}

                                            />
                                        </div>
                                    </div>
                                    {/* Address */}
                                    <div>
                                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                            Address
                                        </label>
                                        <div className="flex mt-1 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                name="address"
                                                id="address"
                                                className="flex-1 block w-full text-blue-600 border-gray-300 rounded-none focus:ring-indigo-500 rounded-r-md sm:text-sm"
                                                value={data.address}
                                                onChange={handleInputChange}

                                            />
                                        </div>
                                    </div>
                                    {/* Phone number */}
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                            Phone Number
                                        </label>
                                        <div className="flex mt-1 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                name="phone"
                                                id="phone"
                                                className="flex-1 block w-full text-blue-600 border-gray-300 rounded-none focus:ring-indigo-500 rounded-r-md sm:text-sm"
                                                value={data.phone}
                                                onChange={handleInputChange}

                                            />
                                        </div>
                                    </div>
                                    {/* website */}
                                    <div>
                                        <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                                            Website
                                        </label>
                                        <div className="flex mt-1 rounded-md shadow-sm">
                                            <input
                                                type="text"
                                                name="website"
                                                id="website"
                                                className="flex-1 block w-full text-blue-600 border-gray-300 rounded-none focus:ring-indigo-500 focus:border-indigo-500 rounded-r-md sm:text-sm"
                                                placeholder="www.example.com"
                                                value={data.website}
                                                onChange={handleInputChange}

                                            />
                                        </div>
                                    </div>
                                    {/* About */}
                                    <div>
                                        <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                            About
                                        </label>
                                        <div className="mt-1">
                                            <textarea
                                                id="about"
                                                name="about"
                                                rows={5}
                                                className="block w-full mt-1 text-blue-600 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                placeholder='Brief description for your profile.'
                                                value={data.about}
                                                onChange={handleInputChange}

                                            />
                                        </div>
                                    </div>

                                </div>

                                {/* Button */}
                                <div className='flex items-center justify-between'>
                                    <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
                                        <button
                                            type="submit"
                                            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            disabled={loading}
                                        >
                                            Save
                                        </button>
                                    </div>
                                    <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
                                        <button
                                            onClick={() => setOnSetting(false)}

                                            type="button"
                                            disabled={loading}
                                            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                    <div className="border-t border-gray-200" />
                </div>
            </div>
        </div>
    )
}

export default memo(ProfileForm);