var player = 1;
var jgd = new Array(9);
var fim=0;

var jogada = (n,x) => { 
 
    disp = document.querySelector("h2#disp");

    var casa = document.querySelector(`img#i${n}`);
    teste = casa.getAttribute("src");
    if(fim==0){
    if(player%2==1 && teste!="img/xis1.png" && teste!="img/bolinha1.png") {
        casa.setAttribute("src","img/xis1.png");
        jgd[x]=1;  
        disp.innerHTML="Player 2";
    }   
    
    if(player%2==0 && teste!="img/bolinha1.png" && teste!="img/xis1.png"){
        casa.setAttribute("src","img/bolinha1.png");
        jgd[x]=2;
        disp.innerHTML="Player 1";
    }
 
    if(teste!="img/xis1.png" && teste!="img/bolinha1.png"){
        player++;
    }
}
fim = vitoria();
}

var vitoria = () => {
    text = document.querySelector('h1#jogo');

    // LOGICA VITORIA X

    if(jgd[1]==1 && jgd[2]==1 && jgd[3]==1 || jgd[4]==1 && jgd[5]==1 && jgd[6]==1 || jgd[7]==1 && jgd[8]==1 && jgd[9]==1){
        text.innerHTML="VITORIA PLAYER 1"
        return 1;
    }


    if(jgd[1]==1 && jgd[4]==1 && jgd[7]==1 || jgd[2]==1 && jgd[5]==1 && jgd[8]==1 || jgd[3]==1 && jgd[6]==1 && jgd[9]==1 ){
        text.innerHTML="VITORIA PLAYER 1"
        return 1;
    }



    if(jgd[1]==1 && jgd[5]==1 && jgd[9]==1 || jgd[3]==1 && jgd[5]==1 && jgd[7]==1){
        text.innerHTML="VITORIA PLAYER 1"
        return 1;
    }



    //LOGICA VITORIA B

    if(jgd[1]==2 && jgd[2]==2 && jgd[3]==2 || jgd[4]==2 && jgd[5]==2 && jgd[6]==2 || jgd[7]==2 && jgd[8]==2 && jgd[9]==2){
        text.innerHTML="VITORIA PLAYER 2"
        return 1;
    }



    if(jgd[1]==2 && jgd[4]==2 && jgd[7]==2 || jgd[2]==2 && jgd[5]==2 && jgd[8]==2 || jgd[3]==2 && jgd[6]==2 && jgd[9]==2 ){
        text.innerHTML="VITORIA PLAYER 2"
        return 1;
    }



    if(jgd[1]==2 && jgd[5]==2 && jgd[9]==2 || jgd[3]==2 && jgd[5]==2 && jgd[7]==2){
        text.innerHTML="VITORIA PLAYER 2"
        return 1;
    }
    else{
       return 0; 
    }

}