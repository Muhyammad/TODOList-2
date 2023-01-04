const arr = [
  {
    text: 'первое дело',
    done: true,
  },

  {
    text: 'второе дело',
    done: true,
  },

  {
    text: 'третье дело',
    done: false,
  },

  {
    text: 'четвертое дело',
    done: false,
  },

  {
    text: 'пятое дело',
    done: false,
  },
]

// показать весь список дел
const render = (arr) => {
  const div = document.getElementById('list')
  div.textContent = ''
  for (let i = 0; i < arr.length; i++) {
    const item1 = document.createElement('div')
    const delBtn = document.createElement('button')
    const label = document.createElement('label')
    const checkmark = document.createElement('div')
    const checknop = document.createElement('input')
    checknop.classList.add('checknop')
    checkmark.classList.add('checkmark')

    checknop.type = 'checkbox'
    delBtn.textContent = 'X'

    checknop.checked = arr[i].done

    checknop.addEventListener('change', (e) => {
      checkTodo(i)
    })

    delBtn.addEventListener('click', (e) => {
      remove(i)
    })
    item1.classList = 'delaspisok'
    item1.textContent = arr[i].text
    div.append(item1)
    item1.prepend(label)
    label.append(checknop, checkmark)
    item1.append(delBtn)
  }
}
render(arr)

// функция удаления
const remove = (i) => {
  arr.splice(i, 1)
  render(arr)
}

// функция добавления
const addTodo = (text) => {
  arr.push({ text: text, done: false })
  addBtn
  render(arr)
}

// добавить
document.getElementById('addBtn').addEventListener('click', (e) => {
  if (input.value !== '') {
    e.preventDefault()
    const addBtn = document.getElementById('input')

    addTodo(addBtn.value)
    addBtn.value = ''
  }
})

// галочка
const checkTodo = (index) => {
  arr[index].done = !arr[index].done
  render(arr)
}

render(arr)
