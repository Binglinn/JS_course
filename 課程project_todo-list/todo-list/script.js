//[{text: '洗衣服', checked: false}, {text: '寫文案', checked: true}]
let listState = [];

const STATE_KEY = "todo-list";
//存到localStroage的KEY(json->key:value pair)
//json只存string
//stringify()存
//parse()取

//去localStorage抓資料(以防刷新之後資料不見)
function loadState() {
  const listState = localStorage.getItem(STATE_KEY);
  if (listState !== null) {
    return JSON.parse(listState);
  }
  return []; //若無資料返回空
}

//轉成字串存到localStorage
function saveState(list) {
  localStorage.setItem(STATE_KEY, JSON.stringify(list));
}

//頁面初始化
function initList() {
  // load state
  listState = loadState(); //將資料讀近來，將記憶喚醒

  // render list
  const ul = document.getElementById("list");
  for (const item of listState) {
    const li = document.createElement("li");
    li.innerText = item.text;

    const deleteButton = document.createElement("span");
    deleteButton.classList.add("delete");
    deleteButton.onclick = deleteItem;
    li.appendChild(deleteButton);

    li.classList.add("item");
    if (item.checked) {
      li.classList.add("checked");
    }
    li.onclick = checkItem;

    ul.appendChild(li);
  }
}

function addItem() {
  const ul = document.getElementById("list");
  const input = document.getElementById("input");
  const text = input.value;
  if (text === "") {
    alert("請輸入內容");
    return;
  }

  const newItem = document.createElement("li");
  newItem.classList.add("item");
  newItem.innerText = text;

  newItem.onclick = checkItem; //點的話，呼叫checkItem函數

  const deleteButton = document.createElement("span");
  deleteButton.classList.add("delete");
  deleteButton.onclick = deleteItem;

  newItem.appendChild(deleteButton);

  //additem時加入localStorage
  listState.push({
    text,
    checked: false,
  });
  saveState(listState);

  input.value = "";
  ul.appendChild(newItem); //在ul中加個子節點(li)
}

function checkItem(e) {
  const item = e.target;
  const parent = item.parentNode;
  const idx = Array.from(parent.childNodes).indexOf(item); //Array.from()將iterable的輸入轉成array

  listState[idx].checked = !listState[idx].checked;

  item.classList.toggle("checked");
  saveState(listState);
}

function deleteItem(e) {
  const item = this.parentNode;
  const parent = item.parentNode;
  const idx = Array.from(parent.childNodes).indexOf(item);
  listState = listState.filter((_, i) => i !== idx);
  parent.removeChild(item);
  saveState(listState);
  e.stopPropagation();
}

initList();

const addButton = document.getElementById("add-button");
addButton.addEventListener("click", addItem);

const form = document.getElementById("input-wrapper");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
