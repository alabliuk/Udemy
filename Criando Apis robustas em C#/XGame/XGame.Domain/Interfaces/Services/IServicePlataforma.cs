using System;
using XGame.Domain.Argumets.Jogador;
using XGame.Domain.Argumets.Plataforma;
using XGame.Domain.ValueObjects;

namespace XGame.Domain.Interfaces.Services
{
    public interface IServicePlataforma
    {
        AdicionarPlataformaResponse AutenticarPlataforma(AdicionarPlataformaResponse request);
    }
}
