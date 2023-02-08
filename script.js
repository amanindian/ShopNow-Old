// Single Product
const pro = document.getElementsByClassName(`pro`)
document.addEventListener("click", function (event) {
    var clickedElement = event.target;
    if (clickedElement.classList.contains("pro")) {
        for (var i = 0; i < pro.length; i++) {
            if (pro[i] === clickedElement) {
                if (pro[i].getElementsByTagName(`img`)[0].src == null || pro[i].getElementsByTagName(`img`)[0].src == undefined) {
                    alert("Please Click on image");
                } else {
                    localStorage.src = pro[i].getElementsByTagName(`img`)[0].src
                    localStorage.MainPrice = clickedElement.getElementsByClassName("proprise")[0].innerHTML
                    window.location.href = 'sproduct.html'
                    localStorage.about = clickedElement.getElementsByClassName("about")[0].innerHTML
                }
            }

        }
    } else if (clickedElement.parentElement.classList.contains("pro")) {
        if (clickedElement.src == null || clickedElement.src == undefined) {
            alert("Please Click on image");
        } else {
            window.location.href = 'sproduct.html'
            localStorage.src = clickedElement.src
            localStorage.MainPrice = clickedElement.parentElement.getElementsByClassName("proprise")[0].innerHTML;
            localStorage.about = clickedElement.parentElement.getElementsByClassName("about")[0].innerHTML;
        }
    }
});




// Nav Bar
let opennav = () => {
    openul.style.right = `0px`;
}
let hidenav = () => {
    openul.style.right = `-100%`;
}

let lele = document.querySelectorAll(`li`)
for (let i = 0; i < lele.length; i++) {
    lele[i].onclick = () => {
        openul.style.right = `-100%`;
    }
}




{
    if (localStorage.allblog == null || localStorage.allblog == undefined) {
        localStorage.allblog = ``;
    }
    let ourallblog = document.getElementById(`ourallblog`)
    const ac = document.createElement(`div`)
    ac.innerHTML = localStorage.allblog
    ourallblog.appendChild(ac)


    function BlogSave() {
        let Bimage = document.getElementById('Blog-image');
        let ourallblog = document.getElementById(`ourallblog`)
        localStorage.Btitle = Btitle.value
        localStorage.Bdescription = Bdescription.value
        localStorage.Bimage = URL.createObjectURL(Bimage.files[0])

        localStorage.allblog += `
    <section class="blog-box">
        <div class="blog-img" style="background-image:url(${localStorage.Bimage});"></div>
        <div class="blog-content">
            <div class="blog-title">${localStorage.Btitle}</div>
            <div class="blog-desc">${localStorage.Bdescription}</div>
        </div>
        </section>`
        ac.innerHTML = localStorage.allblog
        ourallblog.appendChild(ac)
    }
}


