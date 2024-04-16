import React, { useCallback } from 'react';
import { memo } from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';
import { ProductsType } from '../data/Products';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchProducts } from '../lib/api';
import { useTranslation } from 'react-i18next';


const BxBExchange = () => {
    const { t } = useTranslation();
    const {
        isPending: pending,
        error: productFetchError,
        data: productsData,
        isFetching,
    } = useQuery<ProductsType[], Error>({
        queryKey: ['products'],
        queryFn: () => fetchProducts(),
        staleTime: Infinity,
        gcTime: Infinity,
    });

    const bxbChange = 0;
    const mxbChange = 0;
    const exchange = 0;
    const gifts = 0;
    const discount = 0;
    const ieps = 0;
    const iva = 0;

    const listData = [
        { id: 1, name: t('ProductsReceived'), action: t('AddReturn') },
        { id: 2, name: t('ProductsDelivered'), action: t('AddDelivery') }
    ];

    const renderItem = ({ item }: any) => (
        <View >
            <View style={styles.itemHeading}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.rightArrow}>⌃</Text>
            </View>
            <View style={styles.buttonBox}>
                <Button title={item.action} color={'#FFF'} />
            </View>
        </View>
    );


    return (
        <View style={styles.container}>
            <Text>{t('Total')} {t('Changes')} BxB: $0.0</Text>
            <FlatList
                data={listData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    itemName: {
        color: '#fff',
    },
    rightArrow: {
        position: 'absolute',
        right: 10,
        top: 2,
        fontSize: 40,
        color: '#fff'
    },
    itemHeading: {
        backgroundColor: '#2196F3',
        padding: 10,
        marginTop: 20,
        color: '#FFF'
    },
    buttonBox: {
        backgroundColor: '#2196F3',
        padding: 5,
        margin: 10
    }
});

export default memo(BxBExchange);
