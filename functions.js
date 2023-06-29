var num = 1; // global variable

const fileNames = ['index', 'technical', 'qualification', 'service'];
function toggleStyleSheet(currentFile){

    const stylesheet = document.getElementById('mainStyleSheet');
    const fileName = stylesheet.getAttribute('href');

       if(fileName === 'css/style-one-' + currentFile + '.css') {
        stylesheet.setAttribute('href', 'css/style-two-' + currentFile + '.css');

        for(const i of fileNames) {
            localStorage.setItem('stylesheet-' + i, 'css/style-two-' + i + '.css');
        }
    }
    else{
        stylesheet.setAttribute('href', 'css/style-one-' + currentFile + '.css');
        for(const i of fileNames) {
            localStorage.setItem('stylesheet-' + i, 'css/style-one-' + i + '.css');
       }
    }
}


function defineStyleSheet(currentFile){
    const style = localStorage.getItem('stylesheet-' + currentFile);
    const stylesheet = document.getElementById('mainStyleSheet');
   
    if(style === null){
        stylesheet.setAttribute('href', 'style-one-' + currentFile + '.css');  
    } 
   else{
    stylesheet.setAttribute('href', style);
   } 
}



