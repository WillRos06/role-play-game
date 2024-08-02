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
    let inventory = ["stick"];
    let weaponcont = 0;
    const location = [
        {
            name: "town square",
            "button text": ["Go to store", "Go to cave", "Fight dragon"],
            "button functions": [goStore, goCave, fightDragon],
            text: "You are in the town square. You see a sign that says \"Store\".",
            img: "images/town.jpeg"
        },
        {
            name: "store",
            "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
            "button functions": [buyHealth, buyWeapon, goTown],
            text: "You enter the store.",
            img: "images/store.jpeg"
        },
        {
            name: "cave",
            "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
            "button functions": [fightSlime, fightBeast, goTown],
            text: "You enter the cave. You see some monsters."
        }
    ];

    const monsters = [
        {
          name: "slime",
          level: 2,
          health: 15
        },
        {
          name: "fanged beast",
          level: 8,
          health: 60
        },
        {
          name: "dragon",
          level: 20,
          health: 300
        }
    ]


    const weapons = ["dagger", "claw hammer", "sword"];
    

    // initialize buttons
    btn1.onclick = goStore;
    btn2.onnclick = goCave;
    btn3.onclick = fightDragon();
   

    
    function updateLocation(location){
        btn1.textContent = location["button text"][0];
        btn2.textContent = location["button text"][1];
        btn3.textContent = location["button text"][2];
        btn1.onclick = location["button functions"][0];
        btn2.onclick = location["button functions"][1];
        btn3.onclick = location["button functions"][2];
        text.textContent = location["text"];
        background.src = location.img;
    }

    function goStore(){ 
        updateLocation(location[1]);
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
        console.log(inventory);
        if(gold >= 30){

            gold -= 30;
            console.log(gold);
            goldText.textContent = gold; 
            inventory = [...inventory, weapons[weaponcont]];
            text.textContent = `you have now a ${weapons[weaponcont]}`;
            weaponcont++;
        } else {
            text.textContent = `you don't have enough money to buy a new weapon.`;
        }
    }

    function goTown(){
        updateLocation(location[0]);
    }

    function fightSlime(){

    }

    function fightBeast(){

    }
});

