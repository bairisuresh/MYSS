import React from 'react';
import ListComponent from '../components/ListComponent';

var  ListData = React.createClass ({

    loadListData: function() {
      $.ajax({
        url: './sources/'+this.props.title+'.json',
        dataType: 'json',
        success: function(data) {
          this.setState({data: data});
        }.bind(this),
        error: function(xhr, status, err) {
          console.error('#GET Error', status, err.toString());
        }.bind(this)
      });
    },

    getInitialState: function(){
        return {
         data: {
            listdata: []
         }
      };
    },

    componentDidMount: function() {
      this.loadListData();
    },

  render() {
    return <ListComponent data={this.state.data}/>;
  }
});

export default ListData;
