import React, {useState} from 'react'
import {View, Text, TextInput, TouchableOpacity, Image} from "react-native";

import {icons} from "../constants"
const FormField = ({title, value, placeholder, handleChangeText, otherStyles, ...props}) => {
    const [showPassword, setShowPassword]= useState(false)

    return (
        <View className={`space-y-2 ${otherStyles}`}>
           <Text className="text-base text-gray-100 font-pmedium">{title}</Text>

            <View className="border-2 border-black-100 w-full flex-row items-center h-16 px-4 bg-black-100  rounded-2xl focus:border-secondary">
               <TextInput
                  className="flex-1 text-white font-pmedium text-base"
                  value={value}
                  onChangeText={handleChangeText}
                  placeholder={placeholder}
                  placeholderTextColor="#7b7b8b"
                  secureTextEntry={title === 'Password' && !showPassword}
               />

                {title === 'Password' && (
                    <TouchableOpacity onPress={()=> setShowPassword(!showPassword)}>
                        <Image
                          source={!showPassword ? icons.eye : icons.eyeHide}
                          className="w-6 h-6"
                          resizeMode='contain'
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}
export default FormField
