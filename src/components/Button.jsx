var React = require('react');

var Button = React.createClass({
  getValue: function() {
    return this.props.content;
  },
  render: function() {
    var btnStyle = {
      width: 'auto',
      height: 'auto',
      padding: '0'
    };
    var btnClass = 'btn btn-primary';

    if(this.props.width) {
      btnStyle.width = this.props.width;
    }
    if(this.props.height) {
      btnStyle.height = this.props.height;
    }
    if(this.props.padding) {
      btnStyle.padding = this.props.padding;
    }
    if(this.props.addClass) {
      btnClass = this.props.addClass;
    }
    return (
      <div className="form-group">
        <button className={btnClass} style={btnStyle} onClick={this.props.onClick}>{this.props.content}</button>
      </div>
    );
  }
});

module.exports = Button;
