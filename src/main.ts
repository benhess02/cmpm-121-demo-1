import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "My supercalifragilisticexpialidocious game";
document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

let count: number = 0;
function update() {
  counterLabel.innerHTML = `${count.toFixed(2)} Fireworks`;
  growthRateLabel.innerHTML = `${calculateGrowthRate().toFixed(2)} fireworks/sec`;
  upgradesLabel.innerHTML = `Upgrades: ${upgradeACount} A, ${upgradeBCount} B, ${upgradeCCount} C`;

  upgradeABtn.disabled = count < upgradeAPrice;
  upgradeBBtn.disabled = count < upgradeBPrice;
  upgradeCBtn.disabled = count < upgradeCPrice;

  upgradeABtn.innerHTML = `Perchase Upgrade A (${upgradeAPrice.toFixed(2)} units)`;
  upgradeBBtn.innerHTML = `Perchase Upgrade B (${upgradeBPrice.toFixed(2)} units)`;
  upgradeCBtn.innerHTML = `Perchase Upgrade C (${upgradeCPrice.toFixed(2)} units)`;
}

let upgradeACount: number = 0;
let upgradeAPrice: number = 10;

let upgradeBCount: number = 0;
let upgradeBPrice: number = 100;

let upgradeCCount: number = 0;
let upgradeCPrice: number = 1000;

const upgradeABtn = document.createElement("button");
upgradeABtn.innerHTML = "Perchase Upgrade A";
upgradeABtn.addEventListener("click", () => {
  count -= upgradeAPrice;
  upgradeAPrice *= 1.15;
  upgradeACount += 1;
  update();
});
app.append(upgradeABtn);

const upgradeBBtn = document.createElement("button");
upgradeBBtn.innerHTML = "Perchase Upgrade B";
upgradeBBtn.addEventListener("click", () => {
  count -= upgradeBPrice;
  upgradeBPrice *= 1.15;
  upgradeBCount += 1;
  update();
});
app.append(upgradeBBtn);

const upgradeCBtn = document.createElement("button");
upgradeCBtn.innerHTML = "Perchase Upgrade C";
upgradeCBtn.addEventListener("click", () => {
  count -= upgradeCPrice;
  upgradeCPrice *= 1.15;
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

function calculateGrowthRate(): number {
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
