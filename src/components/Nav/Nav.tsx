import React from 'react';
import itemsNav from './itemsNav';
import { Link } from 'react-router-dom';
import { addUser, getStateAuth } from '../../redux/action-slides/auth.slice';
import { useAppDispatch, useAppSelector } from '../../redux/store.hooks';

const Nav = () => {

    const dispacth = useAppDispatch();
    //const { currentUser, loading } = useAppSelector(getStateAuth);


    React.useEffect(() => {
        dispacth(addUser({
            name: 'CaoQuocBinh',
            loading: true
        }))

    }, [])
    //console.log({ currentUser, loading });

    return (
        <div>
            {
                itemsNav.map((item, index) => (
                    item.path === '/register' ? (
                        <Link to={item.path} key={index}>
                            <button className='px-5 py-2 rounded-md bg-emerald-500 text-white hover:bg-neutral-900'>
                                {
                                    item.display
                                }
                            </button>
                        </Link>) : (
                        <Link to={item.path} key={index}>
                            <button className='px-5 py-2 rounded-md hover:text-green-500'>
                                {
                                    item.display
                                }
                            </button>
                        </Link>
                    )

                ))
            }
        </div >
    )
};

export default Nav;