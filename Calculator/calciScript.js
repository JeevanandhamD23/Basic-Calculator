

function enterMethod (value){
    console.log(document.getElementsByClassName('input')[0].value)
    document.getElementsByClassName('input')[0].value += value
  }
  
  function calculate(){
      let a = document.getElementsByClassName('input')[0].value;
      let b = math.evaluate(a);
      document.getElementsByClassName('input')[0].value = b;
  }
  
  function clearInput(){
    document.getElementsByClassName('input')[0].value = ''
  }
  
  
  
  const calculatorKeyArray = ['1','2','3','4','5','6','7','8','9','0','/','*','-','+','.','Backspace']
  document.onkeyup = function (event){
      console.log( event.key)
      if (event.keyCode === 13) { 
          console.log("Enter"); 
          let x = document.getElementsByClassName("input")[0].value 
          console.log(x); 
          calculate(); 
      } else if(calculatorKeyArray.includes(event.key)){
          enterMethod(event.key)
      }
      else{
          window.alert('Please Enter Valid Input')
      }
  
  }