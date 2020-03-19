import themeConfig from '@/../themeConfig.js'
import colors from '@/../themeConfig.js'

import { getToken } from '@/plugins/auth'

const state = {
  // ////////////////////////////////////////////
  // APP
  // ////////////////////////////////////////////
  isSidebarActive: true,
  breakpoint: null,
  sidebarWidth: 'default',
  reduceButton: themeConfig.sidebarCollapsed,
  bodyOverlay: false,
  sidebarItemsMin: false,
  theme: themeConfig.theme || 'semi-dark',
  themePrimaryColor: colors.primary,
  windowWidth: null,

  // ////////////////////////////////////////////
  // USER
  // ////////////////////////////////////////////
  activeUser: null,
  accessToken: getToken(),

  // ////////////////////////////////////////////
  // ACCOUNT
  // ////////////////////////////////////////////
  accounts: [],
  // ////////////////////////////////////////////
  // CATEGORY
  // ////////////////////////////////////////////
  categoriesNoTemplate: [],
  categoriesWithTemplates: [],

  // ////////////////////////////////////////////
  // TEMPLATES
  // ////////////////////////////////////////////
  templates: [],
  templatesByAuthor: [],
  currentTemplate: null,

  // ////////////////////////////////////////////
  // FILE
  // ////////////////////////////////////////////
  files: [],

  // ////////////////////////////////////////////
  // TUTORIAL
  // ////////////////////////////////////////////
  tutorials: [],

  // ////////////////////////////////////////////
  // PUBLISH
  // ////////////////////////////////////////////
  publishes: [],

  // ////////////////////////////////////////////
  // WORKSPACE
  // ////////////////////////////////////////////
  workspaces: [],

  // ////////////////////////////////////////////
  // USER EMAIL
  // ////////////////////////////////////////////
  userEmails: [],

  // ////////////////////////////////////////////
  // USER BLOCK
  // ////////////////////////////////////////////
  userBlocks: [],
  currentBlock: null,

  // ////////////////////////////////////////////
  // DESIGN SESSION
  // ////////////////////////////////////////////
  sessions: [],
  contributors: [],

  // ////////////////////////////////////////////
  // EDITOR
  // ////////////////////////////////////////////
  editorRawId: null,
  editorOwnerId: null,
  editorContent: '',
  editorFiles: [],
  editorChange: false,
  forceKick: false,

  // ////////////////////////////////////////////
  // NOTIFICATION
  // ////////////////////////////////////////////
  notifications: [],
  newNoti: 0
}

export default state
