import { Injectable } from '@nestjs/common';
import { createAgent, Agent } from '@forestadmin/agent';
import { createSqlDataSource } from '@forestadmin/datasource-sql';
import { UserService } from './user.service';

@Injectable()
export class ForestService {
  private instance: Agent<any>;

  constructor(private readonly userService: UserService) {}

  getAgent(): Agent<any> {
    if (!this.instance) {
      this.instance = createAgent({
        envSecret: process.env.FOREST_ENV_SECRET,
        authSecret: process.env.FOREST_AUTH_SECRET,
        agentUrl: process.env.FOREST_AGENT_URL,
        forestServerUrl: 'https://api.development.forestadmin.com',
        isProduction: false,
        loggerLevel: 'Debug',
      });

      this.instance
        .addDataSource(createSqlDataSource(process.env.DATABASE_URL))
        .customizeCollection('users', (users) => {
          users.addField('phoneNumber', {
            columnType: 'String',
            dependencies: ['id'],
            getValues: async (records) => {
              console.log(
                'calling user service get user phone number for list',
              );
              return this.userService.getUserPhoneNumberForList(records);
            },
          });
        });
    }

    return this.instance;
  }
}
