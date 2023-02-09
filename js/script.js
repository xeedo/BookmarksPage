let navList = document.getElementById("nav")
let linkList = document.getElementById("linkList")
let navItem
let linkItem
let descItem

const navItemList = []
const linkItemList = []

navItemList.push({text: "Category no.1", link: "link_1.html"})
navItemList.push({text: "Category no.2", link: "link_2.html"})

linkItemList.push({text: "Link no. 1", link: "link_1.html", desc: "Short description of link no. 1"})
linkItemList.push({text: "Link no. 2", link: "link_2.html", desc: "Short description of link no. 2"})
linkItemList.push({text: "Link no. 3", link: "link_3.html", desc: "Short description of link no. 3"})
linkItemList.push({text: "Link no. 4", link: "link_4.html", desc: "Short description of link no. 4"})

for (item of navItemList) {
    addLinks(item, navList)
}

for (item of linkItemList) {
    addLinks(item, linkList)
}

function addLinks(element, nList) {
    navItem = document.createElement("li")
    linkItem = document.createElement("a")

    linkItem.innerHTML = element.text
    linkItem.href = element.link
    navItem.appendChild(linkItem)

    if (element.hasOwnProperty("desc")) {
        descItem = document.createElement("p")
        descItem.innerHTML = element.desc
        navItem.appendChild(descItem)
    }
    
    nList.appendChild(navItem)
}
