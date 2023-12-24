// TODO================Header Area================>
const headerEl = document.getElementById('header');
const topBtnEl = document.querySelector('.top-btn');
const menuEl = document.querySelector('.hamburgur');
const listItemEl = document.querySelector('.list-item');
headerEl.offsetHeight;
window.pageYOffset;

// * Sticky header add when we scrollY the window:
StickyHeaderAdd();
function StickyHeaderAdd() {
    window.addEventListener('scroll', (e) =>{
        if(window.pageYOffset > 3){
            headerEl.classList.add('sticky-header');
        }
        else{
            headerEl.classList.remove('sticky-header');
        }
       
    });
};
// * add remove box-shadow from top-btn
topBtnEl.addEventListener('click', () =>{
    topBtnEl.classList.add('box-shadow');
    
})

// * toggle class when we tapped the menu icon
menuEl.addEventListener('click', () =>{
    listItemEl.classList.toggle('toggle-list');
    menuEl.classList.add('box-shadow2');
})
// TODO================Header Area End================>

// TODO================Hero Popup Area Start===========>
const playBtnEl = document.querySelector('.play-btn');
const closeBtnEl = document.querySelector('.close-btn');
const playBtn2 = document.querySelector('.play-btn-2');
const popupContainerEl = document.querySelector('.popup-container');

showPopup();
function showPopup() {
    playBtnEl.addEventListener('click', () =>{
        popupContainerEl.style.display = 'flex';
        
    });

    closeBtnEl.addEventListener('click', () =>{
        popupContainerEl.style.display = 'none';
        
    });

    playBtn2.addEventListener('click', () =>{
        popupContainerEl.style.display = 'flex';
    })
};

// TODO================Hero Popup Area End===========>



// TODO================Counter Number Start===========>
const counterEl = document.querySelectorAll('.counter');
let intarvalCounter = 20;

counterEl.forEach((counterNum) => {
    const counter = () => {
        const targetNum = parseInt(counterNum.getAttribute('data-number'));
        const initialNum = parseInt(counterNum.textContent);
        const counterDuration = Math.floor(targetNum / intarvalCounter);
        
        if (initialNum < targetNum) {
            counterNum.textContent = counterDuration + initialNum;
            setTimeout(counter, 10);
        } else {
            counterNum.textContent = targetNum; // Ensure the final value is exactly the targetNum
        }

        // Add a "+" sign after the counter
        counterNum.textContent += "+";
    };

    counter();
});

// TODO================Counter Number End===========>