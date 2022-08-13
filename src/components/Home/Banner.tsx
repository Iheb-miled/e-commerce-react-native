import * as React from 'react';
import { Image, ScrollView, View } from 'react-native';
import { styles } from '../../Styles/Banner';
import Swiper from 'react-native-swiper'
import { width } from '../../Styles/WidthHeight';
import { useEffect, useState } from 'react';

export default function Banner() {
    const [BannerData, setBannerData] = useState([''])
    useEffect(() => {
        setBannerData([
            'https://img.freepik.com/free-psd/online-shopping-with-mobile-shopping-elements-mockup-template_1150-38858.jpg?w=1060&t=st=1659808156~exp=1659808756~hmac=50c4e38b7a7261d45e665ae690e349e196973cced5e850c4cd9c00c2aa7b2103',
            'https://img.freepik.com/free-psd/online-shopping-with-laptop-mockup-template-shopping-elements_1150-38888.jpg?w=1060&t=st=1659808218~exp=1659808818~hmac=5745afed1d7f1056fa44f76c7531ec0026c2ed491cc598cc91a82f2c19be1f5e',
            'https://img.freepik.com/free-psd/online-shopping-with-laptop-mockup-template-shopping-elements_1150-38886.jpg?t=st=1659791005~exp=1659791605~hmac=8cb4c2423b6450273a2e93b19997efdeed2b2e4c8d9be0e865ec6d959d93c62d',
        ]);
        return () => {
            setBannerData([]);
        };

    }, []);
    return (
        <ScrollView >
            <View style={styles.container}>
                <View style={styles.swiper}>
                    <Swiper showsButtons={false}
                        autoplay={true}
                        autoplayTimeout={4}
                        style={{
                            height: width / 2,
                        }}>
                        {BannerData.map((item) => {
                            return (
                                <Image key={item}
                                    resizeMode="contain"
                                    source={{ uri: item !== "" ? item : undefined }}
                                    style={styles.banner}
                                />
                            )
                        })}

                    </Swiper>
                </View>
            </View>
        </ScrollView>
    );
}

