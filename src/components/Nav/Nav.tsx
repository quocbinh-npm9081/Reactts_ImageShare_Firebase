import React from 'react';
import itemsNav from './itemsNav';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/store.hooks';
import AvataProfile from './AvataProfile';
import { authLogout } from '../../redux/action-slides/auth.slice';
const Nav = () => {

    const dispacth = useAppDispatch();

    const { currentUser } = useAppSelector(state => state.auth);

    // const [user, getUser] = useState(false);

    // useEffect(() => {
    //     // dispacth(addUser({
    //     //     name: 'CaoQuocBinh',
    //     //     loading: true
    //     // }))
    //     if (currentUser) return getUser(!user)

    // }, [currentUser]);


    return (
        <div>
            {
                currentUser ? (
                    <div className="flex items-center">
                        <AvataProfile />


                        <button className='px-5 py-2 rounded-md bg-emerald-500 text-white hover:bg-neutral-900'
                            onClick={() => dispacth(authLogout())}
                        >
                            Log out
                        </button>


                    </div>

                ) : (
                    <>
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
                                        <button className='px-5 py-2 rounded-md hover:text-green-500'

                                        >
                                            {
                                                item.display
                                            }
                                        </button>
                                    </Link>
                                )

                            ))
                        }
                    </>
                )
            }
        </div >
    )
};

export default Nav;