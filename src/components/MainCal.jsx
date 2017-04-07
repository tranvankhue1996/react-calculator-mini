var React = require('react');
var TextBox = require('./TextBox.jsx');
var Button = require('./Button.jsx');

var MainCal = React.createClass({
  onClear: function() {
    this.refs.txta.clear();
    this.refs.txtb.clear();
    this.refs.txtResult.clear();
  },
  onClick: function(val,e) {
    var a = parseInt(this.refs.txta.getValue());
    var b = parseInt(this.refs.txtb.getValue());
    var result = 0;

    switch(val) {
      case "add":
        result = a + b;
        break;
      case "sub":
        result = a - b;
        break;
      case "div":
        result = a / b;
        break;
      case "mul":
        result = a * b;
        break;
    }

    this.refs.txtResult.setValue(result.toString());
  },
  render: function() {
    var stylePanel = { background: 'silver' };
    return (
      <div className="panel panel-default">
        <div className="panel-body" style={stylePanel}>
          <div className="row">
            <div className="center">
              <h1>Simple Calculator</h1>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-6">
              <TextBox type="number" placeholder="NUMBER e.g. 1337" width="100%" height="35px" ref="txta" />
            </div>
            <div className="col-md-6">
              <TextBox type="number" placeholder="NUMBER e.g. 1337" width="100%" height="35px" ref="txtb" />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-3">
              <Button content="+ Add" addClass="btn btn-primary" width="100%" ref="btnDigits" onClick={this.onClick.bind(this,"add")} />
            </div>
            <div className="col-md-3">
              <Button content="- Subtract" addClass="btn btn-primary" width="100%" ref="btnDigits" onClick={this.onClick.bind(this,"sub")} />
            </div>
            <div className="col-md-3">
              <Button content="/ Divide" addClass="btn btn-primary" width="100%" ref="btnDigits" onClick={this.onClick.bind(this,"div")} />
            </div>
            <div className="col-md-3">
              <Button content="* Multiply" addClass="btn btn-primary" width="100%" ref="btnDigits" onClick={this.onClick.bind(this,"mul")} />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-9">
              <TextBox type="text" placeholder="result" width="100%" height="40px" readOnly="false" ref="txtResult" />
            </div>
            <div className="col-md-3">
              <Button content="Clear" addClass="btn btn-danger" width="100%" height="40px" padding="5 0" onClick={this.onClear} />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = MainCal;
