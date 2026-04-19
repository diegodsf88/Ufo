public class Beam {
    static void fire(int power){
        System.out.println("Beam fired at power " + power);
    }
    public static void main(String[] args){
        for(int i=1;i<=5;i++) fire(i*20);
    }
}
