const $plus = document.querySelector("#search_plus");

/* $plus.addEventListener("click", function () {
    $plus.textContent = "検索条件の変更　ー"
    
}); */

//詳細検索欄をもう一度クリックしたら、ーから＋に変わるようにする
/* let count = 0;

$plus.addEventListener("click", function () {
    
    count += 1;

    if ((count % 2) == 1) {
        $plus.textContent = "閉じる"
    } else if ((count % 2) == 0) {
        $plus.textContent = "検索条件の変更"
    }
    //console.log(count)
}); */

//早速探してみる
const $search = document.querySelector("#search");
const $hello = document.querySelector("#hello");

//クリックしたら、質問を表示
/*$search.addEventListener("click", function (){
    $search.textContent = $hello;
}); */

/* 画像をクリックすると、画面全体に表示する
new LuminousGallery(document.querySelectorAll(".example_gallery")) */

//今日の日付を表示
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
const date = now.getDate();
const hour = now.getHours();
const min = now.getMinutes();

const nowTime = `${year}/${month + 1}/${date} ${hour}:${min}`;

if (min > 9){
    document.getElementById("today").textContent = nowTime;
} else {
    document.getElementById("today").textContent = `${year}/${month + 1}/${date} ${hour}:${0 + min}`;
}

const $button = document.querySelector(".button");


//質問を表示する
/*const setUpQuestion = () => {
    let questionIndex = 0;

    while (questionIndex < question.length) {
        $button[questionIndex].textContent = "unnko";
        questionIndex += 1;
    }
}
setUpQuestion (); */

// ランダムに画像を出現させる
/* function movieSelect () {
const randomElm = $(".randomMovie");
const randomElmChild = $(randomElm).children();
}; */

/* num = 3; //画像の枚数
r = Math.floor(Math.random()*num);
document.write('<img src="MovieAppImage/houga'+r+'.jpg" />'); */

const $houga = document.getElementById("hougaImage");
const $img = document.getElementById("img_place");

$houga.addEventListener ("click", function(e)  {
    //画像ファイル名を配列で保持
    let hougaList = ['MovieAppImage/houga0.jpg', 'MovieAppImage/houga1.jpg', 'MovieAppImage/houga2.jpg'];

    //ランダムで画像ファイルを取得して表示する
    let selectHouga = Math.floor(Math.random() * hougaList.length);
    //$img.write('<img src="MovieAppImage/houga'+selectHouga+'.jpg" />');
    $img.src = `MovieAppImage/houga${selectHouga}.jpg`;
    }, false );


    //MovieApp2
    const selest = [
        {
            question: "洋画と邦画、どちらが好きですか？",
            answer: ["洋画", "邦画"],
        }, {
            question:"最近の映画と昔の映画、どちらが好きですか？", 
            answer: ["最近の映画", "昔の映画"],
        }, {
            question: "どの映画のジャンルが好きですか？",
            answer: ["アクション", "恋愛", "サスペンス", "SF"],
        }
    ];
    

    const selectLength = select.length;


//ボタンをクリックしたら、次の質問が表示されるようにする
const clickHandler = (e) => {

    questionIndex += 1;
    
    if (questionIndex < questionLength) {
        window.alert("unnko");
    } else {
        window.alert("質問は終わりです");
    }
}