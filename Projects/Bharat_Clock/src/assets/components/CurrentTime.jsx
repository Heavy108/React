let CurrentTime =() =>{
  let time =new Date();
  return <p>This is The Current Tiem: {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
};

export  default CurrentTime;

