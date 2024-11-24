import React, { FC } from 'react'
import { View } from 'react-native'
import { TProduct } from '../../services/API/type'
import { Text } from '../../libs/UI'
import { useNavigation } from '@react-navigation/native'
import { routes } from '../../constants/routes'
type TProps = {
  product: TProduct
}
const ItemProduct: FC<TProps> = ({ product }) => {
  const navigation = useNavigation<any>()

  return (
    <View style={{ padding: 10 }}>
      <Text>{product.label}</Text>
      <Text>{product.description}</Text>
      <Text
        onPress={() => {
          navigation.navigate(routes.PRODUCT, {
            product: product,
            title: product.label,
          })
        }}
      >
        Shore more
      </Text>
    </View>
  )
}

export default ItemProduct
