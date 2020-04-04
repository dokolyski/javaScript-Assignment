function editBook(row) {
    const children = Array.from(row.children);
    children.forEach((child) => {
        if(child.className === "author" || child.className === "title"){
            const text = child.childNodes[0].nodeValue;
            child.childNodes[0].remove();
            const newInput = document.createElement('input');
            newInput.value = text;
            child.appendChild(newInput);
        } else {
            const button = child.childNodes[0];
            button.childNodes[0].nodeValue = "Save";
            button.onclick = function(){saveBook(row);};
        }
    });
}

function saveBook(row) { 
    const children = Array.from(row.children);
    children.forEach((child) => {
        if(child.className === "author" || child.className === "title"){
            const text = child.children[0].value;
            child.children[0].remove();
            child.appendChild(document.createTextNode(text.toString()));
        } else {
            const button = child.childNodes[0];
            button.childNodes[0].nodeValue = "Edit";
            button.onclick = function(){editBook(row);};
        }
    });
}

function removeBook(row) {
    row.remove()
}


function addNewBook() {
    const row = document.createElement("tr");
    const author = document.createElement("td");
    author.className = "author";
    const title = document.createElement("td");
    title.className = "title";
    const editButtons = document.createElement("td");
    author.appendChild(document.createElement("input"));
    title.appendChild(document.createElement("input"));

    const edit = document.createElement("button");
    edit.className = "edit";
    edit.appendChild(document.createTextNode("Save"));
    edit.onclick = function(){saveBook(row)};

    const remove = document.createElement("button");
    remove.className = "remove";
    remove.appendChild(document.createTextNode("Remove"));
    remove.onclick = function(){removeBook(row)};

    editButtons.appendChild(edit);
    editButtons.appendChild(remove);
    row.appendChild(author);
    row.appendChild(title);
    row.appendChild(editButtons);
    
    const table = document.getElementsByTagName("table")[0];
    table.appendChild(row);
}