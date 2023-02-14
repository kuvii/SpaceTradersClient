import { View, Text, StyleSheet } from 'react-native'
import { useEffect, useState } from 'react'
import { getLoansAvailable } from '../api/api'

const LoansScreen = () => {

  const [loansAvailable, setLoansAvailable] = useState([])

  useEffect(() => {
    const fetchGetLoansAvailable = async () => {
      try {
        const data = await getLoansAvailable()
        const loans = data.loans
        if (loansAvailable.length == 0){
          setLoansAvailable(loans)
        }
      } catch (error) {
        console.error(error)
      }
    }
    fetchGetLoansAvailable()
  }, [])

  return (
    <View style={styles.centerItems}>
      <View style={{flex: 1}}>
        <View style={styles.centerItems}>
          <Text style={{fontSize: 30}}>Loans Available</Text>
        </View>
      </View>
      <View style={{flex: 2}}>
          <Text>List</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  centerItems: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default LoansScreen