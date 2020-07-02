


const flexToggle = document.querySelectorAll('#flex-toggle');

function toggleFlex(){
    const flexContainer = document.querySelector('.flex-container');
    let wantedDisplay = this.getAttribute('value');

    //flexContainer.style.display = `${wantedDisplay}`;
    flexContainer.style.cssText = `display: ${wantedDisplay}`; //another way to change style: this one allows inclusion of complete css text 

}

flexToggle.forEach(element => {
    element.addEventListener('click', toggleFlex);
    
});

const dataListInput = document.querySelector('input[list=flexbox-properties]');

let dataListInputHtml = dataListInput.value;
console.log(document.getElementById('flexbox-properties').innerHTML);

// next need to be able to get value out of textbox (which could have either been
// selected from the datalist, or just typed by the user), then when button is clicked
// take that value and apply it as a style.cssText to the flexContainer.