
function newItem(){

// add item to list
   let li = $('<li></li>');
   let inputValue = $('#input').val();
   li.append(inputValue);

   if (inputValue === '') {
     alert("You must write something!");
   } else {
     $('#list').append(li);
   }

//create a function to cross out list items
//add event listener to all list items
  $('li').on('dblclick', function crossOut() {
    li.toggleClass('strike');
  });

 //add delete button to all list items
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

//adds event delete button
  crossOutButton.on('click', deleteListItem);

 //add delete class to list
  function deleteListItem() {
    li.addClass('delete');
  }

// allows user to reorder list
   $('#list').sortable();
}
