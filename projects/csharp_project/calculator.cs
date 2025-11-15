using System;

class Calculator
{
    static void Main()
    {
        double num1, num2, result;
        string operation;

        Console.WriteLine("--- C# Calculator ---");

        while (true)
        {
            try
            {
                Console.Write("Enter first number: ");
                num1 = Convert.ToDouble(Console.ReadLine());

                Console.Write("Enter operation (+, -, *, /): ");
                operation = Console.ReadLine();

                Console.Write("Enter second number: ");
                num2 = Convert.ToDouble(Console.ReadLine());

                switch (operation)
                {
                    case "+":
                        result = num1 + num2;
                        break;
                    case "-":
                        result = num1 - num2;
                        break;
                    case "*":
                        result = num1 * num2;
                        break;
                    case "/":
                        if (num2 != 0)
                            result = num1 / num2;
                        else
                        {
                            Console.WriteLine("Cannot divide by zero!");
                            continue;
                        }
                        break;
                    default:
                        Console.WriteLine("Invalid operation. Try again.");
                        continue;
                }

                Console.WriteLine($"Result: {result}");
            }
            catch
            {
                Console.WriteLine("Invalid input. Please enter numbers only.");
            }

            Console.Write("Do you want to perform another calculation? (y/n): ");
            string again = Console.ReadLine().ToLower();
            if (again != "y")
                break;

            Console.Clear(); // Clear console for next calculation
        }

        Console.WriteLine("Goodbye!");
    }
}
