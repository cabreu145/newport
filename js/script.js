console.log('Its working')

let theme = localStorage.getItem('theme')

if(theme == null){
    setTheme('light')
}else{
    setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')

for (var i=0; themeDots.length > i;i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        console.log('Options clicked:', mode)
        setTheme(mode)
    })
}

function setTheme(mode){
    if(mode == 'light'){
        document.getElementById('theme-style').href = 'css/default.css'
    }

    if(mode == 'dark'){
        document.getElementById('theme-style').href = 'css/dark.css'
    }

    localStorage.setItem('theme', mode)
}

var check=document.querySelector(".check");
check.addEventListener('click',idioma);

function idioma(){
    let id=check.checked;
    if (id==true){
        location.href="../esp.html";
    }else{
        location.href="../index.html";
    }
}

