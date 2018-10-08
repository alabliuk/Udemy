

var classes = {

    'primeiros_passos': {
        'titulo': 'Primeiros Passos',
        'url': '01-primeiros-passos.html'   
    },
    'sintaxe': {
        'titulo': 'A sintaxe do Javascript',
        'url': '02-sintaxe.html'   
    },
    'variaveis': {
        'titulo': 'Variáveis',
        'url': '03-variaveis.html'   
    },
    'tipos_dados_strings': {
        'titulo': 'Tipos de dados - strings',
        'url': '04-tipos-dados-strings.html'   
    },
    'tipos_dados_numbers': {
        'titulo': 'Tipos de dados - numbers',
        'url': '05-tipos-dados-numbers.html'   
    },
    'tipos_dados_booleans': {
        'titulo': 'Tipos de dados - booleans',
        'url': '06-tipos-dados-booleans.html'   
    },
    'tipos_dados_null': {
        'titulo': 'Tipos de dados - null e undefined',
        'url': '07-tipos-dados-null-undefined.html'   
    },
    'exercicio1': {
        'titulo': 'Folha de Exercícios n. 1',
        'url': '08-exercicio1.html'   
    },
    'dom': {
        'titulo': 'DOM - Document Object Model',
        'url': '09-dom.html'   
    },
    'trab_dom': {
        'titulo': 'Trabalhando com o DOM',
        'url': '10-trabalhando-com-o-DOM.html'   
    },
    'funcoes': {
        'titulo': 'Funções',
        'url': '11-funcoes.html'   
    },
    'tipos_arrays': {
        'titulo': 'Tipos de dados - Arrays',
        'url': '12-tipos-dados-arrays.html'   
    },
    'tipos_objetos': {
        'titulo': 'Tipos de dados - Objetos',
        'url': '13-tipos-dados-objetos.html'   
    },
    'metodos_objetos': {
        'titulo': 'Métodos de Objetos',
        'url': '14-metodos-de-objetos.html'   
    },
    'exercicio2': {
        'titulo': 'Folha de Exercícios n. 2',
        'url': '15-exercicio2.html'   
    },
    'eventos': {
        'titulo': 'Eventos',
        'url': '16-eventos.html'   
    },
    'manipulacao_css': {
        'titulo': 'Manipulação do CSS',
        'url': '17-manipulacao-css.html'   
    },
    'outros_get_element': {
        'titulo': 'Outros métodos getElement',
        'url': '18-outros-get-element.html'   
    },
    'loop-for': {
        'titulo': 'Loops For e For/In',
        'url': '19-loop-for-for-in.html'   
    },
    'loop-while': {
        'titulo': 'Loops while e do/while',
        'url': '20-loop-while-do-while.html'   
    },
    'condicionais': {
        'titulo': 'Condicionais',
        'url': '21-condicionais.html'   
    },
    'aninhamento': {
        'titulo': 'Aninhamento de loops e condicionais',
        'url': '22-aninhamento-loops-condicionais.html'   
    },
    'exercicio3': {
        'titulo': 'Folha de Exercícios n. 3',
        'url': '23-exercicio3.html'   
    }



};

var classes_names = Object.keys(classes);


document.addEventListener('DOMContentLoaded', function(){ 

    var index_element = document.getElementById("class_index");
    var prev_class = document.getElementById("prev_class");
    var next_class = document.getElementById("next_class");

    if (current_class != classes_names[0]) {
        the_prev_url = classes[classes_names[classes_names.indexOf(current_class)-1]].url;
        prev_class.innerHTML = "<a href='" + the_prev_url + "'>" + "&lt;&lt; Aula Anterior" + "</a>";
    }

    if (current_class != classes_names[classes_names.length-1]) {
        the_next_url = classes[classes_names[classes_names.indexOf(current_class)+1]].url;
        next_class.innerHTML = "<a href='" + the_next_url + "'>" + "Próxima Aula &gt;&gt;" + "</a>";
    }

    for ( a = 0 ; a < classes_names.length ; a++) {
    
        if (current_class != classes_names[a]) {
            index_element.innerHTML +=     "<li>" + "<a href='" + classes[classes_names[a]].url + "'>" + classes[classes_names[a]].titulo + "</a>" + "</li>";
        } else {
            index_element.innerHTML +=     "<li>" + classes[classes_names[a]].titulo + "</li>";
        }
        

    }

}, false);





