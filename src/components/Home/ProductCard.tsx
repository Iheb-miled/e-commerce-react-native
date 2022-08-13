// import { Rating } from '@material-ui/lab';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../../Styles/ProductCard';
import { Product } from '../../Type/ProductType';


export default function ProductCard({ product }: { product: Product }) {
  const [click, setClick] = useState(false)
  return (
    <View style={styles.ProductCard}>
      <Image source={{ uri: product.images[0].url }} style={styles.image} />
      <View>
        <Text style={styles.productName}>{product.name} </Text>
      </View>

      <View style={styles.PriceView}>
        <Text style={styles.PriceText}>${product.price}</Text>
        {product.offerPrice && <Text style={styles.offerPriceText}>${product.offerPrice}</Text>}  
      </View>
      <View style={styles.IconView}>
        {
          click ? (
            <TouchableOpacity>
              <Icon name="heart" size={25} style={styles.IconStylesClicked} onPress={() => setClick(!click)} />
            </TouchableOpacity>
          ) : (

            <TouchableOpacity>
              <Icon name="heart-outline" size={25} style={styles.IconStylesNotClicked} onPress={() => setClick(!click)} />
            </TouchableOpacity>
          )
        }
        {
          product.Stock !== 0 ? (<TouchableOpacity>
            <Icon name="cart-outline" size={25} style={styles.IconStylesNotClicked} />
          </TouchableOpacity>
          ) : (null)
        }
      </View>
      {
        product.Stock === 0 ? (
          <View style={styles.outOfStock}>
            <Text style={styles.limitStock}>Stock Limited</Text>
          </View>
        ) : (
          null
        )
      }


    </View>
  );
}
