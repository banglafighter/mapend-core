import Constants from "expo-constants";

export const ExpoMutil = {
    loadExtraConfig(key: string, defaultValue: any = null) {
        if (Constants.expoConfig && Constants.expoConfig.extra && Constants.expoConfig.extra.appConfig) {
            const value = Constants.expoConfig.extra.appConfig[key]
            if (value !== undefined) {
                return value
            }
        }
        return defaultValue
    }
}