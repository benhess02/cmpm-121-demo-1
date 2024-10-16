import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "My supercalifragilisticexpialidocious game";
document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

let count: number = 0;
function update() {
  counterLabel.innerHTML = `${count.toFixed(3)} Fireworks`;
  upgradeBtn.disabled = count < 10;
}

let growthRate: number = 0;
const upgradeBtn = document.createElement("button");
upgradeBtn.innerHTML = "💥 Perchase Automatic Firework Cannon";
upgradeBtn.addEventListener("click", () => {
  count -= 10;
  growthRate++;
  update();
});
app.append(upgradeBtn);

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

let time: number = 0;
function tick() {
  requestAnimationFrame(() => tick());
  const newTime = performance.now();
  const dt = newTime - time;
  time = newTime;

  count += (dt / 1000) * growthRate;
  update();
}

tick();
