
const fs = require('fs');// Biblioteca node

function readFile(filename) {
  let arquiJson = fs.readFileSync(filename); //Lendo Arquivo jason
  return JSON.parse(arquiJson);
}

function fixedCharacters(database, key) { // Função responsável por fazer a mudança dos caracteres
  Object.keys(database).forEach(element => {
    database[element][key] = database[element][key].replace(/ø/g, 'o').replace(/æ/g, 'a');
  })
  return database;
}

function convertSells(dataBase, key) { // Função responsável por converter o valor numeral de string para int
  Object.keys(dataBase).forEach(element => {
    dataBase[element][key] = parseInt(dataBase[element][key])
  })

  return dataBase;
}

function writeFiles(filename, data) {  // Função responsável por exportar os arquivos JSON corrigidos.
  fs.writeFileSync(filename, JSON.stringify(data));
}

// Var responsável por chamar as funções que irão fazer alteração no arqui database_1.
let dataBase = readFile('broken_database_1.json'); 
dataBase = fixedCharacters(dataBase, 'nome');
dataBase = convertSells(dataBase, 'vendas');
 writeFiles('fixxed_database_1.json', dataBase);


// Var responsável por chamar as funções que irão fazer alteração no arqui database_2.
 let dataBase2 = readFile('broken_database_2.json');
 dataBase2 = fixedCharacters(dataBase2, 'marca');
 writeFiles('fixxed_database_2.json', dataBase2);
