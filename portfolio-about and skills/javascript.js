function opentab(tabname) {
    let tabLinks = document.getElementsByClassName("tab-links");
    let tabContents = document.getElementsByClassName("tab-contents");

    for(let tabLink of tabLinks){
        tabLink.classList.remove("active-link");
    }
    for(let tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }
    
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
