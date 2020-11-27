//js
let list = document.querySelectorAll('#js .drag li');
let trash = document.querySelector('#js .drop');

list.forEach(element => {
    element.setAttribute('draggable', true);
    element.addEventListener('dragstart',
        e => {
            e.dataTransfer.setData('text/html', e.target.innerHTML)
        });
});

trash.addEventListener('dragover', e => {
    e.preventDefault();
    trash.style.borderColor = 'green';
});

trash.addEventListener('dragleave', e => {
    trash.style.borderColor = 'grey';
});

trash.addEventListener('drop', e => {
    trash.style.borderColor = 'grey';
    let li = document.createElement('li');
    li.innerHTML = e.dataTransfer.getData('text/html');
    trash.querySelector('ol').append(li);
});

//jq
$('#jq .drag li').draggable({
    helper: "clone",
    revert: true,
    cursor: 'move'
});

$('#jq .drop').droppable({

    over: function (event, ui) {
        $(this).css({
            borderColor: 'green'
        });
    },
    out: function (event, ui) {
        $(this).css({
            borderColor: 'grey'
        });
    },
    drop: function (event, ui) {

        $(this).children('ol').append('<li>' + ui.draggable.html() + '</li>');

        $(this).css({
            borderColor: 'grey'
        });
    }
});