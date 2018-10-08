using XGame.Domain.Interfaces.Arguments;
using XGame.Domain.ValueObjects;

namespace XGame.Domain.Argumets.Jogador
{
    public class AdicionarJogadorRequest : IResponse
    {
        public string Email { get; set; }
        public string Senha { get; set; }
        public string ConfirmaSenha { get; set; }
        public string UltimoNome { get; set; }
        public string PrimeiroNome { get; set; }
    }
}
