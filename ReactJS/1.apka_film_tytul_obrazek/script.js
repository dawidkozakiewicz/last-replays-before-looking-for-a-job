var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    img: 'https://timedotcom.files.wordpress.com/2014/07/301386_full1.jpg',
    width: '200px'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    img: 'https://vignette.wikia.nocookie.net/fanowska-krol-lew/images/b/b3/Phauto.png/revision/latest?cb=20170815174916&path-prefix=pl',
    width: '200px'
  }
];

var moviesElements = movies.map(function (movie) {
  return React.createElement('li', { key: movie.id },
    React.createElement('h2', {}, movie.title),
    React.createElement('p', {}, movie.desc),
    React.createElement('img', { src: movie.img, width: movie.width })
  );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );


ReactDOM.render(element, document.getElementById('app'));