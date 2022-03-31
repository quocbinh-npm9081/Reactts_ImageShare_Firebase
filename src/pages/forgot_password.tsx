import { useNavigate } from 'react-router-dom';
import { VscArrowLeft } from '@react-icons/all-files/vsc/VscArrowLeft';
import ForgotForm from '../components/ForgotForm/ForgotForm';
const Forgot_password = () => {

    const history = useNavigate();


    return (
        <div>


            <button className='text-center flex items-center justify-center ml-2 p-2 rounded-md bg-emerald-500 text-white hover:bg-neutral-900'
                onClick={() => history(-1)}
            >
                <VscArrowLeft
                    fontSize={24}
                />
                Back
            </button>
            <ForgotForm />
        </div>
    )
}





export default Forgot_password;