const Veiculo = require("../model/Veiculo")
const Cliente = require("../model/Cliente")

const cadastrar = async (req, res) => {
	const { modelo, marca, placa, rastreador } = req.body
	if (!modelo || !marca || !placa || !rastreador) return res.status(401).json({ message: "preencha todos os campos para cadastrar" })

	try {
		const idCliente = req.bearer
		const cliente = await Cliente.findByPk(idCliente)
		if (!cliente) return res.status(404).json({ message: "cliente inexistente" })

		const veiculo = await Veiculo.create({ modelo, marca, placa, rastreador, idCliente })
		return res.status(201).json(veiculo)
	} catch (error) {
		console.error(error)
		return res.status(500).json({ message: "erro ao cadastrar veículo" })
	}
}

const consultarId = async (req, res) => {
	const { id } = req.params

	try {
		const veiculo = await Veiculo.findByPk(id)
		if (!veiculo) return res.status(404).json({ message: "veículo não encontrado" })

		return res.status(200).json(veiculo)
	} catch (error) {
		console.error(error)
		return res.status(500).json({ message: "erro ao consultar veículo" })
	}
}

module.exports = { cadastrar, consultarId }
