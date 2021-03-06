import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, TextField, RaisedButton, Dialog, FlatButton } from 'material-ui';
import latLngUtils from '../../utils/lat_lng'

class DataTable extends React.Component {
  constructor(props){
    super(props)
    this.start = 0;
    this.end = 99;
    this.latitude = undefined,
    this.longitude = undefined,
    this.mile = undefined,
    this.newLatitude = NaN,
    this.newLongitude = NaN,
    this.newMile = NaN,
    this.idxUpdate = undefined,
    this.existingMile = undefined,
    this.existingPoint = {lat: undefined, lng: undefined},
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
      data: [],
      view: [],
      start: this.start,
      end: this.end,
      selected: [],
      modal: false
    };

    this.grabView = this.grabView.bind(this)
    this.handleDeleteSelected = this.handleDeleteSelected.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.update = this.update.bind(this)
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({data: nextProps.path})
  }

  grabView(start, end) {
    this.state.view = [];
    this.state.data.forEach( (el, i) => {
      if(i <= end && i >= start){
        let newEl;
        newEl = el;
        this.state.view.push(newEl)
      }
    });
  }

  handleDeleteSelected(){
    let newData = [];
    if(this.state.selected === 'all'){
      let selectedId = [];
      this.state.view.forEach( el => {selectedId.push(el.id)});
      this.state.data.forEach( el => {
        if(selectedId.includes(el.id) === false){
          newData.push(el);
        }
      });
    } else {
      let selectedId = [];
      this.state.view.forEach( (el,i) => {
        if(this.state.selected.includes(i)){
          selectedId.push(el.id);
        }
      });
      this.state.data.forEach( el => {
        if(selectedId.includes(el.id) === false){
          newData.push(el)
        };
      });
    }
    this.props.updatePath(newData);
  }

  handleToggle(rows){
    this.state.selected = rows
  }

  handleSelect(e){
    e.preventDefault();
    this.setState({start: this.start, end: this.end})
  }

  update(field){
    if(field === "start"){
      return e => {this.start = e.currentTarget.value};
    } else if (field === "end") {
      return e => {this.end = e.currentTarget.value};
    } else if (field === "latitude"){
      return e => {this.latitude = e.currentTarget.value};
    } else if (field === "longitude"){
      return e => {this.longitude = e.currentTarget.value};
    } else if (field === "mile"){
      return e => {this.mile = e.currentTarget.value};
    } else if (field === "new latitude"){
      return e => {
        if(e.currentTarget.value === ''){
          this.newLatitude = NaN;
        } else {
          this.newLatitude = e.currentTarget.value;
        }
      };
    } else if (field === "new longitude"){
      return e => {
        if(e.currentTarget.value === ''){
          this.newLongitude = NaN;
        } else {
          this.newLongitude = e.currentTarget.value;
        }
      };
    } else if (field === "new mile"){
      return e => {
        if(e.currentTarget.value === ''){
          this.newMile = NaN;
        } else {
          this.newMile = e.currentTarget.value;
        }
      }
    }
  }

  handleToggle(rows){
    this.state.selected = rows
  }

  closeModal(){
    this.idxUpdate = undefined;
    this.existingMile = undefined;
    this.existingPoint = {lat: undefined, lng: undefined},
    this.setState({modal: false})
  }

  openModal(index, id, defPos){
    this.idxUpdate = index;
    this.existingMile = id;
    this.existingPoint = defPos;
    this.setState({modal: true});
  }

  handleUpdate(e){
    e.preventDefault();
    let newData = this.state.data;
    let upLat;
    let upLng;
    let upMile;
    this.latitude === undefined ? upLat = this.existingPoint.lat : upLat = this.latitude
    this.longitude === undefined ? upLng = this.existingPoint.lng : upLng = this.longitude
    this.mile === undefined ? upMile = this.existingMile : upMile = this.mile
    let newPoint = {
        position: {lat: parseFloat(upLat), lng: parseFloat(upLng)},
        id: parseFloat(upMile),
        selected: false
      };
    newData[this.idxUpdate] = newPoint;
    this.props.updatePath(newData);
  }

  handleSubmit(e) {
    e.preventDefault();
    if(latLngUtils.validLatLng(-90, this.newLatitude, 90) && latLngUtils.validLatLng(-180, this.newLongitude, 180)) {
      if(this.state.data.length === 0) {
        let error = 'You must upload a path first';
        this.props.showError(error);
      } else {
        if(isNaN(this.newMile)) {
          let error = 'Please enter a valid mile number';
          this.props.showError(error);
        } else {
          if(this.newMile >= 0) {
            this.handleAddPoint();
          } else {
            let error = 'Mile numbers are never negative';
            this.props.showError(error);
          }
        }
      }
    } else {
      if(this.state.data.length === 0){
        let error = 'You must upload a path first';
        this.props.showError(error);
      } else {
        let error = 'You must enter valid coordinates';
        this.props.showError(error);
      }
    }
  }

  handleAddPoint(){
    let newPoint = {
      id: parseFloat(this.newMile),
      selected: false,
      position: {
        lat: parseFloat(this.newLatitude),
        lng: parseFloat(this.newLongitude)
      }
    }
    let newData = this.state.data;
    let idx = this.bsearch(newPoint.id);
    if(newData[idx].id === newPoint.id){
      newData.splice(idx, 1, newPoint);
    } else {
      newData.splice(idx, 0, newPoint);
    }
    this.props.updatePath(newData);
  }

  bsearch(newMile){
    let data = this.state.data;
    let minIdx = 0;
    let maxIdx = data.length - 1;
    let currentIdx;
    let currentEl;
    if(newMile > data[maxIdx].id){
      return maxIdx;
    }
    while(minIdx <= maxIdx){
      currentIdx = (minIdx + maxIdx) / 2 | 0;
      currentEl = data[currentIdx];
      if(currentEl.id < newMile) {
        minIdx = currentIdx + 1;
      } else if (currentEl.id > newMile) {
        maxIdx = currentIdx - 1;
      } else {
        return currentIdx;
      }
    }
    return maxIdx + 1;
  }


  render(){
    if(this.state.data.length > 0){
      this.grabView(this.state.start, this.state.end)
    };
    return(
      <section className='data-table'>
        <section className='update-point-modal'>
          <Dialog open={this.state.modal} onRequestClose={this.closeModal}>
            <form onSubmit={this.handleUpdate}>
              <TextField type='text' className="update-textbox" floatingLabelText='Mile Number' defaultValue={this.existingMile} onChange={this.update("mile")}/>
              <TextField type='text' className="update-textbox" floatingLabelText='Latitude' defaultValue={this.existingPoint.lat} onChange={this.update("latitude")}/>
              <TextField type='text' className="update-textbox" floatingLabelText='Longitude' defaultValue={this.existingPoint.lng} onChange={this.update("longitude")}/>
              <FlatButton label='Update' type='submit' primary={true}/>
            </form>
          </Dialog>
        </section>
        <section className='add-point'>
          <form onSubmit={this.handleSubmit}>
            <TextField type='text' className="update-textbox-mile" floatingLabelText='Mile Number' onChange={this.update("new mile")}/>
            <TextField type='text' className="update-textbox" floatingLabelText='Latitude' onChange={this.update("new latitude")}/>
            <TextField type='text' className="update-textbox" floatingLabelText='Longitude' onChange={this.update("new longitude")}/>
            <FlatButton label='Add Point' type='submit' primary={true}/>
          </form>
        </section>
        <section className='options-form'>
          <FlatButton label='Delete Selected' onTouchTap={this.handleDeleteSelected} className='delete-button' primary={true}/>
          <form onSubmit={this.handleSelect} className='left-options'>
            <TextField type='text' hintText='Select From' floatingLabelText='Select from' defaultValue={this.start} onChange={this.update("start")} className='left-options-item-left'/>
            <TextField type='text' hintText='Select To' defaultValue={this.end} floatingLabelText='Select to' onChange={this.update("end")} className='left-options-item-right'/>
            <FlatButton label='Select' type='submit' primary={true}/>
          </form>
        </section>
        <section className='the-table'>
          <Table
            height={this.state.height}
            width={this.state.width}
            fixedHeader={this.state.fixedHeader}
            fixedFooter={this.state.fixedFooter}
            selectable={this.state.selectable}
            multiSelectable={this.state.multiSelectable}
            onRowSelection={this.handleToggle}>
            <TableHeader
              displaySelectAll={this.state.showCheckboxes}
              adjustForCheckbox={this.state.showCheckboxes}
              enableSelectAll={this.state.enableSelectAll}>
              <TableRow>
                <TableHeaderColumn tooltip="The Mile">Mile Number</TableHeaderColumn>
                <TableHeaderColumn tooltip="The Latitude">Latitude</TableHeaderColumn>
                <TableHeaderColumn tooltip="The Longitude">Longitude</TableHeaderColumn>
                <TableHeaderColumn tooltip="The Updater">        </TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody
              displayRowCheckbox={this.state.showCheckboxes}
              deselectOnClickaway={this.state.deselectOnClickaway}
              showRowHover={this.state.showRowHover}
              stripedRows={this.state.stripedRows}>
              {this.state.view.map( (row, index) => (
                <TableRow key={index} selected={row.selected}>
                  <TableRowColumn>{row.id}</TableRowColumn>
                  <TableRowColumn>{row.position.lat}</TableRowColumn>
                  <TableRowColumn>{row.position.lng}</TableRowColumn>
                  <TableRowColumn>
                    <FlatButton label='Update' onTouchTap={() => this.openModal(index, row.id, row.position)}/>
                  </TableRowColumn>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>
      </section>
    )
  }
}

export default DataTable;
