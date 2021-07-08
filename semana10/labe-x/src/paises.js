const fs = require('fs');
  
// Using the async function to
// ReadFile using filehandle

  try{
      const data = fs.readFileSync('paises.txt', 'utf8')
      let paises = data.split('\n')
              console.log(paises)
              
          } catch(err){
          console.log(err)
      }

     /*  fs.readFile('paises.txt','utf-8', (err,bufff) =>{
          if(err){console.log(err)}
          console.log(bufff)
      }) */