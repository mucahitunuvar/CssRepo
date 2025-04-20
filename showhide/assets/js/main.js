const gosterGizleInput = (inputOverlay,inputPass,inputIcon) =>{
    const overlay = document.getElementById(inputOverlay),
    input = document.getElementById(inputPass),
    iconEye = document.getElementById(inputIcon)

    iconEye.addEventListener("click", () =>{
        if(input.type === 'password'){
            
            //inputa text özelliğini ata
            input.type = 'text'

            // iconu değiştir

            iconEye.classList.add('bx-show')

        }
        else{
            input.type = 'password'

            iconEye.classList.remove('bx-show');
        }

        overlay.classList.toggle('overlay-content');
    })
}



gosterGizleInput('input-overlay','input-password','input-icon');

