export type TOrganisationType = 'PERSON' | 'COMPANY' | 'CHARITY';

export interface IMobile {
  mobile: string;
  verified: boolean;
  verified_at?: Date;
}

export interface IEmail {
  email: string;
  verified?: boolean;
  verified_at?: Date;
}

export enum MembershipReason {
  INVITED = 'INVITED',
  CREATOR = 'CREATOR'
}

export enum MembershipStatus {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED'
}
export interface IPermissions {
  owner?: boolean;
}

export interface IOrganisationMembership {
  reason: MembershipReason;
  specific_reason: string;
  status?: MembershipStatus;
  organisation_name?: string;
  permissions: IPermissions;
  created_at?: Date;
  type: TOrganisationType; // was missing
  _id: string; // needed to retrive verified docs
  role?: string;
}

export interface IPolicyAgreement {
  policy_name: string;
  version_id?: string;
  agreed_date: Date;
  agreed: boolean;
}

export type TVerifyType = 'BUSINESS' | 'IDENTITY';

export interface VerificationDocs {
  type: TVerifyType;
  name: string;
  blob_id: string;
}

export interface IUser {
  first_name: string;
  last_name: string;
  email: IEmail;
  mobile?: IMobile;
  openid?: {
    google?: string;
    microsoft?: string;
    apple?: string;
    facebook?: string;
  };
  org_memberships?: IOrganisationMembership[];
  policy_agreements?: IPolicyAgreement[];
  verification_docs: VerificationDocs[]; // missing
  profile_picture?: string;
}

export interface PropsOrganisation {
  address?: {
    address_line_1?: string;
    address_line_2?: string;
    postcode?: string;
    city?: string;
    country?: string;
  };
  meta?: {
    name?: string;
    employees?: string;
    vat_number?: string;
    org_number?: string;
  };
  type?: string;
  org_logo?: string;
  verification_docs?: Array<{
    name?: string;
    blob_id?: string;
    // type: {};
    // created_at: {};
    mime?: string;
  }>;
  social_media?: {
    snapchat?: string;
    tiktok?: string;
    linkedin?: string;
    youtube?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
  };
}
