import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonContainer";
import Display from "./components/display";
function App(){

  return <div className={styles.calculator}>
   <Display/>
   <ButtonsContainer/>
  </div>;
}

export default App;