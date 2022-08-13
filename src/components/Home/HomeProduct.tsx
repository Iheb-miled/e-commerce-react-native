import React, { Fragment, useCallback, useEffect } from 'react';
import { View, Text, ScrollView, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import { getProduct } from '../../features/Product/ProductSlice';
import { useAppDispatch, useAppSelector } from '../../Store/Store';
import { styles } from '../../Styles/HomeProduct';
import ProductCard from '../Home/ProductCard'

export default function HomeProduct() {
  const dispatch = useAppDispatch()
  const { products, Loading, errors } = useAppSelector(state => state.products)
  const initApp = useCallback(async () => {
    await dispatch(getProduct())
  }, [dispatch]);

  useEffect(() => {
    initApp()
  }, [])

  return (
    <>{Loading ? (<Text>Loading</Text>) : (
      <SafeAreaView >
        <ScrollView  >
          <View style={styles.container}>
            <Text style={styles.text} >Best Selling</Text>
            <View style={styles.ProductCard}>
              {products && products.map(product => (
                <ProductCard key={product._id} product={product} />
              ))}

            </View>
          </View>
        </ScrollView>
      </SafeAreaView>)}
    </>
  );
}

