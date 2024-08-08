// Declare variables
const cards = document.querySelectorAll('.memory-card');
let flipped = false;
let first, second;
let lock=false;


// Declare function
function flipItem() {
    if(lock) return;
  this.classList.toggle('flip');
  
  if (!flipped) {
    flipped = true;
    first = this;
  } else {
    flipped = false;
    second = this;
    checkMatch()
 
  }
}
function checkMatch()
{
    let match =first.dataset.framework === second.dataset.framework;
match?disable():unflip();
}
    
    function disable(){
        first.removeEventListener('click', flipItem);
        second.removeEventListener('click', flipItem);
      }
function unflip()
{
  lock=true;
        setTimeout(() => {
          first.classList.toggle('flip');
          second.classList.toggle('flip');
          lock=false;
        }, 1500);
      
}
(function shuffleRandom()
{
cards.forEach(card=>
{
    let randomCard=Math.floor(Math.random() *12)
    card.style.order=randomCard;
}
)
})();
// Add event listeners
cards.forEach(card => card.addEventListener('click', flipItem));