import React from 'react'
import {View, Text, TouchableOpacity} from "react-native";

const CustomButton = ({title, containerStyles, handlePress, isLoading, textStyle}) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            disabled={isLoading}
            className={`${containerStyles} ${isLoading ? 'opacity-50' : ''} bg-secondary rounded-xl min-h-[62px] items-center justify-center`}>
            <Text className={`text-primary text-lg font-psemibold ${textStyle}`}>{title}</Text>
        </TouchableOpacity>
    )
}
export default CustomButton
