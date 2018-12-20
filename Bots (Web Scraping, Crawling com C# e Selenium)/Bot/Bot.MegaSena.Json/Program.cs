using Newtonsoft.Json;
using System;
using System.Net;

namespace Bot.MegaSena.Json
{
    class Program
    {
        public static object Jsoncon { get; private set; }

        static void Main(string[] args)
        {
            try
            {
                Console.WriteLine("=====================================");
                Console.WriteLine("Resultados Mega-Sena");
                Console.WriteLine("=====================================");

                Resultado resultadoMega = resultadoMegaJson("");

                imprimir(resultadoMega);

                while (true)
                {
                    Console.WriteLine("");

                    Console.WriteLine("Informe o número do concurso: ");
                    string numConcurso = Console.ReadLine();

                    if (string.IsNullOrWhiteSpace(numConcurso))
                    {
                        numConcurso = "0000";
                    }

                    resultadoMega = resultadoMegaJson(numConcurso);
                    imprimir(resultadoMega);
                }


                Resultado resultadoMegaJson(string concurso)
                {
                    string url;

                    if (string.IsNullOrWhiteSpace(concurso))
                    {
                        url = @"http://loterias.caixa.gov.br/wps/portal/loterias/landing/megasena/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOLNDH0MPAzcDbwMPI0sDBxNXAOMwrzCjA0sjIEKIoEKnN0dPUzMfQwMDEwsjAw8XZw8XMwtfQ0MPM2I02-AAzgaENIfrh-FqsQ9wNnUwNHfxcnSwBgIDUyhCvA5EawAjxsKckMjDDI9FQE-F4ca/dl5/d5/L2dBISEvZ0FBIS9nQSEh/pw/Z7_HGK818G0KO6H80AU71KG7J0072/res/id=buscaResultado/c=cacheLevelPage/=/?timestampAjax=1545331053288";
                    }
                    else
                    {
                        url = @"http://loterias.caixa.gov.br/wps/portal/loterias/landing/megasena/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOLNDH0MPAzcDbwMPI0sDBxNXAOMwrzCjA0sjIEKIoEKnN0dPUzMfQwMDEwsjAw8XZw8XMwtfQ0MPM2I02-AAzgaENIfrh-FqsQ9wNnUwNHfxcnSwBgIDUyhCvA5EawAjxsKckMjDDI9FQE-F4ca/dl5/d5/L2dBISEvZ0FBIS9nQSEh/pw/Z7_HGK818G0KO6H80AU71KG7J0072/res/id=buscaResultado/c=cacheLevelPage/=/?timestampAjax=1545331053288&concurso=" + concurso;
                    }

                    string json;

                    using (WebClient wc = new WebClient())
                    {
                        wc.Headers["Cookie"] = "security=true";
                        json = wc.DownloadString(url);
                    }

                    return JsonConvert.DeserializeObject<Resultado>(json);
                }

                void imprimir(Resultado result)
                {
                    Console.WriteLine("Concurso: " + resultadoMega.concurso + " - " + resultadoMega.dataStr);
                    Console.WriteLine("Resultado: " + resultadoMega.resultadoOrdenado);
                }
            }
            catch (Exception erro)
            {
                Console.WriteLine(erro.Message);
                Console.ReadLine();
            }
        }        
    }
}
