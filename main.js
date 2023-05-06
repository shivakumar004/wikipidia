let searchInputE1 =document.getElementById("searchInput")
let searchResultsE1 =document.getElementById("searchResults")
let spinnerE1 =document.getElementById("spinner")

function createandappendresult(result){
   
    let { title,link,description} =result


    let resultE1 =document.createElement("div")
resultE1.classList.add("result-item")
searchResultsE1.appendChild(resultE1)

let resultext =document.createElement("a")
resultext.textContent=title
resultext.href=link
resultext.target="_blank"
resultext.classList.add("result-title") 
resultE1.appendChild(resultext)

let textbreak =document.createElement("br")
resultE1.appendChild(textbreak)

let linkE1 =document.createElement("a")
linkE1.href=link
linkE1.textContent=link
linkE1.classList.add("result-url")
resultE1.appendChild(linkE1)

let linkbreak =document.createElement("br")
resultE1.appendChild(linkbreak)

let descriptionE1 =document.createElement("p")
descriptionE1.textContent=description
descriptionE1.classList.add("link-description")
resultE1.appendChild(descriptionE1)


}






function displayresult(searchresults){
    spinnerE1.classList.toggle("d-none")
    for ( let result of searchresults){
    createandappendresult(result)
}
}


function searchwikipidia(event){
    if (event.key === "Enter"){
        spinnerE1.classList.toggle("d-none")
         searchResultsE1.textContent=""
        let searchvalue =searchInputE1.value 
        let url="https://apis.ccbp.in/wiki-search?search=" + searchvalue
        let option ={
            method:"GET"
        }
        fetch(url,option)
        .then(function(response){
            return response.json()
        })
        .then(function(jsonData){
            let {search_results} =jsonData
            displayresult(search_results)
        })
    }
}

searchInputE1.addEventListener("keydown",searchwikipidia)