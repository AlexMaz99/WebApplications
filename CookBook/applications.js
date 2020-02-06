const recipes = document.querySelector(".recipes");
const btn = document.querySelector("#dodawaniePrzepisu");
let listofRecipes = document.querySelectorAll(".blok");
let oldNr = -1;
let howManyRecipes = 5;

// ukrywanie formularza przy załadowaniu strony
$(document).ready(function() { 
    $(".formularz").hide(); 
});

// pokazywanie i ukrywanie formularza po naciśnięciu przycisku
$(document).ready(function(){
    var x = document.querySelector(".formularz");
    $("#dodawaniePrzepisu").click(function(){
        if (x.style.display=="none"){
            $(".formularz").show(1000);
        }
        else $(".formularz").hide(1000);
    });
});

// usuwanie przepisu
const listOfButtons = document.querySelectorAll(".btn-remove");
listOfButtons.forEach(btn =>
  btn.addEventListener("click", e => {
    e.stopPropagation();
    recipes.removeChild(btn.parentNode);
  })
);

// funkcja dodająca przepis po wpisaniu danych do formularza
function addRecipe(nazwa, opis, skladniki, url, url2) {
    howManyRecipes+=1;
    let listOfIngredients = skladniki.split(",");
    listOfIngredients = listOfIngredients.map(ing => ing.trim());
    let recipe = document.createElement("div");
    recipe.id="b"+howManyRecipes;

    //przycisk do pokazywania przepisu
    let showBtn = document.createElement("button");
    showBtn.classList.add("showMore");

    let imgDiv = document.createElement("div");
    imgDiv.classList.add("fotos");

    //obraz
    let img = document.createElement("img");
    img.src = url;
    img.classList.add("foto0");
    img.id="f"+howManyRecipes+"0";
    
    //drugi obraz
    let img2 = document.createElement("img");
    img2.src = url2;
    img2.classList.add("foto1");
    img2.id="f"+howManyRecipes+"1";

    //przycisk do usuwania
    let btn = document.createElement("button");
    btn.classList.add("btn-remove");
    btn.innerHTML = "X";
    btn.addEventListener("click", () => {
      recipes.removeChild(recipe);
    });
    
    let div1 = document.createElement("div");

    // h3 - nazwa przepisu
    let h3 = document.createElement("h3");
    h3.innerHTML = nazwa;
    div1.appendChild(h3);

    let div2 = document.createElement("div");
    div2.classList.add("more");
    div2.id = "more"+howManyRecipes;

    // p - opis przepisu
    let p = document.createElement("p");
    p.innerHTML = opis;
    div2.appendChild(p);

    // h4 - składniki
    const h4 = document.createElement("h4");
    h4.innerHTML="Składniki:";
    div2.appendChild(h4);

    // ul - wypunktowane składniki
    const ul = document.createElement("ul");
    listOfIngredients.forEach((ing, index) => {
        const li = document.createElement("li");
        li.innerHTML = ing;
        ul.appendChild(li);
      });
    div2.appendChild(ul);

    div1.appendChild(div2);

    imgDiv.appendChild(img);
    imgDiv.appendChild(img2);
    recipe.classList.add("blok");
    recipe.appendChild(showBtn);
    recipe.appendChild(imgDiv);
    recipe.appendChild(btn);
    recipe.appendChild(div1);
   
    let nr = howManyRecipes;

    // po naciśnięciu na przepis
    showBtn.addEventListener("click", () => {
      if (oldNr!=-1 && oldNr!=nr && document.getElementById('more'+oldNr)!=null &&  document.getElementById('more'+oldNr).style.display=="block"){
        document.getElementById('f'+ oldNr +'0').style.opacity = 1;
        document.getElementById('more'+oldNr).style.display="none";
      }
      oldNr = nr;
      if (img.style.opacity==1)
        img.style.opacity=0;
      else
      img.style.opacity=1;
    
      if (div2.style.display=="none")
        div2.style.display="block";
      else div2.style.display="none";
    });
  

    listofRecipes = [...listofRecipes, recipe];
    recipes.appendChild(recipe);
  }

// zebranie informacji z formularza
const submitBtn = document.querySelector("#submitBtn").addEventListener("click", e => {
    const form = document.getElementById("form");
    const isValidForm = form.checkValidity();

    const opis = document.querySelector("#opis");

    const skladniki = document.querySelector("#skladniki");

    const url = document.querySelector("#url");
    const url2 = document.querySelector("#url2");
    const nazwa = document.querySelector("#nazwa");
    

    if (!isValidForm) return;

    addRecipe(nazwa.value, opis.value, skladniki.value, url.value, url2.value);

    opis.value = "";
    skladniki.value = "";
    url.value = "";
    url2.value = "";
    nazwa.value = "";  
    e.preventDefault()
    hide();
})

// schowanie formularza po wpisaniu przepisu
function hide(){
    $(".formularz").hide(1000);
};

//pokazanie
function showMore(nr){
  if (oldNr!=-1 && oldNr!=nr && document.getElementById('more'+oldNr)!=null && document.getElementById('more'+oldNr).style.display=="block"){
    document.getElementById('f'+ oldNr +'0').style.opacity = 1;
    document.getElementById('more'+oldNr).style.display="none";
  }
  oldNr = nr;
  let blok = document.getElementById('more'+nr);
  let img = document.getElementById('f'+ nr +'0');
  if (img.style.opacity==1)
    img.style.opacity=0;
  else
  img.style.opacity=1;
  
  if (blok.style.display=="none"){
    blok.style.display="block";
    }
  else {blok.style.display="none";
  }
}



