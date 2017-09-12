import React from 'react';
import {mount} from "enzyme";
import {MuiThemeProvider} from "material-ui";
import SearchBar from "../../src/components/search_bar";

test('SearchBar test', () => {

    const doneChange = jest.fn();

    const searchBar =  mount(
        <MuiThemeProvider>
            <SearchBar onSearchTermChange={doneChange}/>
        </MuiThemeProvider>
    );

    const search = searchBar.find('input');
    //TODO: Find out why on earth cannot send the keys
    //ReactTestUtils.Simulate.keyDown(search, {key: "Enter", keyCode: 13, which: 13})
    //expect(doneChange).toBeCalledWith('1234556');
});