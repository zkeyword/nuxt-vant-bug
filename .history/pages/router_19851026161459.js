import Vue from 'vue'
import Router from 'vue-router'
import Home from './home'
import Search from './search'
import CoverRank from './keyword/coverRank'
import Ranking, { RankingHome } from './rank/ranking'
import Bang, {
  BangRelease,
  BangDeleteList,
  BangClearList,
  BangClearBangList,
  BangBookList
} from './rank/bang'
import App, {
  AppAsm,
  AppSameDeveloper,
  AppBaseInfo,
  AppCompetitor,
  AppDiagnosis,
  AppFeatured,
  AppKeyword,
  AppRank,
  AppReview
} from './app'
import HotSearch, { hotSearchIOS13, hotSearchIOS12 } from './aso/hotSearch'
import KeywordRank from './aso/keywordRank'
import UserLogin from './user/login'
import * as filter from '@/utils/filter'
import '@base/vconsole'

for (const key in filter) {
  Vue.filter(key, filter[key])
}

Vue.use(Router)

export function createRouter() {
  const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      { path: '/', name: 'Home', component: Home },
      { path: '/search', name: 'Search', component: Search },
      { path: '/keyword/coverRank', name: 'CoverRank', component: CoverRank },
      {
        path: '/ranking',
        component: Ranking,
        children: [
          {
            path: '',
            name: 'RankingHome',
            component: RankingHome
          },
          {
            path: 'app',
            name: 'RankingApp',
            component: RankingHome
          },
          {
            path: 'game',
            name: 'RankingGame',
            component: RankingHome
          },
          {
            path: 'overseas',
            name: 'RankingOverseas',
            component: RankingHome
          }
        ]
      },
      {
        path: '/bang',
        component: Bang,
        children: [
          {
            path: '',
            name: 'BangRelease',
            component: BangRelease
          },
          {
            path: 'bangDeleteList',
            name: 'BangDeleteList',
            component: BangDeleteList
          },
          {
            path: 'bangClearList',
            name: 'BangClearList',
            component: BangClearList
          },
          {
            path: 'bangClearBangList',
            name: 'BangClearBangList',
            component: BangClearBangList
          },
          {
            path: 'bangBookList',
            name: 'BangBookList',
            component: BangBookList
          }
        ]
      },
      {
        path: '/app',
        component: App,
        children: [
          {
            path: '',
            name: 'AppRank',
            component: AppRank
          },
          {
            path: 'AppAsm',
            name: 'AppAsm',
            component: AppAsm
          },
          {
            path: 'appSameDeveloper',
            name: 'AppSameDeveloper',
            component: AppSameDeveloper
          },
          {
            path: 'appBaseInfo',
            name: 'AppBaseInfo',
            component: AppBaseInfo
          },
          {
            path: 'appCompetitor',
            name: 'AppCompetitor',
            component: AppCompetitor
          },
          {
            path: 'appDiagnosis',
            name: 'AppDiagnosis',
            component: AppDiagnosis
          },
          {
            path: 'appFeatured',
            name: 'AppFeatured',
            component: AppFeatured
          },
          {
            path: 'appKeyword',
            name: 'AppKeyword',
            component: AppKeyword
          },
          {
            path: 'appReview',
            name: 'AppReview',
            component: AppReview
          }
        ]
      },
      {
        path: '/aso/hotSearch',
        component: HotSearch,
        children: [
          {
            path: '',
            name: 'HotSearch',
            component: hotSearchIOS13
          },
          {
            path: 'iOS12',
            name: 'hotSearchIOS12',
            component: hotSearchIOS12
          }
        ]
      },
      { path: '/aso/keywordRank', name: 'KeywordRank', component: KeywordRank },
      { path: '/user/login', name: 'UserLogin', component: UserLogin }
    ]
  })

  return router
}
