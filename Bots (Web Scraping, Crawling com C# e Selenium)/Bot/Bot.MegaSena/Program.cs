using System;
using System.Collections.Generic;
using System.Net;
using System.Text.RegularExpressions;

namespace Bot.MegaSena
{
    class Program
    {
        static void Main(string[] args)
        {
            string url = @"https://www.google.com/search?q=megasena";
            string html;

            using (WebClient wc = new WebClient())
            {
                wc.Headers["Cookie"] = "security=true";

                //Baixa todo o conteudo da pagina(URL)
                html = wc.DownloadString(url);
            }

            Console.WriteLine(html);

            Console.ReadKey();
        }
    }
}
