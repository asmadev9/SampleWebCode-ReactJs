import React, { Component } from "react";
import { Modal } from 'react-bootstrap';

export class LogoutModal extends Component{
    constructor(props) {
        super(props);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: true
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }


    render(){
        return (
      <>
        <Modal show={this.state.show} onHide={this.handleClose}>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="color-line" />
      <div className="modal-header text-center">
        <h4 className="modal-title">Add new class</h4>
      </div>
      <div className="modal-body form-horizontal">
        <div className="form-group"><label className="col-sm-2 control-label">Class</label>
          <div className="col-sm-10">
            <select className="form-control m-b" name="classTemplate" onchange="getIndividualClassTemplate(this.value)">

            </select>
          </div>
        </div>
        <input type="hidden" name="image" defaultValue id="addClassImage" />
        <input type="hidden" name="name" id="addClassName" className="form-control" />
        <div className="form-group"><label className="col-sm-2 control-label">Location</label>
          <div className="col-sm-10"><input type="text" name="location" id="addClassLocation" className="form-control" /></div>
        </div>
        <div className="form-group"><label className="col-sm-2 control-label">Price</label>
          <div className="col-sm-10">
            <div className="input-group m-b"><span className="input-group-addon">£</span> <input type="number" className="form-control" id="addClassPrice" name="price" /> <span className="input-group-addon">-</span></div>
          </div>
        </div>
        <div className="form-group"><label className="col-sm-2 control-label">Description</label>
          <div className="col-sm-10"><textarea className="form-control" id="addClassDescription" style={{height: '100px'}} defaultValue={""} /></div>
        </div>
        <div className="form-group"><label className="col-sm-2 control-label">Date / time</label>
          <div className="col-sm-10">
            <div className="input-group date" id="datetimepicker1">
              <span className="input-group-addon">
                <span className="fa fa-calendar" />
              </span>
              <input type="datetime-local" id="addClassDate" name="date" className="form-control" />
            </div>
          </div>
        </div>
        <div className="form-group"><label className="col-sm-2 control-label">Instructor</label>
          <div className="col-sm-10"><select className="form-control m-b" name="instructor">
              <option value={0}>Select instructor</option>

            </select>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Add class</button>
      </div>
    </div>
  </div>


        </Modal>
      </>
    
        ); 

    }
}
export default LogoutModal;