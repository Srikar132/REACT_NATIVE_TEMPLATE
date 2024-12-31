import { Text } from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

const Home = () => {
    return (
        <SafeAreaView className={`flex h-full items-center justify-center`}>
            <Text className={`text-red-500`}>Home</Text>
        </SafeAreaView>
    )
}
export default Home;