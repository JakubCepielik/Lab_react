const fs = require('fs');

const count = Number(process.argv[2]); // odczyt liczby obiektów
let names = [];                        // tablica z obiektami 

fs.readFile('src/data/names.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    //podział łańcucha z imionami na wiersze.
    names = data.split("\n").map(s => s.trim()).filter(n => n.length != 0);
    console.log(names);
    let content = "export const data = [";
    eyes = ["brown","blue","green"];
    for(let i = 0; i < count; i++){
        //losowanie imienia z bilioteki imion
        start = new Date(2001,0,1);
        end = new Date(); 
        content += `{
        id:${i+1}, 
        name: "${names[~~((Math.random() * names.length) / 1)]}",
        birth: "${new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString() }",
        eyes: "${eyes[~~((Math.random() * eyes.length) / 1)]}",
        rating: "${Math.floor(Math.random() * 10)}"
        \n},\n`; 
    }
    content += "]; export default data"
    //zapis łańcucha do pliku 
    fs.writeFile('./src/data/module-data.js', content, (err) => {
        if (err) {
           console.error(err);
        }
        console.log("module-data.js generated");
       });
});