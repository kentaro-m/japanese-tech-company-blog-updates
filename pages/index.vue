<template>
  <section class="container">
    <md-app>
      <md-app-toolbar class="md-primary">
        <span class="md-title">Tech Blog Updates</span>
      </md-app-toolbar>
      <md-app-content>
        <div class="md-layout">
          <div class="md-layout-item md-xlarge-size-30 md-large-size-15 md-medium-size-15 md-small-size-5 md-xsmall-size-100"></div>
          <div class="md-layout-item md-xlarge-size-40 md-large-size-70 md-medium-size-70 md-small-size-90 md-xsmall-size-100">
            <timeline>
              <div
                v-for="item in list"
                :key="item.date"
              >
                <timeline-item
                  color="#448aff"
                  :hollow="false"
                >
                  <h3>{{item.date}}</h3>
                </timeline-item>
                <timeline-item
                  color="#448aff"
                  :hollow="false"
                  v-for="article in item.articles"
                  :key="article.title"
                >
                  <md-card>
                    <a
                      v-bind:href="article.link"
                      target="_blank"
                      class="md-xsmall-none md-small-block md-medium-block md-large-block md-xlarge-block"
                    >
                      <md-card-header>
                        <md-card-header-text>
                          <div class="md-title">
                            {{article.title}}
                          </div>
                          <div class="md-subhead">
                            <p>{{article.siteName}}</p>
                            <p>{{article.pubDate | moment}}</p>
                          </div>
                        </md-card-header-text>
                        <md-card-media md-big>
                          <img v-bind:src="article.image">
                        </md-card-media>
                      </md-card-header>
                    </a>
                    <a
                      v-bind:href="article.link"
                      target="_blank"
                      class="md-xsmall-block md-small-none md-medium-none md-large-none md-xlarge-none"
                    >
                      <md-card-media md-ratio="16:9">
                        <img v-bind:src="article.image">
                      </md-card-media>
                      <md-card-header>
                        <div class="md-title">{{article.title}}</div>
                        <div class="md-subhead">
                          <p>{{article.siteName}}</p>
                          <p>{{article.pubDate | moment}}</p>
                        </div>
                      </md-card-header>
                    </a>
                  </md-card>
                </timeline-item>
              </div>
            </timeline>
          </div>
          <div class="md-layout-item md-xlarge-size-30 md-large-size-15 md-medium-size-15 md-small-size-5 md-xsmall-size-100"></div>
        </div>
      </md-app-content>
    </md-app>
  </section>
</template>

<script>
import { Timeline, TimelineItem, TimelineTitle } from 'vue-cute-timeline'
import moment from 'moment'

export default {
  components: { Timeline, TimelineItem, TimelineTitle },
  computed: {
    list () {
      return this.$store.state.list
    }
  },
  mounted () {
    this.$store.dispatch('getList')
  },
  filters: {
    moment: function (date) {
      return moment(date).format('YYYY/MM/DD HH:mm')
    }
  },
  name: 'Normal'
}
</script>

<style>
.timeline h3 {
  font-size: 28px;
  font-weight: bold;
}

.timeline-item a {
  font-weight: bold;
  color: #333;
  text-decoration: none;
  font-size: 18px;
}

.timeline-item p {
  color: #999;
  font-weight: bold;
  font-size: 12px;
}

.md-app-content {
  background: #f5f5f5 !important;

  .md-card {
    margin-right: 0px;
    margin-left: 0px;
    margin-bottom: 16px;
  }
}

.md-card {
  font-family: "Noto Sans Japanese";
}

.md-card a:hover {
  text-decoration: none;
}

.md-card .md-title {
  color: #000 !important;
  font-size: 20px !important;
  line-height: 24px !important;
  margin-bottom: 8px !important;
  font-weight: 500;
}

.md-subhead p {
  color: rgba(0, 0, 0, 0.54);
  font-size: 14px !important;
  font-weight: 500;
}

@media (max-width: 599px) {
  .md-xsmall-none {
    display: none;
  }

  .md-xsmall-block {
    display: block;
  }

  .timeline h3 {
    font-size: 20px;
    font-weight: bold;
  }

  .md-card .md-title {
    font-size: 16px !important;
    line-height: 20px !important;
    margin-bottom: 8px !important;
  }

  .md-subhead p {
    font-size: 12px !important;
  }
}

@media (min-width: 600px) and (max-width: 959px) {
  .md-small-none {
    display: none;
  }

  .md-small-block {
    display: block;
  }
}

@media (min-width: 960px) and (max-width: 1279px) {
  .md-medium-none {
    display: none;
  }

  .md-medium-block {
    display: block;
  }
}

@media (min-width: 1280px) and (max-width: 1919px) {
  .md-large-none {
    display: none;
  }

  .md-large-block {
    display: block;
  }
}

@media (min-width: 1920px) {
  .md-xlarge-none {
    display: none;
  }

  .md-xlarge-block {
    display: block;
  }
}
</style>
