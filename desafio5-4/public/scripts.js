let currentPage = window.location.pathname
let menuItems = document.querySelectorAll('header .links a')

for (item of menuItems){
    if(currentPage.includes(item.getAttribute('href'))){
        item.classList.add('active')
    }
}

function paginate(selectedPage, totalPages){
    let pages = [], oldPage

    for(let currentPage = 1; currentPage <= totalPages; currentPage++){
        const firstandLastPage = currentPage == 1 || currentPage == totalPages
        const firstandLastPaga2 = currentPage == 2 || currentPage == (totalPages-1)
        
        //intervalo +/- 1 a pag selecionada
        const pageAfterSelected = currentPage <= selectedPage + 1
        const pageBeforeSelected = currentPage >= selectedPage - 1

        //intervalo +/- 2 a pag selecionada
        const pageAfterSelected2 = currentPage <= selectedPage + 2
        const pageBeforeSelected2 = currentPage >= selectedPage - 2

        if(firstandLastPage || firstandLastPaga2 || pageBeforeSelected && pageAfterSelected){
            
            if(oldPage && (currentPage - oldPage >2) ){
                pages.push("...")
            }
            if(oldPage && currentPage - oldPage == 2){
                pages.push(currentPage -1)
            }
            pages.push(currentPage)
            oldPage=currentPage
        }
    }
    return pages
}

function createPagination(pagination){
    const page = +pagination.dataset.page
    const total = +pagination.dataset.total
    const filter = pagination.dataset.filter
    const pages = paginate(page,total)

    let pageEl = ""
    for(let page of pages){
        if(String(page).includes("...")){
            pageEl += `<span>${page}</span>`
        }
        else{
            if(filter){
                pageEl += `<a href=?page=${page}&filter=${filter}>${page}</a>`
            }
            else{
                pageEl += `<a href=?page=${page}>${page}</a>`
            }
        }
    }
    pagination.innerHTML = pageEl
}

let pagination = document.querySelector('.pagination')
if(pagination) createPagination(pagination)