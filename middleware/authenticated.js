const {verify,decode} = require('jsonwebtoken')
const secretKey = require("./../config/jsonScret")

module.exports = async(req,res,next)=>{
    const token = req.headers.authorization
    if(!token){
        return res.status(401).send('access token nao informado')
    }

    const [,accessToken] = token.split(" ")

    try {
        
        
        verify(accessToken,secretKey.secret)

        const {id,email} = await decode(accessToken)
        
        req.id = id
        req.email = email
  

        return next()
    } catch (error) {
        res.status(401).send('usuario nao autorizado')
    }
}