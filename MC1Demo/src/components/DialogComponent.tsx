import React from 'react';
import { memo } from 'react';
import { Button, Dialog, Portal, Text } from 'react-native-paper';

const DialogComponent = ({
  visible,
  hideDialog,
}: {
  visible: boolean;
  hideDialog: any;
}) => {
  const deleteAction = () => {
    hideDialog();
  };

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>Delete Account</Dialog.Title>
        <Dialog.Content>
          <Text variant="bodyMedium">Are you sure to delete Account?</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>Cancel</Button>
          <Button onPress={deleteAction}>Delete</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default memo(DialogComponent);
