const provinces = [
  "กรุงเทพมหานคร","กระบี่","กาญจนบุรี","กาฬสินธุ์","กำแพงเพชร",
  "ขอนแก่น","จันทบุรี","ฉะเชิงเทรา","ชลบุรี","ชัยนาท",
  "ชัยภูมิ","ชุมพร","เชียงราย","เชียงใหม่","ตรัง",
  "ตราด","ตาก","นครนายก","นครปฐม","นครพนม",
  "นครราชสีมา","นครศรีธรรมราช","นครสวรรค์","นนทบุรี","นราธิวาส",
  "น่าน","บึงกาฬ","บุรีรัมย์","ปทุมธานี","ประจวบคีรีขันธ์",
  "ปราจีนบุรี","ปัตตานี","พระนครศรีอยุธยา","พะเยา","พังงา",
  "พัทลุง","พิจิตร","พิษณุโลก","เพชรบุรี","เพชรบูรณ์",
  "แพร่","ภูเก็ต","มหาสารคาม","มุกดาหาร","แม่ฮ่องสอน",
  "ยโสธร","ยะลา","ร้อยเอ็ด","ระนอง","ระยอง",
  "ราชบุรี","ลพบุรี","ลำปาง","ลำพูน","เลย",
  "ศรีสะเกษ","สกลนคร","สงขลา","สตูล","สมุทรปราการ",
  "สมุทรสงคราม","สมุทรสาคร","สระแก้ว","สระบุรี","สิงห์บุรี",
  "สุโขทัย","สุพรรณบุรี","สุราษฎร์ธานี","สุรินทร์","หนองคาย",
  "หนองบัวลำภู","อ่างทอง","อำนาจเจริญ","อุดรธานี","อุตรดิตถ์",
  "อุทัยธานี","อุบลราชธานี"
];

let correct = [];
let timeLeft = 120;
let timer;

function startGame() {
  correct = [];
  timeLeft = 120;
  document.getElementById("correct-list").innerHTML = "";
  document.getElementById("score").innerText = "ถูก: 0 / 77";

  clearInterval(timer);
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").innerText =
      "เวลา: " + timeLeft + " วินาที";

    if (timeLeft <= 0) {
      clearInterval(timer);
      alert("หมดเวลา! คุณตอบถูก " + correct.length + " จังหวัด");
    }
  }, 1000);
}
function markCorrectByName(provinceName) {
  const className = provinceName.replace(/\s+/g, '');
  const el = document.querySelector('.' + className);

  if (el) {
    el.classList.add('correct');
  } else {
    console.log('ไม่พบจังหวัด:', className);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("answer").addEventListener("keyup", function () {
    const input = this.value.trim();

    if (provinces.includes(input) && !correct.includes(input)) {
  markCorrectByName(input);

      const li = document.createElement("li");
      li.innerText = input;
      document.getElementById("correct-list").appendChild(li);

      document.getElementById("score").innerText =
        "ถูก: " + correct.length + " / 77";

      this.value = "";
    }
  });
});
