/*
  1. W pliku data.js pod zmienna "pokemons" znajduje się tablica zawierająca dane wielu pokemonów, masz do niej dostęp również w tym pliku. 
  Chciałbym, abyś użył jej do wyświetlenia wszystkich pokemonów w naszym Pokedexie. 
  W tym celu dla każdego z nich możesz stworzyć nowy element drzeewa DOM i umieścić w nim informacje o Pokemonie (możesz zawrzeć tam jego nazwę, zdjęcie, a na kontener w którym się znajduje nadać specjalną klasę zależnie od typu)
*/

// tutaj złapiemy sekcję, do której będziemy dodawać pokemony
const pokemonsContainer = document.querySelector(".pokemons");

function renderPokemons(pokemons) {
  // uzupełnij tutaj
  pokemons.map(pokemon=>{
    var{types, id, name, image} = pokemon
    let el = document.createElement("div")
    el.classList.add("pokemon")
    types.map(type=>{
      el.classList.add(type)
    })
    el.innerHTML=`<div>${id}. ${name}</div>
    <div>${types}</div>
    <div class='image'><img src=${image}></div>
    `
    pokemonsContainer.append(el)
  })
}

// następnie wykonaj uzupełnioną metodę z tablicą pokemons, aby sprawdzić czy wszystko działa
 renderPokemons(pokemons);

/*
  2. Przeglądanie całej listy pokemonów może okazać się trochę uciążliwe. Fajnie byłoby skorzystać z filtrów, które już znajdują sie w pliku html. 
  Napisz ciało funkcji które pozwoli nam na:
  - filtrowanie po typie
  - filtrowanie po nazwie (wpisany fragment zawiera się w nazwie pokemona)
*/

function filterPokemons(pokemons) {
  // uzupełnij tutaj
  // zwróć odfiltrowaną tablicę pokemonów
  //typ
  pokemonsContainer.innerHTML=""
  var form = document.querySelector("form#form-filters")
  var checkboxes = form.querySelectorAll("input")
  var checkbx=[]
  for (let i = 0; i < checkboxes.length; i++) {
    if(checkboxes[i].checked){
      //console.log(checkboxes[i])
      checkbx.push(checkboxes[i].id)
    }
  }
  //console.log(checkbx)
  var newPokemons =[];
  pokemons.map(pokemon=>{
    //console.log(pokemon.types)
    pokemon.types.map(type=>{
      var flag = false
      for (let i = 0; i < checkbx.length; i++) {
        if(!flag){
          if(checkbx[i]==type)
          {
            flag=true
            newPokemons.push(pokemon)
            break;
          }
        }
        
        
      }
    })
  })
  //nazwa
  var nameText = form.querySelector("#pokemon-name")
  var name= nameText.value
  console.log(name)
  if(name==""){
    return newPokemons

  }else{
    //
    newPokemons=[]
    pokemons.map(pokemon=>{
      if(pokemon.name.toUpperCase().includes(name.toUpperCase())){
        newPokemons.push(pokemon)
      }
    })
    return newPokemons

  }
}

const form = document.querySelector("form");

function submitForm(event) {
  event.preventDefault();
  // następnie wykonaj uzupełnioną metodę z tablicą pokemons, aby sprawdzić czy wszystko działa
   renderPokemons(filterPokemons(pokemons));
}

form.addEventListener("submit", submitForm);

/*
  3. Pokedex powinien wyglądać trochę lepiej, niż ten tutaj. W folderze znajdziesz plik style.css, w którym możesz ulepszyć wygląd naszego pokedexa
  Liczymy na Twoją kreatywność 😉
*/
