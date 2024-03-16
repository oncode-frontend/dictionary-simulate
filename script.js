const $ = document
const getResultElem = $.querySelector('#result')
const getBtnElem = $.querySelector('#search-btn')
const getInputElem = $.querySelector('#inp-word')
const getAudioElem = $.querySelector('#sound')


const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"

getBtnElem.addEventListener("click", () => {
    let inputWord = getInputElem.value

    fetch(`${url}${inputWord}`)

    console.log(`${url}${inputWord}`);
})