const form = document.getElementById('form');
const search = document.getElementById('search');
const result = document.getElementById('result');
const more = document.getElementById('more');

function showData(url) {

  // Expressão regular para verificar se o link está no formato correto
  const urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
  
  if(!urlRegex.test(url)){
    return result.innerHTML = `
      <div>
        <ul class="songs">
        <iframe src="https://giphy.com/embed/d2lcHJTG5Tscg" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/blackish-anthony-anderson-dre-johnson-d2lcHJTG5Tscg"></a></p>
          <a href=${url}>${url}</a>
        </ul>
        <h1>url inválida</h1>
      </div>
    `;
  }

  else{ 
    return result.innerHTML = `
      <div>
        <ul class="songs">
        <iframe src="https://giphy.com/embed/TgM3MOxCkzx0LlaiZe" width="480" height="269" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/betnetworks-2022-naacp-bet-image-awards-TgM3MOxCkzx0LlaiZe"></a></p>
          
          <a href=${url}>${url}</a>
        </ul>
        <h1>url Válida</h1>
      </div>
    `;}
}

// Event listeners
form.addEventListener('submit', e => {
  e.preventDefault();

  const searchTerm = search.value.trim();

  if (!searchTerm) {
    alert('Por favor digite uma url');
  } else {
    showData(searchTerm);
  }
});
