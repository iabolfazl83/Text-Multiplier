const textInput = document.querySelector(".textInput");
const numberInput = document.querySelector(".numberInput");
const numberError = document.querySelector(".numberError");
const textError = document.querySelector(".textError");
const resultBtn = document.querySelector(".resultBtn");
const copyBtn = document.querySelector(".copyBtn");
const resultEl = document.querySelector(".result");
const copyMessage = document.querySelector(".copyMessage");


function multiText() {
    const textValue = textInput.value;
    const repeatTime = numberInput.value;

    if (textValue.length > 200) {
        numberError.innerHTML = "";
        textError.innerHTML = "too Much text! '1-200'";
        resultBtn.classList.add("animate__hinge", "animate__animated");
        resultBtn.addEventListener("animationend", () => {
            resultBtn.classList.remove("animate__hinge", "animate__animated");
        })
        return;
    } else if (repeatTime.length > 3) {
        textError.innerHTML = "";
        numberError.innerHTML = "too High! '1-999'";
        resultBtn.classList.add("animate__hinge", "animate__animated");
        resultBtn.addEventListener("animationend", () => {
            resultBtn.classList.remove("animate__hinge", "animate__animated");
        })
        return;
    }

    if (!textValue.trim().length) {
        numberError.innerHTML = "";
        resultEl.style.display = "none";
        textError.innerHTML = "Please enter some text*";
        copyBtn.style.display = "none";
        resultBtn.addEventListener("animationend", () => {
            resultBtn.classList.remove("animate__hinge", "animate__animated");
        })
        resultBtn.classList.add("animate__hinge", "animate__animated");
        textInput.focus();
        return;
    } else if (!repeatTime.trim().length || repeatTime !== isNaN) {
        textError.innerHTML = "";
        resultEl.style.display = "none";
        numberError.innerHTML = "Please enter a Number*";
        copyBtn.style.display = "none";
        resultBtn.addEventListener("animationend", () => {
            resultBtn.classList.remove("animate__hinge", "animate__animated");
        })
        resultBtn.classList.add("animate__hinge", "animate__animated");
        numberInput.focus();
    }

    let result = '';
    for (let i = 0; i < repeatTime; i++) {
        result += textValue;
    }

    if (result) {
        textError.innerHTML = "";
        numberError.innerHTML = "";
        resultEl.style.display = "block";
        resultEl.classList.add("animate__heartBeat", "animate__animated");
        resultEl.addEventListener("animationend", () => {
            resultEl.classList.remove("animate__heartBeat", "animate__animated");
        })
        resultEl.innerHTML = result;
        copyBtn.style.display = "inline-block";

        return resultBtn.className = "resultBtn animate__tada animate__animated";
    }

}

function copyToClipboard() {
    resultEl.select();
    resultEl.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(resultEl.value);
    copyMessage.innerHTML = "Copied ✅";
}

textInput.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
        multiText();
    }
})

numberInput.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
        multiText();
    }
})

textInput.addEventListener('click', function () {
    copyMessage.innerHTML = "";
},)

numberInput.addEventListener('click', function () {
    copyMessage.innerHTML = "";
},)

