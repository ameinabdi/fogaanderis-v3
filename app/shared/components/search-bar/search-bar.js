import React from 'react';
import { Text, TextInput, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Colors, Metrics } from '../../themes';
import styles from './search-bar.styles';

export default function SearchBar(props) {
  // static propTypes = {
  //   onSearch: PropTypes.func.isRequired,
  //   onCancel: PropTypes.func.isRequired,
  //   searchTerm: PropTypes.string,
  // };
  const { onSearch, onCancel, searchTerm } = props;
  const dimensions = useWindowDimensions();
  return (
    <View style={[styles.container, { width: dimensions.width - Metrics.baseMargin }]}>
      <Ionicons name="search" size={Metrics.icons.tiny} style={styles.searchIcon} />
      <TextInput
        placeholder="Search"
        placeholderTextColor={Colors.white}
        underlineColorAndroid="transparent"
        style={styles.searchInput}
        value={searchTerm}
        onChangeText={onSearch}
        autoCapitalize="none"
        onSubmitEditing={onSearch.bind(this, searchTerm)}
        returnKeyType={'search'}
        autoCorrect={false}
        selectionColor={Colors.white}
        testID="searchTextInput"
      />
      <TouchableOpacity onPress={onCancel} style={styles.cancelButton}>
        <Text style={styles.buttonLabel}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}
