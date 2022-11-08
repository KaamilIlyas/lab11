const task2 = number => {
    let multiple = 0; 
    
    for (let i = 0; i < number; i++) {
    
      if (i % 3 === 0 || i % 5 === 0) {
        multiple=multiple+(i);
      }
    }
    return multiple;
}

module.exports = task2