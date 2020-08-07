var board = [10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160];
const palyer1_Button = document.getElementById('player-1');
const palyer2_Button = document.getElementById('player-2');


class player
{
    constructor(name,position,money)
    {
        this.name=name;
        this.position=position;
        this.money=money;
    }
    rollDice()
    {
        let pos=Math.floor(Math.random()*6)+1;
        console.log(pos);
        this.updatePosition(pos);
    }
    updatePosition(pos)
    {
        this.position+=pos;
        console.log(this.position);
        this.updateMoney();
    }
    updateMoney()
    {
        if(this.position<board.length)
        this.money-=board[this.position];
        else{
            this.position %=15;
            this.money-=board[this.position];
        }
        console.log(player1);
        console.log(player2);
    }

}
let player1 = new player("FACEPrep",0,1000);
let player2 = new player("ProGrad",0,1000);

palyer1_Button.addEventListener('click',function(){
    player1.rollDice();
},false);

palyer2_Button.addEventListener('click',function(){
    player2.rollDice();
},false);

