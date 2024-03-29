import React from 'react';
import { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

const VisitSection = () => {
  return (
    <View style={styles.visitContainer}>
      <View style={styles.totalVisitContainer}>
        <Text style={styles.textHeader}>Total Visits</Text>
        <Text style={styles.textValue}>6</Text>
      </View>
      <View style={styles.completedVisitContainer}>
        <Text style={styles.textHeader}>Completed</Text>
        <Text style={styles.textValue}>1</Text>
      </View>
      <View style={styles.remainingVisitContainer}>
        <Text style={styles.textHeader}>Remaining</Text>
        <Text style={styles.textValue}>5</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  visitContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  totalVisitContainer: {
    alignItems: 'flex-start',
  },
  completedVisitContainer: {
    alignItems: 'center',
  },
  remainingVisitContainer: {
    alignItems: 'flex-end',
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
