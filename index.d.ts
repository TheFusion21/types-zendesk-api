import { components as TicketComponents } from './tickets';
import { components as HelpCenterComponents } from './help-center';

// no pagination is added to allow for both offset and cursor based pagination
export type OffsetPagination = TicketComponents['schemas']['OffsetPaginationObject'];
export type CursorPagination = TicketComponents['schemas']['Pagination'];

// Tickets
export type Ticket = TicketComponents['schemas']['TicketObject'];
export type TicketResponse = TicketComponents['schemas']['TicketResponse'];
export type TicketsResponse = TicketComponents['schemas']['TicketsResponse'];

export type Attachment = TicketComponents['schemas']['AttachmentObject'];
export type AttachmentResponse = TicketComponents['schemas']['AttachmentResponse'];

export type TicketComment = TicketComponents['schemas']['TicketCommentObject'];
export type TicketCommentResponse = TicketComponents['schemas']['TicketCommentResponse'];
export type TicketCommentsResponse = TicketComponents['schemas']['TicketCommentsResponse'];

export type TicketForm = TicketComponents['schemas']['TicketFormObject'];
export type TicketFormResponse = TicketComponents['schemas']['TicketFormResponse'];
export type TicketFormsResponse = TicketComponents['schemas']['TicketFormsResponse'];

export type TicketField = TicketComponents['schemas']['TicketFieldObject'];
export type TicketFieldResponse = TicketComponents['schemas']['TicketFieldResponse'];
export type TicketFieldsResponse = TicketComponents['schemas']['TicketFieldsResponse'];

export type Requester = TicketComponents['schemas']['RequestObject'];
export type RequesterResponse = TicketComponents['schemas']['RequestResponse'];
export type RequestersResponse = TicketComponents['schemas']['RequestsResponse'];

export type TicketAudit = TicketComponents['schemas']['TicketAuditObject'];
export type TicketAuditResponse = TicketComponents['schemas']['TicketAuditResponse'];
export type TicketAuditsResponse = TicketComponents['schemas']['TicketAuditsResponse'];

export type TicketMetric = TicketComponents['schemas']['TicketMetricObject'];
export type TicketMetricResponse = TicketComponents['schemas']['TicketMetricsResponse'];
export type TicketMetricsResponse = TicketComponents['schemas']['TicketMetricsResponse'];

export type TicketMetricEvent = TicketComponents['schemas']['TicketMetricEventBaseObject'];
export type TicketMetricEventsResponse = TicketComponents['schemas']['TicketMetricEventsResponse'];

export type TicketActivity = TicketComponents['schemas']['ActivityObject'];
export type TicketActivityResponse = TicketComponents['schemas']['ActivityResponse'];
export type TicketActivitiesResponse = TicketComponents['schemas']['ActivitiesResponse'];

export type TicketSkip = TicketComponents['schemas']['TicketSkipObject'];
export type TicketSkipsResponse = TicketComponents['schemas']['TicketSkipsResponse'];

export type SuspendedTicket = TicketComponents['schemas']['SuspendedTicketObject'];
export type SuspendedTicketResponse = TicketComponents['schemas']['SuspendedTicketResponse'];
export type SuspendedTicketsResponse = TicketComponents['schemas']['SuspendedTicketsResponse'];

export type CustomTicketStatus = TicketComponents['schemas']['CustomStatusObject'];
export type CustomTicketStatusResponse = TicketComponents['schemas']['CustomStatusResponse'];
export type CustomTicketStatusesResponse = TicketComponents['schemas']['CustomStatusesResponse'];

export type TicketSharingAgreement = TicketComponents['schemas']['SharingAgreementObject'];
export type TicketSharingAgreementResponse = TicketComponents['schemas']['SharingAgreementResponse'];
export type TicketSharingAgreementsResponse = TicketComponents['schemas']['SharingAgreementsResponse'];

// Users
export type User = TicketComponents['schemas']['UserObject'];
export type UserResponse = TicketComponents['schemas']['UserResponse'];
export type UsersResponse = TicketComponents['schemas']['UsersResponse'];

export type UserIdentity = TicketComponents['schemas']['UserIdentityObject'];
export type UserIdentityResponse = TicketComponents['schemas']['UserIdentityResponse'];
export type UserIdentitiesResponse = TicketComponents['schemas']['UserIdentitiesResponse'];

export type UserField = TicketComponents['schemas']['UserFieldObject'];
export type UserFieldResponse = TicketComponents['schemas']['UserFieldResponse'];
export type UserFieldsResponse = TicketComponents['schemas']['UserFieldsResponse'];

// Organizations
export type Organization = TicketComponents['schemas']['OrganizationObject'];
export type OrganizationResponse = TicketComponents['schemas']['OrganizationResponse'];
export type OrganizationsResponse = TicketComponents['schemas']['OrganizationsResponse'];

export type OrganizationMembership = TicketComponents['schemas']['OrganizationMembershipObject'];
export type OrganizationMembershipResponse = TicketComponents['schemas']['OrganizationMembershipResponse'];
export type OrganizationMembershipsResponse = TicketComponents['schemas']['OrganizationMembershipsResponse'];

export type OrganizationField = TicketComponents['schemas']['OrganizationFieldObject'];
export type OrganizationFieldResponse = TicketComponents['schemas']['OrganizationFieldResponse'];
export type OrganizationFieldsResponse = TicketComponents['schemas']['OrganizationFieldsResponse'];

export type OrganizationSubscription = TicketComponents['schemas']['OrganizationSubscriptionObject'];
export type OrganizationSubscriptionResponse = TicketComponents['schemas']['OrganizationSubscriptionResponse'];
export type OrganizationSubscriptionsResponse = TicketComponents['schemas']['OrganizationSubscriptionsResponse'];

// Groups
export type Group = TicketComponents['schemas']['GroupObject'];
export type GroupResponse = TicketComponents['schemas']['GroupResponse'];
export type GroupsResponse = TicketComponents['schemas']['GroupsResponse'];

export type GroupMembership = TicketComponents['schemas']['GroupMembershipObject'];
export type GroupMembershipResponse = TicketComponents['schemas']['GroupMembershipResponse'];
export type GroupMembershipsResponse = TicketComponents['schemas']['GroupMembershipsResponse'];

// Search
export type SearchResults = TicketComponents['schemas']['SearchResultObject'];
export type SearchResultsResponse = TicketComponents['schemas']['SearchResponse'];

// Tags
export type Tag = TicketComponents['schemas']['TagListTagObject'];
export type TagsResponse = TicketComponents['schemas']['TagsResponse'];

// Satisfaction Ratings
export type SatisfactionRating = TicketComponents['schemas']['SatisfactionRatingObject'];
export type SatisfactionRatingResponse = TicketComponents['schemas']['SatisfactionRatingResponse'];
export type SatisfactionRatingsResponse = TicketComponents['schemas']['SatisfactionRatingsResponse'];

// Satisfaction Reasons
export type SatisfactionReason = TicketComponents['schemas']['SatisfactionReasonObject'];
export type SatisfactionReasonResponse = TicketComponents['schemas']['SatisfactionReasonResponse'];
export type SatisfactionReasonsResponse = TicketComponents['schemas']['SatisfactionReasonsResponse'];

// Job Statuses
export type JobStatus = TicketComponents['schemas']['JobStatusObject'];
export type JobStatusResponse = TicketComponents['schemas']['JobStatusResponse'];
export type JobStatusesResponse = TicketComponents['schemas']['JobStatusesResponse'];

// Dynamic Content Items
export type DynamicContentItem = TicketComponents['schemas']['DynamicContentObject'];
export type DynamicContentItemResponse = TicketComponents['schemas']['DynamicContentResponse'];
export type DynamicContentItemsResponse = TicketComponents['schemas']['DynamicContentsResponse'];

// Dynamic Content Item Variants
export type DynamicContentItemVariant = TicketComponents['schemas']['DynamicContentVariantObject'];
export type DynamicContentItemVariantResponse = TicketComponents['schemas']['DynamicContentVariantResponse'];
export type DynamicContentItemVariantsResponse = TicketComponents['schemas']['DynamicContentVariantsResponse'];

// Views
export type View = TicketComponents['schemas']['ViewObject'];
export type ViewResponse = TicketComponents['schemas']['ViewResponse'];
export type ViewsResponse = TicketComponents['schemas']['ViewsResponse'];

// Triggers
export type Trigger = TicketComponents['schemas']['TriggerObject'];
export type TriggerResponse = TicketComponents['schemas']['TriggerResponse'];
export type TriggersResponse = TicketComponents['schemas']['TriggersResponse'];

// Trigger Categories
export type TriggerCategory = TicketComponents['schemas']['TriggerCategory'];
export type TriggerCategoryResponse = TicketComponents['schemas']['TriggerCategoryResponse'];
export type TriggerCategoriesResponse = TicketComponents['schemas']['TriggerCategoriesResponse'];

// Macros
export type Macro = TicketComponents['schemas']['MacroObject'];
export type MacroResponse = TicketComponents['schemas']['MacroResponse'];
export type MacrosResponse = TicketComponents['schemas']['MacrosResponse'];

// Automations
export type Automation = TicketComponents['schemas']['AutomationObject'];
export type AutomationResponse = TicketComponents['schemas']['AutomationResponse'];
export type AutomationsResponse = TicketComponents['schemas']['AutomationsResponse'];

// SLA Policies
export type SLAPolicy = TicketComponents['schemas']['SLAPolicyObject'];
export type SLAPolicyResponse = TicketComponents['schemas']['SLAPolicyResponse'];
export type SLAPoliciesResponse = TicketComponents['schemas']['SLAPoliciesResponse'];

// Group SLA Policy
export type GroupSLAPolicy = TicketComponents['schemas']['GroupSLAPolicyObject'];
export type GroupSLAPolicyResponse = TicketComponents['schemas']['GroupSLAPolicyResponse'];
export type GroupSLAPoliciesResponse = TicketComponents['schemas']['GroupSLAPoliciesResponse'];

// Custom Agent Roles
export type CustomAgentRole = TicketComponents['schemas']['CustomRoleObject'];
export type CustomAgentRoleResponse = TicketComponents['schemas']['CustomRoleResponse'];
export type CustomAgentRolesResponse = TicketComponents['schemas']['CustomRolesResponse'];

// Account Settings
export type AccountSettings = TicketComponents['schemas']['AccountSettingsObject'];
export type AccountSettingsResponse = TicketComponents['schemas']['AccountSettingsResponse'];

// Support Addresses
export type SupportAddress = TicketComponents['schemas']['SupportAddressObject'];
export type SupportAddressResponse = TicketComponents['schemas']['SupportAddressResponse'];
export type SupportAddressesResponse = TicketComponents['schemas']['SupportAddressesResponse'];

// Sessions
export type Session = TicketComponents['schemas']['SessionObject'];
export type SessionResponse = TicketComponents['schemas']['SessionResponse'];
export type SessionsResponse = TicketComponents['schemas']['SessionsResponse'];

// Brands
export type Brand = TicketComponents['schemas']['BrandObject'];
export type BrandResponse = TicketComponents['schemas']['BrandResponse'];
export type BrandsResponse = TicketComponents['schemas']['BrandsResponse'];

// Locales
export type Locale = TicketComponents['schemas']['LocaleObject'];
export type LocaleResponse = TicketComponents['schemas']['LocaleResponse'];
export type LocalesResponse = TicketComponents['schemas']['LocalesResponse'];

// Audit Logs
export type AuditLog = TicketComponents['schemas']['AuditLogObject'];
export type AuditLogResponse = TicketComponents['schemas']['AuditLogResponse'];
export type AuditLogsResponse = TicketComponents['schemas']['AuditLogsResponse'];

// Targets
export type Target = TicketComponents['schemas']['TargetObject'];
export type TargetResponse = TicketComponents['schemas']['TargetResponse'];
export type TargetsResponse = TicketComponents['schemas']['TargetsResponse'];

// Target Failures
export type TargetFailure = TicketComponents['schemas']['TargetFailureObject'];
export type TargetFailureResponse = TicketComponents['schemas']['TargetFailureResponse'];
export type TargetFailuresResponse = TicketComponents['schemas']['TargetFailuresResponse'];

// Help Center
export type Article = HelpCenterComponents['schemas']['ArticleObject'];
export type ArticleResponse = HelpCenterComponents['schemas']['ArticleResponse'];
export type ArticlesResponse = HelpCenterComponents['schemas']['ArticlesResponse'];

export type ArticleAttachment = HelpCenterComponents['schemas']['ArticleAttachmentObject'];
export type ArticleAttachmentResponse = HelpCenterComponents['schemas']['ArticleAttachmentResponse'];
export type ArticleAttachmentsResponse = HelpCenterComponents['schemas']['ArticleAttachmentsResponse'];

export type ArticleComment = HelpCenterComponents['schemas']['CommentObject'];
export type ArticleCommentResponse = HelpCenterComponents['schemas']['CommentResponse'];
export type ArticleCommentsResponse = HelpCenterComponents['schemas']['CommentsResponse'];

export type ArticleLabel = HelpCenterComponents['schemas']['LabelObject'];
export type ArticleLabelResponse = HelpCenterComponents['schemas']['LabelResponse'];
export type ArticleLabelsResponse = HelpCenterComponents['schemas']['LabelsResponse'];

export type Category = HelpCenterComponents['schemas']['CategoryObject'];
export type CategoryResponse = HelpCenterComponents['schemas']['CategoryResponse'];
export type CategoriesResponse = HelpCenterComponents['schemas']['CategoriesResponse'];

export type Search = HelpCenterComponents['schemas']['SearchObject'];
export type UnifiedSearchResponse = HelpCenterComponents['schemas']['UnifiedSearchResultSet'];
export type ArticleSearchResponse = HelpCenterComponents['schemas']['ArticleSearchResponse'];
export type PostSearchResponse = HelpCenterComponents['schemas']['CommunityPostSearchResponse'];

export type Section = HelpCenterComponents['schemas']['SectionObject'];
export type SectionResponse = HelpCenterComponents['schemas']['SectionResponse'];
export type SectionsResponse = HelpCenterComponents['schemas']['SectionsResponse'];

export type Translation = HelpCenterComponents['schemas']['TranslationObject'];
export type TranslationResponse = HelpCenterComponents['schemas']['TranslationResponse'];
export type TranslationsResponse = HelpCenterComponents['schemas']['TranslationsResponse'];

export type Topic = HelpCenterComponents['schemas']['TopicObject'];
export type TopicResponse = HelpCenterComponents['schemas']['TopicResponse'];
export type TopicsResponse = HelpCenterComponents['schemas']['TopicsResponse'];

export type PostComment = HelpCenterComponents['schemas']['PostCommentObject'];
export type PostCommentResponse = HelpCenterComponents['schemas']['PostCommentResponse'];
export type PostCommentsResponse = HelpCenterComponents['schemas']['PostCommentsResponse'];

export type Post = HelpCenterComponents['schemas']['PostObject'];
export type PostResponse = HelpCenterComponents['schemas']['PostResponse'];
export type PostsResponse = HelpCenterComponents['schemas']['PostsResponse'];

export type ContentSubscription = HelpCenterComponents['schemas']['ContentSubscriptionObject'];
export type ContentSubscriptionsResponse = HelpCenterComponents['schemas']['ContentSubscriptionsResponse'];

export type UserSubscription = HelpCenterComponents['schemas']['UserSubscriptionObject'];
export type UserSubscriptionsResponse = HelpCenterComponents['schemas']['UserSubscriptionsResponse'];

export type UserSegment = HelpCenterComponents['schemas']['UserSegmentObject'];
export type UserSegmentResponse = HelpCenterComponents['schemas']['UserSegmentResponse'];
export type UserSegmentsResponse = HelpCenterComponents['schemas']['UserSegmentsResponse'];

export type Vote = HelpCenterComponents['schemas']['VoteObject'];
export type VoteResponse = HelpCenterComponents['schemas']['VoteResponse'];
export type VotesResponse = HelpCenterComponents['schemas']['VotesResponse'];

// Voice
// Currently no OpenAPI spec for Voice API available

// Phonenumbers
export interface PhoneNumber {
  brand_id?: number;
  call_recording_consent?: string;
  capabilities?: {
    sms?: boolean | null;
    mms?: boolean | null;
    voice?: boolean | null;
    emergency_address?: boolean | null;
  };
  categorised_greetings: {
    [key: string]: string | number | null;
  };
  categorised_greetings_with_sub_settings: {
    [key: string]: string | number | null | {
      voicemail_on_outside_business_hours?: string | number | null;
      voicemail_on_inside_business_hours?: string | number | null;
      voicemail_off_inside_business_hours?: string | number | null;
      voicemail_off_outside_business_hours?: string | number | null;
    }
  };
  country_code?: string;
  created_at?: string;
  default_greeting_ids?: (string | number | null)[];
  default_group_id?: number;
  display_number?: string;
  external?: boolean;
  failover_number?: string | null;
  greeting_ids?: (string | number | null)[];
  group_ids?: number[];
  id?: number;
  ivr_id?: number | null;
  line_type?: 'phone' | 'digital';
  location?: string;
  name?: string;
  nickname?: string;
  number?: string;
  outbound_enabled?: boolean;
  priority?: number;
  recorded?: boolean;
  schedule_id?: number | null;
  sms_enabled?: boolean;
  sms_group_id?: number | null;
  token?: string;
  toll_free?: boolean;
  transcription?: boolean;
  voice_enabled?: boolean;
}
export interface PhoneNumberResponse {
  phone_number?: PhoneNumber;
}
export interface PhoneNumbersResponse {
  phone_numbers?: PhoneNumber[];
}

// Digital Lines
export interface DigitalLine {
  brand_id?: number;
  call_recording_consent?: string;
  categorised_greetings_with_sub_settings: {
    [key: string]: string | number | null | {
      voicemail_on_outside_business_hours?: string | number | null;
      voicemail_on_inside_business_hours?: string | number | null;
      voicemail_off_inside_business_hours?: string | number | null;
      voicemail_off_outside_business_hours?: string | number | null;
    }
  };
  created_at?: string;
  default_greeting_ids?: (string | number | null)[];
  default_group_id?: number;
  greeting_ids?: (string | number | null)[];
  group_ids?: number[];
  id?: number;
  line_id?: string;
  line_type?: 'digital' | 'phone';
  nickname?: string;
  outbound_number?: string;
  priority?: number;
  recorded?: boolean;
  schedule_id?: number | null;
  transcription?: boolean;
}
export interface DigitalLineResponse {
  digital_line?: DigitalLine;
}
export interface DigitalLinesResponse {
  digital_lines?: DigitalLine[];
}

// Availablity
export interface Availability {
  agent_state?: 'offline' | 'online' | 'away' | 'transfers_only';
  call_status?: 'on_call' | 'wrap_up' | null;
  via?: string;
}
export interface AvailabilityResponse {
  availability?: Availability;
}