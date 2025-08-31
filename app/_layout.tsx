import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
  return (
    <Drawer>
      <Drawer.Screen name="profile" options={{ title: "Profile" }} />
    </Drawer>
  );
}
