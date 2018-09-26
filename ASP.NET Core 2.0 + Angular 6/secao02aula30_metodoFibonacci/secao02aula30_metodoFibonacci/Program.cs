using System;

namespace secao02aula30_metodoFibonacci
{
    class Program
    {
        static void Main(string[] args)
        {
            // Sequencia de Fibonacci
            // 0,1,1,2,3,5,8,13,21,34,55,89 ...

            int a = 0, b = 1;

            while (a <= 1000)
            {
                Console.Write(a + ", " + b + ", ");
                a += b;
                b += a;
            }
            Console.ReadKey();
        }
    }
}
