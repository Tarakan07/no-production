import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from '../../../libs/UI'
import { TProduct } from '../../../services/API/type'
const InnerProduct: FC<TProduct> = ({ id, description, label }) => {
  return (
    <View style={styles.container}>
      <Text variantSize="S7">{label}</Text>
      <Text variantSize="S2">{description}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center' },
})
export default InnerProduct
