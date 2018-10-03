using XGame.Domain.ValueObjects;

namespace XGame.Domain.Argumets.Jogador
{
    public class AutenticarJogadorRequest
    {
        public string Email { get; set; }
        public string Senha { get; set; }
    }
}
