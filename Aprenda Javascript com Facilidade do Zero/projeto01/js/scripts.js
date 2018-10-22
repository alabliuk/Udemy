
// Menu Mobile

var menu = document.getElementById("sliding-header-menu-outer");

//Abrir Menu
document.getElementById("hamburguer-icon").onclick = function () {
  menu.style.right = '0';
}

//Fechar Menu
document.getElementById("sliding-header-menu-close-button").onclick = function () {
  menu.style.right = '-320px';
}


// About us Tab

var aboutUs = {
  "Missão": "Fazer com que cada cliente seja reconhecido como autoridade em seu segmento de atuação. Agregar valor ao negócio, potencializar o crescimento das operações e promover e estreitar o relacionamento do cliente com o seu público alvo, por meio da geração de conteúdo de relevância.",
  "Visão": "Ser reconhecida pelos clientes e pelo mercado como uma empresa parceira, inovadora e criativa, que oferece sempre os melhores produtos e soluções em Comunicação Empresarial Integrada.",
  "Valores": "<ul><li>Comprometimento</li><li>Inovação</li><li>Ética profissional</li><li>Superação dos resultados</li><li>Melhoria contínua</li></ul>"
};

var unseletected_color = "#646872";
var seletected_color = "#2A2D34";

var about_tags = document.getElementsByClassName("single-tab");

for (var a = 0; a < about_tags.length; a++) {
  about_tags[a].onclick = function () {

    //Tirando seleção
    for (var b = 0; b < about_tags.length; b++) {
      about_tags[b].style['background-color'] = unseletected_color;
      about_tags[b].style['font-weigt'] = "normal";
    }

    //Aplicando seleção
    this.style['background-color'] = seletected_color;
    this.style['font-weigt'] = "bold";

    var selecionado = this.innerHTML;
    document.getElementById("box-text").innerHTML = aboutUs[selecionado];
  };
}

// Slider de serviços

var our_services = [
  {
    'title': 'Webdesign',
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Branding',
    'text': 'Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Marketing Digital',
    'text': 'Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.'
  }

];

var serviceNext = document.getElementById("service-next");
var servicePrevious = document.getElementById("service-previous");
var serviceTitle = document.getElementById("service-title");
var serviceText = document.getElementById("service-text");

var servicoAtual = 0;

serviceNext.onclick = function () {
  if (servicoAtual >= our_services.length - 1)
    servicoAtual = 0;
  else
    servicoAtual++;
  populaBox(servicoAtual);
}

servicePrevious.onclick = function () {
  if (servicoAtual == 0)
    servicoAtual = our_services.length - 1;
  else
    servicoAtual--;
  populaBox(servicoAtual);
}

function populaBox(servicoAtual) {
  serviceTitle.innerHTML = our_services[servicoAtual].title;
  serviceText.innerHTML = our_services[servicoAtual].text;
}





// Data Footer

