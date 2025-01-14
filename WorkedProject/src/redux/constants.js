//------------AUTH ACTIONS--------------//
export const GET_USERS = 'GET_USERS';

export const LOADING = 'LOADING';
export const LOADING_SUCCESS = 'LOADING_SUCCESS';
export const LOADING_FAILURE = 'LOADING_FAILURE';

export const GET_USERS_REQUESTED = 'GET_USERS_REQUESTED';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILED = 'GET_USERS_FAILED';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const FORGOT = 'FORGOT';
export const FORGOT_SUCCESS = 'FORGOT_SUCCESS';
export const FORGOT_FAILURE = 'FORGOT_FAILURE';

export const VIEW_ADMIN_PROFILE = 'VIEW_ADMIN_PROFILE';
export const VIEW_ADMIN_PROFILE_SUCCESS = 'VIEW_ADMIN_PROFILE_SUCCESS';
export const VIEW_ADMIN_PROFILE_FAILURE = 'VIEW_ADMIN_PROFILE_FAILURE';

//------------PROFILE ACTIONS--------------//
export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
export const UPDATE_PROFILE_FAILURE = 'UPDATE_PROFILE_FAILURE';

//------------PROGRAMS ACTIONS--------------//
export const VIEW_PROGRAMS = 'VIEW_PROGRAMS';
export const VIEW_PROGRAMS_SUCCESS = 'VIEW_PROGRAMS_SUCCESS';
export const VIEW_PROGRAMS_FAILURE = 'VIEW_PROGRAMS_FAILURE';

export const VIEW_PROGRAM = 'VIEW_PROGRAM';
export const VIEW_PROGRAM_SUCCESS = 'VIEW_PROGRAM_SUCCESS';
export const VIEW_PROGRAM_FAILURE = 'VIEW_PROGRAM_FAILURE';

export const GET_PROGRAMS_CATEGORIES = 'GET_PROGRAMS_CATEGORIES';
export const GET_PROGRAMS_CATEGORIES_SUCCESS = 'GET_PROGRAMS_CATEGORIES_SUCCESS';
export const GET_PROGRAMS_CATEGORIES_FAILURE = 'GET_PROGRAMS_CATEGORIES_FAILURE';

export const GET_PROGRAM_ASSISTANCE = 'GET_PROGRAM_ASSISTANCE';
export const GET_PROGRAM_ASSISTANCE_SUCCESS = 'GET_PROGRAM_ASSISTANCE_SUCCESS';
export const GET_PROGRAM_ASSISTANCE_FAILURE = 'GET_PROGRAM_ASSISTANCE_FAILURE';

export const GET_SECTIONS_QUESTIONS_COUNT = 'GET_SECTIONS_QUESTIONS_COUNT';
export const GET_SECTIONS_QUESTIONS_COUNT_SUCCESS = 'GET_SECTIONS_QUESTIONS_COUNT_SUCCESS';
export const GET_SECTIONS_QUESTIONS_COUNT_FAILURE = 'GET_SECTIONS_QUESTIONS_COUNT_FAILURE';

export const GET_ALL_PROGRAMS_FILTER = 'GET_ALL_PROGRAMS_FILTER';
export const GET_ALL_PROGRAMS_FILTER_SUCCESS = 'GET_ALL_PROGRAMS_FILTER_SUCCESS';
export const GET_ALL_PROGRAMS_FILTER_FAILURE = 'GET_ALL_PROGRAMS_FILTER_FAILURE';

export const UPDATE_IS_ACTIVE_STATUS = 'UPDATE_IS_ACTIVE_STATUS';
export const UPDATE_IS_ACTIVE_STATUS_SUCCESS = 'UPDATE_IS_ACTIVE_STATUS_SUCCESS';
export const UPDATE_IS_ACTIVE_STATUS_FAILURE = 'UPDATE_IS_ACTIVE_STATUS_FAILURE';

export const VIEW_GUEST_LIST_PROGRAM = 'VIEW_GUEST_LIST_PROGRAM';
export const VIEW_GUEST_LIST_PROGRAM_SUCCESS = 'VIEW_GUEST_LIST_PROGRAM_SUCCESS';
export const VIEW_GUEST_LIST_PROGRAM_FAILURE = 'VIEW_GUEST_LIST_PROGRAM_FAILURE';

export const UPDATE_PROGRAM_REQUEST = 'UPDATE_PROGRAM_REQUEST';
export const UPDATE_PROGRAM_REQUEST_SUCCESS = 'UPDATE_PROGRAM_REQUEST_SUCCESS';
export const UPDATE_PROGRAM_REQUEST_FAILURE = 'UPDATE_PROGRAM_REQUEST_FAILURE';

//------------ASSESSMENT ACTIONS--------------//
export const VIEW_ASSESSMENTS = 'VIEW_ASSESSMENTS';
export const VIEW_ASSESSMENTS_SUCCESS = 'VIEW_ASSESSMENTS_SUCCESS';
export const VIEW_ASSESSMENTS_FAILURE = 'VIEW_ASSESSMENTS_FAILURE';

export const VIEW_ASSESSMENT = 'VIEW_ASSESSMENT';
export const VIEW_ASSESSMENT_SUCCESS = 'VIEW_ASSESSMENT_SUCCESS';
export const VIEW_ASSESSMENT_FAILURE = 'VIEW_ASSESSMENT_FAILURE';

// -----------------USER MANAGEMENT------------
export const VIEW_GUEST_USERS = 'VIEW_GUEST_USERS';
export const VIEW_GUEST_USERS_SUCCESS = 'VIEW_GUEST_USERS_SUCCESS';
export const VIEW_GUEST_USERS_FAILURE = 'VIEW_GUEST_USERS_FAILURE';

export const ADD_NEW_GUEST = 'ADD_NEW_GUEST';
export const ADD_NEW_GUEST_SUCCESS = 'ADD_NEW_GUEST_SUCCESS';
export const ADD_NEW_GUEST_FAILURE = 'ADD_NEW_GUEST_FAILURE';

export const VIEW_GUEST_USER_DETAILS = 'VIEW_GUEST_USER_DETAILS';
export const VIEW_GUEST_USER_DETAILS_SUCCESS = 'VIEW_GUEST_USER_DETAILS_SUCCESS';
export const VIEW_GUEST_USER_DETAILS_FAILURE = 'VIEW_GUEST_USER_DETAILS_FAILURE';

export const UPDATE_GUEST_DETAILS = 'UPDATE_GUEST_DETAILS';
export const UPDATE_GUEST_DETAILS_SUCCESS = 'UPDATE_GUEST_DETAILS_SUCCESS';
export const UPDATE_GUEST_DETAILS_FAILURE = 'UPDATE_GUEST_DETAILS_FAILURE';

// -----------------TEAM_MEMBERS------------
export const VIEW_TEAM_MEMBERS = 'VIEW_TEAM_MEMBERS';
export const VIEW_TEAM_MEMBERS_SUCCESS = 'VIEW_TEAM_MEMBERS_SUCCESS';
export const VIEW_TEAM_MEMBERS_FAILURE = 'VIEW_TEAM_MEMBERS_FAILURE';

export const VIEW_TEAM_MEMBER_DETAILS = 'VIEW_TEAM_MEMBER_DETAILS';
export const VIEW_TEAM_MEMBER_DETAILS_SUCCESS = 'VIEW_TEAM_MEMBER_DETAILS_SUCCESS';
export const VIEW_TEAM_MEMBER_DETAILS_FAILURE = 'VIEW_TEAM_MEMBER_DETAILS_FAILURE';

export const ADD_NEW_TEAM_MEMBER = 'ADD_NEW_TEAM_MEMBER';
export const ADD_NEW_TEAM_MEMBER_SUCCESS = 'ADD_NEW_TEAM_MEMBER_SUCCESS';
export const ADD_NEW_TEAM_MEMBER_FAILURE = 'ADD_NEW_TEAM_MEMBER_FAILURE';

export const UPDATE_TEAM_MEMBER_DETAILS = 'UPDATE_TEAM_MEMBER_DETAILS';
export const UPDATE_TEAM_MEMBER_DETAILS_SUCCESS = 'UPDATE_TEAM_MEMBER_DETAILS_SUCCESS';
export const UPDATE_TEAM_MEMBER_DETAILS_FAILURE = 'UPDATE_TEAM_MEMBER_DETAILS_FAILURE';

export const DELETE_TEAM_MEMBER = 'DELETE_TEAM_MEMBER';
export const DELETE_TEAM_MEMBER_SUCCESS = 'DELETE_TEAM_MEMBER_SUCCESS';
export const DELETE_TEAM_MEMBER_FAILURE = 'DELETE_TEAM_MEMBER_FAILURE';

export const GET_USER_ROLE_LIST = 'GET_USER_ROLE_LIST';
export const GET_USER_ROLE_LIST_SUCCESS = 'GET_USER_ROLE_LIST_SUCCESS';
export const GET_USER_ROLE_LIST_FAILURE = 'GET_USER_ROLE_LIST_FAILURE';

export const UPDATE_MULTIPLE_USER_ROLE = 'UPDATE_MULTIPLE_USER_ROLE';
export const UPDATE_MULTIPLE_USER_ROLE_SUCCESS = 'UPDATE_MULTIPLE_USER_ROLE_SUCCESS';
export const UPDATE_MULTIPLE_USER_ROLE_FAILURE = 'UPDATE_MULTIPLE_USER_ROLE_FAILURE';

// -----------------USER_ROLE------------
export const VIEW_USER_ROLE = 'VIEW_USER_ROLE';
export const VIEW_USER_ROLE_SUCCESS = 'VIEW_USER_ROLE_SUCCESS';
export const VIEW_USER_ROLE_FAILURE = 'VIEW_USER_ROLE_FAILURE';

export const ADD_NEW_USER_ROLE = 'ADD_NEW_USER_ROLE';
export const ADD_NEW_USER_ROLE_SUCCESS = 'ADD_NEW_USER_ROLE_SUCCESS';
export const ADD_NEW_USER_ROLE_FAILURE = 'ADD_NEW_USER_ROLE_FAILURE';

export const UPDATE_USER_ROLE_TITLE = 'UPDATE_USER_ROLE_TITLE';
export const UPDATE_USER_ROLE_TITLE_SUCCESS = 'UPDATE_USER_ROLE_TITLE_SUCCESS';
export const UPDATE_USER_ROLE_TITLE_FAILURE = 'UPDATE_USER_ROLE_TITLE_FAILURE';

export const DELETE_USER_ROLE_TITLE = 'DELETE_USER_ROLE_TITLE';
export const DELETE_USER_ROLE_TITLE_SUCCESS = 'DELETE_USER_ROLE_TITLE_SUCCESS';
export const DELETE_USER_ROLE_TITLE_FAILURE = 'DELETE_USER_ROLE_TITLE_FAILURE';

// -----------------ACCESS MANAGEMENT------------
export const UPDATE_ACCESS = 'UPDATE_ACCESS';
export const UPDATE_ACCESS_SUCCESS = 'UPDATE_ACCESS_SUCCESS';
export const UPDATE_ACCESS_FAILURE = 'UPDATE_ACCESS_FAILURE';

export const GET_ACCESS_MANAGEMENT_LIST = 'GET_ACCESS_MANAGEMENT_LIST';
export const GET_ACCESS_MANAGEMENT_LIST_SUCCESS = 'GET_ACCESS_MANAGEMENT_LIST_SUCCESS';
export const GET_ACCESS_MANAGEMENT_LIST_FAILURE = 'GET_ACCESS_MANAGEMENT_LIST_FAILURE';


//------------RECIPE COLLECTION ACTIONS--------------//
export const GET_RECIPE_COLLECTION_LIST = 'GET_RECIPE_COLLECTION_LIST';
export const GET_RECIPE_COLLECTION_LIST_SUCCESS = 'GET_RECIPE_COLLECTION_LIST_SUCCESS';
export const GET_RECIPE_COLLECTION_LIST_FAILURE = 'GET_RECIPE_COLLECTION_LIST_FAILURE';

export const ADD_RECIPE_COLLECTION = 'ADD_RECIPE_COLLECTION';
export const ADD_RECIPE_COLLECTION_SUCCESS = 'ADD_RECIPE_COLLECTION_SUCCESS';
export const ADD_RECIPE_COLLECTION_FAILURE = 'ADD_RECIPE_COLLECTION_FAILURE';

export const EDIT_RECIPE_COLLECTION = 'EDIT_RECIPE_COLLECTION';
export const EDIT_RECIPE_COLLECTION_SUCCESS = 'EDIT_RECIPE_COLLECTION_SUCCESS';
export const EDIT_RECIPE_COLLECTION_FAILURE = 'EDIT_RECIPE_COLLECTION_FAILURE';

export const VIEW_EDIT_RECIPE_COLLECTION = 'VIEW_EDIT_RECIPE_COLLECTION';
export const VIEW_EDIT_RECIPE_COLLECTION_SUCCESS = 'VIEW_EDIT_RECIPE_COLLECTION_SUCCESS';
export const VIEW_EDIT_RECIPE_COLLECTION_FAILURE = 'VIEW_EDIT_RECIPE_COLLECTION_FAILURE';

export const VIEW_RECIPE_COLLECTION_DETAILS = 'VIEW_RECIPE_COLLECTION_DETAILS';
export const VIEW_RECIPE_COLLECTION_DETAILS_SUCCESS = 'VIEW_RECIPE_COLLECTION_DETAILS_SUCCESS';
export const VIEW_RECIPE_COLLECTION_DETAILS_FAILURE = 'VIEW_RECIPE_COLLECTION_DETAILS_FAILURE';

export const GET_RECIPE_LIST = 'GET_RECIPE_LIST';
export const GET_RECIPE_LIST_SUCCESS = 'GET_RECIPE_LIST_SUCCESS';
export const GET_RECIPE_LIST_FAILURE = 'GET_RECIPE_LIST_FAILURE';

export const VIEW_RECIPE = 'VIEW_RECIPE';
export const VIEW_RECIPE_SUCCESS = 'VIEW_RECIPE_SUCCESS';
export const VIEW_RECIPE_FAILURE = 'VIEW_RECIPE_FAILURE';

export const ADD_RECIPE = 'ADD_RECIPE';
export const ADD_RECIPE_SUCCESS = 'ADD_RECIPE_SUCCESS';
export const ADD_RECIPE_FAILURE = 'ADD_RECIPE_FAILURE';

export const EDIT_RECIPE = 'EDIT_RECIPE';
export const EDIT_RECIPE_SUCCESS = 'EDIT_RECIPE_SUCCESS';
export const EDIT_RECIPE_FAILURE = 'EDIT_RECIPE_FAILURE';

//------------MASTER DATA MODULE DELETE COMMON ACTIONS --------------//
export const DELETE_MASTER_DATA_MODULE = 'DELETE_MASTER_DATA_MODULE';
export const DELETE_MASTER_DATA_MODULE_SUCCESS = 'DELETE_MASTER_DATA_MODULE_SUCCESS';
export const DELETE_MASTER_DATA_MODULE_FAILURE = 'DELETE_MASTER_DATA_MODULE_FAILURE';
//----------------Content Management------------------

export const GET_CONTENTS_LIST = 'GET_CONTENTS_LIST';
export const GET_CONTENTS_LIST_SUCCESS = 'GET_CONTENTS_LIST_SUCCESS';
export const GET_CONTENTS_LIST_FAILURE = 'GET_CONTENTS_LIST_FAILURE';

export const VIEW_CONTENT_DETAILS = 'VIEW_CONTENT_DETAILS';
export const VIEW_CONTENT_DETAILS_SUCCESS = 'VIEW_CONTENT_DETAILS_SUCCESS';
export const VIEW_CONTENT_DETAILS_FAILURE = 'VIEW_CONTENT_DETAILS_FAILURE';

export const ADD_VIDEO_PODCAST = 'ADD_VIDEO_PODCAST';
export const ADD_VIDEO_PODCAST_SUCCESS = 'ADD_VIDEO_PODCAST_SUCCESS';
export const ADD_VIDEO_PODCAST_FAILURE = 'ADD_VIDEO_PODCAST_FAILURE';

export const UPDATE_VIDEO_PODCAST = 'UPDATE_VIDEO_PODCAST';
export const UPDATE_VIDEO_PODCAST_SUCCESS = 'UPDATE_VIDEO_PODCAST_SUCCESS';
export const UPDATE_VIDEO_PODCAST_FAILURE = 'UPDATE_VIDEO_PODCAST_FAILURE';

export const DELETE_VIDEO_PODCAST = 'DELETE_VIDEO_PODCAST';
export const DELETE_VIDEO_PODCAST_SUCCESS = 'DELETE_VIDEO_PODCAST_SUCCESS';
export const DELETE_VIDEO_PODCAST_FAILURE = 'DELETE_VIDEO_PODCAST_FAILURE';

export const GET_PROGRAMS_LIST = 'GET_PROGRAMS_LIST';
export const GET_PROGRAMS_LIST_SUCCESS = 'GET_PROGRAMS_LIST_SUCCESS';
export const GET_PROGRAMS_LIST_FAILURE = 'GET_PROGRAMS_LIST_FAILURE';

export const GET_CATEGORY_LIST = 'GET_CATEGORY_LIST';
export const GET_CATEGORY_LIST_SUCCESS = 'GET_CATEGORY_LIST_SUCCESS';
export const GET_CATEGORY_LIST_FAILURE = 'GET_CATEGORY_LIST_FAILURE';
//----------------Content Category------------------
export const GET_CONTENTS_CATEGORY_LIST = 'GET_CONTENTS_CATEGORY_LIST';
export const GET_CONTENTS_CATEGORY_LIST_SUCCESS = 'GET_CONTENTS_CATEGORY_LIST_SUCCESS';
export const GET_CONTENTS_CATEGORY_LIST_FAILURE = 'GET_CONTENTS_CATEGORY_LIST_FAILURE';

export const VIEW_CONTENTS_CATEGORY_LIST = 'VIEW_CONTENTS_CATEGORY_LIST';
export const VIEW_CONTENTS_CATEGORY_LIST_SUCCESS = 'VIEW_CONTENTS_CATEGORY_LIST_SUCCESS';
export const VIEW_CONTENTS_CATEGORY_LIST_FAILURE = 'VIEW_CONTENTS_CATEGORY_LIST_FAILURE';

export const ADD_CONTENTS_CATEGORY_LIST = 'ADD_CONTENTS_CATEGORY_LIST';
export const ADD_CONTENTS_CATEGORY_LIST_SUCCESS = 'ADD_CONTENTS_CATEGORY_LIST_SUCCESS';
export const ADD_CONTENTS_CATEGORY_LIST_FAILURE = 'ADD_CONTENTS_CATEGORY_LIST_FAILURE';

export const UPDATE_CONTENTS_CATEGORY_LIST = 'UPDATE_CONTENTS_CATEGORY_LIST';
export const UPDATE_CONTENTS_CATEGORY_LIST_SUCCESS = 'UPDATE_CONTENTS_CATEGORY_LIST_SUCCESS';
export const UPDATE_CONTENTS_CATEGORY_LIST_FAILURE = 'UPDATE_CONTENTS_CATEGORY_LIST_FAILURE';

//----------------Testimonials Module------------------
export const GET_TESTIMONIALS_LIST = 'GET_TESTIMONIALS_LIST';
export const GET_TESTIMONIALS_LIST_SUCCESS = 'GET_TESTIMONIALS_LIST_SUCCESS';
export const GET_TESTIMONIALS_LIST_FAILURE = 'GET_TESTIMONIALS_LIST_FAILURE';

export const VIEW_TESTIMONIALS_DETAILS = 'VIEW_TESTIMONIALS_DETAILS';
export const VIEW_TESTIMONIALS_DETAILS_SUCCESS = 'VIEW_TESTIMONIALS_DETAILS_SUCCESS';
export const VIEW_TESTIMONIALS_DETAILS_FAILURE = 'VIEW_TESTIMONIALS_DETAILS_FAILURE';

export const APPROVE_REJECT_TESTIMONIALS = 'APPROVE_REJECT_TESTIMONIALS';
export const APPROVE_REJECT_TESTIMONIALS_SUCCESS = 'APPROVE_REJECT_TESTIMONIALS_SUCCESS';
export const APPROVE_REJECT_TESTIMONIALS_FAILURE = 'APPROVE_REJECT_TESTIMONIALS_FAILURE';

//----------------Event Module------------------
export const GET_EVENTS_LIST = 'GET_EVENTS_LIST';
export const GET_EVENTS_LIST_SUCCESS = 'GET_EVENTS_LIST_SUCCESS';
export const GET_EVENTS_LIST_FAILURE = 'GET_EVENTS_LIST_FAILURE';

export const VIEW_EVENT_DETAILS = 'VIEW_EVENT_DETAILS';
export const VIEW_EVENT_DETAILS_SUCCESS = 'VIEW_EVENT_DETAILS_SUCCESS';
export const VIEW_EVENT_DETAILS_FAILURE = 'VIEW_EVENT_DETAILS_FAILURE';

export const ADD_NEW_EVENT = 'ADD_NEW_EVENT';
export const ADD_NEW_EVENT_SUCCESS = 'ADD_NEW_EVENT_SUCCESS';
export const ADD_NEW_EVENT_FAILURE = 'ADD_NEW_EVENT_FAILURE';

export const EDIT_EVENT_DETAILS = 'EDIT_EVENT_DETAILS';
export const EDIT_EVENT_DETAILS_SUCCESS = 'EDIT_EVENT_DETAILS_SUCCESS';
export const EDIT_EVENT_DETAILS_FAILURE = 'EDIT_EVENT_DETAILS_FAILURE';

//------------UPLOAD FILE COMMON ACTION --------------//
export const UPLOAD_FILE = 'UPLOAD_FILE';
export const UPLOAD_FILE_SUCCESS = 'UPLOAD_FILE_SUCCESS';
export const UPLOAD_FILE_FAILURE = 'UPLOAD_FILE_FAILURE';

//----------------Activity Module------------------
export const GET_ACTIVITY_LIST = 'GET_ACTIVITY_LIST';
export const GET_ACTIVITY_LIST_SUCCESS = 'GET_ACTIVITY_LIST_SUCCESS';
export const GET_ACTIVITY_LIST_FAILURE = 'GET_ACTIVITY_LIST_FAILURE';

export const VIEW_ACTIVITY_DETAILS = 'VIEW_ACTIVITY_DETAILS';
export const VIEW_ACTIVITY_DETAILS_SUCCESS = 'VIEW_ACTIVITY_DETAILS_SUCCESS';
export const VIEW_ACTIVITY_DETAILS_FAILURE = 'VIEW_ACTIVITY_DETAILS_FAILURE';

export const ADD_NEW_ACTIVITY = 'ADD_NEW_ACTIVITY';
export const ADD_NEW_ACTIVITY_SUCCESS = 'ADD_NEW_ACTIVITY_SUCCESS';
export const ADD_NEW_ACTIVITY_FAILURE = 'ADD_NEW_ACTIVITY_FAILURE';

export const UPDATE_ACTIVITY = 'UPDATE_ACTIVITY';
export const UPDATE_ACTIVITY_SUCCESS = 'UPDATE_ACTIVITY_SUCCESS';
export const UPDATE_ACTIVITY_FAILURE = 'UPDATE_ACTIVITY_FAILURE';

export const GET_INTERESTED_GUEST_LIST = 'GET_INTERESTED_GUEST_LIST';
export const GET_INTERESTED_GUEST_LIST_SUCCESS = 'GET_INTERESTED_GUEST_LIST_SUCCESS';
export const GET_INTERESTED_GUEST_LIST_FAILURE = 'GET_INTERESTED_GUEST_LIST_FAILURE';

