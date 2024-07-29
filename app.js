document.addEventListener("DOMContentLoaded", (event) => {
    
    // declaracion de variables
    let gold = 50;
    let health = 100;
    let xp = 0;
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
    btn1 = document.querySelector('#button1');
    btn2 = document.querySelector('#button2');
    btn3 = document.querySelector('#button3');

    loadEventListener();
    function loadEventListener(){
        controls.addEventListener('click', event => {    
            const buttonId = event.target.getAttribute("id");
            updateLocation(buttonId);
        })
    }

    function updateLocation(buttonId){

        if(buttonId === 'button1'){
            btn1.textContent = location[1]["button text"][0];
            btn2.textContent = location[1]["button text"][1];
            btn3.textContent = location[1]["button text"][2];

            btn1.onClick = buyHealth();
            btn2.onClick = buyHealth();
            btn3.onClick = buyHealth();
        } else if(buttonId === 'button2'){
            
        } else if(buttonId === 'button3'){

        }
    }

    function goStore(){

    }

    function goCave(){

    }

    function fightDragon(){

    }

    function buyHealth(){
        console.log('Desde buyHealth')
    }

    function buyWeapon(){

    }

    function goTown(){

    }
});

