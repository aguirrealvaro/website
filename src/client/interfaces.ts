export interface MemberI {
  firstName: string;
  lastName: string;
  address: string;
  ssn: string;
}

export type GetMembersResponseI = MemberI[];

export interface UpdateTokenResponse {
  iat: number;
  exp: number;
  token: string;
}
