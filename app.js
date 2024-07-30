document.addEventListener("DOMContentLoaded", (event) => {
    
    // declaracion de variables
    let gold = 50;
    let health = 100;
    let xp = 0;
    let btn1 = document.querySelector('#button1');
    let btn2 = document.querySelector('#button2');
    let btn3 = document.querySelector('#button3');
    let goldText = document.querySelector('#goldText');
    let healthText = document.querySelector('#healthText');
    let xpText = document.querySelector('#xpText');
    let text = document.querySelector('#text');
    let background = document.querySelector('#img-container .background-image');
    const inventory = [];
    const location = [
        {
            name: "town square",
            "button text": ["Go to store", "Go to cave", "Fight dragon"],
            "button functions": [goStore, goCave, fightDragon],
            text: "You are in the town square. You see a sign that says \"Store\"."
        },
        {
            name: "store",
            "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
            "button functions": [buyHealth, buyWeapon, goTown],
            text: "You enter the store."
        }
    ];
    const controls = document.querySelector('#controls');

    loadEventListener();
    function loadEventListener(){
        controls.addEventListener('click', event => {    
            const buttonId = event.target.getAttribute("id");
            updateLocation(buttonId);
        })
    }

    
    function updateLocation(buttonId){
        if(buttonId === 'button1'){
            goStore();
        } else if(buttonId === 'button2'){
            
        } else if(buttonId === 'button3'){

        }
    }

    function goStore(){
        background.src = "images/store.jpeg";
        btn1.textContent = location[1]["button text"][0];
        btn2.textContent = location[1]["button text"][1];
        btn3.textContent = location[1]["button text"][2];
        btn1.onclick = location[1]["button functions"][0];
        btn2.onclick = location[1]["button functions"][1];
        btn3.onclick = location[1]["button functions"][2];
    }

    function goCave(){

    }

    function fightDragon(){

    }

    function buyHealth(){
        if(gold >= 10){
            gold -= 10;
            health += 10;
            text.textContent = "You have bought 10+ of health.";
        } else {
            text.textContent = "You don't have enough money to buy more health.";
        }
        healthText.textContent = health;
        goldText.textContent = gold; 
    }

    function buyWeapon(){

    }

    function goTown(){
        background.src = "images/town.jpeg";
        text.textContent = "You are back to town."
        btn1.textContent = location[0]["button text"][0];
        btn2.textContent = location[0]["button text"][1];
        btn3.textContent = location[0]["button text"][2];
    }
});

