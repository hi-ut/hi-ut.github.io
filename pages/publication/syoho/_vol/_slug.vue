<template>
  <div>
    <LayoutPublication :title="title" :index="2" :breadcrumbs="breadcrumbs">
      <h1 class="h02">{{ '所報 - 刊行物紹介' }}</h1>

      <h2 class="h03">{{ title }}</h2>

      <div v-html="item.content.split('\n').join('<br/>')"></div>

      <br/>
      
      {{parent}}<template v-if="item.page">{{ ` p.${item.page}`}}</template>
    </LayoutPublication>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import LayoutPublication from '~/components/layout/Layout.vue'

@Component({
  components: {
    LayoutPublication,
  },
})
export default class about extends Vue {
  async asyncData({ payload, app, $axios }: any) {
    const vol = app.context.params.vol
      
    const slug = app.context.params.slug
    const data_ = await import(`~/static/assets/json/publication/syoho/${vol}.json`)
    const data: any[] = data_.default
    
    let item = {}

    for(const obj of data){
      if(obj.id === slug){
        item = obj
      }
    }
    
    return {
      vol,
      item
    }
  }

  get title(): string {

    return (this as any).item.title
  }

  get parent(): string {
    const vol = this.$data.vol
    //const item = (this as any).item
    return `『東京大学史料編纂所報』第${vol}号`
  }

  get breadcrumbs(): any[] {
    return [
      {
        text: this.$t('編纂・研究・公開'),
        name: 'publication',
      },
      {
        text: this.$t('所報'),
        name: 'publication-syoho',
      },
      {
        text: this.parent,
        to: this.localePath({
          name: 'publication-syoho-vol',
          params: {
            vol: "syoho" + this.$utils.zfill(Number(this.$data.vol), 4)
          },
        }),
      },
    ]
  }

  head() {
    const title = this.title
    return {
      title,
    }
  }
}
</script>
