import React, { Component }  from 'react';

class MainTabs extends Component{
    render() {
        return (
            <div >
            <a href={"/shoes"}>Обувь</a>
            <a href={"http://localhost:3001/search"}>Одежда</a>
            </div>
        );
    }
}

export default MainTabs