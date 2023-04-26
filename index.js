



// Make an axios request that gets the information about the planet Alderaan (use the search query to request it, the how to on the search query is at the bottom of the Getting Started section of the documentation)

// Inside the callback passed to the .then, loop over the residents array returned on the results. It’s full of URLs.

// In the loop, make another get request for each URL in the array.

// You’ll have another .then that has its own callback, inside which you should create an h2 element whose content is the name of the resident that you just requested. Append the h2 to your HTML document.


function GetResidents (){
    const nameForm = document.querySelector('#residentsForm')
    if(!nameForm.textContent){
    axios.get('https://swapi.dev/api/planets/2/')
  .then(function (res) {
    // handle success
    const planet = res.data;

    for(i=0; i<planet.residents.length; i++){
        axios.get(planet.residents[i])
        .then(function(res){
            
           let residentName = document.createElement('h2');
           residentName.textContent = res.data.name
           const nameForm = document.querySelector('#residentsForm')
           nameForm.appendChild(residentName)
        })
    }
        console.log(res);
      })}else{
        let warning =document.createElement('p')
        if(!warning.textContent){
            setTimeout(15000)
        warning.textContent="There are no more residents to add"
        warning.classList.add('pTag')
        nameForm.appendChild(warning)
       console.log(`items already exist`)
       setTimeout(() => {
        warning.remove(warning);
      }, "3000");
        }else{
            return;
        }
      }
}
const getResBtn = document.querySelector('#getResBtn')
getResBtn.addEventListener('click', GetResidents)