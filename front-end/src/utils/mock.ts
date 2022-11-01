import { memberListType } from "./interface";

const MockCurrentTeamMembers: memberListType = [{ name: 'Vincent' },
{ name: 'Kevin' }, { name: 'Jean' }, { name: 'Jean-Christophe' }, { name: 'Hakima' }, { name: 'Aya' }, { name: 'Virgil' }, { name: 'Stéphane' }, { name: 'Wendy' }, { name: 'Oum' }, { name: 'Jeremy' }, { name: 'Claudia' }];

const MockEmptyTeamMembers: memberListType = [{ name: '' }, { name: '' }, { name: '' }, { name: '' }, { name: '' }, { name: '' }, { name: '' }, { name: '' }, { name: '' }, { name: '' }, { name: '' }, { name: '' }, { name: '' },];


const MockTimerTillNextDeletion: { hours: number, minutes: number, seconds: number } | boolean = { hours: 0, minutes: 0, seconds: 0 };
const MockBeginingTime: { hours: number, minutes: number, seconds: number } = { hours: 0, minutes: 0, seconds: 0 };
const MockEndingTime: { hours: number, minutes: number, seconds: number } = { hours: 0, minutes: 0, seconds: 0 };

export { MockCurrentTeamMembers, MockEmptyTeamMembers, MockTimerTillNextDeletion, MockBeginingTime, MockEndingTime };