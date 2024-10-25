const sections = document.querySelectorAll(".section")
const secBtns = document.querySelectorAll(".controls")
const secBtn = document.querySelectorAll(".control")
const allSection = document.querySelector(".main-content")



function pageTransition() {
    for(let i = 0; i < secBtn.length; i++) {
        secBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelector(".active-btn");
            currentBtn.className = currentBtn.className.replace("active-btn", '');
            this.className += ' active-btn'
        })
    }

    //sections active
    allSection.addEventListener("click", (e) => {
        const id = e.target.dataset.id
        if (id) {
            //remove selected from the other items
            secBtn.forEach( (btn) => {
                btn.classList.remove('active')
                console.log("remove");
            })
            e.target.classList.add('active')

            //hide other sections
            sections.forEach((section) => {
                section.classList.remove('active');
            })

            const element = document.getElementById(id)
            element.classList.add(`active`)
        }
    })
    

    const themeBtn = document.querySelector(".theme-btn");
    themeBtn.addEventListener("click", () => {
        const element = document.body
        element.classList.toggle("light")
        console.log(element);
    })
}

// console.log(document.body);


pageTransition()
