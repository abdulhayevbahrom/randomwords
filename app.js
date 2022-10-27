const eng = document.querySelector(".eng");
const uzb = document.querySelector(".uzb");

if(window.innerWidth > 768){
  alert("Ushbu sayt Ekran o'lchami 768px va undan past bolgan gajjetlar uchun!  ")
}

let EngWords = [];
let UzbWords = [];
let EngLocal = JSON.parse(localStorage.getItem("eng_words"));
let UzbLocal = JSON.parse(localStorage.getItem("uzb_words"));

// random function
function random() {
  if(EngLocal===null){
    alert("Siz hali so'z kiritmagansiz")
    return;
  }
  let index = Math.floor(Math.random() * EngLocal.length);
  h1.innerHTML = EngLocal[index].toUpperCase();

  h1.addEventListener('dblclick',()=>{
  h1.innerHTML = UzbLocal[index].toUpperCase(); 
  })
}

// delete function
deleteAll.addEventListener("click", () => {
  let adder = confirm("Kiritilgan sozlar o'chirmoqchimisiz?");
  if (adder) {
    localStorage.clear();
  }
});

// add Word function
add.addEventListener("click", (e) => {
  e.preventDefault();
  if (eng.value === ""){
    alert("Majburiy maydonlarni to'ldiring!");
    return;
  }
  if (uzb.value === ""){
    alert("Majburiy maydonlarni to'ldiring!");
    return;
  }
  // eng word
  localStorage.removeItem("eng_words");
  if (EngLocal !== null) {
    EngWords.push(...EngLocal, eng.value);
    localStorage.setItem("eng_words", JSON.stringify(EngWords));
    eng.value === ""
  } else {
    EngWords.push(eng.value);
    localStorage.setItem("eng_words", JSON.stringify(EngWords));
    eng.value === ""
  }
  // uzb word
  localStorage.removeItem("uzb_words");
  if (UzbLocal !== null) {
    UzbWords.push(...UzbLocal, uzb.value);
    localStorage.setItem("uzb_words", JSON.stringify(UzbWords));
    uzb.value === ""
  } else {
    UzbWords.push(uzb.value);
    localStorage.setItem("uzb_words", JSON.stringify(UzbWords));
    uzb.value === ""
  }

  eng.value = ""
  uzb.value = ""
});
