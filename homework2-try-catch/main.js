const books = [
    {
        author: "Скотт Бэккер",
        name: "Тьма, что приходит прежде",
        price: 70
    },
    {
        author: "Скотт Бэккер",
        name: "Воин-пророк",
    },
    {
        name: "Тысячекратная мысль",
        price: 70
    },
    {
        author: "Скотт Бэккер",
        name: "Нечестивый Консульт",
        price: 70
    },
    {
        author: "Дарья Донцова",
        name: "Детектив на диете",
        price: 40
    },
    {
        author: "Дарья Донцова",
        name: "Дед Снегур и Морозочка",
    }
];


// let i = 0;
// let list = '<ul>';

// try {
//     while (i<books.length){
//         list += '<li>'+ "Автор: "+books[i].author+"<br/>"+ "Назва книги: "+books[i].name+"<br/>" +"Ціна: "+books[i].price+'</li>';
//         i++;
//     }
//     if (!books[i].author||!books[i].price||!books[i].name){
//         throw new SyntaxError("Error! No data"+i);
//     }
//   } catch (err) {
//         console.log(err);
//         i++;
//   }

// list += '</ul>'

// const root = document.getElementById('root');
// root.insertAdjacentHTML('afterbegin', list);


let i = 0;
let list = '<ul>';

while (i<books.length){
    if (!books[i].author){
        console.log ("Error! No author in Object "+ (i+1))
    }
    else if (!books[i].price){
        console.log ("Error! No price in Object "+ (i+1))
    }
    else if (!books[i].name){
        console.log ("Error! No name in Object "+ (i+1))
    }
    else{
        list += '<li>'+ "Автор: "+books[i].author+"<br/>"+ "Назва книги: "+books[i].name+"<br/>" +"Ціна: "+books[i].price+'</li>';
    }
    i++;
}
list += '</ul>'

const root = document.getElementById('root');
root.insertAdjacentHTML('afterbegin', list);