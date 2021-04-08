console.log("working...");
// localStorage.setItem("Name", "Azeem");
// let a = localStorage.getItem("Name");
// console.log(a);
Show_notes();
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
    let notes = localStorage.getItem("notes");
    let addTxt = document.getElementById("addTxt");
    if (addTxt.value != "") {
        if (notes == null) {
            Objnotes = [];
        } else {
            Objnotes = JSON.parse(notes);
        }
        Objnotes.push(addTxt.value);
        localStorage.setItem("notes", JSON.stringify(Objnotes));
        addTxt.value = "";
        console.log(addTxt.value);
        Show_notes();
    } else {
        alert("Empty Message...");
    }
});
let remov = document.getElementById("remov");
remov.addEventListener("click", function(e) {
    let a = localStorage.clear();
    console.log(a);
    Show_notes();
})

function Show_notes() {
    let getNotes = localStorage.getItem("notes");
    if (getNotes == null) {
        Objnotes = [];
    } else {
        Objnotes = JSON.parse(getNotes);
    }
    let html = "";
    Objnotes.forEach(function(element, index) {
        html += `<div class="bg-secondary text-light card text-center my-5 mx-3" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Message ${index+1}</h5>
            <hr>
            <p>${element}</p>
            <hr>
            <button type="button" onclick = "delete_Message(this.id)" class="btn btn-success m-2 px-2" id=${index}><b>Delete</b></button>
        </div>
    </div>`;
    });
    let notecount = document.getElementById("notes");
    if (getNotes != 0 && getNotes != null && html != "") {
        notecount.innerHTML = html;
    } else {
        console.log("empty....");
        notecount.innerHTML = `<div class="card bg-danger text-center my-5" style="width: 20rem;">
        <div class="card-body">
            <h5 class="card-title"><b>Empty</b></h5>
        </div>
    </div>`;
    }

}

function delete_Message(index) {
    console.log(index);
    localStorage.removeItem(index);
    let getNotes = localStorage.getItem("notes");
    if (getNotes == null) {
        Objnotes = [];
    } else {
        Objnotes = JSON.parse(getNotes);
    }
    Objnotes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(Objnotes));
    Show_notes();
}
document.querySelector("body").addEventListener("mouseover", function(e) {
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY},146 )`;
})

document.getElementById("addBtn").addEventListener("mouseover", mouseOver);
document.getElementById("addBtn").addEventListener("mouseout", mouseOut);

function mouseOver() {
    document.getElementById("addBtn").style.color = "black";
}

function mouseOut() {
    document.getElementById("addBtn").style.color = "white";
}