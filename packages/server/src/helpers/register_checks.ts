export function checkRegister(
    email: string,
    firstName: string,
    lastname: string,
    password: string
): boolean{
    if(
        email == null ||
        firstName == null ||
        lastname == null ||
        password == null
    ){
        return true
    }
    return false
}

export function checkEmail(email: string): boolean{
    const email_rex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(email_rex.test(email)){
        return false
    }
    return true
}

export function checkPassword(password: string): boolean {
    const pass_rex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    if(pass_rex.test(password)){
        return false
    }
    return true
}