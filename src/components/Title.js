import React from 'react';

class Title extends React.Component {
    // get data(){
    //     return this.props.data.map( list => {
    //         <h1>list</h1>
    //     });
    // }

    render() {
        return (
            <div>
                {this.props.data}
            </div>
        );
    }
}

export default Title;