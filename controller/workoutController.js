const WorkoutModel = require("../model/workoutModel")

class WorkoutController {
    static async read  (req,res) {
        try {
        WorkoutModel.read((error,results)=> {
            res.status(200).json(results)
        })
        } catch (error) {
        res.status(500).send(error)
        }

    }

    

    static async create(req,res) {
        const data = req.body
        await WorkoutModel.create(data)
        res.status(200).send('register successfully')
        
    }
 
    static async update(req,res) {
        try{
            const id = req.params.id
            const data = req.body 
            const response = WorkoutModel.update(id, data) 
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
        WorkoutModel.delete(id)
        res.status(200).send('user updated succesfully')
    }
}

module.exports = WorkoutController