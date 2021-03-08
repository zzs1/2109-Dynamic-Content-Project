function CardUI(title='question',option1='text1', option2='text2', option3='text3',backtitle="Answer",content="answer paragraphs"){
  return`
  <div style='
  background-color:#6ED1BF;
  max-height:350px;
  max-width:200px;
  border-radius:10px;
  border:5px solid #FFFFFF;
  margin:20px;
  '
  onclick='CardUI.HandleClick(this)'
  >

    <div class="front" style='
    transition: opacity 1s;
    opacity: 1;
    '
    >
      <h3 style='
      color:#FFFFFF;
      text-align:center;
      margin:10px;
      '>
        ${title}
      </h3>

      <div style='
      display:flex;
      flex-direction:column;
      margin:50px 20px;
      
      '>
        <div style='
        display:flex;
        flex-direction:row;
        margin:10px;
        '>
      
          <input name='question'
          type=radio />
            <p style='
            color:#FFEBE4;
            margin:0;
            margin-left:10px;
            '>${option1}
            </p>
        </div>

        <div style='
        display:flex;
        flex-direction:row;
        margin:10px;
        '>

          <input name='question' 
          type=radio />
            <p style='
            color:#FFEBE4;
            margin:0;
            margin-left:10px;
            '>
            ${option2}
            </p>
        </div>

        <div style='
        display:flex;
        flex-direction:row;
        margin:10px;
        '>

          <input name='question' 
          type=radio />
            <p style='
            color:#FFEBE4;
            margin:0;
            margin-left:10px;
            '>
            ${option3}
            </p>
        </div>
      </div>
    </div>

    <div class="back" style='
    display: flex;
    flex-direction:column;
    position: relative;
    justify-content: center;
    align-items: center;
    top: -350px;
    transition: opacity 1s;
    opacity: 0;
    '>
      <h3 style='
      color:#FFEBE4;
      text-align:center;
      margin:10px;
      
      '>
        ${backtitle}
      </h3>
      <p style='
      color:#FFFFFF;
      text-align:center;
      margin:10px;
      '>
      ${content}
      </p>
    </div>
  </div>
`}

//export const Card = CardUI();
CardUI.HandleClick = (el) => {
  el.querySelector(".front").style.opacity= 0;
  el.querySelector(".back").style.opacity = 1;
}