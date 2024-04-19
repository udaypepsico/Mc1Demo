import React from 'react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, TextInput, View } from 'react-native';
import { Button, Dialog, Modal, Portal, Text } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { increamentalValue } from '../core/utils';


const ProductExchangeDialog = (props: any) => {
    const { visible, hideDialog, navigate, product } = props;
    const { t } = useTranslation();

    const confirmedAction = () => {
        // navigate();
        hideDialog();
    };
    const onChangeQuantity = (increamentalValue: any) => {
        console.log('Function not implemented.');
    }
    const updateProducts = (num: any) => {
        console.log('updateProducts', num);
    }
    const Product = () => (
        <View style={styles.item}>
            <View style={styles.itemContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.itemName}>{product?.productName}</Text>
                    <Text style={styles.itemDetail}>
                        {product?.productCode} | {product?.productId}
                    </Text>
                    <Text>
                        ${product?.productPrice} | {product?.productWeight}
                    </Text>
                </View>
            </View>
            <View style={styles.itemQuantityContainer}>
                <View style={styles.quantityCotainer}>
                    <FontAwesome5
                        name="minus"
                        size={15}
                        color="white"
                        style={{
                            backgroundColor: '#17A1D9',
                            padding: 10,
                            alignSelf: 'center',
                        }}
                        onPress={() => {
                            onChangeQuantity(-increamentalValue);
                        }}
                    />
                    <TextInput
                        style={styles.inputQuantity}
                        editable
                        keyboardType="numeric"
                        onChangeText={(num) =>
                            updateProducts(num)
                        }
                        defaultValue={String(product?.productQuantity)}
                    />
                    <FontAwesome5
                        name="plus"
                        size={15}
                        color="white"
                        style={{
                            backgroundColor: '#17A1D9',
                            padding: 10,
                            alignSelf: 'center',
                        }}
                        onPress={() => {
                            onChangeQuantity(increamentalValue);
                        }}
                    />
                    <Text style={styles.totalText}>
                        ${(product?.productQuantity * product?.productPrice).toFixed(2)}
                    </Text>
                </View>
                <Text style={styles.sugText}>Sug Cant.{product?.productSuggestedQuantity}</Text>
            </View>
        </View>
    );

    return (
        <Modal visible={visible} onDismiss={hideDialog} style={styles.modal}>
            <View style={styles.modelHeader}>
                <Text style={styles.headerText}>{t("BxBChange")}</Text>
                <View style={styles.closeButton}>
                    <Button textColor='#FFF' onPress={hideDialog}>X</Button>
                </View>
            </View>
            <View style={styles.container}>
                <View>
                    <Text>{t("CheckInAskMessage")}</Text>
                    <Product />
                </View>
                <View style={styles.modelFooter}>
                    <Button onPress={confirmedAction} >
                        {t("Delete")} {t("Order")}
                    </Button>
                    <Button onPress={hideDialog}>
                        {t("Add")}
                    </Button>
                </View>
            </View>
        </Modal>

    );
};

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
    },
    modelHeader: {
        backgroundColor: '#2471A3',
        padding: 10
    },
    modelFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerText: {
        color: '#fff',
        fontWeight: '900',
        fontSize: 16
    },
    closeButton: {
        position: 'absolute',
        right: 0,
    },
    container: {
        padding: 20,
        backgroundColor: '#fff'
    },
    item: {
        margin: 10,
        backgroundColor: '#FFF',
        borderBottomColor: '#ccc',
        borderBottomWidth: 0.5,
        justifyContent: 'space-around',

    },
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    textContainer: {
        marginLeft: 10,
    },
    itemName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    itemDetail: {
        fontSize: 16,
    },
    itemQuantityContainer: {
        justifyContent: 'center',
    },
    quantityCotainer: {
        flexDirection: 'row',
    },
    inputQuantity: {
        borderWidth: 1,
        padding: 4,
        borderColor: '#ccc',
        minWidth: 50,
        textAlign: 'center',
        marginHorizontal: 5,
    },
    increamentBtn: {
        padding: 10,
    },
    sugText: {
        textAlign: 'left',
        paddingTop: 10,
    },
    totalText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#000',
        flex: 1,
        textAlign: 'right',
        alignSelf: 'center',
    },
});

export default memo(ProductExchangeDialog);


