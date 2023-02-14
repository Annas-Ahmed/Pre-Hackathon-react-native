import React from 'react';
import {Image, ImageBackground, Text, View, ScrollView} from 'react-native';
import {commonStyles} from '../styles/common_styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconI from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconF from 'react-native-vector-icons/Fontisto';

const ProductDetail = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: 'white',
      }}>
      <ImageBackground
        style={{
          paddingHorizontal: 30,
          paddingVertical: 20,
          position: 'relative',
          paddingBottom: 70,
        }}
        source={require('../assets/product_detail_background.png')}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 20,
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Image
              source={require('../assets/login_head.png')}
              style={{
                width: 40,
                height: 40,
                marginRight: 15,
              }}
            />
            <Text style={commonStyles.logo}>Plantify</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              gap: 20,
            }}>
            <IconI
              style={{
                fontSize: 30,
                color: 'black',
              }}
              name="search"
            />
            <Icon
              style={{
                fontSize: 30,
                color: 'black',
              }}
              name="notification-clear-all"
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              gap: 15,
            }}>
            <Text
              style={{
                fontFamily: 'Poppins',
                fontWeight: 'bold',
                fontSize: 14,
                color: '#002140',
              }}>
              Air Purifier
            </Text>
            <IconFA
              style={{
                fontSize: 20,
                color: '#0D986A',
              }}
              name="paw"
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
              backgroundColor: 'white',
              paddingHorizontal: 15,
              paddingVertical: 3,
              borderRadius: 25,
            }}>
            <IconFA
              style={{
                fontSize: 15,
                color: '#0D986A',
              }}
              name="star"
            />
            <Text
              style={{
                color: '#002140',
              }}>
              4.8
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontFamily: 'Philosopher',
            fontWeight: 700,
            fontSize: 38,
            color: '#002140',
            marginBottom: 40,
          }}>
          Watermelon Peperomia
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins',
            fontWeight: 700,
            fontSize: 12,
            color: '#002140',
            opacity: 0.6,
          }}>
          PRIZE
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins',
            fontWeight: 700,
            fontSize: 16,
            color: '#002140',
            marginBottom: 20,
          }}>
          $ 350
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins',
            fontWeight: 700,
            fontSize: 12,
            color: '#002140',
            opacity: 0.6,
          }}>
          SIZE
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins',
            fontWeight: 700,
            fontSize: 16,
            color: '#002140',
            marginBottom: 20,
          }}>
          5” h
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            position: 'absolute',
            alignItems: 'flex-end',
            right: 0,
            bottom: 0,
          }}>
          <Image
            source={require('../assets/cart_logo.png')}
            style={{
              width: 60,
              height: 60,
            }}
          />
          <Text
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              padding: 15,
              borderRadius: 50,
            }}>
            <IconFA
              style={[
                {
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: '#000',
                  //   borderWidth: 5,
                  textAlign: 'center',
                },
              ]}
              name="heart"
            />
          </Text>
          <Image
            source={require('../assets/product1.png')}
            style={{
              width: 250,
              height: 250,
            }}
          />
        </View>
      </ImageBackground>
      <View
        style={{
          paddingHorizontal: 30,
          paddingVertical: 70,
        }}>
        <Text
          style={{
            fontFamily: 'Poppins',
            fontWeight: 700,
            fontSize: 14,
            color: '#002140',
            marginBottom: 10,
          }}>
          Overview
        </Text>
        <View
          style={{
            flexDirection: 'row',
            // gap:
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              gap: 15,
              alignItems: 'center',
            }}>
            <IconF
              style={{
                fontSize: 20,
                color: '#0D986A',
              }}
              name="blood-drop"
            />
            <View>
              <Text
                style={{
                  fontFamily: 'Poppins',
                  fontWeight: 700,
                  fontSize: 13,
                  color: '#0D986A',
                }}>
                250ml
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins',
                  fontWeight: 700,
                  fontSize: 9,
                  color: '#002140',
                  opacity: 0.6,
                }}>
                Water
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              gap: 15,
              alignItems: 'center',
            }}>
            <IconI
              style={{
                fontSize: 20,
                color: '#0D986A',
              }}
              name="ios-sunny"
            />
            <View>
              <Text
                style={{
                  fontFamily: 'Poppins',
                  fontWeight: 700,
                  fontSize: 13,
                  color: '#0D986A',
                }}>
                250ml
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins',
                  fontWeight: 700,
                  fontSize: 9,
                  color: '#002140',
                  opacity: 0.6,
                }}>
                Water
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              gap: 15,
              alignItems: 'center',
            }}>
            <Icon
              style={{
                fontSize: 20,
                color: '#0D986A',
              }}
              name="dots-hexagon"
            />
            <View>
              <Text
                style={{
                  fontFamily: 'Poppins',
                  fontWeight: 700,
                  fontSize: 13,
                  color: '#0D986A',
                }}>
                250ml
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins',
                  fontWeight: 700,
                  fontSize: 9,
                  color: '#002140',
                  opacity: 0.6,
                }}>
                Water
              </Text>
            </View>
          </View>
        </View>
        <Text
          style={{
            fontFamily: 'Poppins',
            fontWeight: 700,
            fontSize: 14,
            color: '#002140',
            marginTop: 40,
            marginBottom: 10,
          }}>
          Plant Bio
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: '#002140',
            opacity: 0.7,
          }}>
          No green thumb required to keep our artificial watermelon peperomia
          plant looking lively and lush anywhere you place it.
        </Text>
      </View>
    </ScrollView>
  );
};

export default ProductDetail;
