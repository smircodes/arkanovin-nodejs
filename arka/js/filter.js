function filterList(list, type = "all") {
    let filteredList = [];
    if (type == "all") {
        filteredList = list;
    } else {
        list.forEach((e) => {
            if (e['type'] == type) {
                filteredList.push(e)
            }
        })
    }
    return filteredList;
}


function showCatalog(list, type = "all", page = 1) {
    let filteredList = filterList(list, type)
    let pages = Math.floor(filteredList.length / 10) + 1;
    page = (page > pages) ? 1 : ((page < 1) ? pages : page)
    let i = (page - 1) * 10
    let length = (page == pages) ? filteredList.length : page * 10;
    for (i; i < length; i++) {
        createCatalog(filteredList[i] , list)
    }
    document.querySelector(".catalog-count").innerHTML = ((page - 1) * 10 + 1) + " - " + ((page == pages) ? filteredList.length : page * 10) + " از " + filteredList.length + " نتیجه";
    return page;
}

function createCatalog(catalog , list ){
    let catalogSec = document.querySelector(".catalog");
    let cat = document.createElement("a")
    if(list == project){
        cat.setAttribute("href", "single-project.html")
    }else if(list == blogs){
        cat.setAttribute("href", "single-blog.html")
    }else if(list == products){
        cat.setAttribute("href", "single-product.html")
    }
    else{
        cat.setAttribute("href", "#")
    }
    if (catalog['banner'] == "") {
        cat.setAttribute("class", "text-catalog cat")
        let catTitle = document.createElement("h4");
        catTitle.innerHTML = catalog["title"]
        let catcontent = document.createElement("p");
        catcontent.innerHTML = catalog["content"]

        cat.append(catTitle)
        cat.append(catcontent)
    } else {
        cat.setAttribute("class", "image-catalog cat")


        let catBanner = document.createElement("img");
        catBanner.setAttribute("src", "../media/" + catalog['banner'])
        cat.append(catBanner);
        let catInfo = document.createElement("div");
        catInfo.setAttribute("class", "text-catalog")
        let catTitle = document.createElement("h4");
        catTitle.innerHTML = catalog["title"]
        let catcontent = document.createElement("p");
        catcontent.innerHTML = catalog["content"]

        catInfo.append(catTitle)
        catInfo.append(catcontent)
        
        cat.append(catInfo)
    }
    catalogSec.append(cat)
}
function clearCatalog() {
    let catalog = document.querySelectorAll(".cat");
    catalog.forEach((e) => {
        e.remove()
    });
}

function changePage(i) {
    clearCatalog()
    let p = thispage + i
    thispage = showCatalog(catalogList, filter.value, p)

}