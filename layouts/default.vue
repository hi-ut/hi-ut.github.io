<template>
  <div :class="isMobileMenuOpen ? 'gnav-open' : ''">
    <!-- InstanceBeginEditable name="bodyTop" --><!-- InstanceEndEditable -->
    <!-- サイドオープン時メインコンテンツを覆う -->
    <div id="js__overlay" class="overlay"></div>
    <!-- メインコンテンツ -->
    <div id="wrapper" class="wrapper">
      <!-- InstanceBeginEditable name="pageImg" --><!-- InstanceEndEditable -->
      <header id="header">
        <div class="header-inner">
          <div class="header-logo">
            <h1>
              <nuxt-link :to="localePath({ name: 'index' })">
                <img
                  :src="baseUrl + '/assets/img/common/hilogo.jpg'"
                  width="344px"
                  height="61px"
                  alt="東京大学史料編纂所 Historiographical Institute The University of Tokyo"
                />
              </nuxt-link>
            </h1>
          </div>
          <template v-if="lg">
            <GoogleCustomSearch />

            <LangSelect />
          </template>
          <!-- 開閉用ボタン -->
          <div
            id="js__sideMenuBtn"
            class="nav_toggle"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
          >
            <div class="ellipsis-v">
              <span class="point top"></span> <span class="point mid"></span>
              <span class="point bot"></span>
            </div>
          </div>
        </div>
        <!-- .headerInner -->
      </header>
      <!-- グローバルナビゲーション -->
      <nav id="js_gnav" class="gnav">
        <GoogleCustomSearch v-if="isMobileMenuOpen" />
        <ul class="menu">
          <template v-for="(menuMapLv1, key) in menuList">
            <!-- 言語があり、表示設定がある項目 -->
            <li
              v-if="menuMapLv1.lang.includes(lang) && menuMapLv1.isDisplayTop"
              :key="key"
            >
              <!-- 子供を持たない場合 -->
              <template v-if="!menuMapLv1.children">
                <a class="atag" :href="menuMapLv1.href[lang]">{{
                  $t(menuMapLv1.label)
                }}</a>
              </template>
              <template v-else>
                <span class="atag" @click="clickLv1Menu(key)">{{
                  $t(menuMapLv1.label)
                }}</span>
                <i class="child-btn" @click="clickLv1Menu(key)"></i>
              </template>

              <VueSlideToggle
                :duration="500"
                tag="ul"
                :open="isOpenLv1 && currentLv1Index === key"
                class="sub-menu"
              >
                <template v-for="(menuMapLv2, key2) in menuMapLv1.children">
                  <li
                    v-if="menuMapLv2.lang.includes(lang)"
                    :key="key2"
                    :class="
                      isOpenLv2 && currentLv2Index === key2 ? 'child-open' : ''
                    "
                  >
                    <template v-if="menuMapLv2.href">
                      <a :href="menuMapLv2.href[lang]">{{
                        $t(menuMapLv2.label)
                      }}</a>
                    </template>
                    <template v-else>
                      <nuxt-link :to="localePath(menuMapLv2.to)">{{
                        $t(menuMapLv2.label)
                      }}</nuxt-link>
                    </template>

                    <!-- 子供を持つ場合にはプラスボタンを追加 -->
                    <template v-if="menuMapLv2.children">
                      <i class="child-btn" @click="clickLv2Menu(key2)"></i>
                      <VueSlideToggle
                        :duration="500"
                        tag="ul"
                        :open="isOpenLv2 && currentLv2Index === key2"
                        class="sub-menu2"
                      >
                        <template
                          v-for="(menuMapLv3, key3) in menuMapLv2.children"
                        >
                          <li v-if="menuMapLv3.lang.includes(lang)" :key="key3">
                            <template v-if="menuMapLv3.href">
                              <a :href="menuMapLv3.href[lang]">{{
                                $t(menuMapLv3.label)
                              }}</a>
                            </template>
                            <template v-else>
                              <nuxt-link :to="localePath(menuMapLv3.to)">{{
                                $t(menuMapLv3.label)
                              }}</nuxt-link>
                            </template>
                          </li>
                        </template>
                      </VueSlideToggle>
                    </template>
                  </li>
                </template>
              </VueSlideToggle>
            </li>
          </template>
        </ul>

        <LangSelect v-if="isMobileMenuOpen" />
      </nav>
    </div>

    <nuxt />

    <footer id="footer">
      <transition name="button">
        <a v-show="isPageTopBtnActive" id="page-top" @click="returnTop"></a>
      </transition>
      <div class="inner">
        <div class="foot-add">
          <p class="logo">
            <nuxt-link :to="localePath({ name: 'index' })"
              ><img
                width="522px"
                height="61px"
                :src="baseUrl + '/assets/img/common/logo_foot.png'"
                alt="東京大学史料編纂所 Historiographical Institute The University of Tokyo"
            /></nuxt-link>
          </p>
          <p>
            <template v-if="lang == 'ja'">
              東京大学史料編纂所 所長：{{ director }}<br />
              所在地：〒113-0033 東京都文京区本郷７丁目３番１号
            </template>
            <template v-else>
              Director : {{ director }}<br />
              Address: 3-1, Hongo 7-chome, Bunkyo-ku, Tokyo 113-0033, JAPAN
            </template>
          </p>
          <br />
          <p class="contct" v-if="lang === 'ja' || lang === 'en'">
            <nuxt-link class="btn01 v3" :to="localePath({ name: 'inquiry' })">{{
              $t('お問い合わせ')
            }}</nuxt-link>
          </p>
        </div>
        <aside class="foot-nav">
          <nav>
            <ul v-if="lang === 'ja' || lang === 'en'">
              <li>
                <nuxt-link :to="localePath({ name: 'index' })"
                  >■ HOME</nuxt-link
                >
              </li>
              <li>
                <nuxt-link :to="localePath({ name: 'about-sitemap' })"
                  >■ {{ $t('サイトマップ') }}</nuxt-link
                >
              </li>
              <li v-if="lang === 'ja'">
                <nuxt-link
                  :to="
                    localePath({ name: 'about-slug', params: { slug: 'link' } })
                  "
                  >■ {{ $t('リンク') }}</nuxt-link
                >
              </li>
              <li>
                <nuxt-link
                  :to="
                    localePath({
                      name: 'about-slug',
                      params: { slug: 'access' },
                    })
                  "
                  >■ {{ $t('アクセスマップ') }}</nuxt-link
                >
              </li>
            </ul>
            <ul></ul>
          </nav>
          <small>
            © 1997 Historiographical Institute The University of Tokyo.
          </small>
        </aside>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'nuxt-property-decorator'
import LangSelect from '~/components/common/LangSelect.vue'
import GoogleCustomSearch from '~/components/common/GoogleCustomSearch.vue'
// tslint:disable-next-line:no-var-requires
const { VueSlideToggle } = require('vue-slide-toggle')

@Component({
  components: {
    VueSlideToggle,
    LangSelect,
    GoogleCustomSearch,
  },
})
export default class Layout extends Vue {
  menuList: any = process.env.menuList

  currentLv1Index: number = -1
  currentLv2Index: number = -1

  isOpenLv1: boolean = false
  isOpenLv2: boolean = false

  isMobileMenuOpen: boolean = false

  baseUrl: string = process.env.BASE_URL || ''

  isPageTopBtnActive: boolean = false

  get director(): string {
    const env: any = process.env.director
    return env[this.lang]
  }

  @Watch('$route')
  onUrlChange() {
    this.isMobileMenuOpen = false
    this.currentLv1Index = -1
    this.currentLv2Index = -1
    this.isOpenLv1 = false
    this.isOpenLv2 = false
  }

  get lg(): boolean {
    return this.$store.getters.getLg
  }

  set lg(value) {
    this.$store.commit('setLg', value)
  }

  mounted() {
    this.lg = this.getLg()
    window.addEventListener('scroll', this.scrollWindow)
    window.addEventListener('resize', this.handleResize)
  }

  // リサイズ

  handleResize() {
    // resizeのたびにこいつが発火するので、ここでやりたいことをやる
    this.lg = this.getLg()
  }

  getLg(): boolean {
    if (process.browser) {
      return window.innerWidth > 769
    } else {
      return true
    }
  }

  returnTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  scrollWindow() {
    const top = 100 // ボタンを表示させたい位置
    // this.scroll = window.scrollY
    if (top <= window.scrollY) {
      this.isPageTopBtnActive = true
    } else {
      this.isPageTopBtnActive = false
    }
  }

  get lang() {
    return this.$i18n.locale
  }

  get langStr() {
    switch (this.lang) {
      case 'ja':
        return '日本語'
      case 'en':
        return 'English'
      case 'zh':
        return 'Chinese'
    }
  }

  clickLv1Menu(index: number) {
    const currentLv1Index = this.currentLv1Index
    if (currentLv1Index !== index) {
      this.isOpenLv1 = true
    } else {
      this.isOpenLv1 = !this.isOpenLv1
    }
    this.currentLv1Index = index
  }

  clickLv2Menu(index: number) {
    const currentLv2Index = this.currentLv2Index
    if (currentLv2Index !== index) {
      this.isOpenLv2 = true
    } else {
      this.isOpenLv2 = !this.isOpenLv2
    }
    this.currentLv2Index = index
  }
}
</script>
<style>
.lang-select .child {
  display: block !important;
}

.gnav .sub-menu {
  display: block !important;
}

.gnav .sub-menu2 {
  display: block !important;
}
</style>
