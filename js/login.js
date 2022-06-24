const btn = document.querySelector('#loginBTN');
fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(resposta =>{
        console.log(resposta)
        btn.onclick =()=>{
            const usuario = document.querySelector('#usuario');
            const user = usuario.value;
            const senha = document.querySelector('#senha');
            const pass = senha.value;
                for(var i=0; i < resposta.length; i++){
                    if(user == resposta[i].user && pass == resposta[i].password){
                        window.location.href = 'https://www.youtube.com/';
                    }

                }
        }
    })

