const masjidImage = 
'https://i.ucoin.net/coin/3/811/3811297-2/pakistan-2-rupees-2006.jpg'

const chandImage = 
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ogNC8HAY-yXJVApBgC0HBW5IJrMYQ15NMw&s"

// agar 0 aya tw masjid 1 aya twe chand 

const img = document.querySelector("#img")
const result = document.querySelector("#result")

// img.src = chandImage


function toss(coin){
    const randomNumber = Math.floor(Math.random() * 2)
    console.log(randomNumber);

    if (coin === "chand" && randomNumber === 1 ||
        coin === "masjid" && randomNumber === 0){
            result.innerHTML = "YOU WON"
         } else {
            result.innerHTML = "YOU LOST"
         }

    if (randomNumber === 0){
        img.src = masjidImage   
    }else {
        img.src = chandImage
    }

result.style.padding = "10px";
}



