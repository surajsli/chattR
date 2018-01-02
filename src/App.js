import React, { Component } from 'react';
import MessageList from './components/MessageList';
import MessageBox from './components/MessageBox';
import Header from './components/Header';
import firebase from 'firebase';
import './App.css';

class App extends Component {

constructor(props){
  super(props);
  var config = {
    apiKey: "AIzaSyBous2mPrksz1KSvEWRv2BDh9HCVlgUTTc",
    authDomain: "chatapp-61180.firebaseapp.com",
    databaseURL: "https://chatapp-61180.firebaseio.com",
    projectId: "chatapp-61180",
    storageBucket: "chatapp-61180.appspot.com",
    messagingSenderId: "555894515739"
  };
  firebase.initializeApp(config);
}

  render() {
    return (
      <div className="container">
            <Header title="ChattR" />
            <div className="columns" id="messages">
              <div className="column is-3"></div>
              <div className="column is-6 messages">
                <MessageList db={firebase} />
              </div>
            </div>
            <div className="row text_box">
            <div className="col-md-12"><br/></div>
            <div className="col-md-12">
              <MessageBox db={firebase} />
            </div>
          </div>
        </div>
    );
  }
}

export default App;
