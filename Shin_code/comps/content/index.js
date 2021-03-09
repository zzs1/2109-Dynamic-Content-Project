function contentUI(text="title"){
    return` 
    <div style='
    width: 100%;
    overflow: hidden;
    margin-left: 400px;
    max-width: 500px;
    animation: 2s slide-right 2s forwards;
    transform:translateX(-100%);'>
    <p>${text}</p>
  </div>
  
  <div><div>`
}