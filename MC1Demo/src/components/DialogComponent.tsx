import React from 'react';
import { memo } from 'react';
import { Button, Dialog, Portal, Text } from 'react-native-paper';

const DialogComponent = ({
  visible,
  hideDialog,
  navigate
}: {
  visible: boolean;
  hideDialog: any;
  navigate:any;
}) => {
  const confirmedAction = () => {
    navigate();
  };

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>Confirm</Dialog.Title>
        <Dialog.Content>
          <Text variant="bodyMedium">Do you want to Check In?</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button
            icon="check"
            onPress={confirmedAction}
            mode="outlined"
          >
            Confirm
          </Button>
          <Button icon="close" onPress={hideDialog} mode="outlined">
            Cancel
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default memo(DialogComponent);
