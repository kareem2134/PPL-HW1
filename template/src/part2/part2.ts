import * as R from "ramda";

const stringToArray = R.split("");

/* Question 1 */
const vowels: string[] = ['a', 'e', 'i', 'o', 'u','A','E','I','O','U'];
const helpFunction:(char:string)=>boolean = (char:string) => vowels.includes(char)
export const countVowels:(str:string)=> number = (str : string) => stringToArray(str).filter(helpFunction).length

/* Question 2 */
const isLetter:((char : string) => boolean) = (char : string) => ((char.charCodeAt(0) > 64) && char.charCodeAt(0) < 91) || (char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123)
const fromUpperToLower:(char : string) => string = (char : string) => (char.charCodeAt(0) > 64 && char.charCodeAt(0) < 91) ? String.fromCharCode((char.charCodeAt(0)+32)) : char
const checkIfPilandrome:(array :string[],a : number, b:number) => boolean = (array :string[],a : number, b:number) => (b-a <= 0) ? true : ((array[a] == array[b]) ? checkIfPilandrome(array,a+1,b+1): false) 
export const isPalindrome:(str : string) => boolean = (str : string) => checkIfPilandrome(stringToArray(str).filter(isLetter).map(fromUpperToLower),0,stringToArray(str).filter(isLetter).map(fromUpperToLower).length)
  
/* Question 3 */
export type WordTree =
{
    root: string;
    children: WordTree[];
}

export const treeToSentence:((tree : WordTree) => string) = (tree : WordTree) => (tree.children.length == 0) ? tree.root : tree.root+" "+tree.children.reduce((acc, curr) => acc + treeToSentence(curr)+" ","")
