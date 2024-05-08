import React, { useState } from 'react';
import { memo } from 'react';
import { StyleSheet, View, Text, Route, Dimensions, Alert } from 'react-native';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  fetchOpportunity,
  fetchOpportunityLineItem,
  fetchVisitData,
  getCurrentVisit,
} from '../lib/api';
import { useTranslation } from 'react-i18next';
import { Button as PaperButton } from 'react-native-paper';
import { Opportunity, OpportunityLineItem, Visits } from '../data/Record';
import { useSelectedOpportunityFetch } from '../hooks/useSelectedOpportunityFetch';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { HTMlInvoice } from '../data/HtmlInvoiceSource';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import PdfComponent from '../components/PdfComponent';
import InvoiceDialog from '../components/InvoiceDialog';
import MailDialog from '../components/MailDialog';
import DialogComponent from '../components/DialogComponent';
import { useSendEmail } from '../hooks/useSendEmail';

const CheckoutScreen = ({ route, navigation }: Route) => {
  //console.log(route.params, navigation);
  const queryClient = useQueryClient();
  const [invoiceFilePath, setInvoiceFilePath] = useState('');
  const [showPdf, setShowPdf] = useState(false);
  const [showMail, setShowMail] = useState(false);
  const [confirmAlert, setConfirmAlert] = useState(false);

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

  const {
    isPending,
    error,
    data: visitData,
    isFetching: isFethingVisit,
  } = useQuery<Visits[], Error>({
    queryKey: ['visits'],
    queryFn: () => fetchVisitData(),
    staleTime: Infinity,
    gcTime: Infinity,
  });

  const accountId = queryClient.getQueryData(['accountId']) as string;

  const selectedOpportunityData = useSelectedOpportunityFetch(
    accountId,
    OpportunityData,
    OpportunityLineItemData
  );

  const {
    isPending: iscurrentVisitIndexFetchPending,
    error: iscurrentVisitIndexFetchingError,
    data: currentVisitIndexData,
  } = useQuery<number, Error>({
    queryKey: ['currentVisitIndex'],
    queryFn: () => getCurrentVisit(),
    staleTime: Infinity,
    gcTime: Infinity,
    initialData: 0,
  });
  
  const onCancel = () => {
    if (navigation.canGoBack) navigation.goBack();
  };
  const hideConfirm = () => {
    setConfirmAlert(false);
  };
  const showConfirmAlert = () => {
    setConfirmAlert(true);
  };

  const updateVisit = useMutation({
    mutationKey: ['updateVisit'],
    onMutate: async (payload: boolean) => {
      await queryClient.cancelQueries({
        queryKey: ['visits'],
      });

      const previousVisits = queryClient.getQueryData<Visits[]>(['visits']);

      if (previousVisits) {
        queryClient.setQueryData<Visits[]>(['visits'], (old) => {
          return (
            old &&
            old.map((obj) =>
              obj.AccountId === accountId ? { ...obj, isVisited: payload } : obj
            )
          );
        });
      }

      const newVisitData =  queryClient.getQueryData<Visits[]>(['visits']);

      console.log(newVisitData);

      return { previousVisits };
    },
    onError: (error, variables, context) => {
      console.log('Error' + error);
    },
  });

  const onConfirmedInvoice = () => {
    setConfirmAlert(false);
    updateVisit.mutate(true);
    queryClient.setQueryData(['currentVisitIndex'],currentVisitIndexData+1 );
    createPDF();
  };
  const sendMail = (email: string) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email) === false) {
      Alert.alert(t('Invalid_Email_Alert'));
      return false;
    }
    setShowPdf(false);
    setShowMail(false);
    useSendEmail(email, invoiceFilePath);
    console.log('sending mail to', email);
  };
  const selectedVisit = visitData?.find(
    (value) => value.AccountId === accountId
  )!;
  const createPDF = async () => {
    let options = {
      //Content to print
      html: HTMlInvoice({
        example: 'valu2',
        selectedOpportunityData,
        selectedVisit,
      }),
      fileName: 'Invoice',
      //File directory
      directory: 'Documents',
      height: 1200,
      width: Dimensions.get('window').width * 2,
    };
    let file = await RNHTMLtoPDF.convert(options);
    if (file && file.filePath) {
      setInvoiceFilePath(file.filePath);
      setShowPdf(true);
    }
  };

  const CheckoutItem = ({ item }: any) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.Product2.Name}</Text>
      <View style={styles.itemRow}>
        <Text style={styles.col1}>{item.Product2Id}</Text>
        <Text style={styles.col2}>{t('Original')}</Text>
        <Text>{t('New')}</Text>
      </View>
      <View style={styles.itemRow}>
        <Text style={styles.col1}>{t('Amount')}</Text>
        <Text style={styles.col2}>{item.Quantity}</Text>
        <Text>{item.Quantity}</Text>
      </View>
      <View style={styles.itemRow}>
        <Text style={styles.col1}>{t('TotalAmount')}</Text>
        <Text style={styles.col2}>{item.UnitPrice}</Text>
        <Text>{item.UnitPrice}</Text>
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
        <PaperButton mode="contained" onPress={createPDF}>
          {t('Preview')} {t('Invoice')}
        </PaperButton>
        {!visitData?.find((value) => value.AccountId === accountId)!
          .isVisited && (
          <PaperButton mode="contained" onPress={showConfirmAlert}>
            {t('Confirm')}
          </PaperButton>
        )}
      </View>
      <DialogComponent
        visible={confirmAlert}
        hideDialog={hideConfirm}
        message={t('Confirm_Checkout_Alert')}
        navigate={onConfirmedInvoice}
      />
      <InvoiceDialog
        invoiceFilePath={invoiceFilePath}
        preview={
          visitData?.find((value) => value.AccountId === accountId)!.isVisited!
        }
        visible={showPdf && !showMail}
        hideDialog={() => {
          setShowPdf(false);
        }}
        mailDialog={() => {
          setShowMail(true);
        }}
      />
      <MailDialog
        visible={showMail}
        emailHandler={(e) => sendMail(e.toString())}
        hideDialog={() => {
          setShowMail(false);
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
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
