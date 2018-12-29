 var GIPHY_LOADING_URL = "assets/tomato.gif"
var styles = {
  
  
  border: '1px solid black',
  borderRadius: '15px',
  margin: '20px'

  
};

Gif = React.createClass({
  getUrl: function() {
    return this.props.sourceUrl;
  },
  

  render: function() {
    var url = this.props.loading ? GIPHY_LOADING_URL : this.props.url;

    return (
      <div style={styles}>
      
        <a href={this.getUrl()} title={this.getUrl()} target='new'>
          <img id='gif' src={url}/>
        </a>
      </div>
    );
  }
});





