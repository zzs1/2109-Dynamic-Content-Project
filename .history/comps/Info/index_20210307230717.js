function InfoUI(id="id",url="https://placekitten.com/300/300",title="h3title",text="paragraphs here"){
  return`<div class="container"
  id="${id}"
  style='
  width:100vw;
  display:flex;
  flex-direction:column;
  text-align:center;
  align-items:center;
 
  '>
    <img style='
    width:150px;
    height:150px;
    'src='${url}' />

      <div class=psbox
      style='
      display:flex;
      flex-direction:column;
      align-items:center;
      margin:20px;
      '>
        <h3 style='
        color:#1BA68F;
        '>
        ${title}
        </h3>
        <p style='
        color:#FFEBE4;
        
        '>
        ${text}
        </p>
      
    <div>
  </div>
  `
  }
  //export const Info = InfoUI();
  function clickedButton(){
    document.getElementById("container").style.display = "none";
  }