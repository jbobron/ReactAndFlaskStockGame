/** @jsx React.DOM */


var App = React.createClass({

  // sets initial state
  getInitialState: function(){
    return { searchString: '' };
  },

  // sets state, triggers render method
  handleChange: function(event){
    // grab value form input box
    this.setState({searchString:event.target.value});
    console.log("scope updated!")
  },

  render: function() {

    var countries = this.props.items;
    var searchString = this.state.searchString.trim().toLowerCase();

    // filter countries list by value from input box
    if(searchString.length > 0){
      countries = countries.filter(function(country){
        return country.name.toLowerCase().match( searchString );
      });
    }

    return (
      <div>
        <div className='col-md-2 sideBar'>
          <SideBar />
        </div>
        <div className='col-md-10 content'>
          <div className='col-md-9'>
            <Content/>
          </div>
          <div className='col-md-1'>
            <h1>chat</h1>
          </div>
        </div>
      </div>
    )
  }

});

var SideBar = React.createClass({
  render: function() {
    return (
      <div>
      <h1>Sidebar</h1>
      <ul>
        <li>Portfolio</li>
        <li>Trade</li>
        <li>Performance</li>
      </ul>
      </div>
    );
  }
});

var Content = React.createClass({
  render: function() {
    return (
      <div>
        <div className="col-md-12 stats">
          <TopStats/>
        </div>
        <div className="col-md-12 searchAndGraph">
          <SearchForGraph />
          <Graph />
        </div>
        <div className="col-md-12 portfolio">
          <TableForPortfolio/>
        </div>
      </div>
    );
  }
});

var TopStats = React.createClass({
  render: function() {
    return (
      <div>
        <div className="col-md-4">
          <h2>Total Assets</h2>
          <p> add props here</p>
        </div>
        <div className="col-md-4">
          <h2># of Trades</h2>
          <p>add props here</p>
        </div>
        <div className="col-md-4">
          <h2>Todays Gain</h2>
          <p>add props here</p>
        </div>
      </div>
    );
  }
});

var SearchForGraph = React.createClass({
 
  render: function() {
    return (
      <div className="searchIndexPage col-md-6">
        <form className="searchForm" action="" method="post">
          <input name="ticker" type="text" className="searchTicker" id="ticker" placeholder="Enter Ticker..."/>
        </form>
        
      </div>
    );
  }
});

var Graph = React.createClass({
  render: function() {
    return (
      <div className="graphIndexPage col-md-6">
      <p>Graph here</p>
      </div>
    );
  }
});

var TableForPortfolio = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Portfolio</h1>
        <div class="table-responsive">
          <table className="table table-striped">
            <tbody>
               <TableHeaders/>
                <TableRows/>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
});

var TableHeaders = React.createClass({
  render: function() {
    return (
      <div>
        <tr>
          <th>Ticker</th>
          <th>Shares</th>
          <th>Purchase Price</th>
          <th>Purchase Date</th>
          <th>Current Price</th>
          <th>$ change</th>
          <th>% of portfolio</th>
        </tr>
      </div>
    );
  }
});

var TableRows = React.createClass({
  render: function() {
    return (
      <div>
        <tr>
          <td>GOOG</td>
          <td>20</td>
          <td>357.02</td>
          <td>3/12/14</td>
          <td>302.94</td>
          <td>53</td>
          <td>10%</td>
        </tr>
      </div>
    );
  }
});


// list of countries, defined with JavaScript object literals
var countries = [
  {"name": "Sweden"}, {"name": "China"}, {"name": "Peru"}, {"name": "Czech Republic"},
  {"name": "Bolivia"}, {"name": "Latvia"}, {"name": "Samoa"}, {"name": "Armenia"},
  {"name": "Greenland"}, {"name": "Cuba"}, {"name": "Western Sahara"}, {"name": "Ethiopia"},
  {"name": "Malaysia"}, {"name": "Argentina"}, {"name": "Uganda"}, {"name": "Chile"},
  {"name": "Aruba"}, {"name": "Japan"}, {"name": "Trinidad and Tobago"}, {"name": "Italy"},
  {"name": "Cambodia"}, {"name": "Iceland"}, {"name": "Dominican Republic"}, {"name": "Turkey"},
  {"name": "Spain"}, {"name": "Poland"}, {"name": "Haiti"}
];

React.render(
  <App />,
  document.getElementById('main')
);