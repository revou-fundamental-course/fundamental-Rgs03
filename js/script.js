const login = document.getElementById("login");
const loginInput = document.getElementById("loginInput");
const user = document.getElementById("user");

const time = document.getElementById("time");
const outName = document.getElementById("out-name");
const outDate = document.getElementById("out-date");
const outGender = document.getElementById("out-gender");
const outMessage = document.getElementById("out-message");
const nama = document.getElementById("name");
const birthday = document.getElementById("birthday");
const gender = document.getElementsByName("gender");
const pesan = document.getElementById("pesan");

function masuk() {
  localStorage.setItem("nama", loginInput.value);
  if (loginInput.value === "") {
    alert("Masukkan nama anda untuk membuka website ini");
  } else {
    user.innerText = loginInput.value;
    console.log(loginInput.value);
    login.style.display = "none";
  }
}
if (localStorage.getItem("nama")) {
  user.innerText = localStorage.getItem("nama");
  login.style.display = "none";
}

function kirim() {
  for (i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      outGender.innerText = gender[i].value;
    }
  }
  const date = new Date();
  time.innerText = date;
  outName.innerText = nama.value;
  outDate.innerText = birthday.value;
  outMessage.innerText = pesan.value;
}
