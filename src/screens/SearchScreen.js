import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

import SearchInput from '../components/SearchInput';
import ResultList from '../components/ResultList';

import useResult from '../hooks/useResults';

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [searchSubmit, results, error] = useResult();

  const filterResult = price => {
    return results.filter(result => {
      return result.price === price;
    })
  }

  return (
    <View style={{flex: 1, paddingBottom: 10}}>
      <SearchInput 
        term={term} 
        onInputChange={setTerm}
        onTermSubmit={() => searchSubmit(term)}  
      />
      <ScrollView>
        <ResultList heading="Cost Effective" results={filterResult('$')}/>
        <ResultList heading="Avarage Price" results={filterResult('$$')}/>
        <ResultList heading="Expensive" results={filterResult('$$$')}/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: '#d2edf7',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 10,
    marginTop: 10,
    flexDirection: 'row'
  },
  iconStyle: {
    fontSize: 30,
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 20
  }
});

export default SearchScreen;
