import { DataTypes } from 'sequelize';
import sequelize from '../db/conection';

                                            //En singular siempre
export const Producto = sequelize.define('producto', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    }
}, )