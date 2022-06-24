const btn = document.querySelector('#send');
fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(resposta => {
        console.log(resposta)
        btn.onclick =()=>{
            const userDelete = document.querySelector('#userDelete');
            const value = userDelete.value;
                for(var i=0; i < resposta.length; i++){
                    if(value == resposta[i].user){
                        resposta.splice(i,1);
                        alert("Conta deletada com sucesso!")
                    }
                }
        }
    })