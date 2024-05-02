import React, { useState } from 'react';
import { memo } from 'react';
import { StyleSheet, View, Text, FlatList, Touchable, Dimensions } from 'react-native';
import { ProductsType } from '../data/Products';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchOpportunity, fetchOpportunityLineItem } from '../lib/api';
import { useTranslation } from 'react-i18next';
import { Button as PaperButton } from 'react-native-paper';
import { Opportunity, OpportunityLineItem } from '../data/Record';
import { useSelectedOpportunityFetch } from '../hooks/useSelectedOpportunityFetch';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { HTMlInvoice } from '../data/HtmlInvoiceSource';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import PdfComponent from '../components/PdfComponent';
import InvoiceDialog from '../components/InvoiceDialog';

const CheckoutScreen = () => {
  const queryClient = useQueryClient();
  const [showInvoice, setShowInvoice] = useState(false);
  const [showSignature, setShowSignature] = useState(false);
  const [invoiceFilePath, setInvoiceFilePath] = useState('');
  const [showPdf, setShowPdf] = useState(false);

  const { t } = useTranslation();

  const {
    isPending: opportunityPending,
    error: opportunityFetchError,
    data: OpportunityData,
    isFetching: isOpportunityFetching,
  } = useQuery<Opportunity[], Error>({
    queryKey: ['opportunity'],
    queryFn: () => fetchOpportunity(),
    staleTime: Infinity,
    gcTime: Infinity,
    initialData: [],
  });

  const {
    isPending: pending,
    error: productFetchError,
    data: OpportunityLineItemData,
    isFetching,
  } = useQuery<OpportunityLineItem[], Error>({
    queryKey: ['opportunityLineItem'],
    queryFn: () => fetchOpportunityLineItem(),
    staleTime: Infinity,
    gcTime: Infinity,
    initialData: [],
  });

  const accountId = queryClient.getQueryData(['accountId']) as string;

  const selectedOpportunityData = useSelectedOpportunityFetch(
    accountId,
    OpportunityData,
    OpportunityLineItemData
  );

  const createPDF = async () => {
    let options = {
      //Content to print
      html: HTMlInvoice({example:'valu2'}),
      fileName: 'Invoice',
      //File directory
      directory: 'Documents',
      height:1200,
      width: Dimensions.get('window').width*2,
    };
    let file = await RNHTMLtoPDF.convert(options);
    if (file && file.filePath) {
      console.log(file.filePath);
      setInvoiceFilePath(file.filePath);
      setShowPdf(true);
    }
  };

  const CheckoutItem = ({ item }: any) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.Name}</Text>
      <View style={styles.itemRow}>
        <Text style={styles.col1}>{item.Id}</Text>
        <Text style={styles.col2}>{t('Original')}</Text>
        <Text>{t('New')}</Text>
      </View>
      <View style={styles.itemRow}>
        <Text style={styles.col1}>{t('Amount')}</Text>
        <Text style={styles.col2}>{item.Quantity}</Text>
        <Text>{item.Quantity * 2}</Text>
      </View>
      <View style={styles.itemRow}>
        <Text style={styles.col1}>{t('TotalAmount')}</Text>
        <Text style={styles.col2}>{item.UnitPrice}</Text>
        <Text>{item.UnitPrice * 2}</Text>
      </View>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {selectedOpportunityData?.map((item, index) => (
          <CheckoutItem key={'itme_' + index} item={item} />
        ))}
      </ScrollView>
      <View style={styles.itemRow}>
        <PaperButton mode="contained">{t('Cancel')}</PaperButton>
        <PaperButton mode="contained" onPress={() => createPDF()}>
          {t('Confirm')}
        </PaperButton>
      </View>
      <InvoiceDialog
        invoiceFilePath={invoiceFilePath}
        visible={showPdf}
        hideDialog={() => {
          setShowPdf(false);
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    margin: 5,
    padding: 5,
  },
  itemName: {
    fontWeight: '700',
    color: '#2196F3',
  },
  itemRow: {
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-between',
  },
  col1: {
    width: '50%',
  },
  col2: {
    width: '30%',
  },
});

export default memo(CheckoutScreen);
