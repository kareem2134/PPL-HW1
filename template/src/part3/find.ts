import { filter } from "ramda";
import { Result, makeFailure, makeOk, bind, either } from "../lib/result";
const arr : number[] = [1,3,5,3]
/* Library code */
const findOrThrow = <T>(pred: (x: T) => boolean, a: T[]): T => {
    for (let i = 0; i < a.length; i++) {
        if (pred(a[i])) return a[i];
    }
    throw "No element found.";
}

export const findResult:<T>(pred: (x: T) => boolean, a: T[]) => Result<T> = <T>(pred: (x: T) => boolean, a: T[]): Result<T> => (a.filter(pred).length == 0)?{tag : "Failure" , message : "No element found."} : {tag : "Ok" , value : a.filter(pred).at(0)!} 

/* Client code */
const returnSquaredIfFoundEven_v1 = (a: number[]): number => {
    try {
        const x = findOrThrow(x => x % 2 === 0, a);
        return x * x;
    } catch (e) {
        return -1;
    }
}

export const returnSquaredIfFoundEven_v2:(a: number[])=> Result<number> = (a: number[]): Result<number> =>bind(findResult((x) => x%2 === 0, a),(x:number)=>({tag : "Ok" , value : x*x}))

export const returnSquaredIfFoundEven_v3 :(a: number[])=> number = (a: number[]): number =>either(findResult((x) => x%2 === 0, a),(x:number)=>({tag : "Ok" , value : x*x}).value,(str:string) => -1)
console.log(returnSquaredIfFoundEven_v3(arr))