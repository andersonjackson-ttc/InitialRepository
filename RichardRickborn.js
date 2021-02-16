function rbr() {
    let contentList = ['Richard', 'was', 'here'];
    let main = document.getElementById('myDiv');
    let list = document.createElement('ul');

    contentList.forEach(function (element) {
        let listItem = document.createElement('li');
        listItem.innerHTML = element;
        list.appendChild(listItem);
    });

    main.appendChild(list);
}
