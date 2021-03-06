<template>
  <Layout :title="title">
    <h1 class="h02">{{ title }}</h1>

    <div
      v-for="(item, key) in Object.keys(items).sort()"
      :key="key"
      class="mt2"
    >
      <h2 class="h03">{{ item }}{{ lang == 'ja' ? '行' : '' }}</h2>

      <ul>
        <li
          v-for="(item2, index2) in Object.keys(items[item]).sort()"
          :key="index2"
        >
          <nuxt-link
            :to="
              localePath({
                name: 'faculty-slug',
                params: { slug: items[item][item2].id },
              })
            "
            >{{ items[item][item2].label }}</nuxt-link
          >
          {{ items[item][item2].main }}
        </li>
      </ul>
    </div>
  </Layout>
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
  async asyncData() {
    const organizationMap: any = process.env.organizationMap

    const facultyList2 = await import(`~/static/assets/json/faculty/facultyList.json`)
    const facultyList: any[] = facultyList2.default

    const map: any = {}

    for(const obj of facultyList){
      const id = obj.slug
      obj.list_flag = obj.list_flg === "-1" ? false : true
      obj.name_ja = obj.surname + " " + obj.forename
      obj.name_kana = obj.surname_kana + " " + obj.forename_kana
      obj.name_en = obj.surname_en + " " + obj.forename_en
      map[obj.slug] = obj
    }

    return {
      people: map,
      organizationMap,
      facultyList
    }
  }

  title: any = this.$t('教員一覧')

  lang: string = this.$i18n.locale || 'ja'

  items: any = {}

  created(){
    const people = this.$data.people
    const organizationMap = this.$data.organizationMap

    const items: any = {}

    if (this.lang === 'ja') {
      const map: any = {
        あ: ['あ', 'お'],
        か: ['か', 'こ'],
        さ: ['さ', 'そ'],
        た: ['た', 'と'],
        な: ['な', 'の'],
        は: ['は', 'ほ'],
        ま: ['ま', 'も'],
        や: ['や', 'よ'],
        ら: ['ら', 'ろ'],
        わ: ['わ', 'ん'],
      }

      for (const key in people) {
        const child = people[key]

        if(!child.list_flag){
          continue
        }

        const kana = child.name_kana
        const first = kana.substring(0, 1).normalize('NFD')[0]

        for (const key2 in map) {
          const range = map[key2]
          if (range[0] <= first && first <= range[1]) {
            if (!items[key2]) {
              items[key2] = {}
            }

            items[key2][kana] = {
              label: this.lang === 'ja' ? child.name_ja : child.name_en,
              id: key,
              main: '（' + this.$t(organizationMap[child.main]) + '）',
            }

            break
          }
        }
      }
    } else {
      for (const key in people) {
        const child = people[key]
        const kana = child.name_en
        const first = kana.substring(0, 1).normalize('NFD')[0]

        if (!items[first]) {
          items[first] = {}
        }
        items[first][key] = {
          label: this.lang === 'ja' ? child.name_ja : child.name_en,
          id: key,
          main: '（' + this.$t(organizationMap[child.main]) + '）',
        }
      }
    }

    this.items = items

  }

  head() {
    const title = this.title
    return {
      title,
    }
  }
}
</script>
