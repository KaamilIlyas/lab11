const task5 = require("./task5")
test(" Test case 1 ",()=>{
    expect(task5.Present(11)).toBe(true);

   });

   test(" Test case 2 ",()=>{
    expect(task5.Present(25)).toBe(false);

   });