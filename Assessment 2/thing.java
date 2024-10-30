import java.util.Scanner;
import java.util.ArrayList;

class Applicant {
	private String trn;
	private Name name;
	
}

public class Main {
	

	public static void main(String[] args) {
		Scanner input = new Scanner(Systm.in);
		ArrayList<Applicant> = new ArrayList<Integer>();
		
		
		while (true) {
			System.out.println("1) Create applicant");
			System.out.println("2) Update applicant");
			System.out.println("3) Delete applicant");
			System.out.println("4) Reject applicant");
			System.out.println("5) Check applicant");
		
			try {
				int option = input.nextInt();
				switch (option) {
					case 1:
						
			}
			catch InputMismatchException e {
				System.err.println("Invalid input");
			}
		}
	}