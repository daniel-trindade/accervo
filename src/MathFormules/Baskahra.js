//Baskahra formula returning only the largest root

function Baskahra(a, b, c){
  var delta = Math.pow(b, 2) - 4 * a * c;

  if (delta < 0) {
      return 0;
  } else if (delta === 0) {
      var x = -b / (2 * a);
      return x;
  } else {
      var x1 = (-b + Math.sqrt(delta)) / (2 * a);
      var x2 = (-b - Math.sqrt(delta)) / (2 * a);

      // Returns only the largest root
      var maiorRaiz = Math.max(x1, x2);
      return maiorRaiz;
  }
}

export default Baskahra