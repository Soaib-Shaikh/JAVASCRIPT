const API_URL = 'https://jsonplaceholder.typicode.com/users';
let Users = [];
const search = document.getElementById('search');
let view = document.querySelector('#myTable tbody');
let headings = document.querySelector('#myTable thead');

const getUsers=()=>{
    view.innerHTML = '';
    console.log(Users);

    Users.map((user) =>{            
        const row = document.createElement('tr');
        for(let key in user){      
            console.log(typeof user[key]);
                
            let cell = document.createElement('td');
            cell.textContent = user[key];

            if(typeof user[key] == 'object')
            {
                for(let key2 in user[key])
                {
                    let cell2 = document.createElement('td');
                    cell2.textContent = user[key][key2];
                    row.appendChild(cell2);
                }
            }

            row.appendChild(cell);
        }
        view.appendChild(row);
    })
}


const deleteUser=(id)=>{
    console.log(id);
    
    let newData = Users.filter((user)=>{
        return user.id !== id;
    })
    Users = newData
    getUsers();
}


(()=>{
    console.log(headings);
    fetch(API_URL,{
    method: 'GET',
    })
    .then(response =>{
        return response.json();
        
    })
    .then((users)=>{
        Users = users;
        let user  = Users[0];
        let row = document.createElement('tr');
        for(let key in user){            
            let cell = document.createElement('th');
            cell.textContent = key;
            row.appendChild(cell);
        }
        headings.append(row);
        getUsers();
    })
    .catch((error) =>{
        console.error('Error:', error);
    })
    
})();