<template>
  <div>
    <Layout :title="title">
      <h1 class="h02">{{ title }}</h1>

      <template v-for="(obj, index) in menuList">
        <div v-if="obj.lang.includes(lang)" :key="index" class="mb2">
          <h2 class="h03 mt-10">
            {{ $t(obj.label) }}
          </h2>

          <ul>
            <template v-if="!obj.children && obj.href && obj.href[lang]">
              <li class="mb-2">
                <a :href="obj.href[lang]">{{ $t(obj.label) }}</a>
              </li>
            </template>
            <template v-else>
              <template v-for="child in obj.children">
                <li
                  v-if="child.lang.includes(lang)"
                  :key="child.label"
                  class="mb-2"
                >
                  <template v-if="child.to">
                    <nuxt-link :to="localePath(child.to)">{{
                      $t(child.label)
                    }}</nuxt-link>
                  </template>
                  <template v-else-if="child.href && child.href[lang]">
                    <a :href="child.href[lang]">{{ $t(child.label) }}</a>
                  </template>

                  <ul v-if="child.children">
                    <template v-for="child2 in child.children">
                      <li v-if="child2.lang.includes(lang)" :key="child2.label">
                        <template v-if="child2.to">
                          <nuxt-link :to="localePath(child2.to)">{{
                            $t(child2.label)
                          }}</nuxt-link>
                        </template>
                        <template v-else-if="child2.href && child2.href[lang]">
                          <a :href="child2.href[lang]">{{
                            $t(child2.label)
                          }}</a>
                        </template>
                      </li>
                    </template>
                  </ul>
                </li>
              </template>
            </template>
          </ul>
        </div>
      </template>
    </Layout>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Layout from '~/components/layout/Layout.vue'

@Component({
  components: {
    Layout,
  },
})
export default class about extends Vue {
  baseUrl: string = process.env.BASE_URL || ''
  title: any = this.$t('サイトマップ')

  menuList: any = process.env.menuList

  get lang() {
    return this.$i18n.locale
  }

  head() {
    const title = this.title
    return {
      title,
    }
  }
}
</script>
