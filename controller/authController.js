const connection = require("./../config/database");
const jwt = require('jsonwebtoken');

const secretKey = require("./../config/jsonScret")

class AuthController {
    static async auth(req, res) {
        try {
            const { email, senha } = req.body;

            // Fazendo a consulta com 'connection.query' ao invés de 'execute'
            connection.query(
                'SELECT * FROM usuarios WHERE email = ?',
                [email],
                async (err, results) => {
                    if (err) {
                        console.error(err);
                        return res.status(500).json({ error: "Erro ao consultar o banco de dados" });
                    }

                    const user = results[0];

                    if (!user) {
                        return res.status(404).json({ error: "Usuário não encontrado" });
                    }

                    // Verifica se a senha está correta

                    if(senha != user.senha){
                        return res.status(404).json({ error: "Usuário não encontrado" });
                    }

                     // Gera o token JWT
                     const token = jwt.sign(
                        { id: user.id, email: user.email },
                        secretKey.secret,
                        { expiresIn: '1h' }
                    );

                    // Retorna o token gerado
                    return res.json({ token });
                 
                }
            );
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Erro interno no servidor" });
        }
    }
}

module.exports = AuthController;
