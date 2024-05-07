import { t } from 'i18next';
import React from 'react';
import { memo } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Button, useTheme } from 'react-native-paper';
import Pdf from 'react-native-pdf';

const PdfComponent = ({
  filePath,
  closePdf,
  mailPdf,
}: {
  filePath: string;
  closePdf: any;
  mailPdf: any;
}) => {
  const theme = useTheme();

  return (
    <View
      style={{
        padding: 10,
        height: Dimensions.get('window').height * (2 / 3),
        width: Dimensions.get('window').width - 20,
      }}
    >
      <View style={styles.itemRow}>
        <Button
          mode="outlined"
          onPress={() => {
            closePdf();
          }}
        >
          {t('Close')}
        </Button>
        <Button
          icon="mail"
          mode="outlined"
          onPress={() => {
            mailPdf();
          }}
        >
          {t('Mail')}
        </Button>
      </View>
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
  itemRow: {
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-between',
  },
});

export default memo(PdfComponent);
