// Aşağıdaki görevleri tamamlayın

/*
  GÖREV 1
  - Input:  Bir dosya yolunu (path) parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon, verilen bir dosya adresideki(path) dosyanın adını vermeli.
  * İpucu:  Dosya adresinin / işaretleri ile bölümlendiğine dikkat et.

  örnek input:  "C:/Users/johnsmith/Music/Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  "Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  ""
  örnek output: ""
*/

function dosyaAdiniBul(path) {
  // Dosya adını saklayacak değişkeni tanımlayın.
  let fileName = "";
  
  // Eğer path boş bir string ise, direkt olarak boş string döndürün.
  if (path === "") {
    return fileName;
  }
  
  // Dosya yolu içindeki son / karakterinin index'ini bulun.
  const lastIndex = path.lastIndexOf("/");
  
  // Eğer / karakteri yoksa, path bir dosya adıdır, dolayısıyla direkt olarak path'i döndürün.
  if (lastIndex === -1) {
    return path;
  }
  
  // Eğer / karakteri varsa, dosya adı / karakterinden sonra gelen kısımdır.
  fileName = path.substr(lastIndex + 1);
  // Dosya adını döndürün.
  return fileName;
}


/*
  GÖREV 2
  - Input:  Bir sayı arrayini parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasını dönmeli.

  örnek input:  []
  örnek output: null

  örnek input:  [4]
  örnek output: 4
  
  örnek input:  [50, -26, 153, 7]
  örnek output: 46

  örnek input:  [109, 216, 288, 143, 71, 185, -278, 194, 5]
  örnek output: 104
*/

let degerler=[109, 216, 288, 143, 71, 185, -278, 194, 5];
function ortalamaBul(degerler) {
  let toplam =0;
  if(degerler.length===0) return null;

    for(let i=0;i<degerler.length;i++){
       toplam +=degerler[i];
    }
    return toplam/degerler.length;
}
console.log(ortalamaBul(degerler))

/*
  GÖREV 3
  - Input:  Bir sayı arrayini ve ortalama bulmaya yarayacak bir fonksiyonu parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasından büyük ya da eşit elemanlardan oluşan bir array dönmeli.
  * Çağırırken kendi ortalama fonksiyonunla çağırabilirsin, ama parametrenin tanımlama aşamasında soyut bir ifade olduğunu unutma.
  * f(x) = 2x+5 içerisindeki x değeri gibi.

  örnek input:  []
  örnek output: null

  örnek input:  [4]
  örnek output: 4
  
  örnek input:  [50, -26, 153, 7]
  örnek output: [50, 153]

  örnek input:  [109, 216, 288, 143, 71, 185, -278, 194, 5]
  örnek output: [109, 216, 288, 143, 185, 194]
*/

let degerler1=[109, 216, 288, 143, 71, 185, -278, 194, 5];
function ortalamadanBuyukleriBul(degerler1) {
  let dogrusayilar=[];
  let toplam =0;
  let ortalama=0;
  if(degerler1.length===0) return null;

    for(let i=0;i<degerler1.length;i++){
       toplam +=degerler1[i];
    }
    ortalama= toplam/degerler1.length
    
    for(let i=0;i<degerler1.length;i++){
      if(ortalama<=degerler1[i]){
        dogrusayilar.push(degerler1[i]);
      }
    }
    return dogrusayilar;
}
console.log(ortalamadanBuyukleriBul(degerler1))



/* !!!! Burdan aşağısını değiştirmeyin !!!! */
function as() {
  console.log("Kodlar sorunsuz çalışıyor!");
  return "sa";
}
as();
export { dosyaAdiniBul, ortalamaBul, ortalamadanBuyukleriBul, as };
