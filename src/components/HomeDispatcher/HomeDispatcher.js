import React, { PureComponent } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Settings from '../Settings';
import Home from '../Home';



class HomeDispatcher extends PureComponent {
    constructor(props){
        super(props);
        this.state = {appBarValue:"HOME"};

    }
    componentDidMount(){
        this.setState({appBarValue:"HOME"});
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.appBarValue !== this.state.appBarValue){
            console.log(this.state.appBarValue);
        }
    }
    handleChange(event, newValue){
        this.setState({appBarValue: newValue});

    }
     dispatchPage(){
         switch(this.state.appBarValue){
             case('HOME'):
                 return(<Home/>);
             case('SETTINGS'):
                 return(<Settings/>);
             default:
                 return(<div>This is an error page</div>);

         }
     }

    render(){
        const {classes} = this.props;
        return(
            <div className={classes.homeContainer}>
                <Paper square>
                  <Tabs
                    value={this.state.appBarValue? this.state.appBarValue : "HOME"}
                    onChange={(e,v) => this.handleChange(e,v)}
                  >
                    <Tab label="Home" value={"HOME"} className={classes.tab}/>
                    <Tab label="Settings" value={"SETTINGS"} className={classes.tab}/>
                    {/*<Tab label="Debug" value={"DEBUG"} disabled className={classes.tab}/>*/}
                  </Tabs>
                    <div>{this.dispatchPage()}</div>
                </Paper>
            </div>
        )
    }

}

export default HomeDispatcher;



