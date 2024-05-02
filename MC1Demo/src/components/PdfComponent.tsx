import React from 'react';
import { memo } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Button, useTheme } from 'react-native-paper';
import Pdf from 'react-native-pdf';

const PdfComponent = ({
  filePath,
  closePdf,
}: {
  filePath: string;
  closePdf: any;
}) => {
  const theme = useTheme();

  return (
    <View
      style={{
        padding: 10,
        height: Dimensions.get('window').height*(2/3),
        width: Dimensions.get('window').width - 20,
      }}
    >
      <Button
        mode="contained"
        onPress={() => {
          closePdf();
        }}
      >
        Close PDF
      </Button>
      <Pdf
        source={{ uri: filePath }}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`Current page: ${page}`);
        }}
        onError={(error) => {
          console.log(error);
        }}
        onPressLink={(uri) => {
          console.log(`Link pressed: ${uri}`);
        }}
        fitPolicy={2}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}
        style={styles.pdf}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pdf: {
    flex: 1,
    paddingVertical: 10,
  },
});

export default memo(PdfComponent);
