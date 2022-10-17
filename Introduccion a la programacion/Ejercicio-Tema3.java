//EJERCICIOS TEMA 3
// Introduccion a la programacion

//Primera Parte 
public class Main {
    public static void main(String[] args) {
       suma(10, 30, 5);
    }
    public static void suma(int a, int b, int c) {
        int resultado;
        resultado = a + b + c;
        
        System.out.println(resultado);
        // Segunda Parte
        Coche miCoche = new Coche();
        miCoche.incrementaPuerta();

        System.out.println(miCoche.puertas);
    
    }
}

class Coche {
    public int puertas = 0;

    public void incrementaPuerta() {
        this.puertas++;
    }
}