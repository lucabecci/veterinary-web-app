export function checkEmail(email: string): boolean{
    const email_rex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(email_rex.test(email)){
        return false
    }
    return true
}


export function checkPassword(password: string): boolean{
    const pass_rex =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(pass_rex.test(password)){
        return false
    }
    return true
}

export function comparePassword(password: string, confirmPassword: string): boolean{
    if(password !== confirmPassword){
        return true
    }
    return false
}