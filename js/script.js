console.log('JS OK!');

const toDos = [
    {
        text: 'Fare la spesa',
        done: false
    },
    {
        text: 'Fare il carosello',
        done: false
    },
    {
        text: 'Studiare javascript',
        done: false
    },
    {
        text: 'Ripassare HTML e CSS',
        done: false
    },
    {
        text: 'Iscrizione palestra',
        done: false
    },
]

const app = new Vue({
    el: '#root',
    data: {
        toDos,
        newToDo: ''
    },
    methods: {
        deleteToDo: function (element) {
            element.done = true
        }
    }
});