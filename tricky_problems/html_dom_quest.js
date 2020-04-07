
//returns all paragram elements innerText

const getAllPtagElements = () => {
    let allPtags = document.getElementsByTagName('p');
    return _.map(allPtags, (ptag) => {
        return ptag.innerHTML;
    });
}


//returns all paragraph(p) element's innerText where parent is div
// element element	div p	  -Selects all <p> elements inside <div> elements
// element>element	div > p	  -Selects all <p> elements where the parent is a <div> element

const getAllPtagElements = () => {
    let allPtags = document.querySelectorAll('div>p');
    return _.map(allPtags, (ptag) => {
        return ptag.innerHTML;
    });
}



const getAllPtagElements = () => {
    let allAlternateLIs = document.querySelectorAll('ul li:nth-child(2n+1)');
 _.each(allAlternateLIs, (li) => {
        let spanEl = document.createElement('span');
        spanEl.classList.add('fa' , 'fa-check');
        li.appendChild(spanEl);
    });
    return document.body.innerHTML;
}

/** approach 2
 * 
 * 
 *
 * */ 
const insertElement = () => {
    const all_li = document.getElementsByTagName("li");
    for (let i in all_li) {
        if (i % 2 == 0) {
            let html = all_li[i].innerHTML;
            if (html !== undefined) {
                let span = document.createElement('SPAN');
                span.className = "check fa-check";
                all_li[i].appendChild(span);
            }
        }
    }
    return document.body.innerHTML;
}
 