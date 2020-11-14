

function kalkulacija() {
    
    var x,y,z,operator;

    x=prompt("unesite prvi broj");
    operator=prompt("unesite operator");
    y=prompt("unesite drugi broj");

    if(operator=="+"){
        z=Number(x)+Number(y);
      }
      
      else if(operator=="/"){
        z=Number(x)/Number(y);
      }
      else if(operator=="*"){
        z=Number(x)*Number(y);
      }
      else if(operator=="-"){
        z=Number(x)-Number(y);
      }
      else if(operator=!null){
        z="Error"
      }
      else if(x=!null){
        z="Error"
      }
      else if(y=!null){
        z="Error"
      }
      
      return z;
        }

alert ("rezultat je" +kalkulacija());