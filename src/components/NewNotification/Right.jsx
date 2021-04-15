import React, { Component } from "react";
import dummyImage from "../../assets/images/dummy.png";
import { Modal } from "react-bootstrap";
import { firestore } from "../../firebase";
import {Link} from "react-router-dom";

export class Right extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
      value: 1,
      sendToUser: '',
      notificationTitle: '',
      notificationDescription: '',
      datetime: null,
      firebaseLoading: false,
      sendToUserName: ' '
    };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  resetFields(){
    this.setState({ 
      notificationTitle: '',
      notificationDescription: '',
      sendToUser: '',
    });
  }

  sendNotification(notificationToken){

    fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      body: JSON.stringify({
        to: notificationToken,
        sound: 'default',
        title: this.state.notificationTitle,
        body: this.state.notificationDescription,
      })
    });

  }

  getNameFromID(userId){

    if (userId.length > 10){
      console.log(userId)

      firestore
        .collection("users")
        .doc(userId)
        .get()
        .then(doc => {
          if (doc.exists){
            
            this.setState({sendToUserName: doc.data().firstName + ' ' + doc.data().lastName+ ' '}) 

          }else{
            this.setState({sendToUserName: ' - not found '}) 
            
          }
              
        });

    }else{
      this.setState({sendToUserName: ' '}) 
    }



  }

  logNotification(recipients, title, description){

    firestore
      .collection("notificationHistory")
      .add({
        recipients: recipients,
        title: title,
        description: description,
        timeSent: new Date()
      })
      .then(() => {
        return true;
      })
      

  }



  updateSendToUser = (e) => {
    
    this.setState({ sendToUser: e.target.value })
    this.getNameFromID(e.target.value);
  }

  onSubmit = () => {


      if (this.state.notificationTitle.replace(/\s+/g, '') == '' || this.state.notificationDescription.replace(/\s+/g, '') == ''){
        return alert("Please enter the notification title and description");
      }else{
        if (this.state.sendToUser.replace(/\s+/g, '') == ''){
            this.setState({ firebaseLoading: true });

            firestore
              .collection("notificationTokens")
              .get()
              .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                  var notificationToken = doc.data().token;
                  this.sendNotification(notificationToken)
                });

                this.logNotification("ALL", this.state.notificationTitle, this.state.notificationDescription);
                this.setState({ firebaseLoading: false });
                this.resetFields();
                return alert('Sent notification to all users!');
                        
              });           


        }else{
          //send to a specific user
          this.setState({ firebaseLoading: true });

          var userID = this.state.sendToUser;

          firestore
            .collection("notificationTokens")
            .doc(userID)
            .get()
            .then(doc => {
              if (doc.exists){
                var notificationToken = doc.data().token;

                this.sendNotification(notificationToken)
                this.logNotification(this.state.sendToUserName + "("+userID+")", this.state.notificationTitle, this.state.notificationDescription);
                this.setState({ firebaseLoading: false });
                this.resetFields();
                alert('Notification sent out!');

              }else{
                this.setState({ firebaseLoading: false });
                return alert('No user exists with this ID -- or they have not signed up for notifications');
                
              }

              
            });



        }

      }



  };

  render() {
    return (
      <div id="wrapper">
        <div className="content">

          <Link to={`/admin/notifications`}>
            <button
              type="button"
              className="btn btn-success"
              style={{ marginBottom: "25px" }}
            >
              Back to notification history
            </button>
          </Link>

          <div className="row">

            <div className="form-group">
              <label className="col-sm-2 control-label">Send to specific user (leave blank to send to all)</label>
              <div className="col-sm-10">
                  <input 
                    className="form-control m-b"
                    name="sendToUser"
                    value={this.state.sendToUser}
                    onChange={e => this.updateSendToUser(e)}
                    />  
              </div>
             
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">Notification title (character limit - 45)</label>
              <div className="col-sm-10">
                  <input 
                    className="form-control m-b"
                    name="notificationTitle"
                    value={this.state.notificationTitle}
                    onChange={e => this.setState({ notificationTitle: e.target.value.substring(0, 45) })}
                    />  
              </div>
             
            </div>

            <div className="form-group">
              <label className="col-sm-2 control-label">Notification description (character limit - 90)</label>
              <div className="col-sm-10">
                  <input 
                    className="form-control m-b"
                    name="notificationDescription"
                    value={this.state.notificationDescription}
                    onChange={e => this.setState({ notificationDescription: e.target.value.substring(0, 90) })}
                    />  
              </div>
             
            </div>

          </div>

          <button
            disabled={this.state.firebaseLoading || this.state.notificationTitle == '' || this.state.notificationDescription == ''}
            type="button"
            onClick={this.onSubmit}
            className="btn btn-primary"
            style={{ marginTop: "30px" }}
          >
            {this.state.firebaseLoading ? "Sending notification..." : "Send notification"} 
            {this.state.sendToUser == "" ? " (to ALL)" : " ( to Individual user "+this.state.sendToUserName+")"}
          </button>
        </div>

      
      </div>
    );
  }
}

export default Right;
