function fazPost(url, body){
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))
}




function cadastrarUsuario(){
    event.preventDefault()
    let url = "http://localhost:3000/users"
    let name = document.getElementById("name").value
    let user = document.getElementById("user").value
    let email = document.getElementById("email").value
    let tell = document.getElementById("tell").value
    let password = document.getElementById("password").value
    let passwordConfirm = document.getElementById("passwordConfirm").value

    body = {
        "name": name,
        "user": user,
        "email": email,
        "tell": tell,
        "password": password
    }

    fazPost(url, body)
}

/********************************/


    var btnAPI = document.getElementById('procura-btn');
    fetch("http://localhost:3000/carros")
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            btnAPI.onclick = ()=>{
            container.innerHTML = '';  
                for(var i=0 ; i<data.length; i++){   
                    document.getElementById('container').innerHTML +=  
                    "<div class = card>" +
                        "<div class= product-image id = img-8>"+ "</div>" +
                        "<h3>" + data[i].nome + "</h3>" +
                        "<p>" + data[i].desc + "</p>" + 
                        "<a href=/paginas/indisponivel.html class=card-btn>Saiba Mais</a>"
                    "</div>"
                }
            }});



/**************   DELETAR    ******************/


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
                        alert("Usuário deletado com sucesso!")
                    }
                }
        }
    })
