window.addEventListener('DOMContentLoaded', ()=>{
    const input = document.getElementById("input-text");
    const word = document.getElementById("word-count");
    const charact = document.getElementById("character-count");
    const uniqueword = document.getElementById("unique-words");

    input.addEventListener('input',()=>{
        const textValue = input.value.trim();
        const words = textValue === '' ? 0 : textValue.split(/\s+/).length;
        const characters = textValue.length;
        const unique = new Set(textValue.match(/\b\w+\b/g)).size;

        word.innerHTML = 'Word count:' + words;

        charact.innerHTML = 'Character count(including spaces): ' + characters;
        
        uniqueword.innerHTML = 'Unique words: ' + unique;
    })
})