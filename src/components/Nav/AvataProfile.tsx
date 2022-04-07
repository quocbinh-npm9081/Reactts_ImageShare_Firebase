import React from 'react'
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../redux/store.hooks';
import { BiUserCircle } from '@react-icons/all-files/bi/BiUserCircle';
const AvataProfile = () => {

    const { currentUser }: any = useAppSelector(state => state.auth);

    return (
        <div>
            <Link to="/profile" className='flex items-center'>
                <div className='w-10 h-10 overflow-hidden rounded-full mr-2'>
                    {
                        currentUser.photoURL ? (

                            <img src={currentUser.photoURL}
                                alt={currentUser}
                                className="object-cover w-full h-full"
                            />

                        ) : (
                            <BiUserCircle
                                fontSize={34}
                            />
                        )
                    }
                </div>
                <span className='mr-4 font-semibold capitalize'>
                    {
                        currentUser.displayName
                    }
                </span>
            </Link>
        </div>
    )
}

export default AvataProfile