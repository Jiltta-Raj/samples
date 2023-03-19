const paragraphs = [
    "A freelancer or freelance worker, is a term commonly used for a person who is self-employed and is not necessarily committed to a particular employer long-term.",
    "Freelance workers are sometimes represented by a company or a temporary agency that resells freelance labor to clients; others work independently or use professional associations or websites to get work.",
    "While the term 'independent contractor' would be used in a higher register of English to designate the tax and employment classes of this type of worker, the term freelancing is most common in culture and creative industries and this term specifically motions to participation therein.",
    "Fields, professions, and industries where freelancing is predominant include: music, writing, acting, computer programming, web design, graphic design, translating and illustrating, film and video production and other forms of piece work which some cultural theorists consider as central to the cognitive-cultural economy.",
    "The fastest typing speed ever, 216 words per minute, was achieved by Stella Pajunas-Garnand from Chicago in 1946 in one minute on an IBM electric.",
    "As of 2005, writer Barbara Blackburn was the fastest English language typist in the world, according to The Guinness Book of World Records.",
    "Using the Dvorak Simplified Keyboard, she had maintained 150 wpm for 50 minutes, and 170 wpm for shorter periods, with a peak speed of 212 wpm.",
    "Blackburn, who failed her QWERTY typing class in high school, first encountered the Dvorak keyboard in 1938, quickly learned to achieve very high speeds, and occasionally toured giving speed-typing demonstrations during her secretarial career.",
    "She appeared on Late Night with David Letterman on January 24, 1985, but felt that Letterman made a spectacle of her. Blackburn died in April 2008."
];

const typingText = document.querySelector(".typing-text p")
const inpField = document.querySelector(".wrapper .input-field")
const tryAgainBtn = document.querySelector(".content button")
const timeTag = document.querySelector(".time span b")
const mistakeTag = document.querySelector(".mistake span")
const wpmTag = document.querySelector(".wpm span")
const cpmTag = document.querySelector(".cpm span")

let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = mistakes = isTyping = 0;

function loadParagraph() {
    const ranIndex = Math.floor(Math.random() * paragraphs.length);
    typingText.innerHTML = "";
    paragraphs[ranIndex].split("").forEach(char => {
        console.log(char);
        let span = `<span>${char}</span>`
        typingText.innerHTML += span;
    });
    typingText.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown", () => inpField.focus());
    typingText.addEventListener("click", () => inpField.focus());
}

function initTyping() {
    let characters = typingText.querySelectorAll("span");
    let typedChar = inpField.value.split("")[charIndex];
    if (charIndex < characters.length - 1 && timeLeft > 0) {
        if (!isTyping) {
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }
        if (typedChar == null) {
            if (charIndex > 0) {
                charIndex--;
                if (characters[charIndex].classList.contains("incorrect")) {
                    mistakes--;
                }
                characters[charIndex].classList.remove("correct", "incorrect");
            }
        } else {
            if (characters[charIndex].innerText == typedChar) {
                characters[charIndex].classList.add("correct");
            } else {
                mistakes++;
                characters[charIndex].classList.add("incorrect");
            }
            charIndex++;
        }
        characters.forEach(span => span.classList.remove("active"));
        characters[charIndex].classList.add("active");

        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0: wpm;

        wpmTag.innerText = wpm;
        mistakeTag.innerText = mistakes;
        cpmTag.innerText = charIndex - mistakes;
    } else {
        clearInterval(timer);
        inpField.value = "";
    }
}

function initTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timeTag.innerText = timeLeft;
        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
        wpmTag.innerText = wpm;
    } else {
        clearInterval(timer);
    }
}

function resetGame() {
    loadParagraph();
    clearInterval(timer);
    timeLeft = maxTime;
    charIndex = mistakes = isTyping = 0;
    inpField.value = "";
    timeTag.innerText = timeLeft;
    wpmTag.innerText = 0;
    mistakeTag.innerText = 0;
    cpmTag.innerText = 0;
}

loadParagraph();
inpField.addEventListener("input", initTyping);
tryAgainBtn.addEventListener("click", resetGame);