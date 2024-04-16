import SegmentedControl, {
  NativeSegmentedControlIOSChangeEvent,
} from '@react-native-segmented-control/segmented-control';
import React, { memo } from 'react';
import { NativeSyntheticEvent, StyleSheet } from 'react-native';

const SegmentedControlTab = ({
  segmentValueChanged,
  selectedIndex,
  segmentedValues,
}: {
  segmentValueChanged: (
    event: NativeSyntheticEvent<NativeSegmentedControlIOSChangeEvent>
  ) => void;
  selectedIndex:number;
  segmentedValues:string[];
}) => {
  
  return (
    <SegmentedControl
      style={styles.segmentedControls}
      values={segmentedValues}
      selectedIndex={selectedIndex}
      onChange={segmentValueChanged}
      fontStyle={{
        color: '#17A3DA',
        fontSize: 12,
        fontWeight: 'bold',
      }}
      activeFontStyle={{
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
      }}
      tintColor="#17A3DA"
      backgroundColor="white"
      tabStyle={styles.segmentedButton}
    />
  );
};

const styles = StyleSheet.create({
  segmentedControls: {
    borderColor: 'white',
    borderRadius: 10,
    borderWidth: 5,
    marginVertical: 20,
    marginHorizontal: 10,
    padding: 20,
    //backgroundColor:'white'
  },
  segmentedButton: {
    borderRadius: 10,
  },
  segmentedButtonText: {
    fontSize: 10,
  },
});
export default memo(SegmentedControlTab);
