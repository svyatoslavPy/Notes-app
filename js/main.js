const titleText = document.getElementById('title-text'); // title text
const aboutText = document.getElementById('about-text'); // about text 
const btnAdd = document.querySelector('.button__add'); // btn with add
const taskBlock = document.querySelector('.task-title'); // taskBLock


console.log(taskBlock)
console.log(btnAdd);

let wrapper = document.querySelector('.wrapper');
let divTask = document.createElement('div');

divTask.classList.add('task-title');

function addTask() { // addTask
	if (titleText.value !== '' || aboutText.value !== '') {
		taskBlock.remove(); // remove taskblock
	}

	wrapper.appendChild(divTask);
	console.log(divTask.childElementCount);

	if (divTask.childElementCount >= 3) {
		return;
	}

	if (titleText.value === '' && aboutText.value === '') {
		return;
	}

	divTask.innerHTML += `<div onclick="delets(event)" class="block">
				<div class="block__text">
					<p class="block__item">
						${titleText.value}
					</p>
					<p class="block__item--primary">
						${aboutText.value}
					</p>
				</div>
				<div btn-name="delete" class="block__btn">
						<img src="img/delete.svg" alt="delete-img">
				</div>
		</div>`;
}

const listDelete = {
	delete: (element) => {
		element.remove();
	}
}

function delets(event) {
	let res = event.target;
	let Attribute = event.target.getAttribute('btn-name');
	console.log(res.parentElement)

	if (Attribute in listDelete) {
		listDelete[Attribute](res.parentElement);
	}
}