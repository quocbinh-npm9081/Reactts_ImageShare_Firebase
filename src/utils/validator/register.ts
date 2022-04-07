import { IRegister } from '../../redux/types';


export const validateEmail = (email: string) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const checkPassword = (password: string, cf_password: string) => {
    if (password.length < 6) {
        return ("Password must be at least 6 chars !")
    } else if (password !== cf_password) {
        return ("Confirm password did not match. !")
    }
}

const validRegister = (user: IRegister) => {
    const { name, email, password, cf_password } = user;
    const errors: string[] = [];



    if (!name.trim()) {
        errors.push("Please enter your name !")
    } else if (name.length >= 20) {
        errors.push("Your name is up to 20 chars long")
    }


    if (!email) {
        errors.push("Please enter your email !")
    } else if (!validateEmail(email)) {
        errors.push("You have entered an invalid email address!")
    }


    if (!password) {
        errors.push("Please enter your password !")
    }

    if (!cf_password) {
        errors.push("Please enter confirm password !")
    }

    const msg_checkPassword = checkPassword(password, cf_password);
    if (msg_checkPassword) {
        errors.push(msg_checkPassword)
    }

    return {
        errorMsg: errors,
        errorLength: errors.length
    }


}


export default validRegister