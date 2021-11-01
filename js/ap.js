const header_sectionElem = document.querySelector('#header_section');

addEventListener('scroll', () => {

    const scrollingPosition = scrollY;
    if (scrollingPosition > 90) {
        header_sectionElem.classList.add('header_section_scroling');
    }
    else {
        header_sectionElem.classList.remove('header_section_scroling');
    }
    if (scrollingPosition > 200) {
        const slidebtnElem = document.querySelectorAll('.slidebtn');
        slidebtnElem.forEach((elem) => {
            elem.style.display = "none";
        })
    }
    else {
        const slidebtnElem = document.querySelectorAll('.slidebtn');
        slidebtnElem.forEach((elem) => {
            elem.style.display = "flex";
        })
    }
    console.log(scrollingPosition)

})


/// working on sliders 

const prevElem = document.querySelector('.prev');
const nextElem = document.querySelector('.next');


let index = 1;



function plusslides(n) {
    showslides(index += n);
    // console.log(n);
};



function showslides(indexnumber) {
    const slidesElem = document.querySelectorAll('.slides');
    if (indexnumber > slidesElem.length) {
        index = 1;
    }
    if (indexnumber < 1) {
        index = slidesElem.length;
    }

    slidesElem.forEach((elem) => {
        elem.style.display = 'none';
    })
    slidesElem[index - 1].style.display = 'block';
}

showslides(index);









// prevElem.addEventListener('click', showslides);
// nextElem.addEventListener('click', showslides);




