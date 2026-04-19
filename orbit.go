package main
import "fmt"
func main(){
    altitude:=420
    speed:=7800
    for i:=1;i<=3;i++{
        fmt.Println("Orbit",i,"Altitude",altitude,"Speed",speed)
        altitude+=5
    }
}
