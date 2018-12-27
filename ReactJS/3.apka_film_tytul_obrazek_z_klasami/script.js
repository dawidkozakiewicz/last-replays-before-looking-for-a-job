var movies = [{
    id: 1,
    title: 'Lista Schindlera',
    director: 'Steven Spielberg',
    genre: 'Dramat wojenny',
    year: '1993',
    img: 'https://ocdn.eu/pulscms-transforms/1/qu0ktkpTURBXy8wNjdjZjhhODMwNmVmMThkY2M1MDNiMzQwMTkxOTg1NC5qcGeSlQLNA8AAwsOVAgDNA8DCww'

  },
  {
    id: 2,
    title: 'Pianista',
    director: 'Roman Polański',
    genre: 'Biograficzny, dramat wojenny',
    year: '2002',
    img: 'https://ocdn.eu/pulscms-transforms/1/KvzktkpTURBXy9kNzA3MzY0ZjU1YjYzMzlhMTZkMGZhMDg1YWU3NTVmOS5wbmeRkwXNBADNAj8'
  },

  {
    id: 3,
    title: 'Bogowie',
    director: 'Łukasz Palkowski',
    genre: 'Biograficzny, dramat',
    year: '2014',
    img: 'http://static.prsa.pl/images/99b8c5a5-db51-4b93-a4ad-0b4e6fee775a.jpg'
  }




];

var MovieTitle = React.createClass({ 
  
  render: function () {
    return (
      React.createElement('h2', {}, this.props.title)
    );
  }
});

var MovieDirector = React.createClass({
  
  render: function () {
    return (
      React.createElement('p', {}, this.props.director)
    );
  }
});

var MovieGenre = React.createClass({
  
  render: function () {
    return (
      React.createElement('p', {}, this.props.genre)
    );
  }
});

var MovieYear = React.createClass({
  
  render: function () {
    return (
      React.createElement('p', {}, this.props.year)
    );
  }
});

var MovieImage = React.createClass({

  render: function () {
    return (
      React.createElement('img', {
        src: this.props.img
      })
    );
  }
});


var SingleMovieItem = React.createClass({
  

  render: function () {
    return (
      React.createElement('li', {
          id: this.props.movie.id
        },
        React.createElement(MovieTitle, {
          title: this.props.movie.title
        }),
        React.createElement(MovieDirector, {
          director: this.props.movie.director
        }),
        React.createElement(MovieGenre, {
          genre: this.props.movie.genre
        }),
        React.createElement(MovieYear, {
          year: this.props.movie.year
        }),
        React.createElement(MovieImage, {
          img: this.props.movie.img
        })
      )
    );
  }
});



var moviesElements = movies.map(function (movie) {
  return React.createElement(SingleMovieItem, {
    key: movie.id,
    movie: movie
  });
});

var moviesList = React.createClass({
  
  render: function () {
    return (React.createElement('ul', {}, moviesElements));
  }
});


var element = React.createElement('div', {},
  React.createElement('h1', {}, 'Lista filmów:'),
  React.createElement(moviesList, {}) 
);

ReactDOM.render(element, document.getElementById('app'));