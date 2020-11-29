const quiz = [
  {
    question:
      "2020年、コロナウィルス感染拡大防止のために緊急事態宣言が出されたのは何月？",
    answers: ["2月", "3月", "4月", "5月"],
    correct: "4月",
  },
  {
    question: "2020年11月現在、フィンランドの首相は次の内誰？",
    answers: [
      "サンナ・マリア",
      "サンナ・マリン",
      "サンタ・マリア",
      "サンタ・クロース",
    ],
    correct: "サンナ・マリン",
  },
  {
    question: "IOC（国際オリンピック委員会）の会長の名前は？",
    answers: ["バッハ", "ラヴェル", "モーツァルト", "ショパン"],
    correct: "バッハ",
  },
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName("button");
const buttonLenguth = $button.length;

const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;

  while (buttonIndex < buttonLenguth) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};

setupQuiz();

const result = () => {
  if (score == quiz.length) {
    window.alert("終了!全問正解おめでとう！");
  } else {
    window.alert("終了!あなたの正解数は" + score + "/" + quizLength + "です！");
  }
};

const clickHandler = (e) => {
  if (e.target.textContent === quiz[quizIndex].correct) {
    window.alert("正解！");
    score++;
  } else {
    window.alert("不正解！");
  }
  quizIndex++;
  if (quizIndex < quizLength) {
    setupQuiz();
  } else {
    result()
  }
};

let handleIndex = 0;
while (handleIndex < buttonLenguth) {
  $button[handleIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handleIndex++;
}
