const answers = [];
let questionIndex = 0;

const questions = [
    {
        text: "Q1. 이 향기가 떠오르게 하는 장소는 어디인가요?",
        options: ["A. 푸른 숲", "B. 햇빛 가득한 해변"]
    },
    {
        text: "Q2. 당신은/그 사람은 어떤 분위기의 사람인가요?",
        options: ["A. 차분한", "B. 활기찬"]
    },
    {
        text: "Q3. 이 향기가 표현하는 사람의 나이대와 스타일을 선택해주세요.",
        options: ["A. 청소년/캐주얼", "B. 20대/트렌디"]
    },
    {
        text: "Q4. 이 향기가 떠오르게 하는 계절은 언제인가요?",
        options: ["A. 봄", "B. 여름"]
    },
    {
        text: "Q5. 이 향기의 날씨는 어떤 모습인가요?",
        options: ["A. 맑은 날", "B. 비 오는 날"]
    },
    {
        text: "Q6. 이 향기를 가장 잘 표현하는 시간대는 언제인가요?",
        options: ["A. 아침", "B. 점심"]
    }
];

function loadQuestion() {
    // 현재 질문 표시
    const questionElement = document.getElementById("question-text");
    const optionsContainer = document.querySelector(".options");
    const submitButton = document.getElementById("submit-button");

    // 마지막 질문 후에만 '답변 제출하기' 버튼 표시
    if (questionIndex >= questions.length) {
        questionElement.textContent = "답변을 모두 완료했습니다!";
        optionsContainer.style.display = "none";
        submitButton.classList.remove("hidden");
    } else {
        const currentQuestion = questions[questionIndex];
        questionElement.textContent = currentQuestion.text;

        // 기존 버튼 초기화 후 새 버튼 추가
        optionsContainer.innerHTML = "";
        currentQuestion.options.forEach((option, idx) => {
            const button = document.createElement("button");
            button.textContent = option;
            button.className = "option-btn";
            button.onclick = () => selectOption(option);
            optionsContainer.appendChild(button);
        });

        // '답변 제출하기' 버튼 숨김
        submitButton.classList.add("hidden");
    }
}

function selectOption(answer) {
    answers.push(answer);
    questionIndex++;
    loadQuestion();
}

function submitAnswers() {
    console.log("최종 답변: ", answers);
    alert("답변이 제출되었습니다: " + answers.join(", "));
}

window.onload = loadQuestion;
