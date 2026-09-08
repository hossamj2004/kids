/* ==========================================================
   Kids Learning World — categories + TikTok-style item feed
   ========================================================== */

// ---------- DATA ----------
// Each item: { name, image?, emoji?, big?, bg? }
const CATEGORIES = [
  {
    id: "animals",
    name: "Animals",
    emoji: "🦁",
    color: "linear-gradient(145deg, #f6d365, #fda085)",
    cover: "images/categories/animals.png",
    items: [
      { name: "Lion",      image: "images/animals/lion.png",      emoji: "🦁" },
      { name: "Elephant",  image: "images/animals/elephant.png",  emoji: "🐘" },
      { name: "Monkey",    image: "images/animals/monkey.png",    emoji: "🐵" },
      { name: "Giraffe",   image: "images/animals/giraffe.png",   emoji: "🦒" },
      { name: "Dog",       image: "images/animals/dog.png",       emoji: "🐶" },
      { name: "Cat",       image: "images/animals/cat.png",       emoji: "🐱" },
      { name: "Rabbit",    image: "images/animals/rabbit.png",    emoji: "🐰" },
      { name: "Panda",     image: "images/animals/panda.png",     emoji: "🐼" },
      { name: "Frog",      image: "images/animals/frog.png",      emoji: "🐸" },
      { name: "Duck",      image: "images/animals/duck.png",      emoji: "🦆" },
      { name: "Turtle",    image: "images/animals/turtle.png",    emoji: "🐢" },
      { name: "Butterfly", image: "images/animals/butterfly.png", emoji: "🦋" },
      { name: "Fish",      image: "images/animals/fish.png",      emoji: "🐟" },
      { name: "Horse",     image: "images/animals/horse.png",     emoji: "🐴" },
      { name: "Cow",       image: "images/animals/cow.png",       emoji: "🐮" },
      { name: "Bear",      image: "images/animals/bear.png",      emoji: "🐻" },
      { name: "Tiger",     image: "images/animals/tiger.png",     emoji: "🐯" },
      { name: "Zebra",     image: "images/animals/zebra.png",     emoji: "🦓" },
      { name: "Sheep",     image: "images/animals/sheep.png",     emoji: "🐑" },
      { name: "Pig",       image: "images/animals/pig.png",       emoji: "🐷" },
      { name: "Chicken",   image: "images/animals/chicken.png",   emoji: "🐔" },
      { name: "Owl",       image: "images/animals/owl.png",       emoji: "🦉" },
      { name: "Penguin",   image: "images/animals/penguin.png",   emoji: "🐧" },
      { name: "Snake",     image: "images/animals/snake.png",     emoji: "🐍" },
      { name: "Crocodile", image: "images/animals/crocodile.png", emoji: "🐊" },
      { name: "Fox",       image: "images/animals/fox.png",       emoji: "🦊" },
      { name: "Deer",      image: "images/animals/deer.png",      emoji: "🦌" },
      { name: "Wolf",      image: "images/animals/wolf.png",      emoji: "🐺" },
      { name: "Kangaroo",  image: "images/animals/kangaroo.png",  emoji: "🦘" },
      { name: "Koala",     image: "images/animals/koala.png",     emoji: "🐨" },
      { name: "Dolphin",   image: "images/animals/dolphin.png",   emoji: "🐬" },
      { name: "Whale",     image: "images/animals/whale.png",     emoji: "🐋" },
      { name: "Shark",     image: "images/animals/shark.png",     emoji: "🦈" },
      { name: "Octopus",   image: "images/animals/octopus.png",   emoji: "🐙" },
      { name: "Crab",      image: "images/animals/crab.png",      emoji: "🦀" },
      { name: "Bee",       image: "images/animals/bee.png",       emoji: "🐝" },
      { name: "Ladybug",   image: "images/animals/ladybug.png",   emoji: "🐞" },
      { name: "Ant",       image: "images/animals/ant.png",       emoji: "🐜" },
      { name: "Eagle",     image: "images/animals/eagle.png",     emoji: "🦅" },
      { name: "Parrot",    image: "images/animals/parrot.png",    emoji: "🦜" },
      { name: "Flamingo",  image: "images/animals/flamingo.png",  emoji: "🦩" },
      { name: "Peacock",   image: "images/animals/peacock.png",   emoji: "🦚" },
      { name: "Camel",     image: "images/animals/camel.png",     emoji: "🐫" },
      { name: "Hippo",     image: "images/animals/hippo.png",     emoji: "🦛" },
      { name: "Rhino",     image: "images/animals/rhino.png",     emoji: "🦏" },
      { name: "Leopard",   image: "images/animals/leopard.png",   emoji: "🐆" },
      { name: "Squirrel",  image: "images/animals/squirrel.png",  emoji: "🐿️" },
      { name: "Mouse",     image: "images/animals/mouse.png",     emoji: "🐭" },
      { name: "Hamster",   image: "images/animals/hamster.png",   emoji: "🐹" },
      { name: "Goat",      image: "images/animals/goat.png",      emoji: "🐐" },
      { name: "Llama",     image: "images/animals/llama.png",     emoji: "🦙" },
      { name: "Seal",      image: "images/animals/seal.png",      emoji: "🦭" },
      { name: "Bat",       image: "images/animals/bat.png",       emoji: "🦇" },
      { name: "Hedgehog",  image: "images/animals/hedgehog.png",  emoji: "🦔" },
      { name: "Gorilla",   image: "images/animals/gorilla.png",   emoji: "🦍" },
    ],
  },
  {
    id: "colors",
    name: "Colors",
    emoji: "🎨",
    color: "linear-gradient(145deg, #84fab0, #8fd3f4)",
    cover: "images/categories/colors.png",
    items: [
      { name: "Red",    image: "images/colors/red.png",    emoji: "🔴", bg: "linear-gradient(160deg, #ff5f6d, #b91d3a)" },
      { name: "Blue",   image: "images/colors/blue.png",   emoji: "🔵", bg: "linear-gradient(160deg, #4facfe, #1a4fbd)" },
      { name: "Yellow", image: "images/colors/yellow.png", emoji: "🟡", bg: "linear-gradient(160deg, #ffe259, #d4a017)" },
      { name: "Green",  image: "images/colors/green.png",  emoji: "🟢", bg: "linear-gradient(160deg, #56e39f, #157347)" },
      { name: "Orange", image: "images/colors/orange.png", emoji: "🟠", bg: "linear-gradient(160deg, #ffb75e, #d35400)" },
      { name: "Purple", image: "images/colors/purple.png", emoji: "🟣", bg: "linear-gradient(160deg, #c471ed, #6a1b9a)" },
      { name: "Pink",   image: "images/colors/pink.png",   emoji: "🩷", bg: "linear-gradient(160deg, #ff9a9e, #e0559b)" },
      { name: "Brown",  image: "images/colors/brown.png",  emoji: "🟤", bg: "linear-gradient(160deg, #b3785e, #6d4c41)" },
      { name: "Black",  image: "images/colors/black.png",  emoji: "⚫", bg: "linear-gradient(160deg, #555, #111)" },
      { name: "White",  image: "images/colors/white.png",  emoji: "⚪", bg: "linear-gradient(160deg, #cfd9df, #8fa3ad)" },
    ],
  },
  {
    id: "numbers",
    name: "Numbers",
    emoji: "🔢",
    color: "linear-gradient(145deg, #a1c4fd, #c2e9fb)",
    cover: "images/categories/numbers.png",
    items: [
      { big: "1",  name: "One",   image: "images/numbers/one.png",   emoji: "🍎" },
      { big: "2",  name: "Two",   image: "images/numbers/two.png",   emoji: "🍌🍌" },
      { big: "3",  name: "Three", image: "images/numbers/three.png", emoji: "🍓🍓🍓" },
      { big: "4",  name: "Four",  image: "images/numbers/four.png",  emoji: "🍊🍊🍊🍊" },
      { big: "5",  name: "Five",  image: "images/numbers/five.png",  emoji: "⭐⭐⭐⭐⭐" },
      { big: "6",  name: "Six",   image: "images/numbers/six.png",   emoji: "🎈🎈🎈\n🎈🎈🎈" },
      { big: "7",  name: "Seven", image: "images/numbers/seven.png", emoji: "🌸🌸🌸🌸\n🌸🌸🌸" },
      { big: "8",  name: "Eight", image: "images/numbers/eight.png", emoji: "🐞🐞🐞🐞\n🐞🐞🐞🐞" },
      { big: "9",  name: "Nine",  image: "images/numbers/nine.png",  emoji: "🦀🦀🦀\n🦀🦀🦀\n🦀🦀🦀" },
      { big: "10", name: "Ten",   image: "images/numbers/ten.png",   emoji: "🚀🚀🚀🚀🚀\n🚀🚀🚀🚀🚀" },
    ],
  },
  {
    id: "food",
    name: "Food",
    emoji: "🍕",
    color: "linear-gradient(145deg, #ff9a9e, #fecfef)",
    cover: "images/categories/food.png",
    items: [
      { name: "Pizza",     image: "images/food/pizza.png",     emoji: "🍕" },
      { name: "Burger",    image: "images/food/burger.png",    emoji: "🍔" },
      { name: "Bread",     image: "images/food/bread.png",     emoji: "🍞" },
      { name: "Cheese",    image: "images/food/cheese.png",    emoji: "🧀" },
      { name: "Egg",       image: "images/food/egg.png",       emoji: "🥚" },
      { name: "Rice",      image: "images/food/rice.png",      emoji: "🍚" },
      { name: "Pasta",     image: "images/food/pasta.png",     emoji: "🍝" },
      { name: "Sandwich",  image: "images/food/sandwich.png",  emoji: "🥪" },
      { name: "Ice Cream", image: "images/food/ice-cream.png", emoji: "🍦" },
      { name: "Cookie",    image: "images/food/cookie.png",    emoji: "🍪" },
      { name: "Cake",      image: "images/food/cake.png",      emoji: "🎂" },
      { name: "Milk",      image: "images/food/milk.png",      emoji: "🥛" },
    ],
  },
  {
    id: "fruits",
    name: "Fruits",
    emoji: "🍓",
    color: "linear-gradient(145deg, #f093fb, #f5576c)",
    cover: "images/categories/fruits.png",
    items: [
      { name: "Apple",      image: "images/fruits/apple.png",      emoji: "🍎" },
      { name: "Banana",     image: "images/fruits/banana.png",     emoji: "🍌" },
      { name: "Grapes",     image: "images/fruits/grapes.png",     emoji: "🍇" },
      { name: "Strawberry", image: "images/fruits/strawberry.png", emoji: "🍓" },
      { name: "Orange",     image: "images/fruits/orange.png",     emoji: "🍊" },
      { name: "Watermelon", image: "images/fruits/watermelon.png", emoji: "🍉" },
      { name: "Pineapple",  image: "images/fruits/pineapple.png",  emoji: "🍍" },
      { name: "Mango",      image: "images/fruits/mango.png",      emoji: "🥭" },
      { name: "Peach",      image: "images/fruits/peach.png",      emoji: "🍑" },
      { name: "Cherries",   image: "images/fruits/cherries.png",   emoji: "🍒" },
      { name: "Kiwi",       image: "images/fruits/kiwi.png",       emoji: "🥝" },
      { name: "Lemon",      image: "images/fruits/lemon.png",      emoji: "🍋" },
    ],
  },
  {
    id: "vehicles",
    name: "Vehicles",
    emoji: "🚗",
    color: "linear-gradient(145deg, #43e97b, #38f9d7)",
    cover: "images/categories/vehicles.png",
    items: [
      { name: "Car",         image: "images/vehicles/car.png",         emoji: "🚗" },
      { name: "Bus",         image: "images/vehicles/bus.png",         emoji: "🚌" },
      { name: "Police Car",  image: "images/vehicles/police-car.png",  emoji: "🚓" },
      { name: "Ambulance",   image: "images/vehicles/ambulance.png",   emoji: "🚑" },
      { name: "Fire Truck",  image: "images/vehicles/fire-truck.png",  emoji: "🚒" },
      { name: "Train",       image: "images/vehicles/train.png",       emoji: "🚂" },
      { name: "Airplane",    image: "images/vehicles/airplane.png",    emoji: "✈️" },
      { name: "Helicopter",  image: "images/vehicles/helicopter.png",  emoji: "🚁" },
      { name: "Ship",        image: "images/vehicles/ship.png",        emoji: "🚢" },
      { name: "Bicycle",     image: "images/vehicles/bicycle.png",     emoji: "🚲" },
      { name: "Motorcycle",  image: "images/vehicles/motorcycle.png",  emoji: "🏍️" },
      { name: "Rocket",      image: "images/vehicles/rocket.png",      emoji: "🚀" },
    ],
  },
  {
    id: "shapes",
    name: "Shapes",
    emoji: "🔷",
    color: "linear-gradient(145deg, #fa709a, #fee140)",
    cover: "images/categories/shapes.png",
    items: [
      { name: "Circle",   image: "images/shapes/circle.png",   emoji: "🔴" },
      { name: "Square",   image: "images/shapes/square.png",   emoji: "🟥" },
      { name: "Triangle", image: "images/shapes/triangle.png", emoji: "🔺" },
      { name: "Star",     image: "images/shapes/star.png",     emoji: "⭐" },
      { name: "Heart",    image: "images/shapes/heart.png",    emoji: "❤️" },
      { name: "Diamond",  image: "images/shapes/diamond.png",  emoji: "🔷" },
      { name: "Crescent", image: "images/shapes/crescent.png", emoji: "🌙" },
      { name: "Oval",     image: "images/shapes/oval.png",     emoji: "🥚" },
    ],
  },
  {
    id: "weather",
    name: "Weather",
    emoji: "🌤️",
    color: "linear-gradient(145deg, #30cfd0, #a58fff)",
    cover: "images/categories/weather.png",
    items: [
      { name: "Sun",     image: "images/weather/sun.png",     emoji: "☀️" },
      { name: "Rain",    image: "images/weather/rain.png",    emoji: "🌧️" },
      { name: "Cloudy",  image: "images/weather/cloudy.png",  emoji: "⛅" },
      { name: "Snow",    image: "images/weather/snow.png",    emoji: "❄️" },
      { name: "Storm",   image: "images/weather/storm.png",   emoji: "⛈️" },
      { name: "Rainbow", image: "images/weather/rainbow.png", emoji: "🌈" },
      { name: "Moon",    image: "images/weather/moon.png",    emoji: "🌙" },
      { name: "Star",    image: "images/weather/star.png",    emoji: "⭐" },
      { name: "Tornado", image: "images/weather/tornado.png", emoji: "🌪️" },
    ],
  },
  {
    id: "body",
    name: "Body Parts",
    emoji: "👤",
    color: "linear-gradient(145deg, #ffecd2, #fcb69f)",
    cover: "images/categories/body.png",
    items: [
      { name: "Head",   image: "images/body/head.png",   emoji: "👤" },
      { name: "Hand",   image: "images/body/hand.png",   emoji: "✋" },
      { name: "Foot",   image: "images/body/foot.png",   emoji: "🦶" },
      { name: "Eye",    image: "images/body/eye.png",    emoji: "👁️" },
      { name: "Ear",    image: "images/body/ear.png",    emoji: "👂" },
      { name: "Nose",   image: "images/body/nose.png",   emoji: "👃" },
      { name: "Mouth",  image: "images/body/mouth.png",  emoji: "👄" },
      { name: "Arm",    image: "images/body/arm.png",    emoji: "💪" },
      { name: "Leg",    image: "images/body/leg.png",    emoji: "🦵" },
      { name: "Finger", image: "images/body/finger.png", emoji: "☝️" },
    ],
  },
  {
    id: "clothes",
    name: "Clothes",
    emoji: "👕",
    color: "linear-gradient(145deg, #a18cd1, #fbc2eb)",
    cover: "images/categories/clothes.png",
    items: [
      { name: "Shirt",   image: "images/clothes/shirt.png",   emoji: "👕" },
      { name: "Pants",   image: "images/clothes/pants.png",   emoji: "👖" },
      { name: "Hat",     image: "images/clothes/hat.png",     emoji: "🧢" },
      { name: "Shoes",   image: "images/clothes/shoes.png",   emoji: "👟" },
      { name: "Socks",   image: "images/clothes/socks.png",   emoji: "🧦" },
      { name: "Dress",   image: "images/clothes/dress.png",   emoji: "👗" },
      { name: "Jacket",  image: "images/clothes/jacket.png",  emoji: "🧥" },
      { name: "Scarf",   image: "images/clothes/scarf.png",   emoji: "🧣" },
      { name: "Gloves",  image: "images/clothes/gloves.png",  emoji: "🧤" },
      { name: "Skirt",   image: "images/clothes/skirt.png",   emoji: "👗" },
    ],
  },
];

const CARD_BACKGROUNDS = [
  "linear-gradient(160deg, #ff9a56, #ff6a88)",
  "linear-gradient(160deg, #42b0ff, #7367f0)",
  "linear-gradient(160deg, #3ddc84, #159957)",
  "linear-gradient(160deg, #f7b733, #fc4a1a)",
  "linear-gradient(160deg, #b465da, #ee609c)",
  "linear-gradient(160deg, #00c6fb, #005bea)",
  "linear-gradient(160deg, #f857a6, #ff5858)",
  "linear-gradient(160deg, #56ccf2, #2f80ed)",
];

// ---------- STATE ----------
let soundOn = true;
let currentObserver = null;

// ---------- ELEMENTS ----------
const homeScreen = document.getElementById("home-screen");
const feedScreen = document.getElementById("feed-screen");
const categoriesGrid = document.getElementById("categories-grid");
const feed = document.getElementById("feed");
const feedTitle = document.getElementById("feed-title");
const backBtn = document.getElementById("back-btn");
const soundBtn = document.getElementById("sound-btn");
const swipeHint = document.getElementById("swipe-hint");

// ---------- SPEECH ----------
function speak(text) {
  if (!soundOn || !("speechSynthesis" in window)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "ar-SA";
  u.rate = 0.85;
  u.pitch = 1.1;
  speechSynthesis.speak(u);
}

// ---------- HELPERS ----------
function buildEmojiFallback(item) {
  if (!item.emoji) return "";
  return item.emoji
    .split("\n")
    .map((row) => `<div>${row}</div>`)
    .join("");
}

function buildItemCardContent(item, catId, index, total) {
  const label = itemNameAr(catId, item);
  const bigHtml = item.big ? `<div class="item-big">${item.big}</div>` : "";
  const counterHtml = `<div class="item-counter">${index + 1} / ${total}</div>`;
  const tapHtml = `<div class="tap-tip">${AR.ui.tapToHear}</div>`;
  const nameHtml = `<div class="item-name">${label}</div>`;

  if (item.image) {
    return `
      <img class="item-photo" src="${item.image}" alt="${label}" />
      <div class="item-shade"></div>
      <div class="item-content">
        ${bigHtml}
        ${nameHtml}
      </div>
      ${counterHtml}
      ${tapHtml}
    `;
  }

  const emojiHtml = buildEmojiFallback(item);
  return `
    ${bigHtml}
    <div class="item-emoji">${emojiHtml}</div>
    ${nameHtml}
    ${counterHtml}
    ${tapHtml}
  `;
}

function attachImageFallback(card, item, catId, index, total) {
  const img = card.querySelector(".item-photo");
  if (!img) return;
  const label = itemNameAr(catId, item);

  img.addEventListener("error", () => {
    card.classList.remove("item-card--photo");
    card.style.background = item.bg || CARD_BACKGROUNDS[index % CARD_BACKGROUNDS.length];
    const emojiHtml = buildEmojiFallback(item);
    const bigHtml = item.big ? `<div class="item-big">${item.big}</div>` : "";
    card.innerHTML = `
      ${bigHtml}
      <div class="item-emoji">${emojiHtml}</div>
      <div class="item-name">${label}</div>
      <div class="item-counter">${index + 1} / ${total}</div>
      <div class="tap-tip">${AR.ui.tapToHear}</div>
    `;
  });
}

// ---------- HOME SCREEN ----------
function renderHome() {
  categoriesGrid.innerHTML = "";
  CATEGORIES.forEach((cat, i) => {
    const card = document.createElement("button");
    card.className = "category-card";
    card.style.background = cat.color;
    card.style.animationDelay = `${i * 0.06}s`;

    if (cat.cover) {
      card.classList.add("category-card--cover");
      card.style.setProperty("--cat-cover", `url('${cat.cover}')`);
    }

    card.innerHTML = `
      ${cat.cover ? "" : `<span class="cat-emoji">${cat.emoji}</span>`}
      <span class="cat-name">${catNameAr(cat)}</span>
      <span class="cat-count">${AR.ui.items(cat.items.length)}</span>
    `;

    card.addEventListener("click", () => {
      speak(catNameAr(cat));
      openCategory(cat);
    });
    categoriesGrid.appendChild(card);
  });
}

// ---------- FEED SCREEN ----------
function openCategory(cat) {
  feedTitle.textContent = `${cat.emoji} ${catNameAr(cat)}`;
  feed.innerHTML = "";

  cat.items.forEach((item, i) => {
    const card = document.createElement("div");
    card.className = "item-card";
    card.dataset.name = itemNameAr(cat.id, item);

    if (item.image) {
      card.classList.add("item-card--photo");
    } else {
      card.style.background = item.bg || CARD_BACKGROUNDS[i % CARD_BACKGROUNDS.length];
    }

    card.innerHTML = buildItemCardContent(item, cat.id, i, cat.items.length);
    attachImageFallback(card, item, cat.id, i, cat.items.length);

    card.addEventListener("click", () => {
      speak(itemNameAr(cat.id, item));
      card.classList.remove("active");
      void card.offsetWidth;
      card.classList.add("active");
    });

    feed.appendChild(card);
  });

  homeScreen.classList.add("hidden");
  feedScreen.classList.remove("hidden");
  feed.scrollTop = 0;
  swipeHint.classList.remove("faded");

  watchActiveCard();
}

function watchActiveCard() {
  if (currentObserver) currentObserver.disconnect();

  let firstLoad = true;
  currentObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          speak(entry.target.dataset.name);
          if (!firstLoad) swipeHint.classList.add("faded");
          firstLoad = false;
        } else {
          entry.target.classList.remove("active");
        }
      });
    },
    { root: feed, threshold: 0.6 }
  );

  feed.querySelectorAll(".item-card").forEach((c) => currentObserver.observe(c));
}

// ---------- NAVIGATION & CONTROLS ----------
backBtn.addEventListener("click", () => {
  speechSynthesis.cancel();
  if (currentObserver) currentObserver.disconnect();
  feedScreen.classList.add("hidden");
  homeScreen.classList.remove("hidden");
});

soundBtn.addEventListener("click", () => {
  soundOn = !soundOn;
  soundBtn.textContent = soundOn ? "🔊" : "🔇";
  if (!soundOn) speechSynthesis.cancel();
});

document.addEventListener("keydown", (e) => {
  if (feedScreen.classList.contains("hidden")) return;
  const h = feed.clientHeight;
  if (e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") {
    e.preventDefault();
    feed.scrollBy({ top: h, behavior: "smooth" });
  } else if (e.key === "ArrowUp" || e.key === "PageUp") {
    e.preventDefault();
    feed.scrollBy({ top: -h, behavior: "smooth" });
  } else if (e.key === "Escape") {
    backBtn.click();
  }
});

renderHome();
