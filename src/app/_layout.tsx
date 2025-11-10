import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [fontsLoaded, fontError] = useFonts({
    'GeistMono-Regular': require('../assets/fonts/GeistMono-Regular.ttf'),
    'GeistMono-SemiBold': require('../assets/fonts/GeistMono-SemiBold.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <Stack>
        
        <Stack.Screen
          name="index"
          options={{
            headerShown: false
          }}
        />
        
        <Stack.Screen
          name="albums"
          options={{
            headerShown: false
          }}
        />
        
        <Stack.Screen
          name="photos"
          options={{
            headerShown: false
          }}
        />

      </Stack>
    </SafeAreaProvider>
  )
}
