import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
//import Icon from '../ions/Icon';
//import GalioTheme, { withGalio } from '../../theme';

function InputIcon({
    style,
    textInputStyle,
    type,
    placeholderTextColor,
    label,
    labelStyles,
    color,
    help,
    helpStyles,
    bgColor,
    borderless,
    viewPass,
    rounded,
    icon,
    family,
    left,
    right,
    iconColor,
    topHelp,
    bottomHelp,
    theme,
    styles,
    iconSize,
    iconContent,
    password,
    onRef,
    onChangeText,
    error,
    ...rest
}) {
    //const [isPassword, setIsPassword] = React.useState(false);
    //React.useEffect(() => {
    //    setIsPassword(password);
    //}, []);

    //const inputViewStyles = [
    //    styles.inputStyle,
    //    styles.inputContainer,
    //    bgColor && { backgroundColor: bgColor },
    //    rounded && styles.rounded,
    //    borderless && styles.borderless,
    //    error && { borderColor: theme.COLORS.DANGER },
    //    style,
    //];

    //const inputStyles = [
    //    styles.inputView,
    //    borderless && icon && styles.inputIcon,
    //    styles.inputText,
    //    color && { color },
    //    textInputStyle || {}
    //];

    //const iconInstance = icon ? (
    //    <Icon
    //        name={icon}
    //        family={family}
    //        size={iconSize || theme.SIZES.BASE * 1.0625}
    //        style={{ marginRight: left && !right ? 4 : 0 }}
    //        color={(error && theme.COLORS.DANGER) || iconColor || placeholderTextColor || theme.COLORS.PLACEHOLDER}
    //    />
    //) : (
    //        iconContent
    //    );

    //const viewPassElement = password && viewPass && (
    //    <TouchableOpacity style={{ marginLeft: 2 }} onPress={() => setIsPassword(!isPassword)}>
    //        <Icon
    //            size={iconSize || theme.SIZES.BASE * 1.0625}
    //            color={iconColor || theme.COLORS.BLACK}
    //            name="eye"
    //            family="entypo"
    //        />
    //    </TouchableOpacity>
    //);
    //const labelContent = label && <Text style={[styles.label, labelStyles || {}]}>{label}</Text>;
    //const helpContent = help && <Text style={[styles.helpText, helpStyles || {}]}>{help}</Text>;

    return (
        <View
            style={{
                //marginVertical: theme.SIZES.BASE / 2,
                alignContent: 'center',
            }}>
            <View>
                {/*{left && !right && iconInstance}*/}
                <TextInput
                    //ref={onRef}
                    //style={inputStyles}
                    //keyboardType={type}
                    //secureTextEntry={isPassword}
                    //placeholderTextColor={placeholderTextColor}
                    //underlineColorAndroid="transparent"
                    onChangeText={onChangeText}
                />
            </View>
        </View>
    );
}



export default InputIcon;

const styles = theme =>
    StyleSheet.create({
        //inputStyle: {
        //    backgroundColor: theme.COLORS.WHITE,
        //    borderRadius: theme.SIZES.INPUT_BORDER_RADIUS,
        //    borderWidth: theme.SIZES.INPUT_BORDER_WIDTH,
        //    borderColor: theme.COLORS.INPUT,
        //    height: theme.SIZES.INPUT_HEIGHT,
        //    paddingHorizontal: theme.SIZES.INPUT_HORIZONTAL,
        //    width: '100%',
        //},
        //inputText: {
        //    color: theme.COLORS.INPUT,
        //    fontSize: theme.SIZES.INPUT_TEXT,
        //    textDecorationColor: 'transparent',
        //    textShadowColor: 'transparent',
        //},
        //inputContainer: {
        //    flexDirection: 'row',
        //    alignItems: 'center',
        //    justifyContent: 'center',
        //},
        //inputView: {
        //    flex: 1,
        //},
        //inputIcon: {
        //    marginHorizontal: theme.SIZES.BASE,
        //},
        //label: {
        //    fontWeight: '500',
        //    fontSize: theme.SIZES.INPUT_LABEL_TEXT,
        //    marginVertical: theme.SIZES.INPUT_VERTICAL_LABEL,
        //    paddingHorizontal: theme.SIZES.INPUT_HORIZONTAL
        //},
        //helpText: {
        //    color: theme.COLORS.SECONDARY,
        //    fontSize: theme.SIZES.INPUT_HELP_TEXT,
        //    marginVertical: 8,
        //    paddingHorizontal: 16,
        //    fontSize: 14
        //},
        //rounded: {
        //    borderRadius: theme.SIZES.INPUT_ROUNDED,
        //},
        borderless: {
            borderColor: 'transparent',
            borderWidth: 0,
        },
    });
