const task4 = require("./task4")
test(" Test case 1 : Reverse ",()=>{
     
    expect(task4.Reverse("kamil")).toBe("limak");
});

test(" Test case 2 : Reverse ",()=>{
     
    expect(task4.Reverse("bye")).toBe("eyb");
});