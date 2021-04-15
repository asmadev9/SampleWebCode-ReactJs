import React, { Component } from "react";
import { firestore } from '../../firebase'
import dummyImage from '../../assets/images/dummy.png'
import { Modal } from 'react-bootstrap'
import NotificationRowItem from "./NotificationRowItem";
import {Link} from "react-router-dom";

export class Right extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: null
    };



  }

  componentDidMount() {
    firestore
    .collection('notificationHistory')
    .get()
    .then(querySnapshot=>{
      let temp=[]
      querySnapshot.forEach(doc=>{
        temp.push({...{nid: doc.id}, ...doc.data()})
      })
      this.setState({notifications: temp})
    })
  }


  render() {
    return (
      <div id="wrapper">

        

        <div className="content">

          <Link to={`/admin/send-notification`}>
            <button type="button" className="btn btn-success" style={{marginBottom: '25px'}}>
              Send new notification
            </button>
          </Link>



          <div className="row">
            <div className="col-lg-12">
              <div className="hpanel">

                  <div>
                    <div className="panel-body">
                      <table className="table table-striped table-bordered table-hover">
                        <thead>
                          <tr>
                            <th>Recipients</th>
                            <th>Title</th>
                            <th>Description</th>
                          </tr>
                        </thead>
                        <tbody>

                     {this.state.notifications && this.state.notifications.map((item, index)=>{
                       return <NotificationRowItem notification={item} key={index} />
                     })}

                        </tbody>
                      </table>
                    </div>
                  </div>



              </div>
            </div>
           


          </div>
        </div>

     
      </div>
    );
  }
}

export default Right;
