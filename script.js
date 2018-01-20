var movies = [
    {
      id: 1,
      title: 'Harry Potter',
      desc: 'film o czarodzieju',
      img: 'http://via.placeholder.com/150x150'
    },
    {
      id: 2,
      title: 'Król Lew',
      desc: 'Film o królu sawanny',
      img: 'http://via.placeholder.com/150x150'
    },
    {
        id: 3,
        title: 'Paddington',
        desc: 'Film o misiu',
        img: 'http://via.placeholder.com/150x150'
    },
    {
        id: 4,
        title: 'Emotki',
        desc: 'Film o emotikonach',
        img: 'http://via.placeholder.com/150x150'
    }
];


var moviesElements = movies.map((movie) => {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.img}, /*...*/)
    )
});

var element = 
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );

ReactDOM.render(element, document.getElementById('app'));