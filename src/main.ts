import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

let count: number = 0;

const gameName = "My supercalifragilisticexpialidocious game";
document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

const counterLabel = document.createElement("div");
counterLabel.innerHTML = "0 Fireworks";
app.append(counterLabel);

const btn = document.createElement("button");
btn.innerHTML = "🎆";
btn.addEventListener("click", () => {
  count++;
  counterLabel.innerHTML = `${count} Fireworks`;
});
app.append(btn);

setInterval(() => {
    count++;
    counterLabel.innerHTML = `${count} Fireworks`;
}, 1000);