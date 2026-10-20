const marca = document.getElementById("inputMarca")
const modelo = document.getElementById("inputModelo")
const placa = document.getElementById("inputPlaca")
const rastreador = document.getElementById("inputRastreador")

const res = document.getElementById("res")

document.getElementById("formVeiculo").addEventListener("submit", async (event) => {
	event.preventDefault()

	try {
		const payload = {
			marca: marca.value,
			modelo: modelo.value,
			placa: placa.value,
			rastreador: rastreador.value
		}

		// rota protegida
		const resposta = await fetch("http://localhost:3000/veiculo", {
			body: JSON.stringify(payload),
			headers: { "Content-Type": "application/json", authorization: localStorage.getItem("token") },
			method: "POST"
		})
		const dados = await resposta.json()

		res.innerText = dados.message
		if (resposta.ok) res.innerText = "Cadastrado com sucesso"
	} catch (error) {
		res.innerText = error.message || "Erro ao cadastrar"
	}
})
