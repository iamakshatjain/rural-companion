import { Plugins } from '@capacitor/core';
const { Device } = Plugins;

// Device functions
export const getDeviceInfo = async () => {
	return await Device.getInfo();
};
