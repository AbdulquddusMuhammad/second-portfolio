const sections = document.querySelectorAll(".section")
const secBtn = document.querySelector(".controls")
const secBtns = document.querySelectorAll(".control")
const allSection = document.querySelector(".main-content")



// function pageTransition() {
//     for(let i = 0; i < secBtns.length; i++) {
//         secBtns[i].addEventListener('click', function() {
//             let currentBtn = document.querySelector(".active-btn");
//             currentBtn.className = currentBtn.className.replace("active-btn", '');
//             this.className += ' active-btn'
//         })
//     }


function ctrlBtnAnimation() {
    secBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            let currentBtn = document.querySelector(".active-btn");
            if (currentBtn) {
                currentBtn.classList.remove("active-btn");
            }
            this.classList.add("active-btn")
        })
    })
}

    // //sections active
    // allSection.addEventListener("click", (e) => {
    //     const id = e.target.dataset.id
    //     if (id) {
    //         //remove selected from the other items
    //         sections.forEach( (section) => {
    //             section.classList.remove('active-sec')
    //             console.log("remove");
    //         })
    //         e.target.classList.add('active-sec')

    //         //hide other sections
    //         sections.forEach((section) => {
    //             section.classList.remove('active-sec');
    //         })

    //         const element = document.getElementById(id)
    //         element.classList.add(`active-sec`)
    //     }
    // })


    // Visible Section
    allSection.addEventListener("click", function (e) {
        const id = e.target.dataset.id
        if (id) {
            // remove other sections and show selected one
            sections.forEach((section) => {
                section.classList.remove("active-sec")
            })
            
            const activeSection = document.getElementById(id)
            if (activeSection) {
                activeSection.classList.add("active-sec")
            }
        }
    })
    

    const themeBtn = document.querySelector(".theme-btn");
    themeBtn.addEventListener("click", () => {
        const element = document.body
        element.classList.toggle("light")
        console.log(element);
    })
// }

// console.log(document.body);


// pageTransition()
ctrlBtnAnimation()