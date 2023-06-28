const array = [
  "<li>  телефонные и онлайн детальные юридические консультации в whatsapp, viber и telegram,\
    Zoom, Discord в хорошем аудио/видео качестве - от 1500 рублей;</li>\
    <li>  составление заявлений, исков, жалоб, иных документов - от 4500 рублей; </li>\
    <li>  помощь в сборе документов по делу - цена по согласованию;</li>\
    <li>  представление интересов в судах общей юрисдикции и в арбитражном суде;</li>\
    <li>  выполнение юридически значимых действий по доверенности из другого города или из другой страны.</li>\
    <li>  участие в судебных заседаниях на время отпуска/болезни штатного юриста организации - от 15000 рублей.</li>",

  `<li>наследство;</li>
    <li>семейные споры;</li>
    <li>споры в сфере ЖКХ;</li>
    <li>взыскание задолженности;</li>
    <li>взыскание ущерба;</li>
    <li>споры о защите прав потребителей;</li>
    <li>сопровождение исполнительного производства;</li>
    <li>регистрация в садовом доме;</li>
    <li>споры о праве собственности;</li>
    <li>договорное право;</li>
    <li>налоговое законодательство;</li>
    <li>споры со страховой компанией и банками;</li>
    <li>другие споры (по запросу) - цены по согласованию на консультации.</li>`,

  `<li>ознакомление с материалами дела в судах Санкт-Петербурга, Ленинградской области и <br>
    &nbsp;&nbsp;&nbsp;&nbsp; отправление их на электронную почту - от 6000 рублей;</li>
   <li>юридическое сопровождение организаций и индивидуальных предпринимателей;</li>
   <li>консультативное и документальное сопровождение дел по всей России.</li>`,
];

let serviceBlock1 = document.querySelector("#service1");
let serviceBlock2 = document.querySelector("#service2");
let serviceBlock3 = document.querySelector("#service3");
let vkl = true; // переключатель для проверки добавить или удалить блок из массива с перечнем
let blockList = ""; //для различий списков чтобы можно было удалить нужный а не первый из списка
let vkl1 = true;
let blockList1 = "";
let vkl2 = true;
let blockList2 = "";

function visibleService(serviceBlock, vkluchatel, array, blockList) {
  serviceBlock.addEventListener("click", function () {
    if (vkluchatel == true) {
      let serviceBlockList = document.createElement("div"); //создаем див для списка
      serviceBlockList.classList.add("service-block__list"); //создаем для класс
      serviceBlockList.innerHTML = `${array}`; //добавляем туда список из массива
      blockList = serviceBlockList; //записываем его в переменную иначе при удалении любого из списка удалится первый созданный
      serviceBlock.append(serviceBlockList); //добавляем созданный див в нужный див
      vkluchatel = false; //меняем переключатель
    } else if (vkluchatel == false) {
      //   let serviceBlockList = document.querySelector(".service-block__list");
      blockList.remove();
      vkluchatel = true;
    }
  });
}

visibleService(serviceBlock1, vkl, array[0], blockList);
visibleService(serviceBlock2, vkl1, array[1], blockList1);
visibleService(serviceBlock3, vkl2, array[2], blockList2);

let header = document.querySelector(".header");
let link = document.querySelectorAll(".link");
let headerCallLink = document.querySelector(".header-call_link");

window.addEventListener("scroll", function () {
  if (this.window.scrollY > 70) {
    header.style.backgroundColor = "rgba(255, 255, 255, 0.897)";
    header.style.color = "black";
    // link.style.color="black";
    link.forEach((elem) => {
      //обязательно ЗАПОМНИ!!!!
      elem.style.color = "black";
    });
    headerCallLink.style.color = "black";
  } else {
    header.style.backgroundColor = "";
    header.style.color = "white";
    link.forEach((elem) => {
      //обязательно ЗАПОМНИ!!!!
      elem.style.color = "white";
    });
    headerCallLink.style.color = "white";
  }
});

//////////////////////////////////////////////анимация навигации через координаты окна
let navMain = document.querySelector("#nav-main");
let navServise = document.querySelector("#nav-servise");
let navContact = document.querySelector("#nav-contact");

let serv = document.querySelector("#serv");
let servScrollY = serv.getBoundingClientRect(); //достаем координаты, метод возвращаем объект

let contact = document.querySelector("#kontact");
let contactScrollY = contact.getBoundingClientRect();

function scrollToNav(tegNav, top) {
  tegNav.addEventListener("click", function () {
    window.scrollTo({
      top: `${top}`,
      behavior: "smooth",
    });
  });
}

scrollToNav(navMain, 0);
scrollToNav(navServise, servScrollY.y);
scrollToNav(navContact, contactScrollY.y);

//смена фото и ссылок к ним

arrFoto = [
  //колличество должно быть кратно 3
  "https://sun9-32.userapi.com/impg/Zo2DctR1fhew9p2xWUvEn9Gxp0TqJLQ2F_5HZg/RQj6WYgQGUE.jpg?size=1080x1080&quality=96&sign=4966062d99e9efcca986f68fc1fdb365&type=album",
  "https://sun9-16.userapi.com/impg/Ht05d4kSm1SxFM2rDnX8VgnL_OlbQHL8vnsrKg/gWngChFmQ3Y.jpg?size=1080x1080&quality=96&sign=7a986198259b49589fbe8363926592d7&type=album",
  "https://sun9-17.userapi.com/impg/o7ybC1TqsD9279yKmyAjVW6Fa9UN6-vEmx8DDA/d98jhGnMFCA.jpg?size=1080x1080&quality=96&sign=9825035548491a61eafa826fb008756b&type=album",
  "https://sun9-14.userapi.com/impg/D8tZOlat5_TUAln-gEaerhwiWwZ9SU53LRQ96Q/6vCmQyeI2fo.jpg?size=1080x1080&quality=96&sign=1e3684d000963b212a9e498c8be8f2e6&type=album",
  "https://sun9-28.userapi.com/impg/JCMW9k9C9U0xKTfPWXKKgHm7vBm9eMnHP4aJ8Q/-J3yuKmcNXI.jpg?size=1080x1080&quality=96&sign=e4c519c7c1b20cd30dfa98e01bd17b81&type=album",
  "https://sun9-32.userapi.com/impg/Wk1gywAkEGmLiT730yF0paMFQmtKLXQdsG9Ffg/VP7-cR2A_oE.jpg?size=1080x1080&quality=96&sign=9d62e365ac50031442b967ea738c0eca&type=album",
  "https://sun9-31.userapi.com/impg/bfc_KKobU-PCiTcM4-kO6TztUodK7EqFLn-VMQ/64s8F3OQcGo.jpg?size=1080x1080&quality=96&sign=d5115f1d7ca69d63be005db067373890&type=album",
  "##",
  "##",
];
console.log(arrFoto.length);

let examplessBtnL = document.querySelector(".exampless-btn");
let examplessBtnR = document.querySelector("#exampless-btnR");
let foto1 = document.querySelector(".foto1");
let foto2 = document.querySelector(".foto2");
let foto3 = document.querySelector(".foto3");

let positionFoto1 = 0;
let positionFoto2 = 1;
let positionFoto3 = 2;

examplessBtnR.addEventListener("click", function (event) {
  if (positionFoto1 < arrFoto.length - 3) {
    positionFoto1 += 3;
    foto1.style.backgroundImage = `url(${arrFoto[positionFoto1]})`;
    linkFoto1.setAttribute("href", `${arrFoto[positionFoto1]}`);
  } else {
    foto1.style.backgroundImage = `url(${arrFoto[positionFoto1]})`;
    linkFoto1.setAttribute("href", `${arrFoto[positionFoto1]}`);
  }
  if (positionFoto2 < arrFoto.length - 3) {
    positionFoto2 += 3;
    foto2.style.backgroundImage = `url(${arrFoto[positionFoto2]})`;
    linkFoto2.setAttribute("href", `${arrFoto[positionFoto2]}`);
  } else {
    foto2.style.backgroundImage = `url(${arrFoto[positionFoto2]})`;
    linkFoto2.setAttribute("href", `${arrFoto[positionFoto2]}`);
  }
  if (positionFoto3 < arrFoto.length - 3) {
    positionFoto3 += 3;
    foto3.style.backgroundImage = `url(${arrFoto[positionFoto3]})`;
    linkFoto3.setAttribute("href", `${arrFoto[positionFoto3]}`);
  } else {
    foto3.style.backgroundImage = `url(${arrFoto[positionFoto3]})`;
    linkFoto3.setAttribute("href", `${arrFoto[positionFoto3]}`);
  }
  if (arrFoto[positionFoto2] == "##" || arrFoto[positionFoto3] == "##") {
    event.preventDefault();
  }
  // console.log("pos1- "+positionFoto1);
  // console.log("pos2- "+positionFoto2);
  // console.log("pos3- "+positionFoto3);
});

examplessBtnL.addEventListener("click", function () {
  if (positionFoto1 != 0) {
    positionFoto1 = Math.abs(positionFoto1 - 3);
    foto1.style.backgroundImage = `url(${arrFoto[positionFoto1]})`;
    linkFoto1.setAttribute("href", `${arrFoto[positionFoto1]}`);
  }
  if (positionFoto2 != 1) {
    positionFoto2 = Math.abs(positionFoto2 - 3);
    foto2.style.backgroundImage = `url(${arrFoto[positionFoto2]})`;
    linkFoto2.setAttribute("href", `${arrFoto[positionFoto2]}`);
  }
  if (positionFoto3 != 2) {
    positionFoto3 = Math.abs(positionFoto3 - 3);
    foto3.style.backgroundImage = `url(${arrFoto[positionFoto3]})`;
    linkFoto3.setAttribute("href", `${arrFoto[positionFoto3]}`);
  }
  // console.log("pos1- "+positionFoto1);
  // console.log("pos2- "+positionFoto2);
  // console.log("pos3- "+positionFoto3);
});

//ссылки на фото примеров работы в суде
let linkFoto1 = document.querySelector("#linkFoto1");
let linkFoto2 = document.querySelector("#linkFoto2");
let linkFoto3 = document.querySelector("#linkFoto3");

linkFoto1.setAttribute(
  "href",
  "https://sun9-32.userapi.com/impg/Zo2DctR1fhew9p2xWUvEn9Gxp0TqJLQ2F_5HZg/RQj6WYgQGUE.jpg?size=1080x1080&quality=96&sign=4966062d99e9efcca986f68fc1fdb365&type=album"
);
linkFoto2.setAttribute(
  "href",
  "https://sun9-16.userapi.com/impg/Ht05d4kSm1SxFM2rDnX8VgnL_OlbQHL8vnsrKg/gWngChFmQ3Y.jpg?size=1080x1080&quality=96&sign=7a986198259b49589fbe8363926592d7&type=album"
);
linkFoto3.setAttribute(
  "href",
  "https://sun9-17.userapi.com/impg/o7ybC1TqsD9279yKmyAjVW6Fa9UN6-vEmx8DDA/d98jhGnMFCA.jpg?size=1080x1080&quality=96&sign=9825035548491a61eafa826fb008756b&type=album"
);

// console.log(linkFoto1);

//пустые ссылки делаем не активными

// linkFoto2.addEventListener("click", function (e) {
//   if (foto2.style.backgroundImage == 'url("##")') {
//     e.preventDefault();
//   }
// });
function linkDefault(linkFoto, foto) {
  linkFoto.addEventListener("click", function (e) {
    if (foto.style.backgroundImage == 'url("##")') {
      e.preventDefault();
      console.log("cath");
    }
  });
}
linkDefault(linkFoto1, foto1);
linkDefault(linkFoto2, foto2);
linkDefault(linkFoto3, foto3);




const mQuery = window.matchMedia('(max-width: 720px)');
function handleMobilePhoneResize (e) {
if (e.matches) { 
    // Выводим сообщение в консоль
    console.log('Media query matched!') 
}
}
mQuery.addListener(handleMobilePhoneResize);