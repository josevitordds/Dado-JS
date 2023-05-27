function dado_1() {
    document.getElementById("block-one").style.display = 'none';
    document.getElementById("block-two").style.display = 'flex';
    document.getElementById("block-three").style.display = 'none';
    document.getElementById("pont1").style.display = 'none';
    document.getElementById("pont2").style.display = 'none';
    document.getElementById("pont3").style.display = 'none';
    document.getElementById("pont4").style.display = 'flex';
    document.getElementById("pont5").style.display = 'none';
    document.getElementById("pont6").style.display = 'none';

}
function dado_2() {
    document.getElementById("block-one").style.display = 'none';
    document.getElementById("block-two").style.display = 'flex';
    document.getElementById("block-three").style.display = 'none';
    document.getElementById("pont1").style.display = 'flex';
    document.getElementById("pont2").style.display = 'flex';
    document.getElementById("pont3").style.display = 'flex';
    document.getElementById("pont4").style.display = 'flex';
    document.getElementById("pont5").style.display = 'flex';
    document.getElementById("pont6").style.display = 'flex';


}
function dado_3() {
    document.getElementById("block-one").style.display = 'none';
    document.getElementById("block-two").style.display = 'flex';
    document.getElementById("block-three").style.display = 'flex';
    document.getElementById("pont1").style.display = 'flex';
    document.getElementById("pont2").style.display = 'flex';
    document.getElementById("pont3").style.display = 'none';
    document.getElementById("pont4").style.display = 'flex';
    document.getElementById("pont5").style.display = 'flex';
    document.getElementById("pont6").style.display = 'flex';

}
function dado_4() {
    document.getElementById("block-one").style.display = 'none';
    document.getElementById("block-two").style.display = 'flex';
    document.getElementById("block-three").style.display = 'flex';
    document.getElementById("pont1").style.display = 'none';
    document.getElementById("pont2").style.display = 'none';
    document.getElementById("pont3").style.display = 'flex';
    document.getElementById("pont4").style.display = 'flex';
    document.getElementById("pont5").style.display = 'flex';
    document.getElementById("pont6").style.display = 'flex';
}
function dado_5() {
    document.getElementById("block-one").style.display = 'flex';
    document.getElementById("block-two").style.display = 'flex';
    document.getElementById("block-three").style.display = 'flex';
    document.getElementById("pont1").style.display = 'flex';
    document.getElementById("pont3").style.display = 'none';
    document.getElementById("pont2").style.display = 'flex';
    document.getElementById("pont4").style.display = 'flex';
    document.getElementById("pont5").style.display = 'flex';
    document.getElementById("pont6").style.display = 'flex';

}
function dado_6() {
    document.getElementById("block-one").style.display = 'flex';
    document.getElementById("block-two").style.display = 'flex';
    document.getElementById("block-three").style.display = 'flex';
    document.getElementById("pont1").style.display = 'flex';
    document.getElementById("pont2").style.display = 'flex';
    document.getElementById("pont3").style.display = 'flex';
    document.getElementById("pont4").style.display = 'flex';
    document.getElementById("pont5").style.display = 'flex';
    document.getElementById("pont6").style.display = 'flex';
}
const spanCard = document.querySelector(".card-dado");
const containerLoad = document.querySelector('.container-load')
function random() { 
    containerLoad.style.display='flex';
    setTimeout( ()=>{
        containerLoad.style.display='none';
        let array = [dado_1, dado_2, dado_3, dado_4, dado_5, dado_6]
        let randomIndex = Math.floor(Math.random() * array.length)
        let randomElement = array[randomIndex];
        randomElement()
        console.log(randomElement)
        if(randomElement==dado_1){
            alert('vitor é gay')
        }
    }, 400)
}


/*     let array = [dado_1(), dado_2(), dado_3(), dado_4(), dado_5(), dado_6()]
    let randomIndex = Math.floor(Math.random() * array.length)
    let randomElement = array[randomIndex];
*/