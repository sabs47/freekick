import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
  KeyboardAvoidingView
} from 'react-native';
import BarcelonainputMentions from './components/barcelonamentions';

import  {getUserSuggestions}  from './rest/api';

export default class sampleApp extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      keyword: "",
      data: []
    }
    this.reqTimer =0;
  }

  getlisproposal({ item }, hidePanel) {
  
    return (
      
      <TouchableOpacity onPress={() => this.onSuggestionTap(item.login, hidePanel)}>
          <View >
            <Text>{item.login}</Text>
          </View>
      </TouchableOpacity>
    )
  }
  
  onSuggestionTap(login, hidePanel) {
    hidePanel();
    const comment = this.state.value.slice(0, - this.state.keyword.length)
    this.setState({
      data: [],
      value:login
    })
  }

  callback(keyword) {
    if (this.reqTimer) {
      clearTimeout(this.reqTimer);
    }
   this.reqTimer = setTimeout(() => {
      getUserSuggestions(keyword)
        .then(res => {
          this.setState({
            keyword: keyword,
            data: res
          })
        })
        .catch(err => {
          console.log(err);
        });
    }, 200);
    }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <BarcelonainputMentions
           styletext={{height:40}}
          charactodetect={'@'}
          value={this.state.value}
          onChangeText={(val) => { this.setState({ value: val }) }}
          charactodetectCallback={this.callback.bind(this)}
          getlisproposal={this.getlisproposal.bind(this)}
          suggestionsData={this.state.data} 
          extractindex={(item, index) => item.login} 
          horizontal={false}
          MaxVisibleRowCount={6}  
       />
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: 300,
    justifyContent: 'flex-end',
    paddingTop: 200,
    flex:1 , 
    backgroundColor:'#3498db'

  },
 });


AppRegistry.registerComponent('sample', () => sampleApp);