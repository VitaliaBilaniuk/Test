import React, { Component } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, Text, View, SectionList, TextInput, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const dataSource = [
  {
    data: [
      { name: 'Ivan accepted request', type: 'default' },
    ],
  },
  {
    data: [
      { name: 'How are you Td?', type: 'user' },
      { name: 'Cool THX. Wanna know, how often you workout? at GYM:)', type: 'friend' },
      { name: '5t per week, 3h or more', type: 'user' },
      { name: 'Thank you.', type: 'user' },
    ],
    key: 'Wed Aug 09 2017',
  },
  {
    data: [
      { name: 'Hey.', type: 'user' },
      { name: 'Hey', type: 'friend' },
      { name: 'I\'m here.', type: 'friend' },
      { name: 'Nevermind', type: 'user' },
    ],
    key: 'Thu Aug 10 2017',
  },
];

export default class MessagesData extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
onSubmitEdit = () => {
    let inputValue = this.state.inputValue;
    alert(inputValue);
};

  renderItem(item) {
    return (
      <View style={item.item.type === 'user' ? [styles.section, styles.userSection] : (item.item.type === 'friend' ? [styles.section, styles.friendSection] : [styles.section, styles.defaultSection])}>
        <Text style={item.item.type === 'user' ? styles.message : (item.item.type === 'friend' ? styles.friendMessage : [styles.message, styles.defaultMessage])}>{item.item.name}</Text>
      </View>
    );
  }

  renderHeader(headerItem) {
    return (
      <View style={!headerItem.section.key ? styles.none : [styles.section, styles.defaultSection]}>
        <Text style={styles.sectionHeader}>{headerItem.section.key}</Text>
      </View>
    );
  }

  render() {
    const iconSize = 26;

    return (
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.container}
        scrollEnabled={false}
      >
        <View style={styles.headerBlock}><Text style={styles.header}>Chat</Text></View>
        <SectionList
          renderItem={this.renderItem}
          renderSectionHeader={this.renderHeader}
          sections={dataSource}
          keyExtractor={(item) => item.name}
          stickySectionHeadersEnabled={true}
        />
        <View style={styles.footer}>
          <FontAwesome style={styles.image} name={'picture-o'} size={iconSize} color={'#f0eff4'} />
          <FontAwesome style={styles.image} name={'camera'} size={iconSize} color={'#f0eff4'} />
          <FontAwesome style={styles.image} name={'microphone'} size={iconSize} color={'#f0eff4'} />
          <TextInput
            style={styles.input}
            placeholder="Message"
            underlineColorAndroid={'transparent'}
            onSubmitEditing={this.submitEdit}
            ref={(el) => { this.inputValue = el; }}
            onChangeText={(inputValue) => this.setState({ inputValue })}
            value={this.state.inputValue}
          />
          <TouchableOpacity style={styles.postBtn} onPress={this.onSubmitEdit}>
            <FontAwesome style={styles.postIcon} name={'play'} size={15} color={'#fff'} />
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerBlock: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0eff4',
    height: 60,
  },
  header: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  section: {
    display: 'flex',
  },
  defaultSection: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  friendSection: {
    alignItems: 'flex-start',
  },
  userSection: {
    alignItems: 'flex-end',
  },
  message: {
    padding: 10,
    borderRadius: 50,
    margin: 10,
    backgroundColor: '#0984FF',
    color: '#fff',
    textAlign: 'right',
    maxWidth: 250,
  },
  friendMessage: {
    padding: 10,
    borderRadius: 50,
    margin: 15,
    backgroundColor: '#F0F0F0',
    maxWidth: 250,
  },
  defaultMessage: {
    color: '#7DD1A9',
    backgroundColor: '#D8F7E8',
  },
  sectionHeader: {
    fontSize: 14,
    textAlign: 'center',
    color: 'black',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 50,
    opacity: 0.8,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    height: 60,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  postIcon: {
    backgroundColor: '#0984FF',
    borderRadius: 30,
    height: 30,
    width: 30,
    padding: 5,
  },
  postBtn: {
    position: 'absolute',
    right: 20,
  },
  input: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#EDEDED',
    position: 'relative',
    backgroundColor: '#F5F5F5',
    height: 40,
    width: 150,
    borderRadius: 50,
    paddingLeft: 10,
  },
});
