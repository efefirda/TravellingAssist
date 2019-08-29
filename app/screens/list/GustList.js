import React, { useState } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  LayoutAnimation,
  Image,
} from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigationParam } from 'react-navigation-hooks';
//component
import { Container } from '../../components/container';
import { Card } from '../../components/card';
import { SeperatorDashes, Seperator } from '../../components/seperator';
import Text from '../../components/text/FontText';

//styles
import stylesGlobal from '../styles';

//icons
import IconUp from '../../assets/icons/arrow_up.png';
import IconDown from '../../assets/icons/arrow_down.png';

const GuestList = () => {
  const [state, setState] = useState({
    updatedHeightManual: 0,
    textOverflow: 'hidden',
    expand: false,
    buttonText: IconUp,

    updatedHeightManualChild: 0,
    textOverflowChild: 'hidden',
    expandChild: false,
    buttonTextChild: IconUp,

    updatedHeightManualInfant: 0,
    textOverflowInfant: 'hidden',
    expandInfant: false,
    buttonTextInfant: IconUp,
  });
  const Adult = useNavigationParam('Adult');
  const Child = useNavigationParam('Child');
  const Infant = useNavigationParam('Infant');

  const listCountry = useSelector(
    state => state.requestRoomReducer.listCountry
  );

  const listTitle = useSelector(state => state.requestRoomReducer.listTitle);

  //function to get country name
  const countryNamebyId = (data, id) => {
    // eslint-disable-next-line
    const result = data.find(e => e.Id == id);
    return result.Name;
  };

  //function to get title name
  const titleGuestById = (data, id) => {
    // eslint-disable-next-line
    const result = data.find(e => e.Id == id);
    return result.Name;
  };

  //function to hide and show card
  const expand_collapse_Function = (size, status) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    if (status == 'Adult') {
      if (state.expand == false) {
        setState({
          ...state,
          updatedHeightManual: size > 1 ? size * 70 : 100,
          textOverflow: 'visible',
          expand: true,
          buttonText: IconDown,
        });
      } else {
        setState({
          ...state,
          updatedHeightManual: 0,
          expand: false,
          buttonText: IconUp,
          textOverflow: 'hidden',
        });
      }
    } else if (status == 'Child') {
      if (state.expandChild == false) {
        setState({
          ...state,
          updatedHeightManualChild: size > 1 ? size * 70 : 100,
          textOverflowChild: 'visible',
          expandChild: true,
          buttonTextChild: IconDown,
        });
      } else {
        setState({
          ...state,
          updatedHeightManualChild: 0,
          textOverflowChild: 'hidden',
          expandChild: false,
          buttonTextChild: IconUp,
        });
      }
    } else {
      if (state.expandInfant == false) {
        setState({
          ...state,
          updatedHeightManualInfant: size > 1 ? size * 70 : 100,
          textOverflowInfant: 'visible',
          expandInfant: true,
          buttonTextInfant: IconDown,
        });
      } else {
        setState({
          ...state,
          updatedHeightManualInfant: 0,
          textOverflowInfant: 'hidden',
          expandInfant: false,
          buttonTextInfant: IconUp,
        });
      }
    }
  };

  return (
    <Container>
      <ScrollView style={stylesGlobal.containerScroll}>
        <View style={stylesGlobal.center}>
          {Adult.length != 0 ? (
            <Card widthCard="90%">
              <TouchableOpacity
                onPress={() => expand_collapse_Function(Adult.length, 'Adult')}
              >
                <View
                  style={[
                    stylesGlobal.row,
                    stylesGlobal.width100,
                    stylesGlobal.paddingHorizontal10,
                    stylesGlobal.paddingTop10,
                    state.expand ? null : stylesGlobal.paddingBottom10,
                  ]}
                >
                  <View style={[stylesGlobal.width90, stylesGlobal.row]}>
                    <Text style={[stylesGlobal.text18]} type="bold">
                      Adult
                    </Text>
                    <Text style={[stylesGlobal.text18, stylesGlobal.greyColor]}>
                      {' '}
                      ({Adult.length} Pax)
                    </Text>
                  </View>
                  <View style={stylesGlobal.width10}>
                    <View style={stylesGlobal.containerIcon20}>
                      <Image
                        source={state.buttonText}
                        style={stylesGlobal.image}
                      />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>

              {state.expand ? (
                <View
                  style={{
                    height: state.updatedHeightManual,
                    overflow: state.textOverflow,
                  }}
                >
                  <SeperatorDashes
                    width={10}
                    height={1}
                    color={stylesGlobal.$lightGreyColor}
                    repeat={28}
                  />

                  {Adult.map((Adult, i) => {
                    return (
                      <View key={i}>
                        <View
                          style={[
                            stylesGlobal.row,
                            stylesGlobal.width100,
                            stylesGlobal.paddingHorizontal10,
                            stylesGlobal.paddingBottom10,
                          ]}
                        >
                          <View style={stylesGlobal.width70}>
                            <Text style={stylesGlobal.text16}>
                              {Adult.Title
                                ? titleGuestById(listTitle, Adult.Title)
                                : ''}{' '}
                              {Adult.FirstName} {Adult.LastName}
                            </Text>
                            <Text
                              style={[
                                stylesGlobal.text14,
                                stylesGlobal.greyColor,
                              ]}
                            >
                              Passport: {Adult.IdentityNbr}
                            </Text>
                          </View>
                          <View
                            style={[stylesGlobal.width30, stylesGlobal.center]}
                          >
                            <Text
                              style={[
                                stylesGlobal.text14,
                                stylesGlobal.greyColor,
                              ]}
                            >
                              Country:
                            </Text>
                            <Text style={[stylesGlobal.text16]} type="bold">
                              {Adult.CountryId
                                ? countryNamebyId(listCountry, Adult.CountryId)
                                : ''}
                            </Text>
                          </View>
                        </View>
                        <View style={stylesGlobal.paddingHorizontal10}>
                          <Seperator
                            width="98%"
                            color={stylesGlobal.$lightGreyColor}
                            height={1}
                          />
                        </View>
                      </View>
                    );
                  })}
                </View>
              ) : null}
            </Card>
          ) : null}
          {Child.length != 0 ? (
            <Card widthCard="90%">
              <TouchableOpacity
                onPress={() => expand_collapse_Function(Child.length, 'Child')}
              >
                <View
                  style={[
                    stylesGlobal.row,
                    stylesGlobal.width100,
                    stylesGlobal.paddingHorizontal10,
                    stylesGlobal.paddingTop10,
                    state.expandChild ? null : stylesGlobal.paddingBottom10,
                  ]}
                >
                  <View style={[stylesGlobal.width90, stylesGlobal.row]}>
                    <Text style={[stylesGlobal.text18]} type="bold">
                      Children
                    </Text>
                    <Text style={[stylesGlobal.text18, stylesGlobal.greyColor]}>
                      {' '}
                      ({Child.length} Pax)
                    </Text>
                  </View>
                  <View style={stylesGlobal.width10}>
                    <View style={stylesGlobal.containerIcon20}>
                      <Image
                        source={state.buttonText}
                        style={stylesGlobal.image}
                      />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>

              {state.expandChild ? (
                <View
                  style={{
                    height: state.updatedHeightManualChild,
                    overflow: state.textOverflowChild,
                  }}
                >
                  <SeperatorDashes
                    width={10}
                    height={1}
                    color={stylesGlobal.$lightGreyColor}
                    repeat={28}
                  />

                  {Child.map((Child, i) => {
                    return (
                      <View key={i}>
                        <View
                          style={[
                            stylesGlobal.row,
                            stylesGlobal.width100,
                            stylesGlobal.paddingHorizontal10,
                            stylesGlobal.paddingBottom10,
                          ]}
                        >
                          <View style={stylesGlobal.width70}>
                            <Text style={stylesGlobal.text16}>
                              {Child.Title} {Child.FirstName} {Child.LastName}
                            </Text>
                            <Text
                              style={[
                                stylesGlobal.text16,
                                stylesGlobal.greyColor,
                              ]}
                            >
                              Passport: {Child.IdentityNbr}
                            </Text>
                          </View>
                          <View
                            style={[stylesGlobal.width30, stylesGlobal.center]}
                          >
                            <Text style={[stylesGlobal.text16]} type="bold">
                              {Child.CountryId}
                            </Text>
                          </View>
                        </View>
                        <View style={stylesGlobal.paddingHorizontal10}>
                          <Seperator
                            width="98%"
                            color={stylesGlobal.$lightGreyColor}
                            height={1}
                          />
                        </View>
                      </View>
                    );
                  })}
                </View>
              ) : null}
            </Card>
          ) : null}
          {Infant.length != 0 ? (
            <Card widthCard="90%">
              <TouchableOpacity
                onPress={() =>
                  expand_collapse_Function(Infant.length, 'Infant')
                }
              >
                <View
                  style={[
                    stylesGlobal.row,
                    stylesGlobal.width100,
                    stylesGlobal.paddingHorizontal10,
                    stylesGlobal.paddingTop10,
                    state.expand ? null : stylesGlobal.paddingBottom10,
                  ]}
                >
                  <View style={[stylesGlobal.width90, stylesGlobal.row]}>
                    <Text style={[stylesGlobal.text18]} type="bold">
                      Infant
                    </Text>
                    <Text style={[stylesGlobal.text18, stylesGlobal.greyColor]}>
                      {' '}
                      ({Infant.length} Pax)
                    </Text>
                  </View>
                  <View style={stylesGlobal.width10}>
                    <View style={stylesGlobal.containerIcon20}>
                      <Image
                        source={state.buttonText}
                        style={stylesGlobal.image}
                      />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>

              {state.expandInfant ? (
                <View
                  style={{
                    height: state.updatedHeightManualInfant,
                    overflow: state.textOverflowInfant,
                  }}
                >
                  <SeperatorDashes
                    width={10}
                    height={1}
                    color={stylesGlobal.$lightGreyColor}
                    repeat={28}
                  />

                  {Infant.map((Infant, i) => {
                    return (
                      <View key={i}>
                        <View
                          style={[
                            stylesGlobal.row,
                            stylesGlobal.width100,
                            stylesGlobal.paddingHorizontal10,
                            stylesGlobal.paddingBottom10,
                          ]}
                        >
                          <View style={stylesGlobal.width70}>
                            <Text style={stylesGlobal.text16}>
                              {Infant.Title} {Infant.FirstName}{' '}
                              {Infant.LastName}
                            </Text>
                            <Text
                              style={[
                                stylesGlobal.text16,
                                stylesGlobal.greyColor,
                              ]}
                            >
                              Passport: {Infant.IdentityNbr}
                            </Text>
                          </View>
                          <View
                            style={[stylesGlobal.width30, stylesGlobal.center]}
                          >
                            <Text style={[stylesGlobal.text16]} type="bold">
                              {Infant.CountryId}
                            </Text>
                          </View>
                        </View>
                        <View style={stylesGlobal.paddingHorizontal10}>
                          <Seperator
                            width="98%"
                            color={stylesGlobal.$lightGreyColor}
                            height={1}
                          />
                        </View>
                      </View>
                    );
                  })}
                </View>
              ) : null}
            </Card>
          ) : null}
        </View>
      </ScrollView>
    </Container>
  );
};

export default GuestList;
