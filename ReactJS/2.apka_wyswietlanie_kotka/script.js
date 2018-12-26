var GalleryItem = React.createClass({
  propTypes: {
    image: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('div', {},
        React.createElement('h2', {}, this.props.image.name),
        React.createElement('h2', {}, this.props.image.opis),
        React.createElement('img', {src: this.props.image.src})
      )
    )
  },
});

var kocisko = {
  name: 'Kotek',
  src: 'http://nauka-gry-na-keyboardzie.pl/wp-content/uploads/2017/06/kotek-dla-dzieci.jpg',
  opis: 'to bardzo mądry kotek!'

};

var element = React.createElement(GalleryItem, {image: kocisko});

ReactDOM.render(element, document.getElementById('app'));




// var GalleryItem = React.createClass({
//   propTypes: {
//     image: React.PropTypes.object.isRequired,
//   },

//   render: function() {
//     return (
//       React.createElement('div', {},
//         React.createElement('h2', {}, this.props.name),
//         React.createElement('h2', {}, this.props.opis),
//         React.createElement('img', {src: this.props.src})
//       )
//     )
//   },
// });



// var element = React.createElement(GalleryItem, {
//   name: 'Kotek',
//   src: 'http://nauka-gry-na-keyboardzie.pl/wp-content/uploads/2017/06/kotek-dla-dzieci.jpg',
//   opis: 'to bardzo mądry kotek!'

// });

// ReactDOM.render(element, document.getElementById('app'));



