function Power (a,b){
    let x = Math.pow (a,b);
    return x;
    }

function Round (a){
   let x = Math.round(a);
   return x;
}

function Ceil (a){
   let x = Math.ceil(a);
   return x;
}

module.exports.Power=Power;
module.exports.Round=Round;
module.exports.Ceil=Ceil;