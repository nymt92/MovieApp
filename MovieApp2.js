const $plus = document.querySelector("#search_plus");


//質問を表示する
/*const setUpQuestion = () => {
    let questionIndex = 0;

    while (questionIndex < question.length) {
        $button[questionIndex].textContent = "unnko";
        questionIndex += 1;
    }
}
setUpQuestion (); */

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
    const select = [
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

    const $button = document.querySelector(".button");

    $button[0].textContent = answer[0];


//ボタンをクリックしたら、次の質問が表示されるようにする
const clickHandler = (e) => {

    questionIndex += 1;
    
    if (questionIndex < questionLength) {
        window.alert("unnko");
    } else {
        window.alert("質問は終わりです");
    }
}