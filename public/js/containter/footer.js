import React from 'react';
import {connect} from 'react-redux'
const Footer = React.createClass({
    filter(filtername){
        this.props.onfilter(filtername);
    },

    render(){
        return <div>
            <span onClick={this.filter.bind(this,'ALL')}>ALL </span>
            <span onClick={this.filter.bind(this,'COMPLETE')}>COMPLETE </span>
            <span onClick={this.filter.bind(this,'ACTIVE')}>ACTIVE </span>
        </div>
    }
})

function mapDispatchToProps(dispatch) {
    return {
        onfilter: (filtername)=> {
            dispatch({type:"FILTER",filtername});
        }
    }
}

export default connect(()=>{return {}},mapDispatchToProps)(Footer);