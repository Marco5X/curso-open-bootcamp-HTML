public class Main {
    public static void main(String[] args) {
// Ejercicio if
        int numeroIf = 0;
        if (numeroIf > 0 ){
            System.out.println("Es positivo");
        } else if ( numeroIf < 0) {
            System.out.println("Es negativo");
        } else {
            System.out.println("Es 0");
        }
        
// Ejercicio while        
        int numeroWhile = 1;
        while (numeroWhile < 3) {
            numeroWhile++;
            System.out.println(numeroWhile);
        }
        
// Ejercicio doWhile        
        int numeroDoWhile = 0;
        do {
            numeroWhile++;
            System.out.println(numeroWhile);            
        } while(numeroWhile < 3);
        
// Ejercicio for
        for(int numeroFor = 0; numeroFor <= 3; numeroFor++){
            System.out.println(numeroFor);
        }
        
// Ejercicio switch        
        String estacion = "Verano";
        switch (estacion) {
            case "Verano" : System.out.println("Es Verano");
            break;
            case "Otoño" : System.out.println("Es Otoño");
            break;
            case "Invierno" : System.out.println("Es Invierno");
            break;
            case "Primavera" : System.out.println("Es Primavera");
            break;
            default : System.out.println("No es una estacion");
        }
    }
}
