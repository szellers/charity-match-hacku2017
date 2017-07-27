import React, { Component } from 'react';

import Button from './Button';
import FilterBox from './FilterBox';
import TextInput from './TextInput';
import $ from 'jquery';

export default class MainPageNavBar extends Component {
	constructor(props) {
		super(props);
    
        this.dictionary = {
                "Advocacy & Human Rights":           "1", 
                "Animals":             "2", 
                "Arts & Culture":               "3", 
                "Children & Youth":                 "4", 
                "Computers & Technology":                   "5", 
                "Crisis Support":                     "6", 
                "Education & Literacy":                       "7", 
                "Emergency & Safety":                         "8", 
                "Environment":                           "9", 
                "Homeless & Housing":                             "10", 
                "Immigrants & Refugees":                               "11", 
                "LGBTQ+":                                 "12", 
                "People with Disabilities":                                   "13", 
                "Politics":                                     "14", 
                "Race & Ethnicity":                                       "15", 
                "Seniors":                                         "16", 
                "Sports & Recreation":                                           "17", 
                "Veterans & Military Families":                                             "18", 
                "Women": "19"
        };
    	
		this.data = {};
        this.state = {value: "1"};
	}

	_onFilterEnter = (text) => {
		this.state.filters.push(text);

		this.setState({
	        filters: this.state.filters
		});
	}

	_createFilterBox = (filter) => {
		return <FilterBox name={filter} />;
	}

    _createOption = (option) => {
        return <option value={this.dictionary[option]}> {option} </option>;
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        console.log(this.state.value);
        $.ajax({
      		url: 'http://charity-matcher.devnxs.net:1234/get_events_for_category?category_id=' + this.state.value,
			type: 'GET',
      		cache: false,
      		success: function(data) {        		
				this.setState({data: data});
                console.log(this.data);
      		}.bind(this),
      		error: function(xhr, status, err) {
        		console.log(this.props.url, status, err.toString());
      		}.bind(this)
    	});     
         
    }

	render() {
		const { filters } = this.state;
		console.log(filters);
		
		return (
			<div id="search-bar-container">
			    <form>
                    <TextInput id="search" className="common-text-input" name="search" placeholder="Search" />
			        
                    <select value={this.state.value} onChange={this.handleChange}>
                        {Object.keys(this.dictionary).map(this._createOption)} 
                    </select>
            	
                    <Button className="common-btn" id="search-button" onClick={this.handleSubmit}>Submit</Button>
                </form>
			</div>
		);
	}
}
