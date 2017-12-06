import React from 'react';

class Title extends React.Component {
    get data(){
        console.log(this.props.data);
        return this.props.data.map( list => {
            <h1 key={list.id}>aaaa</h1>
        });
    }

    render() {
        return (
            <div>
                {this.data}
            </div>
        );
    }
}

export default Title;