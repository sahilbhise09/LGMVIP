window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

		const task_el = document.createElement('div');
		task_el.classList.add('task');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input.value = '';

		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});
	});
	function currentTime() {
		let date = new Date(); 
		let hh = date.getHours();
		let mm = date.getMinutes();
		let ss = date.getSeconds();
		let session = "AM";
	  
		if(hh === 0){
			hh = 12;
		}
		if(hh > 12){
			hh = hh - 12;
			session = "PM";
		 }
	  
		 hh = (hh < 10) ? "0" + hh : hh;
		 mm = (mm < 10) ? "0" + mm : mm;
		 ss = (ss < 10) ? "0" + ss : ss;
		  
		 let time = hh + ":" + mm + ":" + ss + " " + session;
	  
		document.getElementById("clock").innerText = time; 
		let t = setTimeout(function(){ currentTime() }, 1000);
	  }
	  
	  currentTime();
	  
	  
	  
	  Resources
});