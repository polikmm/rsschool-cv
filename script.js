document.querySelector('#burger').onclick = function () {
  const burger = document.querySelector('.burger')
  const navList = document.querySelector('.nav-list')
    if (!burger.classList.contains('active')) {
        navList.classList.add('active')
        burger.classList.add('active')
    } else {
        navList.classList.remove('active')
        burger.classList.remove('active')
    }
}

document.querySelectorAll('.nav-list__item').forEach(item => {
    item.onclick = function () {
        document.querySelector('.nav-list').classList.remove('active')
        document.querySelector('.burger').classList.remove('active')
    }
})

