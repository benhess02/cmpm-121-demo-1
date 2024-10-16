import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

let count: number = 0;
let time: number = 0;

const gameName = "My supercalifragilisticexpialidocious game";
document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

function update() {
    counterLabel.innerHTML = `${count.toFixed(3)} Fireworks`;
}

const counterLabel = document.createElement("div");
app.append(counterLabel);
update();

const btn = document.createElement("button");
btn.innerHTML = "🎆";
btn.addEventListener("click", () => {
  count++;
  update();
});
app.append(btn);

function tick() {
    requestAnimationFrame(() => tick());
    const newTime = performance.now();
    const dt = newTime - time;
    time = newTime;

    count += dt / 1000;
    update();
}

tick();