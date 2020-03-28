import React, { PureComponent } from 'react';

class Home extends PureComponent {
    constructor(props){
        super(props);
    }
    componentDidMount(){

    }
    componentDidUpdate(prevProps, prevState) {
    }

    render(){
        const {} = this.props;
        return(
            <div className="card todo-list-container">
                Hey You HOME
            </div>)
    }

}

export default Home;
