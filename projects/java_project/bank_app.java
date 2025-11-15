import java.util.Scanner;

public class BankApp {
    public static void main(String[] args) {
        double balance = 0.0;
        Scanner sc = new Scanner(System.in);

        while (true) {
            System.out.println("\n--- Bank App ---");
            System.out.println("1. Deposit");
            System.out.println("2. Withdraw");
            System.out.println("3. Check Balance");
            System.out.println("4. Exit");
            System.out.print("Choose an option: ");
            
            String choice = sc.nextLine();

            switch (choice) {
                case "1":
                    System.out.print("Enter amount to deposit: ");
                    double deposit = Double.parseDouble(sc.nextLine());
                    if(deposit > 0){
                        balance += deposit;
                        System.out.println("Deposited: $" + deposit);
                    } else {
                        System.out.println("Enter a valid amount.");
                    }
                    break;

                case "2":
                    System.out.print("Enter amount to withdraw: ");
                    double withdraw = Double.parseDouble(sc.nextLine());
                    if (withdraw > 0 && withdraw <= balance) {
                        balance -= withdraw;
                        System.out.println("Withdrew: $" + withdraw);
                    } else {
                        System.out.println("Invalid amount or insufficient balance.");
                    }
                    break;

                case "3":
                    System.out.println("Current Balance: $" + balance);
                    break;

                case "4":
                    System.out.println("Goodbye!");
                    sc.close();
                    System.exit(0);

                default:
                    System.out.println("Invalid choice. Please select 1-4.");
            }
        }
    }
}
