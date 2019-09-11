import {Router} from 'express';
import {asyncHandler, sanitize, responseOf} from '@restless/restless';
import {asString, asObject} from '@restless/sanitizers';
import {DeviceInfo} from '@universal-login/commons';

const getDevices = async () => {
  const devicesList: DeviceInfo[] = [
    {
      os: 'Mac',
      name: 'laptop',
      city: 'Warsaw, Poland',
      ipAddress: '84.10.249.134',
      time: '18 minutes ago',
      browser: 'Safari'
    },
    {
      os: 'iPhone',
      name: 'phone',
      city: 'Warsaw, Poland',
      ipAddress: '84.10.249.134',
      time: '18 minutes ago',
      browser: 'Safari'
    },
    {
      os: 'iPad Air',
      name: 'tablet',
      city: 'Warsaw, Poland',
      ipAddress: '84.10.249.134',
      time: '18 minutes ago',
      browser: 'Safari'
    }
  ];
  return responseOf(devicesList, 201);
};

export default () => {
  const router = Router();

  router.get('/:contractAddress', asyncHandler(
  sanitize({
    contractAddress: asString,
    query: asObject({
      signature: asString
    })
  }),
  getDevices
  ));
  return router;
};