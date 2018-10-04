using System;
using XGame.Domain.Argumets.Jogador;
using XGame.Domain.Interfaces.Repositories;
using XGame.Domain.Interfaces.Services;

namespace XGame.Domain.Services
{
    public class ServiceJogador : IServiceJogador
    {
        private readonly IRepositoryJogador _repositoryJogador;

        public ServiceJogador()
        {

        }

        public ServiceJogador(IRepositoryJogador repositoryJogador)
        {
            _repositoryJogador = repositoryJogador;
        }

        public AdicionarJogadorResponse AdicionarJogador(AdicionarJogadorRequest resquest)
        {
            Guid id = _repositoryJogador.AdicionarJogador(resquest);
            return new AdicionarJogadorResponse() { Id = id, Message = "Operação Realizada com sucesso" };
        }

        public AutenticarJogadorResponse AutenticarJogador(AutenticarJogadorRequest request)
        {
            if(request == null)
            {
                throw new Exception("AutenticarJogadorRequest é obrigatorio");
            }

            if(string.IsNullOrEmpty(request.Email))
            {
                throw new Exception("Informe o E-mail");
            }

            if(IsEmail(request.Email))
            {
                throw new Exception("Informe um E-mail valido");
            }

            if (string.IsNullOrEmpty(request.Senha))
            {
                throw new Exception("Informe a Senha");
            }

            if (request.Senha.Length < 6)
            {
                throw new Exception("Digite uma senha de no minimo 6 caracteres");
            }

            var response = _repositoryJogador.AutenticarJogador(request);
            return response;
        }

        private bool IsEmail(string email)
        {
            return false;
        }
    }
}
