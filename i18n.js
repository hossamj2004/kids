/* Arabic translations */
const AR = {
  ui: {
    title: "عالم تعلم الأطفال",
    subtitle: "اختر شيئاً ممتعاً للتعلم!",
    tapToHear: "👆 اضغط للاستماع",
    swipeUp: "⬆️ اسحب للأعلى",
    items: (n) => `${n} عنصر`,
  },
  categories: {
    animals: "الحيوانات",
    colors: "الألوان",
    numbers: "الأرقام",
    food: "الطعام",
    fruits: "الفواكه",
    vehicles: "المركبات",
    shapes: "الأشكال",
    weather: "الطقس",
    body: "أجزاء الجسم",
    clothes: "الملابس",
  },
  items: {
    animals: {
      Lion: "أسد", Elephant: "فيل", Monkey: "قرد", Giraffe: "زرافة", Dog: "كلب",
      Cat: "قطة", Rabbit: "أرنب", Panda: "باندا", Frog: "ضفدع", Duck: "بطة",
      Turtle: "سلحفاة", Butterfly: "فراشة", Fish: "سمكة", Horse: "حصان", Cow: "بقرة",
      Bear: "دب", Tiger: "نمر", Zebra: "حمار وحشي", Sheep: "خروف", Pig: "خنزير",
      Chicken: "دجاجة", Owl: "بومة", Penguin: "بطريق", Snake: "ثعبان", Crocodile: "تمساح",
      Fox: "ثعلب", Deer: "غزال", Wolf: "ذئب", Kangaroo: "كنغر", Koala: "كوالا",
      Dolphin: "دولفين", Whale: "حوت", Shark: "قرش", Octopus: "أخطبوط", Crab: "سلطعون",
      Bee: "نحلة", Ladybug: "دعسوقة", Ant: "نملة", Eagle: "نسر", Parrot: "ببغاء",
      Flamingo: "فلامنجو", Peacock: "طاووس", Camel: "جمل", Hippo: "فرس نهر", Rhino: "وحيد القرن",
      Leopard: "فهد", Squirrel: "سنجاب", Mouse: "فأر", Hamster: "هامستر", Goat: "ماعز",
      Llama: "لاما", Seal: "فقمة", Bat: "خفاش", Hedgehog: "قنفذ", Gorilla: "غوريلا",
    },
    colors: {
      Red: "أحمر", Blue: "أزرق", Yellow: "أصفر", Green: "أخضر", Orange: "برتقالي",
      Purple: "بنفسجي", Pink: "وردي", Brown: "بني", Black: "أسود", White: "أبيض",
    },
    numbers: {
      One: "واحد", Two: "اثنان", Three: "ثلاثة", Four: "أربعة", Five: "خمسة",
      Six: "ستة", Seven: "سبعة", Eight: "ثمانية", Nine: "تسعة", Ten: "عشرة",
    },
    food: {
      Pizza: "بيتزا", Burger: "برجر", Bread: "خبز", Cheese: "جبن", Egg: "بيض",
      Rice: "أرز", Pasta: "مكرونة", Sandwich: "سندويتش", "Ice Cream": "آيس كريم",
      Cookie: "بسكويت", Cake: "كعكة", Milk: "حليب",
    },
    fruits: {
      Apple: "تفاحة", Banana: "موزة", Grapes: "عنب", Strawberry: "فراولة", Orange: "برتقالة",
      Watermelon: "بطيخ", Pineapple: "أناناس", Mango: "مانجو", Peach: "خوخ", Cherries: "كرز",
      Kiwi: "كيوي", Lemon: "ليمون",
    },
    vehicles: {
      Car: "سيارة", Bus: "حافلة", "Police Car": "سيارة شرطة", Ambulance: "سيارة إسعاف",
      "Fire Truck": "سيارة إطفاء", Train: "قطار", Airplane: "طائرة", Helicopter: "مروحية",
      Ship: "سفينة", Bicycle: "دراجة", Motorcycle: "دراجة نارية", Rocket: "صاروخ",
    },
    shapes: {
      Circle: "دائرة", Square: "مربع", Triangle: "مثلث", Star: "نجمة", Heart: "قلب",
      Diamond: "معين", Crescent: "هلال", Oval: "بيضاوي",
    },
    weather: {
      Sun: "شمس", Rain: "مطر", Cloudy: "غائم", Snow: "ثلج", Storm: "عاصفة",
      Rainbow: "قوس قزح", Moon: "قمر", Star: "نجمة", Tornado: "إعصار",
    },
    body: {
      Head: "رأس", Hand: "يد", Foot: "قدم", Eye: "عين", Ear: "أذن", Nose: "أنف",
      Mouth: "فم", Arm: "ذراع", Leg: "ساق", Finger: "إصبع",
    },
    clothes: {
      Shirt: "قميص", Pants: "بنطلون", Hat: "قبعة", Shoes: "حذاء", Socks: "جوارب",
      Dress: "فستان", Jacket: "جاكيت", Scarf: "وشاح", Gloves: "قفازات", Skirt: "تنورة",
    },
  },
};

function catNameAr(cat) {
  return AR.categories[cat.id] || cat.name;
}

function itemNameAr(catId, item) {
  return AR.items[catId]?.[item.name] || item.name;
}
