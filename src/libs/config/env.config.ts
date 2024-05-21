import { EnvConfigurationType } from './types.config';

export const EnvConfiguration = (): EnvConfigurationType => ({
  environment: process.env.ENVIRONMENT,
  pgCore: {
    hostPgCore: process.env.HOST_BD_CORE,
    portPgCore: +process.env.PORT_BD_CORE,
    namePgCore: process.env.NAME_BD_CORE,
    userPgCore: process.env.USER_BD_CORE,
    passPgCore: process.env.PASS_BD_CORE,
  },
});
