import {SystemInfoEffect }from './system-info.effect'; 
import {CurrentUserEffect }from './current-user.effect'; 
import {InterpretationEffect }from './interpretation.effect';
import { UsersEffect } from './users.effects';

export const effects:any[] = [
  CurrentUserEffect, 
  SystemInfoEffect, 
  InterpretationEffect,
  UsersEffect
]; 
