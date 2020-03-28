<template>
  <div class="page page-home">
    <div class="home-menu">
      <div class="menu-row">
        <nuxt-link
          class="menu-item"
          :to="{ name: 'RankingGame', query: { genre: '6014' } }"
        >
          <div class="img">
            <svg-icon icon-class="menuGame" style="width:28px; height:25px" />
          </div>
          <div class="title">游戏榜</div>
        </nuxt-link>
        <nuxt-link
          class="menu-item"
          :to="{ name: 'RankingApp', query: { genre: '5000' } }"
        >
          <div class="img">
            <svg-icon icon-class="homeMenu2" style="width:25px; height:24px" />
          </div>
          <div class="title">应用榜</div>
        </nuxt-link>
        <nuxt-link class="menu-item" :to="{ name: 'BangRelease' }">
          <div class="img">
            <svg-icon icon-class="homeMenu3" style="width:33px; height:25px" />
          </div>
          <div class="title">新品/下架</div>
        </nuxt-link>
        <nuxt-link :to="{ name: 'BangClearBangList' }" class="menu-item">
          <div class="img">
            <svg-icon icon-class="menuClear" style="width:25px; height:31px" />
          </div>
          <div class="title">清榜/清词</div>
        </nuxt-link>
      </div>
      <div class="menu-row">
        <nuxt-link :to="{ name: 'HotSearch' }" class="menu-item">
          <div class="img">
            <svg-icon icon-class="homeMenu5" style="width:23px; height:25px" />
          </div>
          <div class="title">实时热搜</div>
        </nuxt-link>
        <div class="menu-item">
          <div class="img">
            <svg-icon
              icon-class="menuRecommend"
              style="width:25px; height:24px"
            />
          </div>
          <div class="title">精品推荐</div>
        </div>
        <nuxt-link :to="{ name: 'BangBookList' }" class="menu-item">
          <div class="img">
            <svg-icon
              icon-class="menuProduct"
              style="width:25px; height:25px"
            />
          </div>
          <div class="title">预订产品</div>
        </nuxt-link>
        <nuxt-link :to="{ name: 'KeywordRank' }" class="menu-item">
          <div class="img">
            <svg-icon icon-class="homeMenu8" style="width:26px; height:26px" />
          </div>
          <div class="title">热词排行</div>
        </nuxt-link>
      </div>
    </div>

    <div class="home-banner">
      <van-image
        width="100%"
        height="auto"
        radius="5px"
        src="https://cds0.static.chandashi.com/Public/Home/images/activity/activity-banner-m-20200309.jpg"
      />
    </div>

    <div class="home-data">
      <div class="data-box section-box">
        <div class="hd">
          <div class="title">iOS今日动态</div>
          <a href="https://www.chandashi.com/ranking/overview.html" class="more"
            >查看全部 ></a
          >
        </div>
        <div class="bd">
          <div class="data-item">
            <div class="num">{{ common.commonIndex.newCount }}</div>
            <div class="title">新上线</div>
          </div>
          <div class="data-item">
            <div class="num">{{ common.commonIndex.offCount }}</div>
            <div class="title">下架应用</div>
          </div>
          <div class="data-item">
            <div class="num">{{ common.commonIndex.clearBangApps }}</div>
            <div class="title">清榜应用</div>
          </div>
        </div>
      </div>
    </div>

    <div class="home-follow">
      <div class="follow-box section-box">
        <div class="hd">
          <div class="title">我的关注</div>
          <a href="https://www.chandashi.com/user/myfollow.html" class="more"
            >查看全部 ></a
          >
        </div>
        <div class="bd">
          <div
            v-for="(item, index) in common.commonIndex.myFollow"
            :key="index"
            class="app-item"
          >
            <van-image
              width="50"
              height="50"
              radius="12px"
              :src="item.artworkUrl60"
            />
            <div class="title">{{ item.trackName }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="home-rank">
      <div class="rank-box section-box">
        <div class="nav">
          <div class="nav-box">
            <div
              class="nav-item"
              :class="{ active: tabIndex == 1 }"
              @click="tabIndex = 1"
            >
              免费游戏
            </div>
            <div
              class="nav-item"
              :class="{ active: tabIndex == 2 }"
              @click="tabIndex = 2"
            >
              免费应用
            </div>
            <div
              class="nav-item"
              :class="{ active: tabIndex == 3 }"
              @click="tabIndex = 3"
            >
              付费游戏
            </div>
          </div>
        </div>
        <div class="hd">
          <div class="title">实时榜单<span class="date">5:12</span></div>
          <nuxt-link
            v-if="tabIndex == 1"
            class="more"
            :to="{
              name: 'RankingGame',
              query: { genre: '6014', type: 'free' }
            }"
          >
            查看全部 >
          </nuxt-link>
          <nuxt-link
            v-if="tabIndex == 2"
            class="more"
            :to="{
              name: 'RankingApp',
              query: { genre: '5000', type: 'free' }
            }"
          >
            查看全部 >
          </nuxt-link>
          <nuxt-link
            v-if="tabIndex == 3"
            class="more"
            :to="{
              name: 'RankingGame',
              query: { genre: '6014', type: 'charge' }
            }"
          >
            查看全部 >
          </nuxt-link>
        </div>
        <div class="bd">
          <TabItem
            v-if="tabIndex == 1"
            :list="common.commonIndex.bangData.free6014"
          />
          <TabItem
            v-if="tabIndex == 2"
            :list="common.commonIndex.bangData.free5000"
          />
          <TabItem
            v-if="tabIndex == 3"
            :list="common.commonIndex.bangData.charge6014"
          />
        </div>
      </div>
    </div>

    <div class="home-post">
      <div class="post-box section-box">
        <div class="hd">
          <div class="title">运营圈</div>
          <a href="https://www.chandashi.com/yunyingquan/" class="more"
            >查看全部 ></a
          >
        </div>
        <div class="bd">
          <div class="list">
            <a
              v-for="(item, index) in common.commonIndex.newArticle"
              :key="index"
              :href="`https://www.chandashi.com/yunyingquan/${item.ID}`"
              class="div list-item"
            >
              <div class="title">
                {{ item.article_title }}
              </div>
              <div class="desc">
                <div class="author">
                  {{ item.user_nickname }} {{ item.add_time }}
                </div>
                <div class="info">
                  {{ item.comment_counts }}评论·{{ item.view_counts }}查看
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import TabItem from './tabItem'
export default {
  scrollToTop: true,
  components: { TabItem },
  async asyncData({ store, params }) {
    await store.dispatch('common/getCommonIndex')
  },
  data() {
    return {
      tabIndex: 1
    }
  },
  computed: {
    ...mapState({
      common: 'common'
    })
  },
  mounted() {
    if (!this.common.commonIndex.newArticle) {
      this.getCommonIndex()
    }
  },
  methods: {
    ...mapActions({
      getCommonIndex: 'common/getCommonIndex'
    })
  }
}
</script>

<style lang="stylus" scoped>
@import './home.styl'
</style>
