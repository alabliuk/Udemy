using System;
using System.Linq;
using XGame.Domain.Argumets.Jogador;
using XGame.Domain.Services;

namespace XGame.AppConsole
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Iniciando ...");

            var service = new ServiceJogador();
            Console.WriteLine("Criei instancia do servico");

            //AutenticarJogadorRequest request = new AutenticarJogadorRequest();
            //Console.WriteLine("Criei instancia do meu objeto request");
            //request.Email = "andre@andre.com";
            //request.Senha = "123456";

            var request = new AdicionarJogadorRequest()
            {
                Email = "andre@andre2.com",
                PrimeiroNome = "Andre",
                UltimoNome = "Leme",
                Senha = "123456"
            };

            var response = service.AdicionarJogador(request);
            
            Console.WriteLine("Serviço é valido -> " + service.IsValid());

            service.Notifications.ToList().ForEach(x =>
            {
                Console.WriteLine(x.Message);
            });

            Console.ReadKey();           

        }
    }
}
