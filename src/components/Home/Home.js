import React, { PureComponent } from 'react';
import Button from 'react-bootstrap/Button';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';


class Home extends PureComponent {

    constructor(props){
        super(props);
        // IF YOU WANT TO INJECT NEW ITEMS
        // let items = ["www.amazon.com", "www.youtube.com","www.amazon.com", "www.youtube.com","www.amazon.com", "www.youtube.com"];
        // let nextItems = ["www.linkedin.com","www.amazon.com", "www.youtube.com","www.linkedin.com",];
        //
        // this.state = {closed_history:items, renderSaveBoolean:false,
        //     nextList:nextItems};
        // chrome.storage.local.set({closed_history:items, nextList:nextItems});
        this.state = {renderSaveBoolean:false};

    }
    componentDidMount(){
        chrome.storage.local.get(['closed_history'], (result)=>{
            const closed_history = result.closed_history || [];
            this.setState({closed_history});
            console.log("DidMOunt", closed_history.length)
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
        this.restoreTab(items, key);
        items.splice(key, 1);
        this.setState({closed_history:items, renderSaveBoolean:true});

    }
    removeNextItem(key){
        let items = this.state.nextList;
        this.restoreTab(items, key);
        items.splice(key, 1);
        this.setState({nextList:items, renderSaveBoolean:true});
    }
    restoreTab(items, key){
        const restoredTab = items[key];
        chrome.tabs.create({ url: restoredTab.full_url, active: false });
    }
    saveToChrome(){
        console.log("SAVING", this.state.closed_history.length);
        chrome.storage.local.set({closed_history: this.state.closed_history, nextList: this.state.nextList}, (result)=>{
            chrome.storage.local.get(['closed_history'], (result)=>{
            const closed_history = result.closed_history || [];
            console.log("AFter SAVING", closed_history.length)
            });
        });
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
                                <Avatar>
                                  <FolderIcon />
                                </Avatar>
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
        const numberClosedTabsLastHour = 6;
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
