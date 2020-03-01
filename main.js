
const objPeople = [
{
    username: "yani14",
    password: "123"
},
{
    username: "solcaliber",
    password: "cool123"
}

]

function getInfo() {
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    
    for (i = 0; i < objPeople.length; i++) {
        if (username == objPeople.username && password == objPeople[i].password) {
            console.log(username + " is logged in!!!")
        }
    }


}