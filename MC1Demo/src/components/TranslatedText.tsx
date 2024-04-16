import React, { memo } from 'react';
import { Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

const TranslatedText = (props:any) => {
  const { t } = useTranslation();

  return (
    <Text style={[styles.defaultStyle, props.style]}>{t(props.children)}</Text>
  );
};

const styles = StyleSheet.create({
  // ... add your default style here
  defaultStyle: {},
});

export default memo(TranslatedText);
