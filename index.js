function markAsDone(todos) {
    return transform(0, todos, []);
}

function transform(index, todos, modifiedTodos){
    if(index < todos.length){
        // on this line - prepend the string 'done - ' to each `todo` description
        modifiedTodos.push('done - ' + todos[index]);
        // on this line - call transform recursively
        return transform(index + 1, todos, modifiedTodos);
    }else{
        return modifiedTodos
    }
}

//WHICH ONES AM I SUPPOSED TO DO?????

//? the index.js file should create a function named `markAsDone` that takes an array of `todos` and returns the modified array
//? the index.js file should recursively loop through the `todos` and prepend  the string "done - " to each todo description

//should modify line 8 to prepend the string 'done - ' to each todo description
//should modify line 9 to recursively call the transform function