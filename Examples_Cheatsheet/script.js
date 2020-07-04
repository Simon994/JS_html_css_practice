


// next steps for improvement: add more explainations of sections; refactor to 
// reduce repetition in display ('none'/'inline');
// add second properties for flex-container and/or flex-item properties, allow mix-and-match of properties

const flexToggle = document.querySelectorAll('#flex-toggle');
const flexContainer = document.querySelector('.flex-container');
let flexToggled = false;

function toggleFlex(){
    let wantedDisplay = this.getAttribute('value');
    flexContainer.style.cssText = `display: ${wantedDisplay}`; //another way to change style: this one allows inclusion of complete css text 
    flexToggled = !flexToggled;
    console.log(flexToggled);
    addPropertyOptions()
}

flexToggle.forEach(element => {
    element.addEventListener('click', toggleFlex);
});


//section for Datalist and getting values from the input
const dataListInput = document.querySelector('input[list=flexbox-properties]');
let inputDataHtml = document.getElementById('flex-css-input');
const addPropertyButton = document.getElementById('container-property');
const propertyRemoveButton = document.getElementById('property-remove');

inputDataHtml.style.display = 'none';
addPropertyButton.style.display = 'none';
propertyRemoveButton.style.display = 'none';

console.log(flexToggled);

function addPropertyOptions(){
        if (flexToggled === true) {
            inputDataHtml.style.display = 'inline';
            addPropertyButton.style.display = 'inline';


                function applyCss(){
                    let cssToApply = inputDataHtml.value;
                    let currentStyle = flexContainer.getAttribute('style');
                    flexContainer.style.cssText = `${currentStyle} ${cssToApply};`;
                    propertyRemoveButton.style.display = 'inline';
                    addPropertyButton.style.display = 'none';

                }

                function removeCss(){
                    flexContainer.style.cssText = 'display: flex';
                    inputDataHtml.value = '';
                    propertyRemoveButton.style.display = 'none';
                    addPropertyButton.style.display = 'inline';
                }

                addPropertyButton.addEventListener('click', applyCss)
                propertyRemoveButton.addEventListener('click', removeCss);

        }

    else {
        //should refactor (repeats section above)
        inputDataHtml.style.display = 'none';
        addPropertyButton.style.display = 'none';
        propertyRemoveButton.style.display = 'none';
    }        

    }

    

