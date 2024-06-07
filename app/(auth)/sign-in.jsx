import React, {useState} from 'react'
import {View, Text, ScrollView, Image, Alert} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {Link, router} from "expo-router"
import {images} from '../../constants'
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import {getCurrentUser, signIn} from "../../lib/appwrite";
import {useGlobalContext} from "../../context/GlobalProvider";

const SignIn = () => {
    const {setUser, setIsLogged} = useGlobalContext()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [form, setForm] = useState({
        email: '',
        password: ''
    })


    async function submit() {
        if (!form.email || !form.password) {
            Alert.alert('Error', 'Please fill all the fields')
            return
        }
        setIsSubmitting(true)

        try {
            await signIn(form.email, form.password)
            const result = await getCurrentUser()
            //set it to global state using context...
            setUser(result)
            setIsLogged(true)
            router.replace('/home')
        } catch (error) {
            Alert.alert('Error', error.message)

        } finally {
            setIsSubmitting(false)

        }


    }

    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView>
                <View className="w-full justify-center min-h-[85vh] px-4 my-6">
                    <Image
                        source={images.logo}
                        resizeMode='contain'
                        className="w-[115px] h-[35px]"
                    />
                    <Text className="text-2xl text-white text-semibold mt-10 font-semibold">Login to Aora</Text>

                    <FormField
                        title="Email"
                        value={form.email}
                        handleChangeText={(e) => setForm({...form, email: e})}
                        otherStyles="mt-7"
                        keyboardType="email-address"
                    />

                    <FormField
                        title="Password"
                        value={form.password}
                        handleChangeText={(e) => setForm({...form, password: e})}
                        otherStyles="mt-7"
                    />

                    <CustomButton
                        title="Login"
                        handlePress={submit}
                        containerStyles="mt-7"
                        isLoading={isSubmitting}
                    />

                    <View className="justify-center pt-5 flex-row gap-2">
                        <Text className="text-lg font-pregular text-gray-100">Don't have account?</Text>
                        <Link href="/sign-up" className="font-psemibold text-lg text-secondary">Sign Up</Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignIn