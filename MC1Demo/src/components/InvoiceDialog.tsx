import React, { useState } from 'react';
import { memo } from 'react';
import { Modal, Portal } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import PdfComponent from './PdfComponent';

const InvoiceDialog = ({
  visible,
  invoiceFilePath,
  hideDialog,
}: {
  visible: boolean;
  invoiceFilePath: string;
  hideDialog: () => void;
}) => {

  const containerStyle = {
    backgroundColor: 'white',
    marginHorizontal: 10,
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  };

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={() => {
          hideDialog();
        }}
        dismissable={true}
        contentContainerStyle={containerStyle}
      >
        <PdfComponent
          filePath={invoiceFilePath}
          closePdf={() => {
            hideDialog();
          }}
        />
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({

});

export default memo(InvoiceDialog);
