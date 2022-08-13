import React, { useEffect, useState, useCallback } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import Banner from '../components/Home/Banner';
import HomeProduct from '../components/Home/HomeProduct';
const HomeScreen = () => {

    return (
        <View  >
            <Banner />
            <HomeProduct />
        </View>
    );
}

export default HomeScreen;