var formattedText = document.getElementById('text-output')

updateText = () =>{
    let text = document.getElementById('text-input').value
    formattedText.innerText = text
    alignText()
}

boldText = (elem) =>{
    document.getElementById('text-output').classList.toggle('bold')
    elem.classList.toggle('active')
}

italicText = (elem) =>{
    formattedText.classList.toggle('italic')
    elem.classList.toggle('active')
}

underlineText = (elem) =>{
    // formattedText.classList.toggle('underline')
    // elem.classList.toggle('active')
    `${formattedText.classList.contains('underline') && elem.classList.contains('active')? `${
        formattedText.classList.remove('underline'),
        elem.classList.remove('active')
    }`: `${
        formattedText.classList.add('underline'),
        elem.classList.add('active')
    }`}`
    // if(formattedText.classList.contains('underline') && elem.classList.contains('active')){
    //     formattedText.classList.remove('underline')
    //     elem.classList.remove('active')
    // }else{
    //     formattedText.classList.add('underline')
    //     elem.classList.add('active')
    // }
}

alignText = (elem, alignType) =>{
    `${elem.checked == true? `${
        formattedText.style.textAlign = alignType
    }` : `null`}`
    // if(elem.checked == true){
    //     formattedText.style.textAlign = alignType
    // }
}