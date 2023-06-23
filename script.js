// KEY
let chave = "cebcd482eda57fa9a6714c1c2ba91885"

// FUNCTION SHOW DATA
function colocarNaTela(dados) {
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Previsão em " + dados.name
    document.querySelector(".temp").innerHTML = "Temperatura: " + Math.floor(dados.main.temp) + "°C"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}

// FUNCTION SEARCH CITY IN API
async function buscarCidade(cidade) {
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
        cidade +
        "&appid=" +
        chave +
        "&lang=pt_br" +
        "&units=metric"
    )
        .then(resposta => resposta.json())

    colocarNaTela(dados)
}

// FUNCTION CLICK BUTTON
function cliqueiNoBotao() {
    let cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}