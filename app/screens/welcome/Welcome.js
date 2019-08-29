import React from 'react';
import { useNavigation } from 'react-navigation-hooks';

//component
import { Image, View } from 'react-native';
import { Container } from '../../components/container';
import Text from '../../components/text/FontText';
import { Button } from '../../components/button';

//asset
import Img from '../../assets/images/welcome.png';

//styles
import styles from './styles';
import stylesGlobal from '../../screens/styles';

const Welcome = () => {
  const navigation = useNavigation();

  //handle
  const handleOK = () => {
    return navigation.navigate('Home');
  };
  return (
    <Container>
      <Text>Hi and Welcome</Text>
      <View style={styles.containerImage300}>
        <Image source={Img} style={stylesGlobal.image} resizeMode="contain" />
      </View>
      <Text style={[stylesGlobal.text11, stylesGlobal.padding20]}>
        Lorem ipsum dolor sit amet orem ipsum dolor sit amet orem ipsum dolor
        sit amet orem ipsum dolor sit amet
      </Text>
      <Button
        text="Ok"
        color={stylesGlobal.$goldColor}
        textColor={stylesGlobal.$blackColor}
        width="40%"
        height={35}
        onPress={() => handleOK()}
      />
    </Container>
  );
};

export default Welcome;
