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
        //trタグ生成
        let listBody = document.getElementById('list-body');
        let trTag = document.createElement('tr');
        listBody.appendChild(trTag);
        trTag.setAttribute('id', 'list-tr');
        for (let i = 0; i < todos.length; i++) {
            //tdタグ生成
            let listTr = document.getElementById('list-tr');
            let tdTag = document.createElement('td');
            listTr.appendChild(tdTag);
            tdTag.textContent = i;
        }
    })
})
