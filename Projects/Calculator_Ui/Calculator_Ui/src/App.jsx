import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonContainer";
import Display from "./components/display";


function App(){
  const [calVal,setCalVal] =useState('');
  const onButtonClick = (buttonText) =>{console.log(buttonText);
  if (buttonText==='C'){
    setCalVal('');
  }else if(buttonText === '='){
    const result =eval(calVal);
    setCalVal(result);
  }else{
    const newDisplayValue =calVal+buttonText;
    setCalVal(newDisplayValue);
  }
}

  return <div className={styles.calculator}>
   <Display displayValue ={calVal}/>
   <ButtonsContainer onButtonClick={onButtonClick}/>
  </div>;
}

export default App;