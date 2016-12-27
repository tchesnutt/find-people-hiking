import React from 'react';
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, TextField, Toggle } from 'material-ui';


class DataTable extends React.Component {
  constructor(props){
    super(props)
    if(this.props.path){
      // might have to add selected attribute to each data point
      this.data = this.props.path
    } else {
      this.data = {
        markers:[{
          lat: 'You need to hit',
          lng: "the upload data button!"
        }]
      };
    }
    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: true,
      showRowHover: true,
      selectable: true,
      multiSelectable: true,
      enableSelectAll: true,
      deselectOnClickaway: false,
      showCheckboxes: true,
      height: '100%',
      width: '100%',
    };
  }

  render(){
    return(
      <section className='data-table'>
        <Table
          height={this.state.height}
          width={this.state.width}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}>
            {this.data.markers.map( (row, index) => (
              <TableRow key={index} selected={row.selected}>
                <TableRowColumn>{index + 1}</TableRowColumn>
                <TableRowColumn>{row.lat}</TableRowColumn>
                <TableRowColumn>{row.lng}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
        </Table>
      </section>
    )
  }
}

export default DataTable;
