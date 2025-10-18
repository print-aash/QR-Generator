//js File \\
let input = document.querySelector(".user-input");
let userInput = "";

document.querySelector("#reset-btn").addEventListener("click", () => {
  console.log("Reset Clicked !");
  input.value = "";
  img.remove();
  buttonC.remove();
  a.remove();
});

const btn = document.querySelector("#button").addEventListener("click", () => {
  userInput = input.value;
  if (!userInput) return alert("Please enter text");
  const QR_URL = `https://api.qrserver.com/v1/create-qr-code/?data=${userInput}&size=100x100`;
  fetch(QR_URL)
    .then((res) => res.blob())
    .then((blob) => {
      img = document.createElement("img");
      img.src = URL.createObjectURL(blob);
      document.querySelector("body").appendChild(img);
      a = document.createElement("a");
      buttonC = document.createElement("button");
      buttonC.innerText = "Downlode QR";
      document.querySelector("body").appendChild(a).appendChild(buttonC);
      a.href = `${img.src}`;
    })
    .catch((err) => {
      console.log("Error", err);
    });
});

