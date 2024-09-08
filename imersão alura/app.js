function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    //se for uma string sem nada
    if(!campoPesquisa){
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte,    classificação, etc.</p>"
        return
    }
    
    campoPesquisa = campoPesquisa.toLowerCase()

    console.log(campoPesquisa);
    
    
    
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let relacionados = "";
  
    // Itera sobre os dados e cria o HTML para cada resultado
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        relacionados = dado.relacionados.toLowerCase()
          
        // se no dado titulo includes o campoPesquisa 
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || relacionados.includes(campoPesquisa)){
            // Cria um novo elemento
            resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">mais informações</a>
        </div>
      `;
        }
    }
  
    if (!resultados) {
        resultados = "<P>Nada foi encontrado</P>"
    }

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }



