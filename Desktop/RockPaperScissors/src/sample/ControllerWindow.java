package sample;

import java.util.Random;
import java.util.Scanner;

public class ControllerWindow {
    public static void main (String args[]){
        new Game();
    }
}
class Game {
    private String tab [] = {"rock","paper","scissors"};
    String playerAnswer;
    Game() {
        Random random = new Random();
        int x = random.nextInt(3);
        System.out.println(tab[x]);
        Scanner scan = new Scanner(System.in);
        playerAnswer = scan.nextLine();

        if ((playerAnswer.equals("rock") && tab[x].equals("rock")) || (playerAnswer.equals("paper") && tab[x].equals("paper")) || (playerAnswer.equals("scissors") && tab[x].equals("scissors"))) {
            System.out.println("REMIS");
        }
        else if (playerAnswer.equals("rock") && tab[x].equals("scissors")) {
            System.out.println("YOU WIN");
        }
        else if (playerAnswer.equals("rock") && tab[x].equals("paper")) {
            System.out.println("YOU LOSE");
        }
        else if (playerAnswer.equals("paper") && tab[x].equals("rock")) {
            System.out.println("YOU WIN");
        }
        else if (playerAnswer.equals("paper") && tab[x].equals("scissors")) {
        System.out.println("YOU LOSE");
        }
        else if (playerAnswer.equals("scissors") && tab[x].equals("paper")) {
        System.out.println("YOU WIN");
        }
        else if (playerAnswer.equals("scissors") && tab[x].equals("rock")) {
        System.out.println("YOU LOSE");
    }
    }
}