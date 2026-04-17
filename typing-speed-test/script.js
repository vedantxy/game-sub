//DOM Element

const textDisplay = document.querySelector('#textDisplay');
const typingArea = document.querySelector('#typingArea');
const timerDisplay = document.querySelector('#timer');
const wpmDisplay = document.querySelector('#wpm');
const accuracyDisplay = document.querySelector('#accuracy');
const bestWPMDisplay = document.querySelector('#bestWPM');
const startBtn = document.querySelector('#startBtn');
const resetBtn = document.querySelector('#resetBtn');
const btn_1 = document.querySelector('.btn-1');
const btn_2 = document.querySelector('.btn-2');
const btn_3 = document.querySelector('.btn-3');


// Test texts
const testTexts = [
    "The quick brown fox jumps over the lazy dog. Practice makes perfect when learning to type faster.",
    "Technology has revolutionized the way we communicate and work in the modern digital era.",
    "Typing speed is an essential skill for anyone working with computers in today's workplace."
]


// Game state
let currentText = '';
let timeLeft = 60;
let timerInterval = null;
let startTime = null;
let isTestActive = false;
let bestWPM = 0;


function webLoad() {
    onLoad();
    displayContent();
}
function onLoad() {
    var temp = sessionStorage.getItem('previousWpm');
    if (temp != null) {
        bestWPM = parseInt(temp);
    }
    else {
        bestWPM = 0;
    }
}

function displayContent() {
    timerDisplay.textContent = timeLeft;
    bestWPMDisplay.textContent = bestWPM;
}

webLoad();


function endGame() {
    clearInterval(timerInterval);
    startBtn.disabled = false;
    typingArea.disabled = true;      // disable input at end
    startTime = null;                // reset startTime for next test
    // update best WPM if needed
    const finalWPM = parseInt(wpmDisplay.textContent) || 0;
    if (finalWPM > bestWPM) {
        bestWPM = finalWPM;
        sessionStorage.setItem('previousWpm', String(bestWPM));
    }
    timeLeft = 60;
    displayContent();
}

function startGame() {
    startBtn.disabled = true;
    currentText = testTexts[Math.floor(Math.random() * testTexts.length)];
    textDisplay.textContent = currentText;

    typingArea.disabled = false;
    typingArea.value = "";
    typingArea.focus();
    typingArea.setAttribute('placeholder', 'Now you are eligible to write and use the input box');



    // reset stats
    startTime = null;
    wpmDisplay.textContent = 0;
    accuracyDisplay.textContent = 0;
    Highlights(); // show fresh text

    timerInterval = setInterval(function () {
        timeLeft--;
        if (timeLeft <= 0) {
            endGame();
        }
        displayContent();
    }, 1000);


};

  // doosra time add karne ke liye:
    function moreBtn_1() {
        timeLeft = 15;
        displayContent();
    }

    function moreBtn_2() {
        timeLeft = 30;
        displayContent();
    }

    function moreBtn_3() {
        timeLeft = 60;
        displayContent();
    }



function updateStatus() {
    const typed = typingArea.value; // <-- use `typed` here
    // words array (non-empty)
    const words = typed.trim().split(/\s+/).filter(w => w.length > 0);
    // elapsed time in minutes (defensive)
    let elapsedTime = 0;
    if (startTime) {
        elapsedTime = (Date.now() - startTime) / 1000 / 60; // minutes
    }
    const wpm = elapsedTime > 0 ? Math.floor(words.length / elapsedTime) : 0;
    wpmDisplay.textContent = wpm;

    // accuracy calculation
    let currentScore = 0;
    for (let i = 0; i < currentText.length && i < typed.length; i++) {
        if (currentText[i] === typed[i]) {
            currentScore++;
        }
    }
    const accuracy = typed.length > 0 ? Math.floor((currentScore / typed.length) * 100) : 0;
    accuracyDisplay.textContent = accuracy;
}

function Highlights() {
    const typed = typingArea.value;
    let HighlightText = '';

    for (let i = 0; i < currentText.length; i++) {
        if (i < typed.length) {
            if (currentText[i] === typed[i]) {
                HighlightText += `<span class="correct">${currentText[i]}</span>`;
            } else {
                HighlightText += `<span class="incorrect">${currentText[i]}</span>`;
            }
        } else {
            // not typed yet — keep plain (escape if necessary)
            HighlightText += currentText[i];
        }
    }
    textDisplay.innerHTML = HighlightText;
}

function wordType() {
    if (startTime == null) {
        startTime = Date.now();
    }
    updateStatus();
    Highlights();
}




startBtn.addEventListener('click', startGame);

typingArea.addEventListener('input', wordType);

btn_1.addEventListener('click', moreBtn_1);
btn_2.addEventListener('click', moreBtn_2);
btn_3.addEventListener('click', moreBtn_3);