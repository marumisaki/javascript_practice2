let todo = [];
let html = '';
document.addEventListener("DOMContentLoaded", function () {
    //id=addbtnがクリックされたら
    document.getElementById("addbtn").addEventListener("click", function () {
        target = '';
        //配列にinputタグで入力された内容を変数addTaskに入れる
        let task = document.new_task.addtask.value;
        //todo配列にaddTaskをプッシュ
        todo.push(task);
        console.log(task);
        console.log(todo);
        document.getElementById('addtask').value = '';
        for (let i = 0; i < todo.length; i++) {
            html = '<td>' + i + '</td>' + '<td>' + todo[i] + '</td>' + '<td><input id="state" type="button" style="margin:2px;" value="完了"><input id="todo[del][i]" type="button" style="margin:2px;" value="削除"></td></tr>';
        }
        target = document.getElementById('task_list');
        // ここでタスクを表示する
        target.innerHTML += html;
    })
})
