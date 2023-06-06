const URL = 'http://localhost:3500/employees/126'

const emploee = {name:"Moshe", 
                gender:"male", 
                salary:20000, 
                department:"QA", 
                birthYear:"1990"}

fetch(URL,{
    method: 'PUT',
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(emploee)
}).then(response => response.json()).then(data => console.log(data));