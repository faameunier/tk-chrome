import React, { PureComponent } from 'react';
import Button from 'react-bootstrap/Button';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const RESTORE = 'RESTORE';

class Home extends PureComponent {

    constructor(props){
        super(props);
        this.state = {renderSaveBoolean:false};

    }
    componentDidMount(){
        chrome.storage.local.get(['closed_history'], (result)=>{
            const closed_history = result.closed_history || [];
            this.setState({closed_history});
            console.log("DidMOunt", closed_history.length, closed_history)
        });
        chrome.storage.local.get(['closed_history'], (result)=>{ //WARNING REPLACE WITH PROPER path
            const nextList = result.closed_history || [];
            this.setState({nextList});
        });

    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.renderSaveBoolean){
            this.saveToChrome();
        }
    }

    removeItem(key){
        let items = this.state.closed_history;
        this.restoreTab(items, key, RESTORE);
        items.splice(key, 1);
        this.setState({closed_history:items, renderSaveBoolean:true});
    }
    removeNextItem(key){
        let items = this.state.nextList;
        this.restoreTab(items, key, RESTORE);
        items.splice(key, 1);
        this.setState({nextList:items, renderSaveBoolean:true});

    }
    restoreTab(items, key, messageType){
        const restoredTab = items[key];
        chrome.runtime.sendMessage({messageType: messageType, tabId: restoredTab.tabId}, function(response) {
                console.log('ANSWER restore',response.answer);
        });
        //chrome.tabs.create({ url: restoredTab.full_url, active: false });
    }
    saveToChrome(){
        console.log("SAVING", this.state.closed_history.length);
        // chrome.storage.local.get(['closed_history'], (result)=>{
        //     const closed_history = result.closed_history || [];
        //     this.setState({closed_history, renderSaveBoolean:false});
        //     console.log("DidMOunt", closed_history.length, closed_history)
        // });
        this.setState({renderSaveBoolean:false});


    }
    renderList(listToBeRendered){
        const {classes} = this.props;

        let selectedList;
        switch(listToBeRendered){
            case("NEXT"):
                selectedList = this.state.nextList? this.state.nextList:[];
                break;
            default:
                selectedList = this.state.closed_history? this.state.closed_history:[];

        }
        const isNext = listToBeRendered==="NEXT";
        return(
                <div className="card-body">
                    <Typography variant="h6" className={classes.greenTitle}>
                        {isNext ?"Next tabs to be closed":"Tabs closed today"}
                      </Typography>
                      <div>
                        <List dense={true} className={classes.listItems}>
                          {selectedList.length===0 ?
                            <p>Removed list is empty.</p> :
                              selectedList.map((website,i) => (
                            <ListItem key={i}>
                              <ListItemAvatar>
                                <Avatar alt={website.title} src={website.favIconUrl} />
                              </ListItemAvatar>
                              <ListItemText
                                primary={website.url}
                                secondary={website.title}
                                className={classes.itemText}
                              />
                              <ListItemSecondaryAction>
                                  <Button
                                    size="large"
                                    onClick={isNext? this.removeNextItem.bind(this, i): this.removeItem.bind(this, i)}
                                    variant="outline-primary"
                                    className={classes.button}
                                  >
                                    {isNext? "Skip":"Restore"}
                                  </Button>
                              </ListItemSecondaryAction>
                            </ListItem>))}
                        </List>
                  </div>
           </div>)

    }
    render(){
        const {classes} = this.props;
        const numberClosedTabsLastHour = this.state.closed_history? this.state.closed_history.length:0;
        return(
            <div className="card todo-list-container">
                <div className="card-body">
                    <Typography variant="h3" className={classes.title}>

                          <Typography  className={classes.boldText}>{numberClosedTabsLastHour} Tabs</Typography>
                          <Typography className={classes.middleText}> were closed in the last </Typography>
                          <Typography className={classes.boldText}> hour! </Typography>
                    </Typography>
                </div>
                {this.renderList.bind(this)("REMOVED")}
                {this.renderList.bind(this)("NEXT")}
            </div>)
    }

}

export default Home;
