function headerpicUI(id="id",url="https://placekitten.com/300/300",text="icon"){
    return`
    <div id='${id}'
  >
    <div style="border: 1px solid black;">
    <img style='
    width:300px;
    height:300px;
    object-fit:cover;
    display:block;
    margin:0 auto;
    'src='${url}'>
    </div>
    <div style=' background-color: #4CAF50;
    color: white;
    font-size: 16px;
    padding: 16px 32px;'>${text}</div>
    </div>`
}


headerpicUI.HandleClick = (el) => {
  //in the UI's case, el is the div itself
  el.querySelector(".front").style.opacity= 0.4;
  el.querySelector(".mouseover").style.opacity = 1;

  //onclick

}