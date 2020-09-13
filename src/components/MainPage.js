import React, { Component }  from 'react';
import SearchLine from "./SearchLine";
import MainTabs from "./MainTabs"
import ProductCell from "./ProductCell";

class MainPage extends Component{
    render() {
        return (
            <ProductCell/>
            // <div>
            // <SearchLine/>
            // <MainTabs/>
            // </div>
        );
    }
}

export default MainPage