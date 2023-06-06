const URL = 'http://localhost:3500/employees'

const emploee = {name:"Josef", 
                gender:"male", 
                salary:7000, 
                department:"Development", 
                birthYear:"1990"}

fetch(URL,{
    method: 'POST',
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(emploee)
}).then(response => response.json()).then(data => console.log(data));