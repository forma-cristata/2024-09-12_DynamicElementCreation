const mainElement = document.getElementById('main');
const promptValue = prompt("How many groceries? ");
const ul = document.getElementById("list");

let groceries = new Array(promptValue);
let title = document.getElementById('title');


GetTheGroceries();
SetTitle();
FillTable();


/**
 * Prompts the user for their items one by one.
 * Saves their input to the 'groceries' array
 */
function GetTheGroceries()
{
    for(let i = 1; i <= promptValue; i++)
    {
        let promptItem = null;
        while (promptItem === null)
        {
            promptItem = prompt(`${i}. `)
        }
        groceries[i-1] = promptItem;
    }
}

/**
 * Modifies the title element to match the user's input
 */
function SetTitle()
{
    title.innerHTML = `${promptValue} Groceries:`
}

/**
 * Creates the list items inside the list.
 */
function FillTable()
{
    for(let i = 0; i < promptValue; i++)
    {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(groceries[i]));
        ul.appendChild(li);
        if(i%2 !== 0)
        {li.style.backgroundColor = "#222222";}
    }
}

function CSS()
{

}
