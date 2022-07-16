import { StyleSheet } from 'react-native';

export default function () {
  return StyleSheet.create({
    arrow: {
      padding: 10,
    },
    arrowHitSlop: {
      top: 20,
      left: 20,
      right: 20,
      bottom: 20,
    },
    arrowImage: {
      tintColor: '#3874f6',
    },
    container: {
      width: '100%',
      display: 'flex',
      paddingLeft: 10,
      paddingRight: 10,
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: 'white',
      justifyContent: 'space-between',
    },
    dateContainer: {
      display: 'flex',
      flexDirection: 'row',
    },
    dateText: {
      margin: 10,
      fontSize: 16,
      color: '#2d4150',
      fontWeight: '300',
      fontFamily: 'System',
    },
  });
}
