const diceImages = [
    { value: 1, img: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Dice-1-b.svg" },
    { value: 2, img: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Dice-2-b.svg" },
    { value: 3, img: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Dice-3-b.svg" },
    { value: 4, img: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Dice-4-b.svg" },
    { value: 5, img: "https://upload.wikimedia.org/wikipedia/commons/0/08/Dice-5-b.svg" },
    { value: 6, img: "https://upload.wikimedia.org/wikipedia/commons/2/26/Dice-6-b.svg" }
  ];
  
  const basla = document.querySelector('#basla');
  const bitir = document.querySelector('#bitir');
  const sayi = document.querySelector('.sayi');
  let id;
  let id2;
  

  // Zar atan fonksiyon
  function zarAt() {
    const diceSound =  new Audio("./dry-dices.mp3");
    diceSound.play();

    const randomNumber = Math.floor(Math.random() * 6) + 1;
    const zarlar = diceImages.filter(dice => randomNumber === dice.value);
    
    // Yeni bir görsel oluşturuluyor
    const img = document.createElement("img");
    img.src = zarlar[0].img;
    img.alt = `Zar değeri: ${randomNumber}`;
    img.style.width = "100px";  // Görselin boyutunu ayarlamak
    img.style.height = "100px";
    
    // Görseli sayfada göster
    sayi.innerHTML = ''; // Önceki görseli temizle
    sayi.appendChild(img);
    
    // Görseli belirli bir süre sonra kaldır
    id2 = setTimeout(() => {
      sayi.innerHTML = '';  // Görseli kaldırmak için sayfayı temizle
    }, 1500);
  }
  
  // Başla butonuna tıklanırsa
  basla.addEventListener('click', function () {
    clearInterval(id); // Önceki varsa temizle
    zarAt();  // İlk zar hemen atılsın
    id = setInterval(zarAt, 1600);  // Sonra her 1.6 saniyede bir
  });
  
  // Bitir butonuna tıklanırsa
  bitir.addEventListener('click', function () {
    clearInterval(id); // Zar atmayı durdur
    clearTimeout(id2);
  });
  