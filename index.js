document.addEventListener("DOMContentLoaded", function () {
    //id=addbtnがクリックされたら
    document.getElementById("addbtn").addEventListener("click", function () {
            const todos = [];
            //配列にinputタグで入力された内容を変数addTaskに入れる
            let task = document.getElementById("addtask").value;
            console.log(task);
            //todos配列にaddTaskをプッシュ
            todos.push(task);
            console.log(task);
            console.log(todos);
            task = '';
            //tdタグ生成
            let td1 = document.createElement('td');
            td1.textContent = index;

            let td2 = document.createElement('td');
            td2.textContent = todos;

            let td3 = document.createElement('td');
            let stateButton = document.createElement('button');
            stateButton.textContent = '作業中';
            td3.appendChild(stateButton);

            let td4 = document.createElement('td');
            let deleteButton = document.createElement('button');
            deleteButton.textContent = '削除';
            td3.appendChild(deleteButton);

            //trタグ生成
            let tr = document.createElement('tr');
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);

            let tbody = document.getElementById('list-body');
            tbody.appendChild(tr);

            index = index + 1;
        }
    })
})
