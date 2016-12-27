import React from 'react';
import UploadModal from './upload_modal_container'
import { Toolbar, ToolbarGroup, FlatButton, RaisedButton, MuiThemeProvider, getMuiTheme } from 'material-ui';


class AppToolBar extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <section className='toolbar'>
        <Toolbar>
          <ToolbarGroup>
            <RaisedButton label='Upload Path' onClick={this.props.openUploadModal}/>
          </ToolbarGroup>
        </Toolbar>
        <UploadModal/>
      </section>
    )
  }
}
export default AppToolBar;
