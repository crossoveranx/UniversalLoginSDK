import React from 'react';
import {IModalService} from '@universal-login/react/dist/src/core/services/createModalService';

export type WalletModalType = 'transfer' | 'request' | 'invitation' | 'topUpAccount' | 'address' | 'personalInfo' | 'cardInfo' | 'waiting' | 'waitingForDeploy' | 'waitingForTransfer' | 'transactionSuccess' | 'safello' | 'none';

export const WalletModalContext = React.createContext({} as IModalService<WalletModalType>);