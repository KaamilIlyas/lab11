const task3 = require("./task3")
test("Test case 1 ",()=>{
    expect(task3.Power(5,2)).toBe(25);
 });
 
 test(" Test case 2 : Round ",()=>{
     expect(task3.Round(3.7)).toBe(4);
 })
 
 test(" Test case 3 : Celing",()=>{
 
      expect(task3.Ceil(3.5)).toBe(4);
 });