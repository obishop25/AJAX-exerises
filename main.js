async function fetchAllBreeds(){
    let response = await fetch('https://dog.ceo/api/breeds/list/all');
    let responseObject = await response.json();
    console.log(responseObject);
    //console.log(breeds);

    let content = dropdownContent(responseObject);
    document.getElementById('drop-down').innerHTML = content;
}

function dropdownContent(responseObject){
    let allBreeds = Object.keys(responseObject.message)
    console.log(allBreeds);
    console.log(allBreeds[0]);

    let dropDown = '<select id="breed-dropdown">';
    for (i=0; i < allBreeds.length; i++){
        dropDown += `<option value="${allBreeds[i]}">
        ${allBreeds[i]}</option>`
    }
    
    dropDown += '</select>';
    return dropDown;

}

async function fetchDoggo(element){
    element.value = "Generating doggo...";

    let dropdownBreed = document.getElementById('breed-dropdown');
    console.log(dropdownBreed);

    if(dropdownBreed == null){
        var response = await fetch('https://dog.ceo/api/breeds/image/random')
    } else {
        selectedbreed = dropdownBreed.selectedOptions[0].value;
        var response = await fetch(
        'https://dog.ceo/api/breed/' + selectedbreed + '/images/random'    
        );
    }

    //let response = await fetch('https://dog.ceo/api/breeds/image/random');
    let responseObject = await response.json();
    console.log(responseObject);
    let content = renderDoggo(responseObject);
    document.getElementById("content").innerHTML = content;
    element.value = "Fetch Doggo..."
    // renderDoggo(responseObject);
    // console.log(JSON.stringify(responseObject));
    // console.log(responseObject.message);
    // console.log(responseObject.status);
}

function renderDoggo(responseObject){
    console.log ("testing")
    return `<img src="${responseObject.message}" style="max-width:300px;"/>`
    
    // let newimage = document.getElementById('content')
    // newimage.innerHTML = "link"
    // "<img 
    // src="https://images.dog.ceo/breeds/mexicanhairless/n02113978_2695.jpg" 
    // alt="" 
    // height="42" 
    // width="42">""

}