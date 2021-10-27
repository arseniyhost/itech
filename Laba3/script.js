const wrapper = document.createElement('div');
wrapper.classList.add("wrapper");

const containerEnter = document.createElement('div');
containerEnter.style.fontFamily = "Roboto, sans-serif"

const rowInput = document.createElement('input');
rowInput.placeholder = "Колличество столбцов";

const columnInput = document.createElement('input');
columnInput.placeholder = "Колличество строк";

const btn = document.createElement('button');
btn.innerHTML = "click";

const onClick = () => {
    if (rowInput.value && columnInput.value) {
        const table = createTable(rowInput.value, columnInput.value)
        wrapper.appendChild(table)
    } else {
        alert("Заполните все поля!")
    }
}
btn.addEventListener('click', onClick);

containerEnter.appendChild(rowInput);
containerEnter.appendChild(columnInput);
containerEnter.appendChild(btn);


const createTable = (row, column) => {
    // const row = 5, column = 10;

    const table = document.createElement('table');
    table.classList.add('table-list');
    table.style.fontFamily = "Robotom, sans-serif"

    const trHead = document.createElement('tr');
    const tableBody = document.createElement('tbody');

    for (let i = 0; i < row; i++) {
        const td = document.createElement('td');
        td.innerHTML = i + 1;
        td.style.textAlign = "center";
        td.style.fontSize = "20px";
        td.style.fontFamily = "Roboto, sans-serif";
        td.style.padding = "5px";
        td.style.backgroundColor = "#dcdcdc";
        td.style.color = "#fff"
        trHead.appendChild(td);
    }

    for (let i = 0; i < column; i++) {

        if (i % 2 === 0) {
            var tr = document.createElement('tr');
            tr.style.backgroundColor = "#D9E5D6";
            tr.style.color = "#000"
        }

        if (i === 0) {
            var tr = document.createElement('tr');
            tr.style.backgroundColor = "#F7A072"
            tr.style.color = "#000"
        }

        if (i % 2 !== 0) {
            var tr = document.createElement('tr');
            tr.style.backgroundColor = "#EDDEA4";
            tr.style.color = "#fff"
        }

        if (i === column - 1) {
            var tr = document.createElement('tr');
            tr.style.backgroundColor = "#00A7E1"
            tr.style.color = "#000"
        }

        for (let j = 0; j < row; j++) {
            const td = document.createElement('td');
            td.style.padding = "10px";
            td.innerHTML = Math.random();
            tr.appendChild(td);
        }

        tableBody.appendChild(tr);
    }

    table.appendChild(trHead);
    table.appendChild(tableBody)



    return table
}

wrapper.appendChild(containerEnter);

document.body.append(wrapper);
