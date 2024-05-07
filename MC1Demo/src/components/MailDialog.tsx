import React, { useState } from 'react';
import { memo } from 'react';
import { Button, Modal, Portal, TextInput } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
import { t } from 'i18next';

const InvoiceDialog = ({
    visible,
    emailHandler,
    hideDialog,
}: {
    visible: boolean;
    emailHandler: (id: String) => void;
    hideDialog: () => void;
}) => {

    const [email, setEmail] = useState('');

    return (

        <Modal
            style={styles.container}
            visible={visible}
            onDismiss={() => {
                hideDialog();
            }}
            dismissable={true}
        >
            <Text style={styles.label}>Enter Email</Text>
            <TextInput onChangeText={value => setEmail(value)} />
            <View style={styles.itemRow}>
                <Button mode="contained" onPress={() => hideDialog()}>
                    {t('Cancel')}
                </Button>
                <Button mode="contained" onPress={() => emailHandler(email)}>
                    {t('Send')} {t('Mail')}
                </Button>
            </View>
        </Modal>

    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        marginTop: 200,
        marginHorizontal: 10,
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        textAlignVertical: 'center',
        height: 200,
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
    },
    itemRow: {
        flexDirection: 'row',
        padding: 5,
        marginTop: 10,
        justifyContent: 'space-between',
    },
});

export default memo(InvoiceDialog);
