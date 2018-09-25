	var tbody = document.querySelector('table tbody');
	var aluno = {};

	function Cadastrar() 
	{
		aluno.nome = document.querySelector('#nome').value;
		aluno.sobrenome = document.querySelector('#sobrenome').value;
		aluno.telefone = document.querySelector('#telefone').value;
		aluno.ra = document.querySelector('#ra').value;

		console.log(aluno);

		if(aluno.id === undefined || aluno.id === 0)
		{
			salvarEstudantes('POST', 0, aluno);
		}
		else
		{
			salvarEstudantes('PUT', aluno.id, aluno);
		}
		carregaEstudantes();
	}

	function Cancelar()
	{
		var btnSalvar = document.querySelector('#btnSalvar');
		var btnCancelar = document.querySelector('#btnCancelar');
		var titulo = document.querySelector('#titulo');

		document.querySelector('#nome').value = '';
		document.querySelector('#sobrenome').value = '';
		document.querySelector('#telefone').value = '';
		document.querySelector('#ra').value = '';

		aluno = {};

		btnSalvar.textContent = 'Cadastrar';
		btnCancelar.textContent = 'Limpar';

		titulo.textContent = 'Cadastrar Aluno'
	}

	function carregaEstudantes() {
		tbody.innerHTML = ''
		var xhr = new XMLHttpRequest();
		xhr.open(`GET`, `http://localhost:50221/api/Aluno`, true);

		xhr.onload = function () {
			var estudantes = JSON.parse(this.responseText);
			for(var indice in estudantes){
				adicionaLinha(estudantes[indice]);
			}
		}

		xhr.send();
	}

	function salvarEstudantes(metodo, id, corpo)
	{
		var xhr = new XMLHttpRequest();

		if(id === undefined || id === 0)
			id = '';

		xhr.open(metodo, `http://localhost:50221/api/Aluno/${id}`, false);
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.send(JSON.stringify(corpo));
	}

	function excluirEstudante(id)
	{
		var xhr = new XMLHttpRequest();

		xhr.open('DELETE', `http://localhost:50221/api/Aluno/${id}`, false);

		xhr.send();
	}

	function excluir(id)
	{
		excluirEstudante(id);
		carregaEstudantes();
	}

	carregaEstudantes('GET');

	function editarEstudante(estudante){
		var btnSalvar = document.querySelector('#btnSalvar');
		var btnCancelar = document.querySelector('#btnCancelar');
		var titulo = document.querySelector('#titulo');

		document.querySelector('#nome').value = estudante.nome;
		document.querySelector('#sobrenome').value = estudante.sobrenome;
		document.querySelector('#telefone').value = estudante.telefone;
		document.querySelector('#ra').value = estudante.ra;

		btnSalvar.textContent = 'Salvar';
		btnCancelar.textContent = 'Cancelar';

		titulo.textContent = `Editar Aluno ${estudante.nome}`;

		aluno = estudante;

		console.log(estudante);
	}

	function adicionaLinha(estudante) {
		var trow = `<tr>
						<td>${estudante.nome}</td>
						<td>${estudante.sobrenome}</td>
						<td>${estudante.telefone}</td>
						<td>${estudante.ra}</td>
						<td>
							<button class="btn btn-info" data-toggle="modal" data-target="#exampleModal" onclick='editarEstudante(${JSON.stringify(estudante)})'>Editar</button>
							<button class="btn btn-danger" data-toggle="modal" data-target="#exampleModal" onclick='excluir(${estudante.id})'>Excluir</button>
						</td>
				    </tr>`
				   
		tbody.innerHTML += trow;
	}