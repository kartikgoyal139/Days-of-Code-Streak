const wordsTextarea = document.querySelector(".Word-counter .words");
const countBtn = document.querySelector(".Word-counter .count-btn");
const wordCount = document.querySelector(".Word-counter .Word-count span");
const countWords = () => {
    let words = wordsTextarea.value;
    let wordsTrim = words.replace(/\s+/g, " ").trim ();
    let split = wordsTrim.split(" ");
    let numberOfWords = split.length;
    if(split[0]==""){
        numberOfWords = 0;    }
    wordCount.innerHTML = numberOfWords;
};

countBtn.addEventListener("click", countWords);