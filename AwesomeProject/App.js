import React, { Component } from 'react';
import { Text, TextInput, View,Button } from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: '',
    pasword:'',
    email:''
  
  };
  }
   handleSubmit = () => {
   const { text, pasword } = this.state;
   var formData = new FormData();

   formData.append('name', text);
   formData.append('email', pasword);
   console.log(formData);
   
   fetch(`${APP_PATH_API}/register/93${msisdn}`, {
    method: 'post',
    body: formData
})
   
   }
   
   onChange = (e) => {
    
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { text } = this.state;
    console.log(this.state);
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          name="email"
          onChange={this.onChange}
          value={this.state.email}
        />
          <TextInput
          style={{height: 40}}
          placeholder="Enter your password"
          name="pwd"
          onChangeText={(pasword) => this.setState({pasword})}
          value={this.state.pasword}
        />
              <Button
            title="Right button"
            onPress={this.handleSubmit}
          />
       </View>
    );
  }
}
