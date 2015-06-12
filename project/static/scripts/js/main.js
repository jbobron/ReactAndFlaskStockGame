(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/** @jsx React.DOM */


var App = React.createClass({displayName: "App",

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
      React.createElement("div", null, 
        React.createElement("div", {className: "col-md-2 sideBar"}, 
          React.createElement(SideBar, null)
        ), 
        React.createElement("div", {className: "col-md-10 content"}, 
          React.createElement("div", {className: "col-md-9"}, 
            React.createElement(Content, null)
          ), 
          React.createElement("div", {className: "col-md-1"}, 
            React.createElement("h1", null, "chat")
          )
        )
      )
    )
  }

});

var SideBar = React.createClass({displayName: "SideBar",
  render: function() {
    return (
      React.createElement("div", null, 
      React.createElement("h1", null, "Sidebar"), 
      React.createElement("ul", null, 
        React.createElement("li", null, "Portfolio"), 
        React.createElement("li", null, "Trade"), 
        React.createElement("li", null, "Performance")
      )
      )
    );
  }
});

var Content = React.createClass({displayName: "Content",
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("div", {className: "col-md-12 stats"}, 
          React.createElement(TopStats, null)
        ), 
        React.createElement("div", {className: "col-md-12 searchAndGraph"}, 
          React.createElement(SearchForGraph, null), 
          React.createElement(Graph, null)
        ), 
        React.createElement("div", {className: "col-md-12 portfolio"}, 
          React.createElement(TableForPortfolio, null)
        )
      )
    );
  }
});

var TopStats = React.createClass({displayName: "TopStats",
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("div", {className: "col-md-4"}, 
          React.createElement("h2", null, "Total Assets"), 
          React.createElement("p", null, " add props here")
        ), 
        React.createElement("div", {className: "col-md-4"}, 
          React.createElement("h2", null, "# of Trades"), 
          React.createElement("p", null, "add props here")
        ), 
        React.createElement("div", {className: "col-md-4"}, 
          React.createElement("h2", null, "Todays Gain"), 
          React.createElement("p", null, "add props here")
        )
      )
    );
  }
});

var SearchForGraph = React.createClass({displayName: "SearchForGraph",
 
  render: function() {
    return (
      React.createElement("div", {className: "searchIndexPage col-md-6"}, 
        React.createElement("form", {className: "searchForm", action: "", method: "post"}, 
          React.createElement("input", {name: "ticker", type: "text", className: "searchTicker", id: "ticker", placeholder: "Enter Ticker..."})
        )
        
      )
    );
  }
});

var Graph = React.createClass({displayName: "Graph",
  render: function() {
    return (
      React.createElement("div", {className: "graphIndexPage col-md-6"}, 
      React.createElement("p", null, "Graph here")
      )
    );
  }
});

var TableForPortfolio = React.createClass({displayName: "TableForPortfolio",
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("h1", null, "Portfolio"), 
        React.createElement("div", {class: "table-responsive"}, 
          React.createElement("table", {className: "table table-striped"}, 
            React.createElement("tbody", null, 
               React.createElement(TableHeaders, null), 
                React.createElement(TableRows, null)
            )
          )
        )
      )
    );
  }
});

var TableHeaders = React.createClass({displayName: "TableHeaders",
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("tr", null, 
          React.createElement("th", null, "Ticker"), 
          React.createElement("th", null, "Shares"), 
          React.createElement("th", null, "Purchase Price"), 
          React.createElement("th", null, "Purchase Date"), 
          React.createElement("th", null, "Current Price"), 
          React.createElement("th", null, "$ change"), 
          React.createElement("th", null, "% of portfolio")
        )
      )
    );
  }
});

var TableRows = React.createClass({displayName: "TableRows",
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("tr", null, 
          React.createElement("td", null, "GOOG"), 
          React.createElement("td", null, "20"), 
          React.createElement("td", null, "357.02"), 
          React.createElement("td", null, "3/12/14"), 
          React.createElement("td", null, "302.94"), 
          React.createElement("td", null, "53"), 
          React.createElement("td", null, "10%")
        )
      )
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
  React.createElement(App, null),
  document.getElementById('main')
);

},{}]},{},[1])