/* TUT 4: select the child in an element
const wmf = document.querySelector('#book-list li:nth-child(2) .name');
console.log(wmf);
*/
//select all elements

let books = document.querySelectorAll('#book-list li .name');

Array.from(books).forEach(function(book){
  book.textContent += ' new text'

})



/* delete books
const list = document.querySelector('#book-list ul');
list.addEventListener('click', (e) => {
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
}); */



/*tutorial 3 example: turn HTML collection into an array than get each element in said array. 
let titles = document.getElementsByClassName('title');
Array.from(titles).forEach(function(item){
  console.log(item); 
}) */
