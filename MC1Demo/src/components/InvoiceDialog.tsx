import React, { useState } from 'react';
import { memo } from 'react';
import { Modal, Portal } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import PdfComponent from './PdfComponent';

const InvoiceDialog = ({
  visible,
  preview,
  invoiceFilePath,
  hideDialog,
  mailDialog,
}: {
  visible: boolean;
  preview: boolean;
  invoiceFilePath: string;
  hideDialog: () => void;
  mailDialog: () => void;
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
          preview={preview}
          closePdf={() => {
            hideDialog();
          }}
          mailPdf={() => {
            mailDialog();
          }}
        />
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({

});

export default memo(InvoiceDialog);
