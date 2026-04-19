fn decode(signal:&str)->String{
    signal.chars().rev().collect()
}
fn main(){
    let raw="1010-ALIEN";
    println!("Raw: {}",raw);
    println!("Decoded: {}",decode(raw));
}
