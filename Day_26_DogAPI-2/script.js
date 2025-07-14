let breedAPI = 'https://dog.ceo/api/breeds/list/all';
let dogImg = document.getElementById('dogImg');
let breedList = [];
let breedSelectList = document.getElementById('breedSelect');

const breedsList = async () => {
    try {
        let res = await fetch(breedAPI);
        let data = await res.json();
        breedList = Object.keys(data.message);
        createBreedImg();
    } catch (error) {
        console.log(error.message);

    }

}

const createBreedImg = async () => {
    try {
        breedList.forEach((breed) => {
            let option = document.createElement('option');
            option.value = breed;
            option.innerText = breed;
            breedSelectList.appendChild(option)
        })


    } catch (error) {
        console.log(error.message);

    }
}

breedSelectList.addEventListener('change', async (e) => {
    let breed = e.target.value;

    loadingText.style.display = 'block';
    dogImg.style.display = 'none';

    setTimeout(async () => {
        try {
            let res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
            let data = await res.json();
            dogImg.src = data.message;
            loadingText.style.display = 'none';
            dogImg.style.display = 'block';
        } catch (error) {
            console.log(error.message);

        }
    }, 1000)
})

breedsList();