document.getElementById('user').addEventListener('submit',(e)=>{
e.preventDefault()
    const u_id = document.getElementById('u_id').value
    if(u_id > 10)
    {
        alert('invalid id ')
        location.reload()
    }
    else{
        getData(u_id)
    }

})
async function getData(id)
{
    try{
    const api = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data =await api.json()
    display(data,id)
    }
    catch(err){
        alert(`cant proceed due to ${err}`)
    }
}
function display(data,id)
{

    console.log(data)
    const todos = data.filter(el => el.userId == id)
 const completed = todos.filter(el => el.completed == true)
 console.log(completed)
 const incomplete =todos.filter(el => el.completed == false)
 console.log(incomplete)
 let result = document.getElementById('output')
 result.innerHTML=`<h3>My Todos</h3>` 
 var comp = document.createElement('div')
 var incomp = document.createElement('div')

  comp.innerHTML = `<h5 class='four columns' style="color:green"><u>COMPLETED</u></h5>`
 incomp.innerHTML = `<h5 class='four columns' style="color:red"><u>INCOMPLETED</u></h5>`
 for(i of completed)
 {
     comp.innerHTML+=`<li class='${i.userId} eight columns'>${i.title}</li>`
 }
 for(i of incomplete)
 {
     incomp.innerHTML+=`<li class='${i.userId} eight columns'>${i.title}</li>`
 }
 result.innerHTML+=`${comp.innerHTML}
 ${incomp.innerHTML}`
 comp.setAttribute('class','ten columns')
 incomp.setAttribute('class','ten columns')
}

