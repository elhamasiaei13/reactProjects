import React, { Component } from 'react'
import Select from 'react-select'
import Async from 'react-select/async';

// const opts=["a","b"]
class PortfolioSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            menuIsOpen: false,
            show: true,
            openMenu: false,
            opts: [
                { label: 'any', value: 1 }, { label: 'Two', value: 2 }, { label: 'any', value: 1 }, { label: 'Two', value: 2 },
                { label: 'any', value: 1 }, { label: 'Two', value: 2 }, { label: 'any', value: 1 }, { label: 'Two', value: 2 },
                { label: 'any', value: 1 }, { label: 'Two', value: 2 }, { label: 'any', value: 1 }, { label: 'Two', value: 2 },
                { label: 'any', value: 1 }, { label: 'Two', value: 2 }, { label: 'any', value: 1 }, { label: 'Two', value: 2 },
                { label: 'any', value: 1 }, { label: 'Two', value: 2 }, { label: 'any', value: 1 }, { label: 'Two', value: 2 }
            ]
        }
    }
    onInputChange = (query, { action }) => {
        console.log("query", query, action);
        // Prevents resetting our input after option has been selected
        if (action !== "set-value") {
            this.setState({ inputValue: query,openMenu:true });
            //query to bacend
        }

    }

    render() {
        const { show, inputValue, opts, openMenu } = this.state
        {
            return (
                <Select
                    menuIsOpen={true}
                    openMenuOnClick={openMenu}
                    // isLoading={true}
                    inputValue={inputValue}
                    loadOptions={() => { console.log("loadOptions") }}
                    defaultMenuIsOpen={false}
                    isMulti
                    id="portf"
                    options={opts}
                    // closeMenuOnSelect={false}
                    // menuIsOpen={true}I
                    onChange={() => console.log("object")}
                    placeholder="Select Portfolio"
                    // closeMenuOnSelect={true}
                    closeMenuOnScroll={false}
                    onBlur={() => { console.log("onBlur") }}
                    getValue={() => { console.log("setValue") }}
                    controlShouldRenderValue={true}
                    autoFocus={() => { console.log("autoFocus") }}
                    onInputChange={this.onInputChange} //the function to handle our search input


                />
            )
        }


    }
}

export default PortfolioSelector;