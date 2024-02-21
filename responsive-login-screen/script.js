const usuarios = [
    {
        user: "vitor",
        pass: "vitor"
    },
    {
        user: "lucas",
        pass: "lucas"
    },
    {
        user: "cesar",
        pass: "cesar"
    },
]

function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    var validaLogin = false;

    for(let i in usuarios){
        if(login == usuarios[i].user && senha == usuarios[i].pass){
            validaLogin = true;
            break
        }
        else{
            validaLogin = false
        }
    }

    if (validaLogin == true){
        alert('SUCESSO')
        location.href = 'home.html'
    }
    else{
        alert('Usuário e/ou senha incorreto(s)')
    }
    
}

function mudarTema() {
    var fundo = document.getElementById('fundo');

    if (fundo.src.includes('dark-mountain-gd3o1mx0wxezbewk.jpg')) {
        fundo.src = 'assets/lago-di-como-2-wallpaper-preview.jpg';
    } else {
        fundo.src = 'assets/dark-mountain-gd3o1mx0wxezbewk.jpg';
    }
}


