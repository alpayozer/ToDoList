window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks")

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        if(!task){
            alert("Please fill out the ToDo");
            return;
        }

        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");

        task_content_el.appendChild(task_input_el);

        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions");

        const task_done_el = document.createElement("button");
        task_done_el.classList.add("done");
        task_done_el.innerHTML = "<i class='fas fa-check-square'></i>";

        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerHTML = "<i class='fas fa-edit'></i>";

        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");
        task_delete_el.innerHTML = "<i class='fas fa-trash'></i>";
        

        task_actions_el.appendChild(task_done_el);
        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        task_el.appendChild(task_actions_el);

        list_el.appendChild(task_el);

        input.value = "";

        task_done_el.addEventListener('click', () => {
            task_input_el.style.textDecoration = 'line-through';
        })

        task_done_el.addEventListener('dblclick', () => {
            task_input_el.style.textDecoration = '';
        })

        task_edit_el.addEventListener('click', () => {
            console.log(task_edit_el.innerHTML);
            
            if(task_edit_el.innerHTML ==='<i class="fas fa-edit"></i>'){   
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                task_edit_el.innerHTML = "<i class='fas fa-save'></i>";

            }else{
                task_input_el.setAttribute("readonly","readonly");
                task_edit_el.innerHTML = "<i class='fas fa-edit'></i>";
            }
               
        
        })

        task_delete_el.addEventListener('click', () => {
            list_el.removeChild(task_el);
        })
    })
})