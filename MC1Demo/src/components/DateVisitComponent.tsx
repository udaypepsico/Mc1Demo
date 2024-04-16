import { memo } from 'react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

const DateVisitComponent = () => {
  const {t} = useTranslation();

  return (
    <View style={styles.visitContainer}>
      <View style = {{flexDirection:'row'}}>
        <Text style={styles.dateText}>{t("Day Started at")}</Text>
        <Text style={[styles.dateText, { fontWeight: 'bold',paddingLeft:5 }]}>9:00 AM</Text>
      </View>
      <View style = {{flexDirection:'row'}}>
        <Text style={[styles.dateText, { fontWeight: 'bold' }]}>6/6 {t("Visits")}</Text>
        <Text style={[styles.dateText, { fontWeight: 'bold',paddingLeft:5 }]}>2/3 {t("Orders")}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  visitContainer: {
    flexDirection:'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20
  },
  dateText: {
    color: '#4C4E4E',
  },
});
export default memo(DateVisitComponent);
