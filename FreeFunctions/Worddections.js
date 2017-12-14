import React, { Component } from 'react';
import {
    Text,
    View,
    Animated,
    TextInput,
    FlatList,
  } from 'react-native';
export default class apparence extends Component {
    constructor() {
      super();
      this.state = {
        gethigth: "",
        onstartcheckedvalue: false,
      }
      this.onstartcheckedvalue = false;
      this.regcharacter = " ";
    }
  onChangeText(val) {
    this.props.onChangeText(val); 
    const lastChar = val.substr(val.length - 1);
    const getcharacterexist = (this.props.positioncharacter === 'new value requiered') ? this.regcharacter.trim().length === 0 : true;
    if (lastChar === this.props.charactodetect && getcharacterexist) {
      this.onstartcheckedvalue = true;
                 this.setState({
        onstartcheckedvalue: true
      })}
     else if (lastChar === ' ' && this.state.onstartcheckedvalue || val === "") {
      this.onstartcheckedvalue = false;
           this.setState({
        onstartcheckedvalue: false
      }) 
    }
    this.regcharacter = lastChar;
    if (this.onstartcheckedvalue) {
      const getflow = this.props.positioncharacter === 'stringtexte' ? 'F' : '';
      const regtext = new RegExp(`\\${getflow}${this.props.charactodetect}[a-z0-9_-]+|\\${getflow}${this.props.charactodetect}`);
      const textArray = val.match(regtext);
      if (textArray && !!textArray.length) {
        const getkeyextractor = textArray[textArray.length - 1];
        this.props.charactodetectCallback(getkeyextractor);
          }  }
  }}