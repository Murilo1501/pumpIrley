const connection = require("./../config/database")
class UserModel {
    static async read  (callback) {
       const query = "SELECT * FROM usuarios"
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
            const queryInsert = "INSERT INTO usuarios (email,senha) VALUES (?,?)"
            connection.query(queryInsert,[data.email,data.senha],(err,result)=>{
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
            const query = "UPDATE usuarios SET nome = ? ,email =  ?,senha = ? WHERE id = ?"
            connection.query(query,[data.nome, data.email, data.senha,id],(err,result)=>{
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
            const query = 'DELETE FROM usuarios WHERE id = ?'
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
module.exports = UserModel
