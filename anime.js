

let idmanga;

function mudarHtml(idmangazao) {
    idmanga = idmangazao;
    window.location.href = 'anime.html?id=' + idmanga;
}

// anime.html
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
 idmanga = urlParams.get('id');

const backendurl = `http://localhost:3000/nManga/${idmanga}`;

async function buscaDadosAnimeId(){
    try{
        const dados = await fetch(backendurl)
        console.log(dados);
        const manga = await dados.json()
        console.log(manga)
        console.log(manga[0].autores);
        console.log(manga[0].nome);
        console.log(manga[0].generos);
        console.log(manga[0].descricao);
        console.log(manga[0].imagem);
        const avaliacaoFormatada = parseFloat(manga[0].avaliacao).toFixed(1);

        console.log('KKKKKKKKK' + avaliacaoFormatada   );

        const autor = document.querySelector('#autor')
        const titulo = document.querySelector('.titulo')
        const categoria = document.querySelector('.categoria')
        const descricao = document.querySelector('.descricao')
        const imagem = document.querySelector('.imgAva img')
        const nota = document.querySelector('#nota')

        autor.textContent = manga[0].autores
        titulo.textContent = manga[0].nome
        categoria.textContent = manga[0].generos
        descricao.textContent = manga[0].descricao
        imagem.src = manga[0].imagem
        nota.textContent = avaliacaoFormatada

        
    }catch(error){
        console.error('AHJASASA')
    }
}
buscaDadosAnimeId()








