import java.io.BufferedReader;
import java.io.FileReader;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Principal {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        List<Candidatos> candidatos = new ArrayList<>();
        String arquivo = "candidatos.csv";

        try(BufferedReader leitor = new BufferedReader(new FileReader(arquivo, StandardCharsets.UTF_8))) {
            System.out.println("teste");
            String linha;
            while((linha = leitor.readLine()) != null) {
                String [] dados = linha.split(",");

                Candidatos obj = new Candidatos(Integer.parseInt(dados[0]),dados[1],Integer.parseInt(dados[2]),Integer.parseInt(dados[3]),dados[4],dados[5]);
                if(!candidatos.contains(obj)) {
                    candidatos.add(obj);
                }
            }

        }catch(Exception e){
            System.out.println("Erro ao ler o arquivo: " + e.getMessage());
        }
        int opcao;
do{
        System.out.println();
        System.out.println("--- MENU ---");
        System.out.println("1- Desafio 1");
        System.out.println("2- Desafio 2");
        System.out.println("3- Desafio 3");
        System.out.println("4- Desafio 4");
        System.out.println("5- Sair do Programa");
        System.out.print("Opção: ");
        opcao = sc.nextInt();


switch (opcao) {
    case 1:
         System.out.println("=== DESAFIO 1 ===");
        for(Candidatos c : candidatos)
            if(c.idade >= 18 && c.tecnico.trim().equals("Sim")){
                System.out.println("ID: " + c.id + "\tNome: " + c.nome);
            }    


        break;
    case 2:

        System.out.println("=== DESAFIO 2 ===");
        for(Candidatos c : candidatos){
            if(c.anoExperiencia >= 3 || c.ingles.trim().equals("Sim")){
               System.out.println("ID: " + c.id + "\tNome: " + c.nome);
            }
        }

        break;

    case 3:
        System.out.println("=== DESAFIO 3 ===");
        for(Candidatos c : candidatos){
            if(c.idade < 25 && (c.tecnico.trim().equals("Sim") || c.anoExperiencia >= 1)){
                System.out.println("ID: " + c.id + "\tNome: " + c.nome);
            }
        }

        break;
    case 4:
        System.out.println("=== DESAFIO 4 ===");
        for(Candidatos c : candidatos){
            if(c.anoExperiencia > 5){
              System.out.printf("Nome: %-20s |  Categoria: Sênior%n", c.nome);            }
            else{
                 System.out.printf("Nome: %-20s |  Categoria: Júnior%n", c.nome); 
            }
        }
        break;
    case 5:
        System.out.println("Programa Finalizado!");
        break;

    default:
        System.out.println("Essa opção não está no menu!Tente Novamente!");
    }
}while(opcao != 5);
        sc.close();
    }
}
