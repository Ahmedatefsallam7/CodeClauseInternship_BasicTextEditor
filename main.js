const textArea=document.getElementById('textarea');

function f1(e) {
    textArea.style.fontSize=e.value+"px";
}

function f2(e) {
    if (textArea.style.fontWeight === "bold") {
        textArea.style.fontWeight = "normal";
        e.classList.remove('active')
    } else {
        textArea.style.fontWeight = 'bold';
        e.classList.add('active')
    }
}

function f3(e) {
    if (textArea.style.fontStyle === "italic") {
        textArea.style.fontStyle = "normal";
        e.classList.remove('active')
    } else {
        textArea.style.fontStyle ='italic';
        e.classList.add('active')
    }
}

function f4(e){
    if (textArea.style.textDecoration === "underline") {
        textArea.style.textDecoration = "";
        e.classList.remove('active')
    } else {
        textArea.style.textDecoration ='underline';
           e.classList.add('active')
    }
}

function f5(e){
        textArea.style.textAlign='left';
}

function f6(e){
    textArea.style.textAlign='center';
}

function f7(e){
    textArea.style.textAlign='right';
}

function f8(e){
    if(textArea.style.textTransform == 'uppercase'){
        textArea.style.textTransform = 'lowercase';
        e.classList.remove('active');
    }
    else{
        textArea.style.textTransform = 'uppercase';
        e.classList.add('active');
    }
}

function f9(e){
    // textArea.style.fontWeight='normal';
    // textArea.style.textAlign='left';
    // textArea.style.fontStyle='normal';
    // textArea.style.textTransform='capitalize';
    textArea.style="";
    textArea.value="";
}

function f10(e) {
    let value=e.value;
    textArea.style.color=value;
}

window.addEventListener('load',()=>{
    textArea.value='';
})

