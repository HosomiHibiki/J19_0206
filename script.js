function goToSelectionScreen() {
    window.location.href = '../html/title.html';
}

const questions = [
    {
        image: "inu.png",
        choices: ["虫歯になった犬", "寝起きの犬", "歯周病の犬", "お腹が空いている犬"],
        correct: "歯周病の犬"
    },
    {
        image: "ai.png",
        choices: ["宇宙服を着た子ども", "AIに取り込まれた人", "サイボーグのマスコットキャラクター", "VRゲームを楽しむ人"],
        correct: "AIに取り込まれた人"
    },
    {
        image: "school.png",
        choices: ["お化けに取り憑かれた学校", "学校に行きたくない生徒", "厳しい労働環境で働く教員", "学校に飼われている人間"],
        correct: "厳しい労働環境で働く教員"
    },
    {
        image: "souri.png",
        choices: ["お父さん", "総理大臣", "会社の上司", "お母さん"],
        correct: "総理大臣"
    },
    {
        image: "yonige.png",
        choices: ["早く家に帰りたい親子", "散歩をする親子", "大遅刻をした親子", "夜逃げをする親子"],
        correct: "夜逃げをする親子"
    },
    {
        image: "zendama.png",
        choices: ["元気な善玉菌", "はしゃぎすぎたタピオカの集い", "スーパーボール三兄弟", "宇宙から来たスマイリーボール"],
        correct: "元気な善玉菌"
    },
    {
        image: "gorira.png",
        choices: [ "ゴリラ探偵","ハードボイルドなゴリラ", "マフィア界のキングコング", "スーツでキメた森のボス"],
        correct: "ハードボイルドなゴリラ"
    },
    {
        image: "makaron.png",
        choices: [ "マカロンのキャラクター","三色だんご三兄弟", "カレーパンマン三兄弟", "おかしな仲間たち"],
        correct: "マカロンのキャラクター"
    },
    {
        image: "youtyu.png",
        choices: ["鹿の幼虫","むらさきキャベツ太郎","未確認生命体","オオムラサキの幼虫"],
        correct: "オオムラサキの幼虫"
    }
];

let currentQuestionIndex = 0; // 最初の問題からスタート

function setNextQuestion() {
    // 問題が最後まで行ったら最初に戻る
    if (currentQuestionIndex >= questions.length) {
        currentQuestionIndex = 0;
    }

    const question = questions[currentQuestionIndex];

    // 画像の説明を表示
    document.getElementById("question-text").textContent = "";
    document.getElementById("quiz-image").src = question.image;
    document.getElementById("quiz-image").alt = question.correct; // アクセシビリティ向上

    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = ""; // 既存の選択肢をクリア

    question.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.classList.add("choice");
        button.onclick = () => checkAnswer(choice, question.correct);
        choicesContainer.appendChild(button);
    });

    document.getElementById("result").textContent = "";
    document.getElementById("next-question").style.display = "none";
}

function checkAnswer(selected, correct) {
    const resultText = document.getElementById("result");
    if (selected === correct) {
        resultText.textContent = "◎正解！";
        resultText.style.color = "green";
    } else {
        resultText.textContent = "×不正解！";
        resultText.style.color = "red";
    }

    document.getElementById("next-question").style.display = "block";
}

// 「次の問題」ボタンが押されたら次へ
document.getElementById("next-question").onclick = () => {
    currentQuestionIndex++; // 次の問題へ
    setNextQuestion();
};

// 初回の問題設定
setNextQuestion();
