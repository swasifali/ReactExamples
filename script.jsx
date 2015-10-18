
var Card = React.createClass({
    getInitialState: function(){  
         return {};  
     },  
       
     componentDidMount: function(){  
       var component = this;  
       $.get('https://api.github.com/users/' + this.props.login, function(data){  
         component.setState(data);  
        });  
     },  
       
     render: function(){  
       return (  
         <div>  
          <a href={this.state.html_url}> <img src={this.state.avatar_url} alt={this.state.login} width="80"/> </a>  
          <h1> {this.state.name} </h1>  
          <hr/>  
         </div>  
       )  
     }  
});

var Main = React.createClass({
  
  getInitialState: function() {
    return {logins: ['shanselman', 'torvalds', 'petehunt', 'zpao', ]};
  },
  
  render: function() {
    var cards = this.state.logins.map(function(login){
      return(<Card login={login} />);
    });
    
    return (
        <div>
        {cards}
        </div>
      )
  }
});

ReactDOM.render(
    <Main />,
    document.getElementById('root')
  );