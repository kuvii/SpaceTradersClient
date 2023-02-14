import { View, Text, Image, StyleSheet } from 'react-native'
import { getRandomAvatar } from '../utils/images'


const Username = ({username}) => {
  return (
    <View style={styles.row}>
      <View style={{flex: 1}}>
          <Image source={getRandomAvatar()} alt='avatar' style={{
            backgroundColor: 'black', 
            borderRadius: 20,
            height: '90%', 
            marginLeft: 5, 
            width: '80%', 
            }} />
      </View>
      <View style={{flex: 1}}>
        <View style={styles.usernameContainer}>
            <Text style={{fontSize: 20}}>{username}</Text>
        </View>
      </View>
    </View>
  )
}

let styles = StyleSheet.create({
  usernameContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  stack: {
    backgroundColor: 'lightgrey',
    borderWidth: 1,
    height: 100,
    margin: 10,
    width: 300,
  }
})

styles = {
  row: {
    ...styles.stack,
    alignItems: 'center',
    flexDirection: 'row',
  }
}
export default Username