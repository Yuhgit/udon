document.addEventListener("DOMContentLoaded", function () {
  // メニュー生成関数
  function generateMenu(items, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    items.forEach((item) => {
      const menuItem = document.createElement("li");
      menuItem.classList.add("menu-item");

      menuItem.innerHTML = `
        <img src="${item.imgSrc}" width="350" height="350" alt="${item.name}" />
        <p class="name">${item.name}</p>
        <p class="price">${item.price}</p>
      `;

      container.appendChild(menuItem);
    });
  }

  // メニューアイテムデータ
  const menus = [
    {
      items: [
        {
          name: "肉うどん",
          price: "並690円~",
          imgSrc:
            "https://hayashida-seifun.com/img/assets_menu_Udon_NikuUdon.webp",
        },
        {
          name: "肉ぶっかけうどん",
          price: "並690円~",
          imgSrc:
            "https://hayashida-seifun.com/img/assets_menu_Udon_NikuBukkake.webp",
        },
        {
          name: "かけうどん",
          price: "並350円~",
          imgSrc:
            "https://hayashida-seifun.com/img/assets_menu_Udon_KakeUdon.webp",
        },
        {
          name: "カレーうどん",
          price: "並690円~",
          imgSrc:
            "https://hayashida-seifun.com/img/assets_menu_Udon_CurryUdon.webp",
        },
        {
          name: "釜揚うどん",
          price: "並390円~",
          imgSrc:
            "https://hayashida-seifun.com/img/assets_menu_Udon_KamaageUdon.webp",
        },
        {
          name: "わかめうどん",
          price: "並690円~",
          imgSrc:
            "https://hayashida-seifun.com/img/assets_menu_Udon_WakameUdon.webp",
        },
        {
          name: "釜玉うどん",
          price: "並490円~",
          imgSrc:
            "https://hayashida-seifun.com/img/assets_menu_Udon_KamatamaUdon.webp",
        },
        {
          name: "とろろぶっかけうどん",
          price: "並690円~",
          imgSrc:
            "https://hayashida-seifun.com/img/assets_menu_Udon_TororoBukkake.webp",
        },
        {
          name: "温玉ぶっかけうどん",
          price: "並690円~",
          imgSrc:
            "https://hayashida-seifun.com/img/assets_menu_Udon_OntamaBukkake.webp",
        },
        {
          name: "ぶっかけうどん",
          price: "並000円~",
          imgSrc:
            "https://hayashida-seifun.com/img/assets_menu_Udon_BukkakeUdon.webp",
        },
        {
          name: "冷やしうどん",
          price: "並000円~",
          imgSrc:
            "https://hayashida-seifun.com/img/assets_menu_Udon_HiyashiUdon.webp",
        },
        {
          name: "しょうゆうどん",
          price: "並390円~",
          imgSrc:
            "https://hayashida-seifun.com/img/assets_menu_Udon_ShouyuUdon.webp",
        },
        {
          name: "ざるうどん",
          price: "並390円~",
          imgSrc:
            "https://hayashida-seifun.com/img/assets_menu_Udon_ZaruUdon.webp",
        },
      ],
      containerId: "menu-udon",
    },
    {
      items: [
        {
          name: "半熟たまご",
          price: "120円",
          imgSrc:
            "https://hayashida-seifun.com/img/assets_menu_Tempura_HanjukuTamago.webp",
        },
        {
          name: "ササミカツ",
          price: "140円",
          imgSrc:
            "https://hayashida-seifun.com/img/assets_menu_Tempura_Sasamikatsu.webp",
        },
        {
          name: "うずら",
          price: "120円",
          imgSrc:
            "https://hayashida-seifun.com/img/assets_menu_Tempura_Uzura.webp",
        },
        {
          name: "いかげそ",
          price: "180円",
          imgSrc:
            "https://hayashida-seifun.com/img/assets_menu_Tempura_Ikageso.webp",
        },
        {
          name: "コロッケ",
          price: "120円",
          imgSrc:
            "https://hayashida-seifun.com/img/assets_menu_Tempura_Croquette.webp",
        },
        {
          name: "アジフライ",
          price: "160円",
          imgSrc:
            "https://hayashida-seifun.com/img/assets_menu_Tempura_AjiFry.webp",
        },
        {
          name: "かにかま",
          price: "160円",
          imgSrc:
            "https://hayashida-seifun.com/img/assets_menu_Tempura_Kanikama.webp",
        },
        {
          name: "えび天",
          price: "160円",
          imgSrc:
            "https://hayashida-seifun.com/img/assets_menu_Tempura_Ebi.webp",
        },
        {
          name: "ちくわ",
          price: "180円",
          imgSrc:
            "https://hayashida-seifun.com/img/assets_menu_Tempura_Chikuwa.webp",
        },
        {
          name: "れんこん",
          price: "140円",
          imgSrc:
            "https://hayashida-seifun.com/img/assets_menu_Tempura_Renkon.webp",
        },
        {
          name: "高野豆腐",
          price: "140円",
          imgSrc:
            "https://hayashida-seifun.com/img/assets_menu_Tempura_KoyaTofu.webp",
        },
        {
          name: "とり天",
          price: "180円",
          imgSrc:
            "https://hayashida-seifun.com/img/assets_menu_Tempura_ToriTen.webp",
        },
        {
          name: "かぼちゃ",
          price: "140円",
          imgSrc:
            "https://hayashida-seifun.com/img/assets_menu_Tempura_Kabocha.webp",
        },
        {
          name: "さつまいも",
          price: "140円",
          imgSrc:
            "https://hayashida-seifun.com/img/assets_menu_Tempura_Satsumaimo.webp",
        },
      ],
      containerId: "menu-tempura",
    },
    {
      items: [
        {
          name: "⚪︎円おにぎり",
          price: "000円",
          imgSrc:
            "https://hayashida-seifun.com/img/assets_menu_Ricedishes_Onigiri1.webp",
        },
        {
          name: "⚪︎円おにぎり",
          price: "000円",
          imgSrc:
            "https://hayashida-seifun.com/img/assets_menu_Ricedishes_Onigiri2.webp",
        },
        {
          name: "いなり",
          price: "000円",
          imgSrc:
            "https://hayashida-seifun.com/img/assets_menu_Ricedishes_Inari.webp",
        },
        {
          name: "白米",
          price: "000円",
          imgSrc:
            "https://hayashida-seifun.com/img/assets_menu_Ricedishes_Rice.webp",
        },
        {
          name: "カレー",
          price: "000円",
          imgSrc:
            "https://hayashida-seifun.com/img/assets_menu_Ricedishes_Curry.webp",
        },
      ],
      containerId: "menu-gohan",
    },
    {
      items: [
        {
          name: "あげ",
          price: "000円",
          imgSrc: "https://hayashida-seifun.com/img/assets_menu_Side_Age.webp",
        },
        {
          name: "温泉卵",
          price: "000円",
          imgSrc:
            "https://hayashida-seifun.com/img/assets_menu_Side_Onsentamago.webp",
        },
        {
          name: "生卵",
          price: "000円",
          imgSrc:
            "https://hayashida-seifun.com/img/assets_menu_Side_Rawegg.webp",
        },
        {
          name: "わかめ",
          price: "000円",
          imgSrc:
            "https://hayashida-seifun.com/img/assets_menu_Side_Wakame.webp",
        },
        {
          name: "山芋",
          price: "000円",
          imgSrc: "https://hayashida-seifun.com/img/assets_menu_Side_Yam.webp",
        },
        {
          name: "梅干し",
          price: "000円",
          imgSrc: "https://hayashida-seifun.com/img/assets_menu_Side_Ume.webp",
        },
        {
          name: "とろろ昆布",
          price: "000円",
          imgSrc:
            "https://hayashida-seifun.com/img/assets_menu_Side_Tororokombu.webp",
        },
        {
          name: "大根おろし",
          price: "000円",
          imgSrc:
            "https://hayashida-seifun.com/img/assets_menu_Side_Grateddaikon.webp",
        },
      ],
      containerId: "menu-side",
    },
  ];

  // 各メニューを生成
  menus.forEach((menu) => generateMenu(menu.items, menu.containerId));

  //ページ内リンク
  const links = document.querySelectorAll(".scroll-link");

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});
