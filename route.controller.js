async function handleRequest (req,res,methodController, next){
    try {
        await methodController(req,res,next)
    }catch(ex){
        console.log(ex)
        //manejar errores
    }
}

module.exports = {
    handleRequest
  }