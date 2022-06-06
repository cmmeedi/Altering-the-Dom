//Here are variables of each HTML element on the HTML page to be able to be accessed within this JS Document
//This is the container containing the title
const title = document.getElementById(`main-heading`);
//here is the ul containing all of the movie names
const movies = document.getElementById(`movies`);
//the li item `Matrix`
const matrix = document.getElementById(`matrix`);
//the li item `Chappie`
const chappie = document.getElementById(`chappie`);
//the li item `Upgrade`
const upgrade = document.getElementById(`upgrade`);
//the li item `District 9`
const district9 = document.getElementById(`district9`);

//These are to test each variable created to see if the element that has been assigned to it is being accessed correctly
console.log(title);
console.log(movies);
console.log(matrix);
console.log(chappie);
console.log(upgrade);
console.log(district9);

console.log(`Above are all the elements in the HTML document but instead of seeing them on the elements page, they are being displayed within the console`)

//This is how you can select the elements by using the ID.

//The elements can also be accessed by class name

const list = document.getElementsByClassName(`list-items`);

//---NOTE began using back ticks instead of single/double quotes.  Using back ticks not only allows for the use of String Template Literals but also prevents any mistakes when adding quotes to a console.log.  

//back to document.getElementByClassName


console.log(list)

console.log(`And now the console is displaying what is called an HTMLCollection(4) the 4 being the number of elements with that class name and also has the indices of each element with this class name`);

//since all these items have the same class name a collection is created containing all these items.  A Collection is a type of linked lists and can be used like an array.  By adding the square brackets and adding a number into it i'm able to pull just 1 of the elements with the class name of `class-items`

console.log(`here i have chosen upgrade`);
console.log(list[2]);

//In addition to ID and Class, elements can be selected by tag name

console.log(`let's select the title of the document by using it's tag`);

//remember to us back tick which is the same key as the Tilde
const titleTag = document.getElementsByTagName(`h1`)

console.log(`Now lets test to see if we selected the correct element`);
console.log(titleTag);

console.log(`and although it's just 1 element it is still placed into an HTMLCollection`);

//jquery makes selecting items super simple and easy and has a sharp learning curve that takes a little time to learn in the beginning.  It's something that should take some precedence while learning how to manipulate the DOM.

console.log(`Now to create an item for the querySelector to choose.  Let's select the div and call it container`);

const container = document.querySelector(`div`);

console.log(container);

console.log(`and there you can see the item within the console of the browser`);

//There is also querySelectorAll which we will use to select all the containers within the HTML document

const allContainers = document.querySelectorAll(`div`);

console.log(allContainers);

console.log(`Rather then getting an HTMLCollection, When using the queryselector to get all the divs, we get a nodeList containing all the elements with that tag name`)

//These are only the different techniques you can use to select elements within an HTML document.  Next is how to use these techniques to manipulate the DOM.

//Here we will begin editing and styling the movie div

console.log(`let's start with the movie title.  We will create another const for it and use querySelctor to choose the #movieHeading`);

const movieTitle = document.querySelector(`#movie-heading`);
const movieDiv = document.querySelector(`#movieDiv`);

//This is one way that the styles of an element can be altered.  Keep in mind that this technique can only be applied to one element at a time and will have to be applied to each element if you want to style several different elements with the same style
movieTitle.style.color = '#fca311';
movieTitle.style.textAlign = 'center';
movieDiv.style.background = `#14213d`;
movieDiv.style.borderRadius = `10%`;
movieDiv.style.boxShadow = `3px 3px 8px #fca311`;

//The same goes for the bands section

const bandTitle = document.querySelector(`#band-heading`);
const bandDiv = document.querySelector(`#bandsDiv`);
//We're going to flip the color scheme for the bands section
bandTitle.style.color = `#14213d`;
bandTitle.style.textAlign = 'center';
bandDiv.style.background = `#fca311`;
bandDiv.style.borderRadius = `10%`;
bandDiv.style.boxShadow = `3px 3px 8px #14213d`;


//Let's create a new const for the movie list and use a for loop to apply a style to each of the elements within the movie list
const movieList = document.querySelectorAll(`.movie-list-items`);


//Let's do the same thing with the bands section
const bandList = document.querySelectorAll(`.band-list-items`);

//Refer back to the loops document if this part doesn't make sense to you.



//Here we create a loop and use the variable of i in place of the position of the array of the movie list items and apply a color to it and remove the bullet from the list-style-type
for(let i = 0; i <= movieList.length - 1; i++){
    movieList[i].style.color = `#fca311`;
    movieList[i].style.listStyleType = 'none';
    movieList[i].style.textAlign = 'center';
    
    //we can use the same loop to do the same thing to the band section to save some code
    //let's flip the color scheme for the bands section though
    bandList[i].style.color = `#14213d`;
    bandList[i].style.listStyleType = `none`;
    bandList[i].style.textAlign = 'center';

}

console.log(`Create a const that query selects the body of the HTML document`)
const bod = document.querySelector(`#bod`);

console.log(`now let's change the background color of the document`)

bod.style.background = `linear-gradient(270deg, #b1b1b1, #000000) no-repeat`;

//It's not only styles that can be added to the HTML document but also HTML elements can be added.

// const foodDiv = document.createElement(`div`)


console.log(`To create another div for favorite foods.`);

console.log(`create a new let and call it foodDiv`)


console.log(`type document. use the createElement extension and within the parenthesis put 'div'`);

console.log(`now lets select the HTML body and we are going to append the div to the body`)

const fluidContainer = document.querySelector(`#fluidContainer`);

// fluidContainer.append(foodDiv);

console.log(`now if you inspect the page and collapse the fluidContainer div you will see an empty div on the bottom.  This will be the Favorite Foods div`);

console.log(`These divs that have been created are somewhat complex and now a new div containing all of that information has to be created via JS.`);

//A new row has to be created so Favorite Movies and Favorite bands won't be squished too much.  Below is an example of what needs to be created via JS.  

console.log(`Comment out the 'fluidContainer.append(foodDiv)' line.  Now that div no longer exists.  Now create a new div with the class of row`)

console.log(`create a new const and call it 'newRow' and assign it a createElement('div')`)

const newRow = document.createElement(`div`);

//Technically we can use the foodDiv const but later on that would create too much confusion and limitations we dont want.  For now let's stick to creating a new Const for each element

console.log(`let's append this element to the fluidContainer to create a new 'row'`);

fluidContainer.append(newRow);

console.log(`and there is a new div at the bottom of fluidContainer.  Now modify it's attributes to make it a row`)

console.log(`now this element needs a specific class name of 'row'.  For that use the Set attribute extension like so`);

newRow.setAttribute(`class`, `row`);

console.log(`and now we have a new row`)

console.log(`write a comment that says check beside the row div below`)
console.log(`next is the container div for favoriteFoods.  The foodDiv is already created above so copy that code from up there using 'CTRL + c' and paste it below this console.log.  Make sure to comment out the foodDiv above otherwise the console will get confused.`)

const foodDiv = document.createElement(`div`)

console.log(`now we to add this to the row div, use the append attribute but instead of fluidContainer.append,  try newRow.append(foodDiv)`);

newRow.append(foodDiv);

console.log(`foodDiv needs an id of 'foodDiv',  use setAttribute(attribute, name)`);

foodDiv.setAttribute(`id`, `foodDiv`);

console.log(`The class needs to be set to match the one movieDiv class below.  use setAttribute again for that`);

foodDiv.setAttribute(`class`, `container px-3 col-5`);

console.log(`now foodDiv has a class similar to that of movieDiv.  Now add the word 'CHECK' beside the movie div comment below`)

console.log(`next is to add the <h1>Favorite Foods</h1> title`)

console.log(`create a const named 'foodH1' and assign it a createElement('h1')`);

const foodH1 = document.createElement(`h1`);

console.log(`now append it to the foodDiv element`)
foodDiv.append(foodH1);

console.log(`to give the H1 text is simple.  use append on foodH1 and simply type in a quote between the parenthesis and it will populate the h1 as text`)

foodH1.append(`Favorite Foods`);

const hr = document.createElement(`hr`);
hr.setAttribute(`id`, `food-hr`);
foodDiv.append(hr);
const foodHr = document.querySelector(`food-hr`);


console.log(`remember the foodH1 needs a class and id.  `);

foodH1.setAttribute(`id`, `food-heading`);
foodH1.setAttribute(`class`, `display-1`);

console.log(`add a check to the movie heading comment below`);

console.log(`now create a <ul></ul> using JS and populate it with Three <li></li> elements.`);

const foodsList = document.createElement(`ul`);
foodDiv.append(foodsList);
foodsList.setAttribute(`id`, `foodList`);

const foodItem1 = document.createElement(`li`);

foodsList.append(foodItem1);
foodItem1.setAttribute(`id`, `pizza`);
foodItem1.setAttribute(`class`, `food-list-items display-3`);
foodItem1.append(`Pizza`);

foodsList.append(foodItem1);




console.log(`now create an array called 'myFavoriteFoods' and populate it with 4 elements`)

const myFavoriteFoods = [
    `Tacos`, 
    `Potatoes`, 
    `Tofu`, 
    `Edamame`
];

//items can be added to the array and they will be output to the webpage due to the loop.  

myFavoriteFoods.push(`Eggs`);
myFavoriteFoods.push(`Cookies`);
myFavoriteFoods.push(`Muffins`);
myFavoriteFoods.push(`Cheese Burger`);

console.log(`create a loop to iterate over each element within the array`);

console.log(`Start with a standard for loop that compares to myFavoriteFoods.length`)

for(let x = 0; x < myFavoriteFoods.length; x++){

    //create a new element each time the loop iterates
    let foodItem1 = document.createElement(`li`);

    //add the item to 'foodsList'
    foodsList.append(foodItem1);
    //using String Template Literals set the id to what the array element is
    foodItem1.setAttribute(`id`, `${myFavoriteFoods[x]}`);
    //Then set the class as the same thing for each iteration
    foodItem1.setAttribute(`class`, `food-list-items display-3`);
    //and append what the element is to the <li></li> as text
    foodItem1.append(`${myFavoriteFoods[x]}`);
}

console.log(`Boom!  Tough actin tinactin!!!`);

console.log(`now mark check to the ul and li's below`)

/* <div id="fluidContainer" class="container-fluid">
        <div class="row m-3">  CHECK
            <div id="movieDiv" class="container px-3 col-5"> CHECK
                <h1 id="movie-heading" class="display-1">Favorite Movies</h1>  CHECK
                    <ul id="movies">  CHECK
                        <li id="matrix" class="movie-list-items display-3">The Matrix</li>  CHECK
                        <li id="chappie" class="movie-list-items display-3">Chappie</li>  CHECK
                        <li id="upgrade" class="movie-list-items display-3">Upgrade</li>  CHECK
                        <li id="district9" class="movie-list-items display-3">  CHECK
                            District 9
                        </li>  CHECK
                    </ul>
            </div> */




console.log(`The entire element has now been created.  Now style it`);


const foodTitle = document.querySelector(`#food-heading`);
const foodsDiv = document.querySelector(`#foodDiv`);

foodTitle.style.color = '#fca311';
foodTitle.style.textAlign = 'center';
foodsDiv.style.background = `#14213d`;
foodsDiv.style.borderRadius = `10%`;
foodsDiv.style.boxShadow = `3px 3px 8px #fca311`;

console.log(`create a const to query select the id of the foodsList`);

const foodList = document.querySelectorAll(`.food-list-items`);

//Here we create a loop and use the variable of i in place of the position of the array of the food list items and apply a color to it and remove the bullet from the list-style-type
for(let i = 0; i <= foodList.length - 1; i++){
    foodList[i].style.color = `#fca311`;
    foodList[i].style.listStyleType = 'none';
    foodList[i].style.textAlign = 'center';
}

console.log(`Now that the foods list is done, let's attempt to edit the stylesheet using js`);

const styles = document.styleSheets;

