
export default function FormValidator(values, touched){
    let errors = {};
    if (!values.formUsername && touched.formUsername){
        errors.formUsername = 'Username is required'
    } else if (values.formUsername?.length < 5){
        errors.formUsername = 'Username must be at least 5 characters long!';
    }

    if (!values.formPassword && touched.formPassword){
        errors.formPassword = 'Password is required!'
    } else if (values.formPassword?.length < 8){
        errors.formPassword = 'Password must be at least 8 characters long!'
    }

    if (!values.email && touched.email){
        errors.email = 'Email address is required!';
    } else if (!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = 'Email address is invalid! Example: this@that.com';
    }

    if (!values.firstName && touched.firstName){
        errors.firstName = 'First name is required!'
    }

    if (!values.lastName && touched.lastName){
        errors.lastName = 'Last name is required!'
    }

    if (!values.address && touched.address){
        errors.address = 'Address is required!'
    }

    if (!values.city && touched.city){
        errors.city = 'City is required!'
    }

    if (!values.zipCode && touched.zipCode){
        errors.zipCode = 'Zipcode is required!'
    } else if(values.zipCode?.length !== 5){
        errors.zipCode = "Zipcode is 5 numbers long!"
    }

    return errors
}