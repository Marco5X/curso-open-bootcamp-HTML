public class Main {
    public static void main(String[] args) {
        Cliente cliente = new Cliente();
            cliente.nombre = "Manuel";
            cliente.edad = 34;
            cliente.telefono = 987654321;
            cliente.credito = 15.000;
            System.out.println("Soy " + cliente.nombre + 
                ", tengo " + cliente.edad + 
                " años y mi telefono es " + cliente.telefono
                + " y mi credito disponible es " + cliente.credito + " $");
        
        Trabajador trabajador = new Trabajador();
            trabajador.nombre = "Marcos";
            trabajador.edad = 35;
            trabajador.telefono = 123456789;
            trabajador.salario = 12000.00;
            System.out.println("Soy " + trabajador.nombre + 
                ", tengo " + trabajador.edad + 
                " años y mi telefono es " + trabajador.telefono
                + " y mi salario disponible es " + trabajador.salario + " €");
    }
}

class Persona {
    String nombre;
    int edad;
    int telefono;
}
    
class Cliente extends Persona {
    double credito;        
}

class Trabajador extends Persona {
    double salario;        
}