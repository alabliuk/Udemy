using System;
using XGame.Domain.Argumets.Jogador;

namespace XGame.Domain.Interfaces.Repositories
{
    public interface IRepositoryJogador
    {
        AutenticarJogadorResponse AutenticarJogador(AutenticarJogadorRequest request);
        Guid AdicionarJogador(AdicionarJogadorRequest resquest);
    }
}
