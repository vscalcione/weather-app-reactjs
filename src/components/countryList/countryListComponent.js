import React, { Component } from 'react';
import './countryListComponent.css';

// note that you can also export the source data via CountryRegionData. It's in a deliberately concise format to 
// keep file size down
import { CountryDropdown } from 'react-country-region-selector';


export class CustomCountryDropdown extends Component {
  constructor (props) {
    super(props);
    this.state = { country: '', region: '' };
  }

  selectCountry (val) {
    this.setState({ country: val });
  }

  selectRegion (val) {
    this.setState({ region: val });
  }

  render () {
    const { country } = this.state;
    return (
      <div>
        <CountryDropdown classes="custom-select"
          value={country}
          onChange={(val) => this.selectCountry(val)} 
          name="country" />
      </div>
    );
  }
}

/*import React, { Component } from 'react';
import Select from 'react-select'
import countryList from 'react-select-country-list'
 
export default class CountrySelector extends Component {
  constructor(props) {
    super(props)
 
    this.options = countryList().getData()
 
    this.state = {
      options: this.options,
      value: null,
    }
  }
 
  changeHandler = value => {
    this.setState({ value })
  }
 
  render() {
    return (
      <Select
        name="country" 
        options={this.state.options}
        value={this.state.value}
        onChange={this.changeHandler}
      />
    )
  }
}
*/
