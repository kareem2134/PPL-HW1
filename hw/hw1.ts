// import * as R from 'ramda';
// // console.log("Hello, world!");
// // console.log("This is my first TypeScript file.");
// // console.log("I am learning TypeScript.");
// // console.log("TypeScript is a superset of JavaScript.");
// // console.log("I can use TypeScript to write better JavaScript code.");
// // console.log("TypeScript has static typing, interfaces, and other features.");
// // console.log("I can use TypeScript to catch errors at compile time.");
// // console.log("I can use TypeScript to write cleaner and more maintainable code.");
// // console.log([1,2,3,4,5].map(x => x * x)); // This will print [1, 4, 9, 16, 25]
// // console.log([1,2,3,4,5].filter(x => x % 2 === 0)); // This will print [2, 4]
// // console.log([1,2,3,4,5].reduce((acc, x) => acc + x, 0)); // This will print 15




// type Transaction = 
// {
//     category: string;
//     price: number;
//     quantity: number;
// }
// const calculateRevenueByCategoryFP = (transactions: Transaction[]): Record<string, number>
// {
//   map((x:transaction):{category : string , total : number} => {category : x.quantity > 5 ? x.quantity * x.price * 0.9 : x.quantity * x.price})
// }

 

// // const calculateRevenueByCategoryFP = (transactions: Transaction[]): Record<string, number> =>
// //     R.pipe(
// //       R.map((x: Transaction): [string, number] => [
// //         x.category,
// //         x.quantity > 5 ? x.quantity * x.price * 0.9 : x.quantity * x.price
// //       ]),
// //       R.filter((x: [string, number]) => x[1] >= 50),
// //       R.groupBy((x: [string, number]) => x[0]),
// //       R.map(R.reduce((acc: number, x: [string, number]) => acc + x[1], 0))
// //     )(transactions) as Record<string, number>;
  
    
import * as R from "ramda";
// const stringToArray = R.split("");
// /* Question 2 */
// const isLetter = (char : string) => ((char.charCodeAt(0) > 64) && char.charCodeAt(0) < 91) || (char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123)
// const fromUpperToLower = (char : string) => (char.charCodeAt(0) > 64 && char.charCodeAt(0) < 91) ? String.fromCharCode((char.charCodeAt(0)+32)) : char
// const checkIfPilandrome:(array :string[],a : number, b:number)=>boolean = (array :string[],a : number, b:number) => (b-a <= 0) ? true : ((array[a] == array[b]) ? checkIfPilandrome(array,a+1,b-1): false) 
// const isPalindrome = (str : string) => checkIfPilandrome(stringToArray(str).filter(isLetter).map(fromUpperToLower),0,stringToArray(str).filter(isLetter).map(fromUpperToLower).length-1)
// console.log(isPalindrome("abba"))
export type WordTree =
{
    root: string;
    children: WordTree[];
}

export const treeToSentence:((tree : WordTree) => string) = (tree : WordTree) => (tree.children.length == 0) ? tree.root : tree.root+" "+tree.children.reduce((acc, curr) => acc + treeToSentence(curr)+" ","")
const t1: WordTree = 
{
  root: "Hello",
  children: 
  [
    {
      root: "students",
      children: [
        {
        root: "how",
        children: []
        }
      ]
    },
    {
      root: "are",
      children: []
    },
    {
      root: "you?",
      children: []
    },
  ]
}
console.log(treeToSentence(t1))
  
  