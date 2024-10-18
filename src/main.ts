import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "My supercalifragilisticexpialidocious game";
document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

interface Item {
  name: string;
  cost: number;
  rate: number;
  description: string;
}

const availableItems: Item[] = [
  { name: "Firework Launcher", cost: 10, rate: 0.1, description: "A basic firework launcher. Don't aim at face" },
  { name: "Firework Cannon", cost: 100, rate: 2, description: "A bigger launcher. Bigger boom... more boom" },
  { name: "Quad Firework Cannon", cost: 300, rate: 8, description: "Just four cannons but you bought in bulk so it's cheaper" },
  { name: "High Speed Firework Cannon", cost: 1000, rate: 50, description: "Rapid auto-reloading insanity" },
  { name: "San Diego Firework Display", cost: 100000, rate: 2000, description: "They had a little oopsie in 2012, look it up" }
];

interface ItemState {
  item: Item;
  count: number;
  currentCost: number;
  button: HTMLButtonElement;
  label: HTMLDivElement;
}

const itemStates: ItemState[] = [];

let count: number = 0;
let growthRate: number = 0;
function update() {
  counterLabel.innerHTML = `${count.toFixed(2)} Fireworks`;
  growthRateLabel.innerHTML = `Growth rate: ${growthRate.toFixed(2)} fireworks/sec`;
  for (let i = 0; i < itemStates.length; i++) {
    itemStates[i].label.innerHTML =
      `${itemStates[i].item.name}: ${itemStates[i].count}`;
    itemStates[i].button.innerHTML =
      `Perchase ${itemStates[i].item.name} (${itemStates[i].currentCost} fireworks)`;
    itemStates[i].button.disabled = count < itemStates[i].currentCost;
  }
}

for (let i = 0; i < availableItems.length; i++) {
  const btn = document.createElement("button");
  const label = document.createElement("div");
  const state: ItemState = {
    item: availableItems[i],
    currentCost: availableItems[i].cost,
    count: 0,
    button: btn,
    label: label,
  };
  itemStates.push(state);
  btn.title = state.item.description;
  btn.addEventListener("click", () => {
    count -= state.currentCost;
    state.currentCost *= 1.15;
    state.count += 1;
    growthRate += state.item.rate;
    update();
  });
}

for (let i = 0; i < itemStates.length; i++) {
  app.append(itemStates[i].button);
}

const counterLabel = document.createElement("div");
app.append(counterLabel);
const growthRateLabel = document.createElement("div");
app.append(growthRateLabel);

for (let i = 0; i < itemStates.length; i++) {
  app.append(itemStates[i].label);
}

update();

const btn = document.createElement("button");
btn.innerHTML = "🎆 Launch Firework";
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
