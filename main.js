const frutas = [
    {
        produto: "Maçã",
        categoria: "Fruta",
        quantidade: "50",
        preco: "4.50",    
    },

    {
        produto: "Banana",
        categoria: "Fruta",
        quantidade: "80",
        preco: "3.20",    
    },

    {
        produto: "Morango",
        categoria: "Fruta",
        quantidade: "35",
        preco: "12.00",    
    },

    {
        produto: "Melancia",
        categoria: "Fruta",
        quantidade: "20",
        preco: "15.00",    
    },
]

const tabelaBody = document.getElementById("tabelaBody")

for (let fruta of frutas){
    const linha = document.createElement("tr")

    linha.innerHTML = `
        <td>${fruta.produto}</td>
        <td>${fruta.categoria}</td>
        <td>${fruta.quantidade}</td>
        <td class="preco">${fruta.preco.toLocaleString("pt-BR",{
            style: "currency",
            currency: "BRL"
        })}</td>
    `

    tabelaBody.appendChild(linha)
}