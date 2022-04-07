import { validateEmail } from "./register";
import { ILogin } from '../../redux/types';

const validateLogin = (user: ILogin) => {

    const { email, password } = user;

    const errors: string[] = [];

    if (!email) {
        errors.push("Please enter your email !")
    } else if (!validateEmail(email)) {
        errors.push("You have entered an invalid email address!")
    }
    if (!password) {
        errors.push("Please enter your password !")
    }

    return {
        errorMsg: errors,
        errorLength: errors.length
    }
}

export default validateLogin;