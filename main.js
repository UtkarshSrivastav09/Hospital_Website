let slide = document.querySelectorAll(".patientReview");
let card = document.querySelectorAll(".card");
let closeBtn = document.getElementById("closeBtn");
let connectBtn = document.getElementById("connectBtn");

closeBtn.addEventListener("click", function(){
    document.querySelector(".detail").style.display="none";
});


let count = 0;

slide.forEach(function(slides, index){
    slides.style.left=`${index * 100}%`
})

function myFun(){
    slide.forEach(function(curVal){
        curVal.style.transform=`translateX(-${count * 99}%)`
    })
}

setInterval(function(){
    count++;
    if(count == slide.length){
        count=0;
    }
    myFun();
}, 2000)

card.forEach(function(cards){
    cards.addEventListener("click", function(){
        console.log(cards);

        document.querySelector(".detail").style.display="block";
        document.querySelector(".content").innerHTML = `
        <img src=${cards.firstElementChild.src} alt="">
                <div class="contentText">
                    <h1>Dr. Molisha Khan</h1>
                    <p>Florida International University Miami, FL Bachelor of Science Biological Sciences</p>
                </div>

        `;
    });
});
connectBtn.addEventListener("click", function(){
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    if(email == "" && pass == ""){
        alert("Error.. Blank space cannot be allowed.");
    }else if(email == "shubhsrivastav123@gmail.com" && pass == "123456"){
        alert("Loging Successfully..");
        location.assign("http://google.com");
    }else{
        alert("Invalid details you fill..");
    }
    
})