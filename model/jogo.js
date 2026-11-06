import database from "../config/database.js";
 
class jogador {
    constructor() {
        this.model = database.db.define("jogador", {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            marca: {
                type: database.db.Sequelize.INTEGER,
            },
            ano: {
                type: database.db.Sequelize.INTEGER,
            }
        })
    }
}
 
export default new jogador().model