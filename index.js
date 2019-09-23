const todos = [];
let html = '';
document.addEventListener("DOMContentLoaded", function () {
    //id=addbtnがクリックされたら
    document.getElementById("addbtn").addEventListener("click", function () {
        target = '';
        //配列にinputタグで入力された内容を変数addTaskに入れる
        const task = document.new_task.addtask.value;
        //todos配列にaddTaskをプッシュ
        todos.push(task);
        console.log(task);
        console.log(todos);
        document.getElementById('addtask').value = '';
        for (let i = 0; i < todos.length; i++) {
            html = '<td>' + i + '</td>' + '<td>' + todos[i] + '</td>' + '<td><input id="state" type="button" style="margin:2px;" value="完了"><input id="todo[del][i]" type="button" style="margin:2px;" value="削除"></td></tr>';
        }
        target = document.getElementById('task_list');
        // ここでタスクを表示する
        target.innerHTML += html;
    })
})
