import React from "react";
import { memo } from "react"
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import Octicons from "react-native-vector-icons/Octicons";

const HeaderSection = () => {
    return( <View style={styles.topHeader}>
        <View style={styles.textTopHeader}>
          <Text
            variant="titleLarge"
            style={[styles.topTextStyle, { color: '#17A3DA' }]}
          >
            Past
          </Text>
          <Text variant="titleLarge" style={styles.topTextStyle}>
            Today
          </Text>
          <Text
            variant="titleLarge"
            style={[styles.topTextStyle, { color: '#17A3DA' }]}
          >
            Future
          </Text>
        </View>
        <Octicons name="plus-circle" size={36} color="white" />
      </View>);
}

const styles = StyleSheet.create({
    topHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignItems: 'flex-end',
      },
      textTopHeader: {
        flex: 0.75,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      topTextStyle: {
        fontSize: 24,
        color: 'white',
        fontWeight: '900',
      },
});

export default memo(HeaderSection);