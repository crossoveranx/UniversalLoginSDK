import React from 'react';
import {UDashboard} from './UDashboard';
import {ApplicationWallet} from '@universal-login/commons';
import UniversalLoginSDK from '@universal-login/sdk';

export interface LogoButtonProps {
  sdk: UniversalLoginSDK;
  applicationWallet: ApplicationWallet;
}

export const LogoButton = ({applicationWallet, sdk}: LogoButtonProps) => {


  return (
    <UDashboard applicationWallet={applicationWallet} sdk={sdk}/>
  );
};