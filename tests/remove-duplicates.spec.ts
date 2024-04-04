import { test, expect } from "@playwright/test";

test("Check BackToMainPage Button", async ({ page }) => {
    expect(await removeDuplicated([1,1,2,3,3,4,4,5,6])).toEqual(expect.arrayContaining([1,2,3,4,5,6]));
    expect(await removeDuplicated([1,1,2,3,3,4,4,5,6])).toHaveLength(6);
    expect(await removeDuplicated([0,0,0,3,3,3,5,5,5])).toEqual(expect.arrayContaining([0,3,5]));
    expect(await removeDuplicated([-100,-100,-100,-200,-200,-200,100,100,200,200])).toEqual(expect.arrayContaining([-100,-200,100,200]));
  });


let removeDuplicated = async(arr: number[]) => {
    let result: number[] = [];

    for(let num of arr){
        if(!result.includes(num)){
            result.push(num)
        }
    }

    return result;
}