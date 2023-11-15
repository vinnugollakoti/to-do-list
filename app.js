let list = []
document.getElementById("button").addEventListener("click",takinginput)
function takinginput() {
    if (input.value==""){
        alert("Please enter any task")
    }
    else{
        list.push(input.value)
    }
    input.value=""
    first()
}
// for each function syntax array.forEach(function(currentValue, index, arr), thisValue)
function first() {
    document.getElementById("todolist").innerHTML=""
    list.forEach((currentvalue,ind)=>{
        document.getElementById("todolist").innerHTML +="<li>"+currentvalue+"<a onclick='edit("+ind+")'>|   edit</a><a onclick='del("+ind+")'>X | </li>"
    })
}
function edit(ind) {
    second = prompt("edit your todo here :)")
    list.splice(ind,1,second)
    first()
}
function del(ind) {
    list.splice(ind,1)
    first()
}