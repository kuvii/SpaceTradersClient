import { View, Text, StyleSheet, FlatList } from 'react-native'
import { useEffect, useState } from 'react'
import { getLoansAvailable } from '../api/api'
import LoanContainer from '../components/LoanContainer'

const LoansScreen = ({token}) => {

  const [loansAvailable, setLoansAvailable] = useState([])

  useEffect(() => {
    const fetchGetLoansAvailable = async () => {
      try {
        const data = await getLoansAvailable(token)
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
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{fontSize: 30, marginVertical: 20}}>Loans Available</Text>
      </View>
      <View style={{flex: 5, height: '100%', width: '100%'}}>
        <View style={styles.centerItems}>
        <FlatList 
          data={loansAvailable}
          style= {{flex: 1, width: '70%'}}
          renderItem={({item}) => {
            return (
              <LoanContainer item={item}/>
              )
            }}
        />
        </View>
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