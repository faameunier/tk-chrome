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
        // this.state = {removedList:items, renderSaveBoolean:false,
        //     nextList:nextItems};
        // chrome.storage.local.set({removedList:items, nextList:nextItems});
        this.state = {renderSaveBoolean:false};

    }
    componentDidMount(){
        chrome.storage.local.get(['removedList'], (result)=>{
            const removedList = result.removedList || [];
            this.setState({removedList});
        });
        chrome.storage.local.get(['nextList'], (result)=>{
            const nextList = result.nextList || [];
            this.setState({nextList});
        });
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.renderSaveBoolean){
            this.saveToChrome();
            this.setState({myBoolean:false});
        }
    }

    removeItem(key){
        let items = this.state.removedList;
        items.splice(key, 1);
        this.setState({removedList:items, renderSaveBoolean:true});

    }
    removeNextItem(key){
        let items = this.state.nextList;
        items.splice(key, 1);
        this.setState({nextList:items, renderSaveBoolean:true});
    }
    saveToChrome(){
        chrome.storage.local.set({removedList: this.state.removedList, nextList: this.state.nextList});
    }
    renderList(listToBeRendered){
        const {classes} = this.props;

        let selectedList;
        switch(listToBeRendered){
            case("NEXT"):
                selectedList = this.state.nextList? this.state.nextList:[];
                break;
            default:
                selectedList = this.state.removedList? this.state.removedList:[];

        }
        const isNext = listToBeRendered==="NEXT";
        return(
                <div className="card-body">
                    <Typography variant="h6" className={classes.greenTitle}>
                        {isNext ?"Next tabs to be closed":"Tabs closed today"}
                      </Typography>
                      <div>
                        <List dense={true}>
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
                                primary={website}
                                secondary={false ? 'Secondary text' : null}
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
