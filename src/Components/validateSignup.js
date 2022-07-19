export const validateSignup = (data,type) => {

    const errors={};
    
    if(!data.email){
            errors.email="Please Enter valid E-mail"
        } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(data.email)){ 
            errors.email="Invalid E-mail"
        } else {
            delete errors.email
        }

    if (!data.password){
            errors.password="Please Enter Password"
        } else if (!/^(?=.*[A-Z])(?=.*[\W])(?=.*[0-9])(?=.*[a-z]).{8,128}$/.test(data.password)){
            errors.password="the password must / >8 /1Capital/1Number/1Symbol"
        } else {
            delete errors.password
        }

    if(type==="SignUp"){
        if(!data.username.trim()){
            errors.username="Please Enter User-Name"
        } else {
            delete errors.username
        }
        if(data.checkboks){
            delete errors.checkboks
        } else {
            errors.checkboks="Please Accept Our Terms"
        }
        
        if(!data.confirmpassword){
            errors.confirmpassword="Please Re-type Password"
        } else if(data.confirmpassword !== data.password){
            errors.confirmpassword="Password Do Not Match"
        } else {
            delete errors.confirmpassword
        }
    }

    return errors;
    }
