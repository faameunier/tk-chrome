import React, { PureComponent } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';


function CrossButton(props){
    return(<Button type="button" className="close" aria-label="Close" onClick={()=>props.removeItem(props.itemKey)}><span aria-hidden="true">&times;</span></Button>)
}

class Home extends PureComponent {
    constructor(props){
        super(props);


        this.state = {removedList:["www.amazon.com", "www.youtube.com"], item:'',
            nextList:["www.linkedin.com"]};
        let items = this.state.removedList;
        let nextItems = this.state.nextList;

        chrome.storage.local.set({removedList:items, nextList:nextItems});
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
        console.log("State", this.state);
    }
    componentDidUpdate(prevProps, prevState) {
    }

    removeItem(key){
        console.log("RemoveItem in da loop, n°", key);
        this.setState((prevState)=>{
            let items = prevState.removedList;//this.selectCorrectList(selectedList, prevState);
            items.splice(key, 1);
            chrome.storage.local.set({removedList:items});
            return {removedList: items}

        });
    }
    removeNextItem(key){
        console.log("Remove nextList in da loop n°", key);
        this.setState((prevState)=>{
            let items = prevState.nextList;//this.selectCorrectList(selectedList, prevState);
            items.splice(key, 1);
            chrome.storage.local.set({nextList:items});
            return {nextList: items}

        });
    }
    addItem(selectedList){
        if(!this.state.item)
            return;
        this.setState((prevState)=>{
            let items =  this.selectCorrectList(selectedList, prevState);
            items.push(prevState.item);
            chrome.storage.local.set({selectedList:items});
            return {selectedList: items, item:''};
        });
    }
    renderList(listToBeRendered){
        const {classes} = this.props;

        let selectedList;
        switch(listToBeRendered){
            case("NEXT"):
                selectedList = this.state.nextList;
                console.log("NEXT case", selectedList);
                break;
            default:
                selectedList = this.state.removedList;

        }
        const isNext = listToBeRendered==="NEXT";
        return(
                <div className="card-body">
                    <Typography variant="h6" className={classes.title}>
                        {isNext ?"Next tabs":"Tabs closed today"}
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
                                <IconButton edge="end" aria-label="delete"  onClick={isNext?
                                    this.removeNextItem.bind(this): this.removeItem.bind(this)}>
                                  <RestoreIcon/>
                                </IconButton>
                              </ListItemSecondaryAction>
                            </ListItem>))}
                        </List>
                  </div>
           </div>)

    }
    render(){
        const {classes} = this.props;
        return(
            <div className="card todo-list-container">

                {this.renderList.bind(this)("REMOVED")}
                {this.renderList.bind(this)("NEXT")}
            </div>)
    }

}

export default Home;
