const title = document.querySelector(".title")
const mediaQuery = window.matchMedia('(prefers-color-scheme:dark)');

//Temaya göre yazıyı güncelle
function updateThemeText(isDark){
    title.classList.add('fade');


    setTimeout(() => {
        const text = isDark ? title.dataset.dark : title.dataset.light;
        title.textContent = text;
        title.classList.remove("fade");
    }, 300);
}


//sayfa açıldığında uygula
 updateThemeText(mediaQuery.matches);


 //sistem teması değişirse dinle
 mediaQuery.addEventListener("change", (e)=> {
    updateThemeText(e.matches);
 })