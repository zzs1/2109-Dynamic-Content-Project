function IconUI(id="id",url="https://placekitten.com/300/300",text="icon"){
  return`<div style='
  width:100px;
  height:100px;
  background-color:#FFEBE4;
  margin:10px;
  text-align:center;
  '
  id='${id}'
  onmouseover='IconUI.HandleClick(this)'
 
  '>

    <div class="front" style='
    transition: opacity 1s;
    opacity: 1;
    '
    >
      <img style='
      width:70px;
      height:70px;
      object-fit:cover;
      margin:15px;
      box-shadow:0 6px 10px 0 rgba(0, 0, 0, 0.4);
      'src='${url}' />

    </div>

    <div class="mouseover" style='
    display: flex;
    flex-direction:column;
    position: relative;
    justify-content: center;
    align-items: center;
    top: -90px;
    transition: opacity 1s;
    opacity: 0;
    '>
      <p style='
      color:#646464;
      font:21px;
      '>
      ${text}
      </p>
    </div>
  </div>
`}

//export const Icon = IconUI();

IconUI.HandleClick = (el) => {
  //in the UI's case, el is the div itself
  el.querySelector(".front").style.opacity= 0.4;
  el.querySelector(".mouseover").style.opacity = 1;

  //onclick

}


