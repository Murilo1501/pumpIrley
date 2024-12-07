const UserModel = require("../model/userrModel")

class UserController {
    static async read  (req,res) {
        try {
        UserModel.read((error,results)=> {
            res.status(200).json(results)
        })
        } catch (error) {
        res.status(500).send(error)
        }

    }

    

    static async create(req,res) {
        const data = req.body
        await UserModel.create(data)
        res.status(200).send('register successfully')
        
    }
 
    static async update(req,res) {
        try{
            const id = req.params.id
            const data = req.body 
            const response = UserModel.update(id, data) 
            if(response){
                res.status(200).send('user updated succesfully')    
            }else {
                res.send ("Erro")
            }
            
        }catch(err){
            res.send('error'+ err)
        }
    }

    static async delete(req,res) {
        const id = req.params.id 
        UserModel.delete(id)
        res.status(200).send('user updated succesfully')
    }
}

module.exports = UserController