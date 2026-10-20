const conn = require("../db/conn")
const { DataTypes } = require("sequelize")

const Agendamento = conn.define(
	"agendamento",
	{
		idAgendamento: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		data: {
			type: DataTypes.DATEONLY,
			allowNul: false
		},
		horario: {
			type: DataTypes.TIME,
			allowNul: false
		},
		tipo: {
			type: DataTypes.ENUM("revisao", "manutencao", "instalacao"),
			allowNul: false
		},
		idVeiculo: {
			type: DataTypes.INTEGER,
			references: {
				model: "veiculos",
				key: "idVeiculo"
			},
			allowNul: false
		},
		idCliente: {
			type: DataTypes.INTEGER,
			references: {
				model: "clientes",
				key: "idCliente"
			},
			allowNul: false
		}
	},
	{
		timestamps: false,
		tableName: "agendamentos"
	}
)

module.exports = Agendamento
