import React from 'react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Dialog, Portal, Text } from 'react-native-paper';

const DialogComponent = ({
  visible,
  hideDialog,
  navigate,
  message,
}: {
  visible: boolean;
  hideDialog: any;
  navigate: any;
  message: string;
}) => {
  const confirmedAction = () => {
    navigate();
  };

  const { t } = useTranslation();
  const messageBody = message ? message : t("CheckInAskMessage");
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>{t("Confirm")}</Dialog.Title>
        <Dialog.Content>
          <Text variant="bodyMedium">{messageBody}</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button
            icon="check"
            onPress={confirmedAction}
            mode="outlined"
          >
            {t("Confirm")}
          </Button>
          <Button icon="close" onPress={hideDialog} mode="outlined">
            {t("Cancel")}
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default memo(DialogComponent);
