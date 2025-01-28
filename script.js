const array = ["developpeur", "graphiste", "web design"];
const target = document.getElementById("target");
let wordIndex = 0;
let letterIndex = 0;

const createLetter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);
  letter.textContent = array[wordIndex][letterIndex];
  if(wordIndex==0){
    letter.style.color="green";
  }
  else if(wordIndex==1){
    letter.style.color="red";
  }else{
    letter.style.color="blue";
  }
    setTimeout(()=>{
      letter.remove()
    }, 2000)
  };
  
  const loop = () => {
    
    setTimeout(()=>{
 
      if(wordIndex>=array.length){
        wordIndex=0;
        letterIndex=0;
        loop();
        return

      }
     
        
        if (letterIndex < array[wordIndex].length) {
            createLetter();
            letterIndex++;
            loop();
        }else{
          setTimeout(()=>{
            wordIndex++;
            letterIndex=0;
           loop()
            },2000)
         
        }
    },60)
    
  };
  loop()

