function slidingUI(bgcolor="#FFFFFF", bodercolor="#FFD4C1", font="#FFAA81",text="title"){
    return`<div style='
    width:300px;
    height:70px;
    border-radius:20px;
    background-color:${bgcolor};
    border:5px solid ${bodercolor};
    
    '>
    <h3 style='
    color:${font};
    text-align:center;
    '>${text}</h3>
    </div>
    `
    }



