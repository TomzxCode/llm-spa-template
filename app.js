const applicationId = "{application_id}";

function getConfigurationValue(key, defaultValue) {
    // Try to get configuration from applicationId key
    try {
        const appConfig = localStorage.getItem(applicationId);
        if (appConfig) {
            const config = JSON.parse(appConfig);
            if (config && config.hasOwnProperty(key)) {
                return config[key];
            }
        }
    } catch (error) {
        console.warn(`Error parsing ${applicationId} configuration:`, error);
    }

    // Fall back to llm-defaults key
    try {
        const defaultConfig = localStorage.getItem('llm-defaults');
        if (defaultConfig) {
            const config = JSON.parse(defaultConfig);
            if (config && config.hasOwnProperty(key)) {
                return config[key];
            }
        }
    } catch (error) {
        console.warn('Error parsing llm-defaults configuration:', error);
    }

    // Use provided default
    return defaultValue;
}
