
let man = document.getElementById('displayMan')
let woman = document.getElementById('displayWoman')
let kid = document.getElementById('displayKid')


function sumFood(){
    let lista  = document.getElementById(foodChoice);
    let sum = 0;
    for (var i=0; i<lista.length;i++){
        if (lista[i].checked == true)
            sum++;
    }
    consolog.log(sum)
    
}


