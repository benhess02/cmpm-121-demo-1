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
  growthRateLabel.innerHTML = `${calculateGrowthRate().toFixed(2)} cookies/sec`;
  upgradesLabel.innerHTML = `Upgrades: ${upgradeACount} A, ${upgradeBCount} B, ${upgradeCCount} C`;
  upgradeABtn.disabled = count < 10;
  upgradeBBtn.disabled = count < 100;
  upgradeCBtn.disabled = count < 1000;
}

let upgradeACount : number = 0;
let upgradeBCount : number = 0;
let upgradeCCount : number = 0;

const upgradeABtn = document.createElement("button");
upgradeABtn.innerHTML = "Perchase Upgrade A";
upgradeABtn.addEventListener("click", () => {
  count -= 10;
  upgradeACount += 1;
  update();
});
app.append(upgradeABtn);

const upgradeBBtn = document.createElement("button");
upgradeBBtn.innerHTML = "Perchase Upgrade B";
upgradeBBtn.addEventListener("click", () => {
  count -= 100;
  upgradeBCount += 1;
  update();
});
app.append(upgradeBBtn);

const upgradeCBtn = document.createElement("button");
upgradeCBtn.innerHTML = "Perchase Upgrade C";
upgradeCBtn.addEventListener("click", () => {
  count -= 1000;
  upgradeCCount += 1;
  update();
});
app.append(upgradeCBtn);

const counterLabel = document.createElement("div");
app.append(counterLabel);
const growthRateLabel = document.createElement("div");
app.append(growthRateLabel);
const upgradesLabel = document.createElement("div");
app.append(upgradesLabel);
update();

const btn = document.createElement("button");
btn.innerHTML = "🎆";
btn.addEventListener("click", () => {
  count++;
  update();
});
app.append(btn);

function calculateGrowthRate() : number {
  return upgradeACount * 0.1 + upgradeBCount * 2 + upgradeCCount * 50;
}

let time: number = 0;
function tick() {
  requestAnimationFrame(() => tick());
  const newTime = performance.now();
  const dt = newTime - time;
  time = newTime;

  count += (dt / 1000) * calculateGrowthRate();
  update();
}

tick();
