const todos = [];
document.addEventListener("DOMContentLoaded", function () {
    //id=addbtnがクリックされたら
    document.getElementById("addbtn").addEventListener("click", function () {
        target = '';
        //配列にinputタグで入力された内容を変数addTaskに入れる
        let task = document.getElementById("addtask").value;
        console.log(task);
        //todos配列にaddTaskをプッシュ
        todos.push(task);
        console.log(task);
        console.log(todos);
        task = '';
        for (let i = 0; i < todos.length; i++) {
            html = '<td>' + i + '</td>' + '<td>' + todos[i] + '</td>' + '<td><input id="state" type="button" style="margin:2px;" value="完了"><input id="todo[del][i]" type="button" style="margin:2px;" value="削除"></td></tr>';
        }
        target = document.getElementById('task_list');
        // ここでタスクを表示する
        target.innerHTML += html;
    })
})
