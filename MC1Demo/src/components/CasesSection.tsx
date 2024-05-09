import React from 'react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Text } from 'react-native-paper';

const CasesSection = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.casesContainer}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.plannedCasesContainer}>
          <Text style={styles.textHeader}>{t('Planned Cases')}</Text>
          <Text style={styles.textValue}>821 cs</Text>
        </View>
        <View style={styles.casesSoldContainer}>
          <Text style={styles.textHeader}>{t('Cases Sold')}</Text>
          <Text style={styles.textValue}>100 cs</Text>
        </View>
        <View style={styles.returnsContainer}>
          <Text style={styles.textHeader}>{t('Returns')}</Text>
          <Text style={styles.textValue}>0</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  casesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  plannedCasesContainer: {
    height: '100%',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: 'white',
    paddingRight: 20,
  },
  casesSoldContainer: {
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: 'white',
    paddingLeft: 20,
    paddingRight: 20,
  },
  returnsContainer: {
    paddingLeft: 20,
    alignItems: 'center',
  },
  textHeader: {
    color: 'white',
    fontSize: 16,
  },
  textValue: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default memo(CasesSection);
