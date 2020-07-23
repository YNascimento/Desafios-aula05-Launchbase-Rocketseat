const formDelete = document.getElementById('form-delete')
// console.log(formDelete)

formDelete.addEventListener('submit',function(event){
    const confirmation = confirm("Tem certeza?")
    if(!confirmation){
        event.preventDefault()
    }
})