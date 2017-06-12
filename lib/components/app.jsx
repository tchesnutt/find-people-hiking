import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { cyan500, cyan700, grey400, pinkA200, grey100, grey500, grey300, darkBlack, white, fullBlack } from 'material-ui';
import ToolBar from './toolbar/app_toolbar_container';
import Maps from './maps/maps_container';
import DataTable from './datatable/data_table_container';
import Finder from './finder/finder_container';
import Joyride from 'react-joyride'

const customTheme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: cyan500,
    primary2Color: '#1A5FFF',
    primary3Color: cyan700,
    accent1Color: pinkA200,
    accent2Color: '#1A5FFF',
    accent3Color: grey500,
    textColor: darkBlack,
    secondaryTextColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: darkBlack,
    pickerHeaderColor: cyan500,
    clockCircleColor: darkBlack,
    shadowColor: fullBlack
  }
});


class App extends React.Component {
  constructor(props) {
    super(props);
    const steps = [
      {
        title: 'Uploading a Trail',
        text: 'Click this button and either use the Pacific Coast Trail as default or simply drag your own into the box!',
        selector: '.first-step',
        trigger: '.first-step',
        position: 'bottom',
        type: 'hover',
        isFixed: true,
      },
      {
        title: 'The Map',
        text: 'The trail will then show up here as a red line.',
        selector: '.second-step',
        trigger: '.second-step',
        position: 'right',
        type: 'hover',
        isFixed: false,
      },
      {
        title: 'The Data Table',
        text: 'You will also see the first 100 points on your trail listed here. For each point click the update button to bring up a modal to update the point.',
        selector: '.the-table',
        trigger: '.the-table',
        position: 'left',
        type: 'hover',
        isFixed: false,
      },
      {
        title: 'The Selector',
        text: 'Here you can select what range of points you would like to view in the data table.',
        selector: '.left-options',
        trigger: '.left-options',
        position: 'left',
        type: 'hover',
        isFixed: false,
      },
      {
        title: 'Deleting',
        text: 'To delete point(s) from the trail. Select the ones you wish gone in the data table by clicking the white square on the left. Then, hit this button! ProTip: to select all points in the table click the white square on the left in the header.',
        selector: '.delete-button',
        trigger: '.delete-button',
        position: 'left',
        type: 'hover',
        isFixed: false,
      },
      {
        title: 'Adding Points',
        text: 'Fill out this form and hit the Add Point button to add a point to your trail! If the Mile Number already exists the new data will overwrite the old.',
        selector: '.add-point',
        trigger: '.add-point',
        position: 'left',
        type: 'hover',
        isFixed: false,
      },
      {
        title: 'Find Your Hiker',
        text: 'Plug in the coordinates of where your person is and hit the button. The map will then zoom to that point and a black line will be drawn between it and the closest point on the trail. White text of the actual distace will appear below the button.',
        selector: '.haversine',
        trigger: '.haversine',
        position: 'left',
        type: 'hover',
        isFixed: false,
      },
    ]

    this.state = {
      joyrideOverlay: true,
      joyrideType: 'continuous',
      isReady: true,
      isRunning: false,
      stepIndex: 0,
      steps: steps
    };
  }


  next() {
    this.joyride.next();
  }

  render(){
    return (
      <div>
        <Joyride
          ref='joyride'
          debug={false}
          locale={{
            back: (<span>Back</span>),
            close: (<span>Close</span>),
            last: (<span>Close</span>),
            next: (<span>Next</span>),
            skip: (<span>Skip</span>),
          }}
          run={true}
          autoStart={false}
          showOverlay={this.state.joyrideOverlay}
          showSkipButton={true}
          showStepsProgress={true}
          stepIndex={0}
          scrollToSteps={false}
          steps={this.state.steps}
          type={this.state.joyrideType}
          />
        <div id="page-wrapper">
          <div className="container-fluid">
            <MuiThemeProvider muiTheme={customTheme}>
              <section className='root'>
                <section className='top'>
                  <ToolBar/>
                </section>
                <secton className='main-page'>
                  <Maps/>
                  <section className='right'>
                    <Finder/>
                    <DataTable/>
                  </section>
                </secton>
              </section>
            </MuiThemeProvider>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
