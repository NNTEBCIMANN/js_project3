let inputForm = document.getElementById("inputForm");
let tasks = [];
let ids = 0;
let list;
let rmRow;


inputForm.addEventListener("submit", function(e){
    e.preventDefault();

    let input = document.getElementById("input").value;
    if(input == ""){
        let fill = document.getElementById("fill");
        fill.style.display = "block";
        return 0;
    }else{
        let fill = document.getElementById("fill");
        let listDiv = document.getElementById("listDiv");
        list = document.getElementById("list");

        fill.style.display = "none";
        listDiv.style.display = "block";
        ids++;
        tasks.push(`<p class="liIt" data-id="${ids}"><span class="task-text">${input}</span><span><button type="button" data-act="done" class="dnBtn">მზად</button><button type="button" data-act="del" class="rmBtn">წაშლა</button></span></p>`);
        list.insertAdjacentHTML('beforeend', `${tasks[tasks.length - 1]}`);
    }
});


list = document.getElementById("list");
list.addEventListener("click", function(e){
    const btn = e.target.closest('button');
    if(!btn) return 0;
    const row = btn.closest('.liIt');
    if(btn.dataset.act == "done"){
        row.classList.toggle('done');
    }else{
        let delForm = document.getElementById("delForm");
        delForm.classList.toggle("on");
        rmRow = row;
    }
});
delForm.addEventListener("click", function(e){
    e.preventDefault();

    const delDivBtn = e.target.closest('button');
    if(!delDivBtn) return 0;
    if(delDivBtn.dataset.act == "no"){
        delForm.classList.toggle("on");
        rmRow = null;
    }else{
        let rmId = Array.from(list.querySelectorAll('.liIt')).indexOf(rmRow);
        tasks.splice(rmId, 1 );
        rmRow.remove();
        delForm.classList.toggle("on");
        rmRow = null;
        if(!tasks.length) listDiv.style.display = "none";
    };
});