import { View, Text } from 'react-native'
import { getUserProfile } from '../api/api'
import { useEffect } from 'react'

const HomeScreen = () => {
    useEffect(() => {
        const fetchUserProfile = async () => {
            const data = await getUserProfile()
            console.log(data)
        }
        fetchUserProfile()
    }, [])

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen