const screenSizeQuery = window.matchMedia('(max-width: 768px)');
const paragraphs = document.querySelectorAll('p.card-text');
const buttons = document.querySelectorAll('.btn');

// p tag ki html remove krne ki js 
const removeCardTextContent = () => {

    paragraphs.forEach((paragraph) => {
        paragraph.innerHTML = '';
    });
};


// btn ka FW change krne ka js 
const buttonFontSize300 = () => {
    buttons.forEach((button) => {
        button.style.fontWeight = '500';
        button.style.width = '100%';
        button.innerHTML = `Click `;
    });
};

// btn ks FW change krne ka js 

// p tag remove krne ka js 
const handleScreenSizeChange = (query) => {
    if (query.matches) {
        removeCardTextContent();
        buttonFontSize300();
    }
    else{
        buttons.forEach = () => {
           button.style.fontWeight = 'normal';   
        } 
    }
};

handleScreenSizeChange(screenSizeQuery); // Run on initial page load

screenSizeQuery.addListener(handleScreenSizeChange); // Listen for screen size changes
//this is the change that Shikhar nigam new had done
