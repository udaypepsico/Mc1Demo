import React from "react";
import { memo } from "react"
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";



const CasesSection = () => {
    return ( <View style={styles.casesContainer}>
        <View style={styles.plannedCasesContainer}>
          <Text style={styles.textHeader}>Planned Cases</Text>
          <Text style={styles.textSmallValue}>821 cs</Text>
        </View>
        <View style={styles.casesSoldContainer}>
          <Text style={styles.textHeader}>Cases Sold</Text>
          <Text style={styles.textSmallValue}>100 cs</Text>
        </View>
        <View style={styles.returnsContainer}>
          <Text style={styles.textHeader}>Returns</Text>
          <Text style={styles.textSmallValue}>0</Text>
        </View>
      </View>)
}

const styles = StyleSheet.create({
    casesContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        margin: 20,
        marginBottom:30
      },
      plannedCasesContainer: {
        height: '100%',
        alignItems: 'flex-start',
        borderRightWidth: 1,
        borderRightColor: 'white',
        paddingRight: 20,
      },
      casesSoldContainer: {
        alignItems: 'flex-start',
        borderRightWidth: 1,
        borderRightColor: 'white',
        paddingLeft: 20,
        paddingRight: 20,
      },
      returnsContainer: {
        paddingLeft: 20,
        alignItems: 'flex-start',
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
      textSmallValue: {
        color: 'white',
        // fontSize: 16,
        // fontWeight: 'bold',
        // fontFamily:'Raleway-Bold'
      },
});

export default memo(CasesSection);
