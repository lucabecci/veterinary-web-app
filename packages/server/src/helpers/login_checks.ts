export function checkLogin(
    email: string,
    password: string
): boolean{
    if(email == null || password == null){
        return true
    }
    return false
}