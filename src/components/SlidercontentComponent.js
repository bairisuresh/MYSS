import React from 'react';
require('styles//SliderContent.scss');
var Content = React.createClass({
  render: function() {
    var contentClass = this.props.isOpen ? 'content open' : 'content';
    return (
      <div className={contentClass}>I am content fill me up!</div>
    );
  }
});
export default Content
