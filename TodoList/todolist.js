


var todoList={
  todos:[],
  //add something to the list
  add:function(todoText){
    this.todos.push({
      todoText:todoText,
      completed:false
    });
    console.log("added "+todoText);
  },

  //change an item in the list
  change:function(place,todoText){
    this.todos[place].todoText=todoText;
    console.log("changed to "+todoText)
  },

  //delete an item(s)
  delete:function(place){
    if (isNaN(place)){
      place=0;
    };
    console.log("deleted "+this.todos[place].todoText);
    this.todos.splice(place,1);
  },

  //change an item to completed (completed:true)
  toggleCompleted:function(place){
    var todo=this.todos[place];
    todo.completed=!todo.completed;
  },

  // if everything true, make everything false. otherwise all set to true
  toggleAll:function(){
    var check = 0;
    var total = this.todos.length;

    // changed the for loop to a forEach which checks if all todos are completed or not
    this.todos.forEach(function(todo){
      if (todo.completed===true){
        check++;
      }
    });

    this.todos.forEach(function(todo){
      if (check===total){
        todo.completed=false;
      }else {
        todo.completed=true;
      }
    });
}

}  // end of todoList object ---- Begin begin todoList handlers

//links button clicks to todoList methods
var handlers={
  addTodos:function() {

    var addInput=document.getElementById("addItem");
    todoList.add(addInput.value);
    addInput.value="";
    view.displayTodos();
  },

  changeTodos:function() {
    var changePosition=document.getElementById("changePositionInput");
    var changeText=document.getElementById("changeTextInput");
    todoList.change(changePosition.valueAsNumber,changeText.value);
    changePosition.value="";
    changeText.value="";
    view.displayTodos();
  },

  deleteTodos:function(position) {
    todoList.delete(position);
    view.displayTodos();
  },

  completeTodos:function(){
    var completeInput=document.getElementById("completePositionInput");
    todoList.toggleCompleted(completeInput.valueAsNumber);
    completeInput.value="";
    view.displayTodos();
  },

  toggleAllTodos:function() {
    todoList.toggleAll();
    view.displayTodos();
  }
};

//------- begin view object for viewing todoList-----------------

var view={
  displayTodos:function(){
     var todosUl=document.querySelector('ul');
    todosUl.innerHTML='';
    todoList.todos.forEach(function(todo,position){
      var todoLi=document.createElement('li');
      var todoTextWithCompletion="";
     //display completed or not completed within the todoLi
      if (todo.completed===true){
        todoTextWithCompletion='(x) ' + todo.todoText + ' ';
      }else {
        todoTextWithCompletion='(      ) ' + todo.todoText +' ';
      }
      todoLi.id=position;
      todoLi.textContent=todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton()); //had to had optional <this> after callback for this line to work
      todosUl.appendChild(todoLi);
    },this)  //forEach(callback function, optional this argument)
  },

  createDeleteButton:function(){
    var deleteButton=document.createElement('button');
    deleteButton.textContent='delete';
    deleteButton.className='deleteButton';
    return deleteButton;
  },

// ------ event delegation -----------------

  setUpEventListeners: function(){
    var todosUl=document.querySelector('ul');
    todosUl.addEventListener('click',function(event){
      var elementClicked=event.target;
      if (elementClicked.className==='deleteButton'){
        handlers.deleteTodos(parseInt(elementClicked.parentNode.id));
      };
    });
  }
};

view.setUpEventListeners();

//Todo List 6.10.17
todoList.add('this.incorporate data/application functionality to todoList (via local storage?PHP? MySQL?)');
todoList.add('this.create item check box');
todoList.add('this.style delete box to be a red circle with white X');
todoList.add('this.change toggleAll to a check box');
todoList.add('look over versions of todo list and apply to untitled RPG for versions 1,2, and 3')
todoList.add('look for MDN javascript intermediate');
todoList.add('pick a course on Lydna');
todoList.add('incorporate todo functionality to portfolio blog (new ramble, new TIL, etc)');
todoList.add('practice using regular expression in javascript: (/[a-zA-Z]/g,"")');
todoList.toggleCompleted(5);
view.displayTodos();

$(document).ready(function(){
  //this application uses zero jquery!
}); // end of document.ready
//htmlelement.addEventListener("click",function(){

//})
