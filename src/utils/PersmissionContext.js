import React, { createContext, useState, useContext } from 'react';
import { Platform } from 'react-native';
import { PERMISSIONS } from 'react-native-permissions';
import { Phone, Sms, Camera, Mic, Location } from '../components/SvgIcons';

const platformPermissions = {
  phone: Platform.select({ android: PERMISSIONS.ANDROID.READ_PHONE_STATE }),
  sms: Platform.select({ android: PERMISSIONS.ANDROID.READ_SMS }),
  camera: Platform.select({
    ios: PERMISSIONS.IOS.CAMERA,
    android: PERMISSIONS.ANDROID.CAMERA,
  }),
  microphone: Platform.select({
    ios: PERMISSIONS.IOS.MICROPHONE,
    android: PERMISSIONS.ANDROID.RECORD_AUDIO,
  }),
  location: Platform.select({
    ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
    android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
  }),
};

const INITIAL_PERMISSIONS = [
  {
    id: 'phone',
    name: 'Phone Identity',
    icon: <Phone />,
    granted: false,
    permission: platformPermissions.phone,
  },
  {
    id: 'sms',
    name: 'SMS Read',
    icon: <Sms />,
    granted: false,
    permission: platformPermissions.sms,
  },
  {
    id: 'camera',
    name: 'Camera',
    icon: <Camera />,
    granted: false,
    permission: platformPermissions.camera,
  },
  {
    id: 'microphone',
    name: 'Microphone',
    icon: <Mic />,
    granted: false,
    permission: platformPermissions.microphone,
  },
  {
    id: 'location',
    name: 'Location',
    icon: <Location />,
    granted: false,
    permission: platformPermissions.location,
  },
].filter(p => p.permission);

const PermissionsContext = createContext();

export const usePermissions = () => useContext(PermissionsContext);

export default  PermissionsProvider = ({ children }) => {
  const [permissions, setPermissions] = useState(INITIAL_PERMISSIONS);

  const updatePermissionStatus = (permissionId, isGranted) => {
    setPermissions(currentPermissions =>
      currentPermissions.map(p =>
        p.id === permissionId ? { ...p, granted: isGranted } : p,
      ),
    );
  };

  const value = {
    permissions,
    updatePermissionStatus,
  };

  return (
    <PermissionsContext.Provider value={value}>
      {children}
    </PermissionsContext.Provider>
  );
};
