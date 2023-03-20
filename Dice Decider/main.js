function Run(){
    var pic_1 = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".img1").setAttribute("src",`images/dice${pic_1}.png`);

    var pic_2 = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".img2").setAttribute("src",`images/dice${pic_2}.png`);

    if(pic_1 > pic_2){
        document.getElementById("heading").textContent = "⭐ Player 1 Wins"
    }
    else if(pic_2 > pic_1){
        document.getElementById("heading").textContent = "⭐ Player 2 Wins"
    }
    else{
        document.getElementById("heading").textContent = "🤦‍♂️ Match Draw 🤦‍♂️"
    }
}