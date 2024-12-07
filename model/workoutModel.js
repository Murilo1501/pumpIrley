const connection = require("./../config/database")
class WorkoutModel {
    static async read  (callback) {
       const query = "SELECT * FROM treinos"
       connection.query (query, (error,results)=> {
        if (error){
            callback(error,null)
            return 
        }
        callback(null,results)
    })


    }

    

    static async create(data) {
        return new Promise((resolve,reject)=>{
            const queryInsert = "INSERT INTO treinos (nome,descricao,repeticao) VALUES (?,?,?)"
            connection.query(queryInsert,[data.nome,data.descricao,data.repeticao],(err,result)=>{
                if(err){
                    reject(err)
                    return
                }

                resolve(result)

            })
        })
     

    }
 
    static async update(id, data) {
        return new Promise((resolve,reject)=>{
            const query = "UPDATE treinos SET nome = ? ,descricao =  ?,repeticao = ? WHERE id = ?"
            connection.query(query,[data.nome, data.descricao, data.repeticao,id],(err,result)=>{
                if(err){
                    reject(err)
                    return
                }

                resolve(result)
            })
        })

    
    }

    static async delete(id) {
        return new Promise((resolve,reject)=>{
            const query = 'DELETE FROM treinos WHERE id = ?'
            connection.query(query,[id],(err,result)=>{
                if(err){
                    reject(err)
                    return
                }

                resolve(result)
            })
        })

    }
}
module.exports = WorkoutModel
