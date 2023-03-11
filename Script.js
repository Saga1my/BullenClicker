let gold = 0;
let goldspeed=1;
let goldLabel = document.querySelector(".gold-label");
let saltpinnebutton = document.querySelector("#saltpinne")
let muffinbutton = document.querySelector("#blåbärsmuffin")
let brödbutton= document.querySelector("#knäckebröd")


function update(){
    goldLabel.innerHTML = gold;
}


function addGold() {
    gold+=goldspeed;
   update()

}

function saltpinne(){
    
    if(gold<50){
        return
    }
    goldspeed++;
    gold-=50;
    update()
}
function blåbärsmuffin(){
    
    if(gold<10000){
        return
    }
    goldspeed*=2;
    gold-=10000;
    update()
}
function knäckebröd(){
    
    if(gold<1000){
        return
    }
    goldspeed+=5;
    gold-=1000;
    update()
}

