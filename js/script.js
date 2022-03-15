const url ="http://localhost:3000/users"


// fetch(url)
// .then((res)=>{return res.json() })
// .then((data)=>{console.log(data)})
// .catch((error)=>{console.log(error)})


async function getAllUser(){

 const response=  await  fetch(url)
 const data = await response.json()
 console.log(data);

}
// Get only one user
getAllUser()

async function getUser (userId){

    const response = await  fetch(`${url}/${userId}`)
    const data = await response.json()
    console.log(data);
 
}

getUser(1)
getUser(2)

// Creating a user
let user ={
    firstName:"star",
    lastName:"Emak",
    email:"star@gmail.com",
    gender:"male",
}

async function creatUser(userInfo){

 const response = await fetch(url, {
     method:"POST",
     body: JSON.stringify(userInfo),
     headers:{
         "content-Type":"application/json"
     }
 })

 const data = await response.json()
 console.log(data);
    
}

creatUser(user)


let userUp={
    gender:"female",
}

async function UpdateUser(userInfo, userId){

    const response = await fetch(`${url}/${userId}`, {
        method:"PATCH",
        body: JSON.stringify(userInfo),
        headers:{
            "content-Type":"application/json"
        }
    })
   
    const data = await response.json()
    console.log(data);
       
   }

   UpdateUser(userUp,2)
   UpdateUser(userUp,81)

   async function DeleteUser( userId){
    const response = await fetch(`${url}/${userId}`, {
        method:"DELETE",
        headers:{
            "content-Type":"application/json"
        }
    })
   

       
   }



  