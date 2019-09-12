// タスク格納用

document.addEventListener("DOMContentLoaded", function () {
			document.getElementById("addbtn").addEventListener("click", function () {
					let todo = [];
					console.log(todo);
					class Task {
						// コンストラクタ：オブジェクトを作成する関数オブジェクト (Function オブジェクト) です
						constructor(id, content, state, del) {
							this.id = id;
							this.content = content;
							this.state = state;
							this.delete = del;
						}
						//メソッド
						incrementAge() { //IDをインクリメント
							this.id += 1;
						}
						getContent() { //フォームに入力した値を定義
							let this.content = document.getElementById("addtask").value;
						}
						changeState() { //作業中(1)ならば
							if (this.state === 1) {
								newElement = document.createElement("tr");
								newElement.innerHTML = "#task";
								TaskList.appendChild(newElement);
							} else {
								newElement = document.createElement("tr");
								newElement.innerHTML = "#task";
								TaskList.appendChild(newElement);
							}
							pushDel() { //削除キーが1なら
								return this.del;
							}
						}
						let i = 0;
						let newtask = document.getElementById("addtask").value;
						console.log(newtask);
						for (let i = 0; i < todo.length; i++) {
							todo = new Task(i, newtask, 1, 1);
							console.log(todo);
							TaskList = document.getElementById("tesk_list");
							//タグの種類を設定し、新しい要素を作る
							newElement = document.createElement("tr");
							newElement.innerHTML = "#task";
							//作った要素を最初に指定した場所に配置
							TaskList.appendChild(newElement);
							document.getElementById('task').innerHTML += '<td>' + todo[id][i] + '</td>' + '<td>' + todo[content][i] + '</td>' + '<td><input id="state" type="button" style="margin:2px;" value="todo[state][i]"><input id="todo[del][i]" type="button" style="margin:2px;" value="削除"></td></tr>';
						}
					});
			});

		/*
		let todo = [];
				//追加ボタンを押したら新規タスクがToDoリストへ
				function OnButtonClick() {
					let addtask = document.new_task.addtask.value;
					todo.push(addtask);
					//ボタンクリックでHTMLのtfootの子ノードリセット
					let tfoot = document.getElementById('task_list');
					for (let x = tfoot.childNodes.length - 1; x >= 0; x--) {
						tfoot.removeChild(tfoot.childNodes[x]);
					}
					//配列todoをfor文で表示
					for (let i = 0; i < todo.length; i++) {
						document.getElementById('task_list').innerHTML += '<tr id="task"><td>' + i + '</td>' + '<td>' + todo[i] + '</td>' + '<td><input id="state" type="button" style="margin:2px;" value="作業中"><input id="delete" type="button" style="margin:2px;" value="削除"></td></tr>';
					}
				}
				//作業ボタンと完了ボタンを押したら切り替わる
				//function OnStateClick() {}
				//ラジオボタン========================================
				//ラジオボタンの情報を取得する querySelector:指定されたセレクターまたはセレクターのグループに一致する、文書内の最初の Element を返します。ElementとはHTML や XML 文書における、要素（タグ）。
				let radioElement = document.querySelector('#radio_button');
				//ラジオボタンの変更開始
				radioElement.addEventListener('change', radioButtonChange);

				function radioButtonChange(event) {
					//現在の選択状態を取得
					let stateValue = radioElement.state_radio.value;
					console.log(`選択されているラジオボタンは ${stateValue} です`);
				}
				//削除ボタンを押して消す
				//let deleteElement = document.querySelector('#delete');
				//ラジオボタンの変更開始
				//deleteElement.addEventListener('click', deleteclickChange);

				//function deleteclickChange() {
				//HTMLを削除する
				//document.getElementById("task").remove();
				//}
		*/
