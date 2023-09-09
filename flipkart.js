const search=() =>{
    const searchbox=document.getElementById("serach-item").ariaValueMax.toUpperCase();
    const storeitems=document.getElementById("bestofelectronics")
    const product=document.querySelectorAll(".elepics")
    const pname=document.querySelectorAll(".elename")

    for(var i=0;i<pname.length;i++) {
        let match=product[i].querySelectorAll(".elename")
        if (match) {
            let textvalue=match.textContent || match.innerHTML
            if (textvalue.toUpperCase().indexOf(searchbox)>-1) {
                product[i].computedStyleMap.display=""
            } else{
                product[i].style.display="none"
            }
        }
    }
}