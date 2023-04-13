export const signUpFormValidation = (formInputValues) => {
    let errors = {} // Empty object to store any error that occurs and display it
    if (!formInputValues.firstName.trim()) {//Checks if last name is inputed and if not put error inside object
        errors.firstName = "First Name is Required";
    };

    if (!formInputValues.lastName.trim()) {//Checks if last name is inputed and if not put error inside object
        errors.lastName = "Last Name is Required";
    };

    if (!formInputValues.email.trim()) {
        errors.email = "Email Field is Required";
    } else if (!/\S+@\S+\.\S+/.test(formInputValues.email)) {// check if inputed email is in proper email regex
        errors.email = "Email Address Not Valid!!!";
    };

    if (!formInputValues.password.trim()) {
        errors.password = "Password is Required!";
    } else if (formInputValues.password.length < 6) {// Checks if password is atleast 6 characters long
        errors.password = "Password Must Be Atleast 6 Characters Long";
    };

    if (formInputValues.password !== formInputValues.confirmPassword) {// check if the password and confirmPassword match
        errors.confirmPassword = "Passwords Do not Match!!!";
    };

    return errors;
}

export const loginFormValidation = (userLoginInfo) =>{
    let errors = {};
    if(!userLoginInfo.email.trim()){
        errors.email = "Email is Required";
    }else if(!/\S+@\S+\.\S+/.test(userLoginInfo.email)){
        errors.email = "Not a Valid Email Address"
    }
    if(!userLoginInfo.password.trim()){
        errors.password = "Must Enter Password";
    }
    return errors;
}