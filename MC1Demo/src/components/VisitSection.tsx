import React from 'react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

const VisitSection = (props: any) => {
  const {totalVisits, completedVisits} = props;
  const { t } = useTranslation();
  const remainingVisits = totalVisits - completedVisits;
  
  return (
    <View style={styles.visitContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.textHeader}>{t("Total Visits")}</Text>
        <Text style={styles.textValue}>{totalVisits}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textHeader}>{t("Completed")}</Text>
        <Text style={styles.textValue}>{completedVisits}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textHeader}>{t("Remaining")}</Text>
        <Text style={styles.textValue}>{remainingVisits}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  visitContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textContainer: {
    alignItems: 'center',
  },
  textHeader: {
    color: 'white',
    fontSize: 16,
  },
  textValue: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default memo(VisitSection);
