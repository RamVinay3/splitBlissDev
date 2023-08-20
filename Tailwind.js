import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function Tailwind() {
  return (
    <View className="bg-blue-700 items-center justify-center flex-1">
      <Text>This is Tailwind CSS</Text>
      <StatusBar style="auto" />
    </View>
  );
}


