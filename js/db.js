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