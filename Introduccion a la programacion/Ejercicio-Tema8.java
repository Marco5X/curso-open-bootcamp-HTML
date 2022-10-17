public class Main {
    public static void main(String[] args) {        
        Persona personaEjemplo = new Persona();

        personaEjemplo.setEdad(35);
        int persona = personaEjemplo.getEdad();
        System.out.println(persona);

        personaEjemplo.setNombre("Marcos");
        String nombre = personaEjemplo.getNombre();
        System.out.println(nombre);

        personaEjemplo.setTelefono(123456789);
        int numero = personaEjemplo.getTelefono();
        System.out.println(numero);
    }
}

class Persona {
    private int edad;
    private String nombre;
    private int telefono;

    public void setEdad(int años) {
        this.edad = años;
    }
    public int getEdad() {
        return this.edad;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public String getNombre() {
        return this.nombre;
    }

    public void setTelefono(int numero) {
        this.telefono = numero;
    }
    public int getTelefono() {
        return this.telefono;
    }
}