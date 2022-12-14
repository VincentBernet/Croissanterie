// Se limiter seulement à la définition d'endpoint au niveau des controllers, et mettre la logique au niveau des services.

import { Controller, Get, Param } from '@nestjs/common';
import { getBeginingTimer, getCurrentMemberListMethod, getEndingTimer, getInitialMemberListMethod, getTimingBetweenEachDeletion } from "./services/members-list-utils";
import { dtoGameInfoApi, dtoMembersListAPI, memberListType } from './services/members-list-type';

@Controller('members')
export class MembersListController {

  @Get('current-list/:apiCallDate')
  getCurrentMemberList(@Param('apiCallDate') apiCallDate: number): dtoMembersListAPI {
    return getCurrentMemberListMethod(apiCallDate);
  }

  @Get('game-info')
  getInitialMemberList(): dtoGameInfoApi {
    return ({
      memberList: getInitialMemberListMethod(),
      beginingTime: getBeginingTimer(),
      endingTime: getEndingTimer(),
      timeBetweenEachDeletion: getTimingBetweenEachDeletion(),
    });
  };
}


