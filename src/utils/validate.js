export const checkValidData=(email,Password,name)=>{

    const isEmailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
    const validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(Password);
    const validName = /^[a-zA-Z\s,.'-]{2,50}$/.test(name);

    if(!isEmailValid) return "Email ID is not Valid";
    if(!validPassword) return "Password is not Valid";
    if(!validName) return "Name is not valid";

    return null;
    
}