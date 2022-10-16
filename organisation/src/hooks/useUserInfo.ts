import React from 'react';
import { UserInformationContext } from '../components/private-route';
import { UserAttributes } from '../services';

export const useUserInfo: () =>
  UserAttributes | null = (): UserAttributes | null => React.useContext(UserInformationContext);
export default useUserInfo;
