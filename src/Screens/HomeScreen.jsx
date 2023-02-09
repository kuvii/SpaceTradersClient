import { View, Text, StyleSheet } from 'react-native'
import { getUserProfile } from '../api/api'
import { useEffect } from 'react'

const HomeScreen = () => {
    useEffect(() => {
        const fetchUserProfile = async () => {
            const data = await getUserProfile()
        }
        fetchUserProfile()
    }, [])

  return (
    <View style={styles.center}>
        <View style={{...styles.stack, justifyContent: 'center'}}>
        </View>
        <View style={styles.stack}></View>
        <View style={{...styles.stack, height: 200}}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        paddingTop: 10,
        alignItems: 'center'
    },
    stack: {
        backgroundColor: 'lightgrey',
        borderWidth: 1,
        height: 100,
        margin: 10,
        width: 300,
    },
})

export default HomeScreen