import React from 'react';
import UploadModal from './upload_modal_container';
import { Toolbar, ToolbarGroup, RaisedButton } from 'material-ui';

const toolbarButtonStyle = {
  palette: {
    textColor: '#FFFFFF'
  }
}

class AppToolBar extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <section>
        <Toolbar className='toolbar'>
          <ToolbarGroup className='title'>
            <div className='title'>Find People Hiking</div>
          </ToolbarGroup>
          <ToolbarGroup className='toolbar-right'>
            <RaisedButton className='first-step' label='Upload Path' onClick={this.props.openUploadModal}/>
            <RaisedButton className='tour' label='Tour' onClick={this.props.startTour}/>
          </ToolbarGroup>
        </Toolbar>
        <UploadModal/>
      </section>
    )
  }
}
export default AppToolBar;
