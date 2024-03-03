import React from 'react';
import Alert from 'react-bootstrap/Alert';

function DisAlert(props) {
    return (
    props.alert &&  <Alert variant={props.alert.type} dismissible>
        <Alert.Heading> This is {props.alert.type} Alert :  {props.alert.msg} </Alert.Heading>
      </Alert>
    );
}

export default DisAlert;
