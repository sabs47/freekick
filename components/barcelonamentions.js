import React, { Component } from 'react';
import {
  Text,
  View,
  Animated,
  TextInput,
  FlatList,
} from 'react-native';
import PropTypes from 'prop-types';
import apparence from '../FreeFunctions/Worddections';
export default class barcelonamentions extends apparence {
     render() {
    return (
      <View>
       
          <FlatList
            data={this.props.suggestionsData}
            keyExtractor={this.props.extractindex}
            renderItem={(rowData) => { return this.props.getlisproposal(rowData, this.props.onChangeText.bind(apparence.onstartcheckedvalue)) }}
          />        
        <TextInput
          {...this.props}
          onContentSizeChange={(event) => {
            this.setState({
              gethigth: this.props.textInputMinHeight >= event.nativeEvent.contentSize.height ? this.props.textInputMinHeight : event.nativeEvent.contentSize.height + 10,
            });
          }}
          ref={component => this._textInput = component}
          onChangeText={this.onChangeText.bind(this)}
          multiline={true}
          value={this.props.value}
          style={[{ ...this.props.textInputStyle }, { height: Math.min(this.props.textInputMaxHeight, apparence.gethigth) }]}
                 />
      </View>    )
  }}
barcelonamentions.propTypes = {
  MaxVisibleRowCount:PropTypes.number,
  styletext: TextInput.propTypes.style,
  stylepane: View.propTypes.style,
 InputMinHeight: PropTypes.number,
  textInputMaxHeight: PropTypes.number,
  getlisproposal: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
  ]).isRequired,
  suggestionsData: PropTypes.array.isRequired,
  extractindex: PropTypes.func.isRequired,
  horizontal: PropTypes.bool,
  charactodetect: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
onChangeText: PropTypes.func.isRequired,
charactodetectCallback: PropTypes.func.isRequired,
   
};

