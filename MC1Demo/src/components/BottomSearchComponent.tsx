import BottomSheet from '@gorhom/bottom-sheet';
import React, { useCallback, useState } from 'react';
import { memo, useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import { Searchbar } from 'react-native-paper';

const BottomSearchComponent = (props: any) => {
    const {searchHandler} = props;
    const bottomSheetRef = useRef<BottomSheet>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const { t } = useTranslation();

    const snapPoints = useMemo(() => ['5%', '15%'], []);

    const handleSnapPress = useCallback((index: number) => {
        bottomSheetRef.current?.snapToIndex(index);
    }, []);

    return (
        <BottomSheet
            ref={bottomSheetRef}
            snapPoints={snapPoints}
        >
            <View style={styles.productSearchContainer}>
                <Searchbar
                    placeholder={t('Search Products')}
                    onClearIconPress={() => handleSnapPress(0)}
                    onChangeText={(query) => {
                        setSearchQuery(query);
                        searchHandler(query);
                    }}
                    value={searchQuery}
                    style={styles.searchBar}
                    maxLength={20}
                    returnKeyType="search"
                    inputStyle={styles.searchInputText}
                />
            </View>
        </BottomSheet>
    );
};

const styles = StyleSheet.create({
    productSearchContainer: {
        flexDirection: 'row',
        marginTop: 10,
        height: 42,
    },
    searchBar: {
        flex: 1,
        backgroundColor: '#F2F4F7',
        borderRadius: 10,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        height: '100%',
        fontStyle: 'normal',
    },
    searchInputText: {
        fontSize: 14,
        fontWeight: 'normal',
        paddingBottom: 20,
        color: 'black',
    },
});

export default memo(BottomSearchComponent);
