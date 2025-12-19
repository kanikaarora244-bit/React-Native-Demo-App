import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Switch,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootStack';

type Props = NativeStackScreenProps<RootStackParamList, 'Onboarding'>;

const Onboarding: React.FC<Props> = ({ navigation }) => {
  const [password, setPassword] = useState('');
  const [useFingerprint, setUseFingerprint] = useState(true);

  const canUnlock = true;

  const handleUnlock = () => {
    navigation.replace('MainTabs');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.logo}>MetaMask</Text>

        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Enter password"
            placeholderTextColor="#6B7280"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            style={styles.input}
          />
          {/* Right-side fingerprint icon could be added here with an Image or Icon component */}
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Unlock with Fingerprint?</Text>
          <Switch
            value={useFingerprint}
            onValueChange={setUseFingerprint}
            trackColor={{ false: '#374151', true: '#4F46E5' }}
            thumbColor="#FFFFFF"
          />
        </View>

        <TouchableOpacity
          style={[styles.unlockButton, !canUnlock && styles.unlockButtonDisabled]}
          activeOpacity={canUnlock ? 0.8 : 1}
          onPress={handleUnlock}
        >
          <Text style={[styles.unlockText, !canUnlock && styles.unlockTextDisabled]}>
            Unlock
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050816',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  logo: {
    fontSize: 40,
    fontWeight: '800',
    color: '#F9FAFB',
    marginBottom: 40,
    alignSelf: 'center',
  },
  inputWrapper: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#4B5563',
    backgroundColor: '#020617',
    paddingHorizontal: 16,
    justifyContent: 'center',
    height: 56,
    marginBottom: 20,
  },
  input: {
    color: '#F9FAFB',
    fontSize: 16,
    padding: 0,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  label: {
    color: '#E5E7EB',
    fontSize: 16,
    fontWeight: '600',
  },
  unlockButton: {
    height: 56,
    borderRadius: 16,
    backgroundColor: '#4F46E5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  unlockButtonDisabled: {
    backgroundColor: '#111827',
  },
  unlockText: {
    color: '#F9FAFB',
    fontSize: 18,
    fontWeight: '700',
  },
  unlockTextDisabled: {
    color: '#6B7280',
  },
  forgot: {
    color: '#6366F1',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default Onboarding;
