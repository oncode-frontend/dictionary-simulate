const $ = document
const getResultElem = $.querySelector('#result')
const getBtnElem = $.querySelector('#search-btn')
const getInputElem = $.querySelector('#inp-word')
const getAudioElem = $.querySelector('#sound')
const getAudioExist = $.querySelector('#audio-exist')

const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"

const playSound = () => {
    if (getAudioElem !== undefined) {
        getAudioElem.play().then(function() {
            // Automatic play
        }).catch(function(err) {
            getAudioExist.innerHTML = "Audio does not exist"
            setTimeout(() => {
                getAudioExist.innerHTML = null
            }, 3000);
        })
    }
}

getBtnElem.addEventListener("click", () => {
    let inputWord = getInputElem.value

    fetch(`${url}${inputWord}`)
        .then(res => res.json())
        .then(data => {
            let mainData = data[0]
            console.log(mainData);
            getResultElem.innerHTML = `
                <div class="word">
                    <h3>${mainData.word}</h3>
                    <button onclick="playSound()">
                        <i class="fas fa-volume-up"></i>
                    </button>
                </div>
                <div class="details">
                    <p>${mainData.meanings[0].partOfSpeech}</p>
                    <p>${mainData.phonetic}</p>
                </div>
                <p class="word-meaning">
                    ${mainData.meanings[0].definitions[0].definition}
                </p>
                <p class="word-example">
                    ${mainData.meanings[0].definitions[0].example || ""}
                </p>
            `
            getAudioElem.setAttribute('src', mainData.phonetics[0].audio )
        })

})