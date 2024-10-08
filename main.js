async function visualizarDados(){
    const res = await fetch(url)
    const dados = await res.json()
     console.log(dados)
  }
  visualizarDados()

  const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos--ciontainer')
    paragrafo.innerHTML ="Aqui será colocado os"
    console.log(paragrafo)
    const ciontainer = document.getElementById

    ciontainer.appendChild(paragrafo)



visualizarDados()