export const checkValidData=(email,Password)=>{

    const isEmailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
    const validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(Password);

    if(!isEmailValid) return "Email ID is not Valid";
    if(!validPassword) return "Password is not Valid";

    return null;
    
}