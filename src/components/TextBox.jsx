var React = require('react');

var TextBox = new React.createClass({
  getInitialState: function() {
    return {value: ''};
  },
  onChange: function(e) {
    this.setState({value: e.target.value});
  },
  clear: function() {
    this.setState({value: ''});
  },
  setValue: function(str) {
    this.setState({value: str});
  },
  getValue: function() {
    return this.state.value;
  },
  render: function() {
    var txtStyle = {
      width: 'auto',
      height: 'auto',
      padding: '6px 12px'
    };

    if(this.props.width) {
      txtStyle.width = this.props.width;
    }
    if(this.props.height) {
      txtStyle.height = this.props.height;
    }
    if(this.props.padding) {
      txtStyle.padding = this.props.padding;
    }

    var opts = {};
    if(this.props.readOnly && this.props.readOnly == "false") {
        opts['readOnly'] = 'readOnly';
    }

    return (
      <div className="form-group">
        <input className="form-control" style={txtStyle} type={this.props.type}
          placeholder={this.props.placeholder} value={this.state.value} onChange={this.onChange} {...opts}/>
      </div>
    );
  }
});

module.exports = TextBox;
