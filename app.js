var scores ={};
console.log(scores);

function createPlayer(object,name){
  object[name.toLowerCase()] = 0;
  console.log(object);
}

function addPoints(name,points){
  scores[name.toLowerCase()] += points;
  console.log(scores)
}

function printAllPoints(){
  var arrayPlayers = Object.keys(scores);
  var resultados = "";
  for (var k = 0; k < arrayPlayers.length; k++) {

if(k == arrayPlayers.length -1){ //se verifica en la ultimo index
  resultados += arrayPlayers[k] + ':' + scores[arrayPlayers[k]];


}else{
  resultados += arrayPlayers[k] + ':'+ scores[arrayPlayers[k]] + ',';
}
  }//for
  return resultados;
}//function

createPlayer(scores, "ana");
addPoints("ana",20);
addPoints("ana",40);
createPlayer(scores,"silvana");
addPoints("silvana",50);
console.log(printAllPoints());
