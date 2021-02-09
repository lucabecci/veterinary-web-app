export function checkCamps(
    name: string,
    age: number,
    race: string,
):boolean{
    if(name == null || age == null || race == null){
        return true
    }
    // eslint-disable-next-line use-isnan
    if(typeof age !== 'number'){
        return true
    }
    return false
}