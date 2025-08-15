import React, { useState } from 'react'; // Import useState for search functionality
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, ImageBackground, TextInput } from 'react-native';

const Group3Screen = ({ navigation }) => {
  const [searchText, setSearchText] = useState(''); // State for the search input

  return (
    <ImageBackground
      source={require('./assets/images/p1.png')} // Path to your background image
      style={styles.container} // Apply background image to the entire container
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          {/* Image above the greeting text */}
          <View style={styles.searchContainer}>
            <View style={styles.searchBar}>
              <Text style={styles.searchIcon}>🔍</Text>
              <TextInput
                style={styles.searchInput}
                placeholder="ค้นหา"
                placeholderTextColor="#999"
                value={searchText}
                onChangeText={setSearchText}
              />
              <Text style={styles.diamondIcon}>💎</Text>
            </View>
          </View>

          <Text style={styles.headerTitle}>Sopitnapa ยินดีต้อนรับสู่ HarnKeng</Text>
          <Text style={styles.subTitle}>ตอนนี้คุณยังไม่เข้ากลุ่ม</Text>
        </View>

        {/* Group Section */}
        <View style={styles.groupSection}>
          <Text style={styles.infoText}>
            กลุ่มนี้จะใช้สำหรับการแจ้งการทำงานด้านต่างๆ
            เพื่อใช้ในการรายงานและสอบถามข้อมูล
          </Text>

          <TouchableOpacity style={styles.joinGroupButton}>
            <Text style={styles.joinGroupText}>เริ่มกลุ่ม</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom Navigation Bar */}
        <View style={styles.bottomTabBar}>
          <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Home')}>
            <Image
              source={require('./assets/images/logo1.png')}
              style={styles.iconImage}
            />
            <Text style={styles.iconText}>หน้าหลัก</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Group')}>
            <Image
              source={require('./assets/images/logo2.png')}
              style={styles.iconImage}
            />
            <Text style={styles.iconText}>กลุ่ม</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Activities')}>
            <Image
              source={require('./assets/images/logo3.png')}
              style={styles.iconImage}
            />
            <Text style={styles.iconText}>กิจกรรม</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Account')}>
            <Image
              source={require('./assets/images/logo4.png')}
              style={styles.iconImage}
            />
            <Text style={styles.iconText}>บัญชี</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  searchContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchBar: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderRadius: 8,
  width: 350,  // Set a fixed width in pixels to make it longer
  paddingHorizontal: 10,
  paddingVertical: 5,
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowRadius: 5,
  elevation: 3,
},

  searchIcon: {
    fontSize: 18,
    color: '#555',
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  diamondIcon: {
    fontSize: 18,
    color: '#555',
    marginLeft: 10,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  subTitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
  },
  groupSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  joinGroupButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 8,
    width: '50%',
    alignItems: 'center',
  },
  joinGroupText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomTabBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 30,
    paddingBottom: 20,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  iconButton: {
    alignItems: 'center',
    flex: 1,
  },
  iconImage: {
    width: 30,
    height: 30,
    marginBottom: 5,
    resizeMode: 'contain',
  },
  iconText: {
    fontSize: 12,
    color: '#333',
  },
});

export default Group3Screen;
