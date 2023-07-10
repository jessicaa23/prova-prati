const fs = require('fs')

const antigoArqui = 'aquivo.text'
const novoArquivo = 'novo.text'

fs.rename(novoArqui, antigoArqui, function(err){
    if(err){
      console.log(err)
      return
    }
    console.log(`o aquivo ${antigoArqui} foi renomeado para ${novoArqui}`)
})